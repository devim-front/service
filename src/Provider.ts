import { Component, createElement, PropsWithChildren } from 'react';

import { Context, context } from './Context';
import { Pool } from './Pool';

/**
 * Свойства компонента.
 */
type Props = PropsWithChildren<{
  /**
   * Пул сервисов, который будет использоваться в данном контексте.
   */
  pool?: Pool;
}>;

/**
 * Объявляет контекст сервисов.
 */
export class Provider extends Component<Props> {
  /**
   * Сохранённый объект контекста.
   */
  private value: Context;

  /**
   * Сохранённое значение свойства pool.
   */
  private pool?: Pool;

  /**
   * @inheritdoc
   */
  public render() {
    const { pool, children } = this.props;

    if (this.value == null || this.pool !== pool) {
      const finalPool = pool || new Pool();
      this.value = { pool: finalPool };
    }

    const { value } = this;

    return createElement(context.Provider, { value }, children);
  }
}
