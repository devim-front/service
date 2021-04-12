import { assert } from 'chai';

import { LazyService } from './LazyService';
import { GET_SERVICE, Pool, SET_SERVICE } from './Pool';

describe('Pool', () => {
  describe('Pool.SET_SERVICE', () => {
    it('should works', () => {
      class Service extends LazyService {}

      const pool = new Pool();

      const service = new Service(pool);
      pool[SET_SERVICE](service);

      const value = pool[GET_SERVICE](Service);
      assert.equal(value, service);
    });

    it("shouldn't overrides an existing service with an other type", () => {
      class ServiceA extends LazyService {}
      class ServiceB extends LazyService {}

      const pool = new Pool();

      const serviceA = new ServiceA(pool);
      pool[SET_SERVICE](serviceA);

      const serviceB = new ServiceB(pool);
      pool[SET_SERVICE](serviceB);

      const valueA = pool[GET_SERVICE](ServiceA);
      const valueB = pool[GET_SERVICE](ServiceB);

      assert.equal(valueA, serviceA);
      assert.equal(valueB, serviceB);
    });

    it('should override an existing service with a same type', () => {
      class Service extends LazyService {}

      const pool = new Pool();

      const serviceA = new Service(pool);
      const serviceB = new Service(pool);

      pool[SET_SERVICE](serviceA);
      pool[SET_SERVICE](serviceB);

      const value = pool[GET_SERVICE](Service);
      assert.equal(value, serviceB);
    });
  });

  describe('Pool.GET_SERVICE', () => {
    it("should returns undefined if the service isn't added", () => {
      class Service extends LazyService {}

      const pool = new Pool();

      const value = pool[GET_SERVICE](Service);
      assert.isUndefined(value);
    });

    it('should returns an object if the service is added', () => {
      class Service extends LazyService {}

      const pool = new Pool();

      const service = new Service(pool);
      pool[SET_SERVICE](service);

      const value = pool[GET_SERVICE](Service);
      assert.equal(value, service);
    });
  });

  describe('Pool.dispose', () => {
    it("should calls the 'dispose' methods of all contained services", () => {
      const disposed: string[] = [];

      class ServiceBase extends LazyService {
        public dispose() {
          super.dispose();

          const { name } = this.constructor;
          disposed.push(name);
        }
      }

      class ServiceA extends ServiceBase {}
      class ServiceB extends ServiceBase {}
      class ServiceC extends ServiceBase {}

      const pool = new Pool();

      const serviceA = new ServiceA(pool);
      pool[SET_SERVICE](serviceA);

      const serviceB = new ServiceB(pool);
      pool[SET_SERVICE](serviceB);

      const serviceC = new ServiceC(pool);
      pool[SET_SERVICE](serviceC);

      pool.dispose();

      assert.sameMembers(disposed, ['ServiceA', 'ServiceB', 'ServiceC']);
    });

    it("should clean up the 'services' collection after all contained services have been disposed", () => {
      class ServiceA extends LazyService {}

      const pool = new Pool();

      const service = new ServiceA(pool);
      pool[SET_SERVICE](service);

      pool.dispose();
      const serviceAInstance = pool[GET_SERVICE](ServiceA);

      assert.isUndefined(serviceAInstance);
    });
  });
});
