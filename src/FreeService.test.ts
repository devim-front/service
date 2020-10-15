import { assert } from 'chai';

import { FreeService } from './FreeService';

describe('FreeService', () => {
  describe('FreeService.constructor', () => {
    it("shouldn't throws an error", () => {
      class Service extends FreeService {}

      assert.doesNotThrow(() => {
        new Service();
      });
    });
  });
});
