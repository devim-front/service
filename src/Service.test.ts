import { assert } from 'chai';

import { Service } from './Service';
import { UndefinedInstanceError } from './UndefinedInstanceError';
import { NewNotAllowedError } from './NewNotAllowedError';

describe('Service', () => {
  const makeService = () =>
    class CustomService extends Service {
      public passedArgs: any[];
      public isDisposeCalled = false;

      public constructor(...args: any[]) {
        super(...args);
        this.passedArgs = args;
      }

      public dispose() {
        this.isDisposeCalled = true;
      }
    };

  describe('get', () => {
    it('getting value of pristine service throws an error', () => {
      const service = makeService();
      assert.throw(() => service.get(), new UndefinedInstanceError().message);
    });

    it('getting value of initialized service works', () => {
      const service = makeService();
      service.init();
      assert.doesNotThrow(() => service.get());
    });

    it('getting value of deleted service throws an error', () => {
      const service = makeService();
      service.init();
      service.delete();
      assert.throw(() => service.get(), new UndefinedInstanceError().message);
    });
  });

  describe('init', () => {
    it('call with arguments passes it into constructor', () => {
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
  });

  describe('delete', () => {
    it('call on a pristine or deleted service works', () => {
      const service = makeService();
      service.delete();
    });

    it('call on initalized service touches dispose method', () => {
      const service = makeService();
      service.init();
      const instance = service.get();
      service.delete();
      assert.isTrue(instance.isDisposeCalled);
    });

    it('call on initialized service destroyes the instance', () => {
      const service = makeService();
      service.init();
      service.delete();
      assert.throws(() => service.get(), new UndefinedInstanceError().message);
    });
  });

  describe('constructor', () => {
    it('direct call throws an error', () => {
      const service = makeService();
      assert.throws(() => new service(), new NewNotAllowedError().message);
    });

    it('call of the parent constructor inside the child constructor throws an error', () => {
      class BaseService extends Service {}

      class NestedService extends BaseService {
        public constructor() {
          new BaseService();
          super();
        }
      }

      assert.throws(
        () => NestedService.init(),
        new NewNotAllowedError().message
      );
    });
  });
});
