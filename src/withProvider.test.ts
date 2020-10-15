import { createElement, Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { assert } from 'chai';

import { withProvider } from './withProvider';
import { Pool } from './Pool';

describe('withProvider', () => {
  it('should be rendered without a pool', () => {
    const Root = () => createElement(Fragment, {}, 'Hello world');
    const NextRoot = withProvider()(Root);
    const element = createElement(NextRoot);
    const output = renderToString(element);
    assert.equal(output, 'Hello world');
  });

  it('should be rendered with an existing pool', () => {
    const Root = () => createElement(Fragment, {}, 'Hello world');
    const pool = new Pool();
    const NextRoot = withProvider(pool)(Root);
    const element = createElement(NextRoot);
    const output = renderToString(element);
    assert.equal(output, 'Hello world');
  });
});
