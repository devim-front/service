import { createElement, Fragment, FC } from 'react';
import { renderToString } from 'react-dom/server';
import { assert } from 'chai';

import { withProvider } from './withProvider';
import { LazyService } from './LazyService';
import { Pool } from './Pool';

describe('LazyService', () => {
  describe('LazyService.get', () => {
    it('should returns a service from default pool', () => {
      class Service extends LazyService {}

      const valueA = Service.get();
      const valueB = Service.get();

      assert.equal(valueA, valueB);
    });

    it('should returns a new instance of service even if an instance of the base class of this service has been created', () => {
      class ServiceA extends LazyService {}
      class ServiceB extends ServiceA {}

      const valueA = ServiceA.get();
      const valueB = ServiceB.get();

      assert.notEqual(valueA, valueB);
    });

    it('should returns a service from an existing pool', () => {
      class Service extends LazyService {}

      const pool = new Pool();
      const valueA = Service.get(pool);
      const valueB = Service.get(pool);

      assert.equal(valueA, valueB);
    });

    it("should returns a service from another service's pool", () => {
      class ServiceA extends LazyService {}
      class ServiceB extends LazyService {}

      const pool = new Pool();
      const service = ServiceA.get(pool);

      const valueA = ServiceB.get(pool);
      const valueB = ServiceB.get(service);

      assert.equal(valueA, valueB);
    });
  });

  describe('LazyService.use', () => {
    it('should renders well', () => {
      class Service extends LazyService {
        public text = 'Hello world';
      }

      const Root = () => {
        const service = Service.use();
        return createElement(Fragment, {}, service.text);
      };

      const NextRoot = withProvider()(Root);
      const element = createElement(NextRoot);
      const output = renderToString(element);

      assert.equal(output, 'Hello world');
    });
  });

  describe('LazyService.with', () => {
    it('should renders well', () => {
      class Service extends LazyService {
        public text = 'Hello world';
      }

      type Props = { service: Service };

      const Root: FC<Props> = ({ service }) => {
        return createElement(Fragment, {}, service.text);
      };

      const NextRoot = withProvider()(Service.with('service')(Root));
      const element = createElement(NextRoot);
      const output = renderToString(element);

      assert.equal(output, 'Hello world');
    });
  });
});
