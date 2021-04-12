import { LazyService } from './LazyService';

/**
 * Свойство, содержащее экземпляр контекста по умолчанию.
 */
export const DEFAULT = Symbol('DEFAULT');

/**
 * Метод, возвращающий экземпляр сервиса.
 */
export const GET_SERVICE = Symbol('GET_SERVICE');

/**
 * Метод, задающий экземпляр сервиса.
 */
export const SET_SERVICE = Symbol('SET_SERVICE');

/**
 * Пул ленивых сервисов.
 */
export class Pool {
  /**
   * Сохранённое значение свойства DEFAULT.
   */
  private static defaultValue: Pool;

  /**
   * Пул сервисов, используемых по умолчанию.
   */
  public static get [DEFAULT]() {
    if (this.defaultValue == null) {
      this.defaultValue = new this();
    }

    return this.defaultValue;
  }

  /**
   * Коллекция сохранённых уникальный идентификаторов, сгрупированная
   * по соответствующим им классам сервисов.
   */
  private static typeIds: WeakMap<Function, number> = new WeakMap();

  /**
   * Последний уникальный идентификатор, присвоенный классу сервиса.
   */
  private static lastTypeId: number = 0;

  /**
   * Возвращает уникальный идентификатор, соответствующий указанному классу
   * сервиса.
   *
   * @param type Класс сервиса.
   */
  private static getTypeId<T extends typeof LazyService>(type: T) {
    if (this.typeIds.has(type)) {
      return this.typeIds.get(type) as number;
    }

    this.lastTypeId += 1;
    const id = this.lastTypeId;

    this.typeIds.set(type, id);
    return id;
  }

  /**
   * Коллекция экземпляров сервисов.
   */
  private services: Map<number, LazyService> = new Map();

  /**
   * Возвращает экземпляр сервиса указанного класса.
   *
   * @internal
   * @param type Тип класса сервиса.
   */
  public [GET_SERVICE](type: typeof LazyService) {
    const id = Pool.getTypeId(type);

    return this.services.has(id)
      ? this.services.get(id)
      : undefined;
  }

  /**
   * Добавляет указанынй экземпляр сервиса в данный контекст.
   *
   * @internal
   * @param service Экземпляр сервиса.
   */
  public [SET_SERVICE](service: LazyService) {
    const id = Pool.getTypeId(service.constructor as typeof LazyService);
    this.services.set(id, service);
  }

  /**
   * Освобождает ресурсы, занятые всеми экземплярами сервисов из этого пула,
   * подготавливая их к удалению.
   */
  public dispose() {
    this.services.forEach((service) => service.dispose());
    this.services = new Map();
  }
}
