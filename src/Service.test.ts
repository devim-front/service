import { assert } from 'chai';

import { Service } from './Service';
import { ServiceEvents } from './ServiceEvents';

describe('Service', () => {
  interface TestEvents extends ServiceEvents {
    foo: (bar: string) => void;
  }

  class TestService extends Service<TestEvents> {
    public fire<T extends keyof TestEvents>(
      event: T,
      ...args: Parameters<TestEvents[T]>
    ) {
      this.emit(event, ...args);
    }
  }

  describe('on', () => {
    it('just should works', () => {
      const service = new TestService();
      const passedValue = 'bar';
      const event = 'foo';
      let value: string | undefined;

      const handleFoo = (nextValue: string) => {
        value = nextValue;
      };

      assert.doesNotThrow(() => service.on(event, handleFoo));
      service.fire(event, passedValue);
      assert.equal(value, passedValue);
    });
  });

  describe('off', () => {
    it('just should works', () => {
      const service = new TestService();
      const passedValue = 'bar';
      const event = 'foo';
      let value: string | undefined;

      const handleFoo = (nextValue: string) => {
        value = nextValue;
      };

      service.on(event, handleFoo);
      service.off(event, handleFoo);
      service.fire(event, passedValue);
      assert.isUndefined(value);
    });
  });

  describe('dispose', () => {
    it('should triggers a dispose event and removes all the listeners after them', () => {
      const service = new TestService();
      let eventValue: string | undefined;
      let isDisposed: boolean = false;

      const handleDispose = () => {
        isDisposed = true;
      };

      const handleFoo = (bar: string) => {
        eventValue = bar;
      };

      service.on('dispose', handleDispose);
      service.on('foo', handleFoo);

      service.dispose();
      service.fire('foo', 'bar');

      assert.isTrue(isDisposed);
      assert.isUndefined(eventValue);
    });
  });
});
