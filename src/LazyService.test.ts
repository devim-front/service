import { assert } from 'chai';

import { LazyService } from './LazyService';

describe('LazyService', () => {
  const makeService = () => class CustomService extends LazyService {};
  const makeNestedService = <T extends typeof LazyService>(service: T) =>
    class NestedService extends service {};

  describe('get', () => {
    it('getting value on pristine service works', () => {
      const service = makeService();
      assert.instanceOf(service.get(), service);
    });

    it('getting value twice gives an equal results', () => {
      const service = makeService();
      const valueA = service.get();
      const valueB = service.get();
      assert.strictEqual(valueA, valueB);
    });

    it('getting value on subclass gives other result than one on base class', () => {
      const baseService = makeService();
      const nestedService = makeNestedService(baseService);
      const valueA = baseService.get();
      const valueB = nestedService.get();
      assert.notStrictEqual(valueA, valueB);
    });

    it("getting value on subclass doesn't override an instance of base class", () => {
      const baseService = makeService();
      const nestedService = makeNestedService(baseService);
      const valueA = baseService.get();
      nestedService.get();
      const valueB = baseService.get();
      assert.strictEqual(valueA, valueB);
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

    it("call in subclass creates a new instance and doesn't override a parent's instance", () => {
      const service = makeService();
      const nestedService = makeNestedService(service);
      const valueA = service.get();
      nestedService.init();
      const valueB = nestedService.get();
      const valueC = service.get();
      assert.notStrictEqual(valueA, valueB);
      assert.strictEqual(valueA, valueC);
    });
  });
});
