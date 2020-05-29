import { UndefinedInstanceError } from './UndefinedInstanceError';
import { NewNotAllowedError } from './NewNotAllowedError';

/**
 * Базовый класс сервиса.
 */
export class Service {
  /**
   * Экземпляр сервиса.
   */
  protected static instance: any;

  /**
   * Указывает, что конструктор сервиса был вызван с помощью статического
   * метода create, а не напрямую через оператор new.
   */
  private static isCreate: boolean;

  /**
   * Указывает, что экземпляр данного класса уже был создан.
   */
  protected static get isExists() {
    return this.instance instanceof this;
  }

  /**
   * Возвращает экземпляр сервиса. Если на момент вызова этого метода сервис
   * ещё не был инициализирован методом init (или уже удален через метод
   * delete), будет выброшено исключение.
   */
  public static get<T extends typeof Service>(this: T) {
    if (!this.isExists) {
      throw new UndefinedInstanceError();
    }

    return this.instance as InstanceType<T>;
  }

  /**
   * Создает экземпляр сервиса и сохраняет его.
   *
   * @internal
   * @param args Аргументы конструктора.
   */
  protected static create<T extends typeof Service>(
    ...args: ConstructorParameters<T>
  ) {
    this.isCreate = true;
    this.instance = new this(...args);
  }

  /**
   * Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
   * переданы в конструктор класса. Повторный вызов init уничтожит предыдущий
   * экземпляр вызовов delete и создаст новый.
   *
   * @param args Аргументы.
   */
  public static init<T extends typeof Service>(
    ...args: ConstructorParameters<T>
  ) {
    if (this.isExists) {
      this.delete();
    }

    this.create(...args);
  }

  /**
   * Удаляет существующий экземпляр сервиса, освобождая все занятые им ресурсы.
   */
  public static delete() {
    if (!this.isExists) {
      return;
    }

    const instance = this.get();
    instance.dispose();

    this.instance = undefined;
  }

  /**
   * Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
   * статического метода get, вызов конструктора напрямую приводит к ошибке.
   *
   * @param _args Аргументы, полученные из метода create.
   */
  public constructor(..._args: any[]) {
    const type = this.constructor as typeof Service;

    if (type.isCreate) {
      type.isCreate = false;
      return this;
    }

    throw new NewNotAllowedError();
  }

  /**
   * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
   * удалению.
   */
  protected dispose() {}
}
