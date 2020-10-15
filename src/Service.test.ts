import { assert } from 'chai';

import { Service } from './Service';

describe('Service', () => {
  describe('Service.constrcutor', () => {
    it("shouldn't throws an error", () => {
      class TestService extends Service {}

      assert.doesNotThrow(() => {
        new TestService();
      });
    });
  });

  describe('Service.dispose', () => {
    it("shouldn't throws an error", () => {
      class TestService extends Service {}
      const service = new TestService();

      assert.doesNotThrow(() => {
        service.dispose();
      });
    });
  });
});
