import { ServiceError } from './ServiceError';

/**
 * Возникает, когда происходит попытка получить экземпляр строгого сервиса
 * перед тем, как он был инициализирован.
 */
export class NotInitializedError extends ServiceError {
  /**
   * Возвращает сообщение об ошибке.
   *
   * @param type Класс сервиса.
   */
  private static getMessage(type: Function) {
    const { name = 'StrictService' } = type;
    return `Service '${name}' is not initialized. Please use method ${name}.init ap application startup.`;
  }

  /**
   * Создает экземпляр ошибки.
   *
   * @param type Класс сервиса, сгенерировавшего исключение.
   */
  public constructor(type: Function) {
    const message = NotInitializedError.getMessage(type);
    super(message);
  }
}
