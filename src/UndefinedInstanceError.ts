import { NotImplementedError } from '@devim-front/error';

/**
 * Возникает, когда в базовом классе Service происходит попытка получить
 * экземпляр сервиса до его создания. Классы-наследники решают эту проблему
 * по-разному: ленивый сервис создает новый экземпляр перед тем, как его
 * вернуть; строгий сервис выбрасывает более специфическое исключение.
 * Если вы наследуете свои классы от Service напрямую, вы должны решить эту
 * проблему самостоятельно.
 */
export class UndefinedInstanceError extends NotImplementedError {
  /**
   * Возвращает сообщение об ошибке.
   *
   * @param type Класс сервиса.
   */
  private static getMessage(type: Function) {
    const { name = 'SingleService' } = type;
    return `Cannot get an instance because ${name}.instance is not undefined. Please resolve this issue in a nested class.`;
  }

  /**
   * Создает экземпляр ошибки.
   *
   * @param type Класс сервиса, который сгенерировал исключение.
   */
  public constructor(type: Function) {
    const message = UndefinedInstanceError.getMessage(type);
    super(message);
  }
}
