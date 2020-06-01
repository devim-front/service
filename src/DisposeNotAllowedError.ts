import { ServiceError } from './ServiceError';

/**
 * Возникает, когда в коде происходит попытка прямого вызова метода dispose у
 * экземпляра сервиса-синглтона.
 */
export class DisposeNotAllowedError extends ServiceError {
  /**
   * Создает экземпляр ошибки.
   */
  public constructor() {
    super(
      "It's not allowed to call dispose() method. Use Service.delete() instead."
    );
  }
}
