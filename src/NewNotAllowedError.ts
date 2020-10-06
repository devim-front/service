import { NotSupportedError } from '@devim-front/error';

/**
 * Возникает, когда в коде происходит создание экземпляра сервиса через
 * оператор 'new'.
 */
export class NewNotAllowedError extends NotSupportedError {
  /**
   * Возвращает сообщение об ошибке.
   *
   * @param type Класс сервиса.
   */
  private static getMessage(type: Function) {
    const { name } = type;
    return `It's not allowed to use a "new" operator. Use ${name}.get() instead.`;
  }

  /**
   * Создает экземпляр ошибки.
   *
   * @param type Класс сервиса, сгенерировавшего исключение.
   */
  public constructor(type: Function) {
    const message = NewNotAllowedError.getMessage(type);
    super(message);
  }
}
