import { assert } from 'chai';

import { LazyService } from './LazyService';

describe('LazyService', () => {
  const makeService = () => class CustomService extends LazyService {};
  const makeNestedService = (service: any) =>
    class NestedService extends service {};

  describe('get', () => {
    it('call on a pristine service works', () => {
      const service = makeService();
      assert.instanceOf(service.get(), service);
    });

    it('call on a subclass gives other result than one on base class', () => {
      const baseService = makeService();
      const nestedService = makeNestedService(baseService);
      const valueA = baseService.get();
      const valueB = nestedService.get();
      assert.notStrictEqual(valueA, valueB);
    });
  });

  describe('init', () => {
    it("call on initialized service doesn't overrides the instance", () => {
      const service = makeService();
      const valueA = service.get();
      service.init();
      const valueB = service.get();
      assert.strictEqual(valueA, valueB);
    });
  });
});
