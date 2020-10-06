import { NotSupportedError } from '@devim-front/error';

/**
 * Возникает, когда в коде происходит попытка прямого вызова метода dispose у
 * экземпляра сервиса-синглтона.
 */
export class DisposeNotAllowedError extends NotSupportedError {
  /**
   * Возвращает сообщение об ошибке.
   *
   * @param type Класс сервиса.
   */
  private static getMessage(type: Function) {
    const { name = 'SingleService' } = type;
    return `It's not allowed to call dispose() method directly. Use ${name}.delete() instead.`;
  }

  /**
   * Создает экземпляр ошибки.
   *
   * @param type Класс сервиса, сгенерировавший исключение.
   */
  public constructor(type: Function) {
    const message = DisposeNotAllowedError.getMessage(type);
    super(message);
  }
}
