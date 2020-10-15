import { createContext } from 'react';

import { Pool, DEFAULT } from './Pool';

/**
 * Тип контекста.
 */
export type Context = {
  /**
   * Пул сервисов.
   */
  pool: Pool;
};

/**
 * Контекст сервисов.
 */
export const context = createContext<Context>({
  pool: Pool[DEFAULT],
});
