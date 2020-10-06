import { CustomError } from '@devim-front/error';

/**
 * Возникает, когда произошла ошибка при использовании базовых механик сервиса.
 * Наследовать от этого класса собственные исключения не нужно.
 */
export class ServiceError extends CustomError {
  /**
   * Создает экземпляр класса с указанным сообщением об ошибке.
   *
   * @param message Сообщение об ошибке.
   */
  public constructor(message: string) {
    super('ServiceError', message);
  }
}
