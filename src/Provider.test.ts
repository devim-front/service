import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { assert } from 'chai';

import { Provider } from './Provider';
import { Pool } from './Pool';

describe('Provider', () => {
  it('should be rendered without a pool', () => {
    const element = createElement(Provider, {}, 'Hello world');
    const output = renderToString(element);
    assert.equal(output, 'Hello world');
  });

  it('should be rendered with an existing pool', () => {
    const pool = new Pool();
    const element = createElement(Provider, { pool }, 'Hello world');
    const output = renderToString(element);
    assert.equal(output, 'Hello world');
  });
});
