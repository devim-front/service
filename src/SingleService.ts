import { UndefinedInstanceError } from './UndefinedInstanceError';
import { DisposeNotAllowedError } from './DisposeNotAllowedError';
import { NewNotAllowedError } from './NewNotAllowedError';
import { Service } from './Service';

/**
 * Представляет единичный сервис или сервис-синглтон. Данный тип сервиса
 * запрещает прямые вызовы метода dispose и создание экземпляров через
 * оператор new, предоставляя взамен специальные статические методы delete и
 * init.
 */
export class SingleService extends Service {
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
  public static get<T extends typeof SingleService>(this: T) {
    if (!this.isExists) {
      throw new UndefinedInstanceError();
    }

    return this.instance as InstanceType<T>;
  }

  /**
   * Создает экземпляр сервиса и сохраняет его. Для создания экземпляра класса
   * следует использовать именно его; вызов оператора new приводит к ошибке.
   *
   * @param args Аргументы конструктора.
   */
  protected static create<T extends typeof SingleService>(
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
  public static init(...args: any[]) {
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

    instance.isDelete = true;
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
    super();

    const type = this.constructor as typeof SingleService;

    if (!type.isCreate) {
      throw new NewNotAllowedError();
    }

    type.isCreate = false;
  }

  /**
   * Указывает, что метод dispose был вызван внутри метода delete, а не
   * напрямую.
   */
  private isDelete: boolean;

  /**
   * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
   * удалению. Для строго или ленивого сервиса прямой вызов этого метода
   * запрещён и приведет к ошибке, поскольку это может создать неоднозначность
   * в коде. Используйте вместо него статический метод delete.
   */
  public dispose() {
    if (!this.isDelete) {
      throw new DisposeNotAllowedError();
    }

    this.isDelete = false;

    super.dispose();
  }
}
