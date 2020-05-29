import { ServiceError } from './ServiceError';

/**
 * Возникает, когда в базовом классе Service происходит попытка получить
 * экземпляр сервиса до его создания. Классы-наследники решают эту проблему
 * по-разному: ленивый сервис создает новый экземпляр перед тем, как его
 * вернуть; строгий сервис выбрасывает более специфическое исключение.
 * Если вы наследуете свои классы от Service напрямую, вы должны решить эту
 * проблему самостоятельно.
 */
export class UndefinedInstanceError extends ServiceError {
  /**
   * Создает экземпляр ошибки.
   */
  public constructor() {
    super(
      "Cannot get an instance because 'Service.instance' is not undefined. Please resolve this issue in a nested class."
    );
  }
}
