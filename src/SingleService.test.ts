import { assert } from 'chai';

import { DisposeNotAllowedError } from './DisposeNotAllowedError';
import { UndefinedInstanceError } from './UndefinedInstanceError';
import { NewNotAllowedError } from './NewNotAllowedError';
import { SingleService } from './SingleService';

describe('SingleService', () => {
  const makeService = () =>
    class CustomService extends SingleService {
      public passedArgs: any[];
      public isDisposeCalled = false;

      public constructor(...args: any[]) {
        super(...args);
        this.passedArgs = args;
      }

      public dispose() {
        super.dispose();
        this.isDisposeCalled = true;
      }
    };

  const makeNestedService = (service: any) =>
    class NestedService extends service {};

  describe('get', () => {
    it('getting an instance of pristine service throws an error', () => {
      const service = makeService();

      assert.throw(
        () => service.get(),
        new UndefinedInstanceError(service).message
      );
    });

    it('getting an instance of initialized service works', () => {
      const service = makeService();
      service.init();
      assert.doesNotThrow(() => service.get());
    });

    it('getting an instance of deleted service throws an error', () => {
      const service = makeService();

      service.init();
      service.delete();

      assert.throw(
        () => service.get(),
        new UndefinedInstanceError(service).message
      );
    });

    it('getting an instance twice gives an equal results', () => {
      const service = makeService();
      service.init();
      const valueA = service.get();
      const valueB = service.get();
      assert.strictEqual(valueA, valueB);
    });

    it('getting an instance of subclass throws an error even if an instance of the base class has been created', () => {
      const baseService = makeService();
      const nestedService = makeNestedService(baseService);

      baseService.init();

      assert.throw(
        () => nestedService.get(),
        new UndefinedInstanceError(nestedService).message
      );
    });
  });

  describe('init', () => {
    it('arguments of a call are passed into constructor', () => {
      const service = makeService();
      const args = ['foo'];
      service.init(...args);
      const actual = service.get().passedArgs;
      assert.sameOrderedMembers(actual, args);
    });

    it('call on initialized service with same args creates a new instance with disposing of previous one', () => {
      const service = makeService();
      const args = ['foo'];

      service.init(...args);
      const instanceA = service.get();

      service.init(...args);
      const instanceB = service.get();

      assert.notEqual(instanceA, instanceB);
      assert.isTrue(instanceA.isDisposeCalled);
    });

    it("creating an instance of subclass doesn't overrides the parent's one", () => {
      const baseService = makeService();
      const nestedService = makeNestedService(baseService);
      baseService.init();
      const valueA = baseService.get();
      nestedService.init();
      const valueB = baseService.get();
      assert.strictEqual(valueA, valueB);
    });
  });

  describe('delete', () => {
    it('call on a pristine or deleted service works', () => {
      const service = makeService();
      service.delete();
    });

    it('call on initialized service touches dispose method', () => {
      const service = makeService();
      service.init();
      const instance = service.get();
      service.delete();
      assert.isTrue(instance.isDisposeCalled);
    });

    it('call on initialized service deletes an instance', () => {
      const service = makeService();

      service.init();
      service.delete();

      assert.throws(
        () => service.get(),
        new UndefinedInstanceError(service).message
      );
    });
  });

  describe('constructor', () => {
    it('direct call throws an error', () => {
      const service = makeService();

      assert.throws(
        () => new service(),
        new NewNotAllowedError(service).message
      );
    });

    it('call of the parent constructor inside the child constructor throws an error', () => {
      class BaseService extends SingleService {}

      class NestedService extends BaseService {
        public constructor() {
          new BaseService();
          super();
        }
      }

      assert.throws(
        () => NestedService.init(),
        new NewNotAllowedError(BaseService).message
      );
    });
  });

  describe('dispose', () => {
    it('direct call throws an error', () => {
      const service = makeService();

      service.init();

      const instance = service.get();

      assert.throws(
        () => instance.dispose(),
        new DisposeNotAllowedError(service).message
      );
    });
  });
});
