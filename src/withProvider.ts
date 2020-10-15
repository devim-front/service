import { Component, ComponentType, createElement } from 'react';

import { Provider } from './Provider';
import { Pool } from './Pool';

/**
 * Оборачивает переданный компонент в провайдер ленивых сервисов.
 *
 * @param pool Пул сервисов, который будет использован в провайдере. Если
 * не указан, то будет создан новый пул.
 */
export const withProvider = (pool?: Pool) => <P extends any>(
  target: ComponentType<P>
) =>
  class WithProvider extends Component<P> {
    /**
     * @inheritdoc
     */
    public static displayName = `WithServiceProvider(${
      target.displayName || target.name
    })`;

    /**
     * @inheritdoc
     */
    public render() {
      return createElement(
        Provider,
        { pool },
        createElement(target as any, this.props)
      );
    }
  };
