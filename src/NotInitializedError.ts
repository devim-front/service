import { ServiceError } from './ServiceError';

/**
 * Возникает, когда происходит попытка получить экземпляр строгого сервиса
 * перед тем, как он был инициализирован.
 */
export class NotInitializedError extends ServiceError {
  /**
   * Создает экземпляр ошибки для сервиса с указанным именем.
   */
  public constructor(name: string) {
    super(
      `Service '${name}' is not initialized. Please use method ${name}.init ap application startup.`
    );
  }
}
