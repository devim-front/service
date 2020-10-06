import { assert } from 'chai';

import { StrictService } from './StrictService';
import { NotInitializedError } from './NotInitializedError';

describe('StrictService', () => {
  const makeService = () =>
    class CustomService extends StrictService {
      public isDisposed = false;

      public dispose() {
        super.dispose();
        this.isDisposed = true;
      }
    };

  describe('get', () => {
    it('call on a pristine service throws an error', () => {
      const service = makeService();

      assert.throws(
        () => service.get(),
        new NotInitializedError(service).message
      );
    });

    it('call on an initialized service works', () => {
      const service = makeService();

      service.init();

      assert.doesNotThrow(() => service.get());
    });

    it('two calls give an equal results', () => {
      const service = makeService();

      service.init();

      const valueA = service.get();
      const valueB = service.get();

      assert.equal(valueA, valueB);
    });
  });

  describe('init', () => {
    it("call with a same args doesn't creates a new instance", () => {
      const service = makeService();
      const args = ['foo'];

      service.init(...args);

      const valueA = service.get();
      service.init(...args);

      const valueB = service.get();

      assert.strictEqual(valueA, valueB);
    });

    it('call with different args creates a new instance and disposes a previous one', () => {
      const service = makeService();
      service.init('foo');

      const valueA = service.get();
      service.init('bar');

      const valueB = service.get();

      assert.isTrue(valueA.isDisposed);
      assert.notStrictEqual(valueA, valueB);
    });
  });
});
