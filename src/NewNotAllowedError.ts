import { ServiceError } from './ServiceError';

/**
 * Возникает, когда в коде происходит создание экземпляра сервиса через
 * оператор 'new'.
 */
export class NewNotAllowedError extends ServiceError {
  /**
   * Создает экземпляр ошибки.
   */
  public constructor() {
    super(
      "It's not allowed to create a service's instance by 'new' operator. Use Service.get() instead."
    );
  }
}
