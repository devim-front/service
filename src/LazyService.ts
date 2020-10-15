import { ComponentType, createElement, useContext, FC } from 'react';

import { Service } from './Service';
import { Pool, GET_SERVICE, SET_SERVICE, DEFAULT } from './Pool';
import { context } from './Context';

/**
 * Базовый класс для любого ленивого сервиса.
 */
export class LazyService extends Service {
  /**
   * Возвращает экземпляр данного сервиса, который находится в указанном
   * контексте. Если в переданном контексте нет экземпляра данного класса, он
   * будет создан.
   *
   * @param pool Контекст, в котором должен находиться экземпляр сервиса.
   */
  public static get<T extends typeof LazyService>(
    this: T,
    pool: Pool
  ): InstanceType<T>;

  /**
   * Возвращает экземпляр данного сервиса, который находится в том же контексте,
   * что и переданный экземпляр. Если в контексте нет экземпляра данного
   * сервиса, то он будет создан.
   *
   * @param service Другой экземпляр сервиса.
   */
  public static get<T extends typeof LazyService>(
    this: T,
    service: LazyService
  ): InstanceType<T>;

  /**
   * Возвращает экземпляр данного сервиса. Если экземпляра ещё нет, он будет
   * создан.
   */
  public static get<T extends typeof LazyService>(this: T): InstanceType<T>;

  /**
   * Возвращает экземпляр ленивого сервиса данного класса. Если экземпляра не
   * существует, он будет создан.
   *
   * @param destination Способ определения контекста, которому должен
   * принадлежать возвращаемый экземпляр. Если передан непосредственно контекст,
   * экземпляр сервиса будет получен из него. Если в качестве аргумента указан
   * другой экземпляр сервиса, то искомый экземпляр будет получен из того
   * контекста, в котором находится переданный. Если же передано undefined, то
   * для получения экземпляра будет использоваться контекст по умолчанию.
   */
  public static get<T extends typeof LazyService>(
    this: T,
    destination?: Pool | LazyService
  ) {
    let pool: Pool = Pool[DEFAULT];

    if (destination instanceof LazyService) {
      pool = destination.pool;
    }

    if (destination instanceof Pool) {
      pool = destination;
    }

    return this.getFromPool<T>(pool);
  }

  /**
   * Возвращает экземпляр сервиса данного класса из указанного контекста. Если
   * в переданном контексте его не существует, экземпляр будет создан.
   *
   * @param context Контекст, которому принадлежит экземпляр.
   */
  private static getFromPool<T extends typeof LazyService>(
    this: T,
    context: Pool
  ) {
    let instance = context[GET_SERVICE](this);

    if (instance == null) {
      instance = new this(context) as InstanceType<T>;
      context[SET_SERVICE](instance);
    }

    return instance;
  }

  /**
   * Хук, возвращающий экземпляр сервиса из текущего контекста сервисов.
   */
  public static use<T extends typeof LazyService>(this: T) {
    const { pool } = useContext(context);
    return this.getFromPool<T>(pool);
  }

  /**
   * Возвращает High Ordered Component, который подставляет в свойство с
   * указанным именем экземпляр данного сервиса.
   *
   * @param property Название свойства, в которое нужно подставить
   * экземпляр данного сервиса.
   */
  public static with<T extends typeof LazyService, K extends string>(
    this: T,
    property: K
  ) {
    type I = { [V in K]: InstanceType<T> };
    type O<P extends I> = Omit<P, keyof I>;
    type C<P extends I> = ComponentType<P>;
    type R<P extends I> = FC<O<P>>;

    return <P extends I>(target: C<P>): R<P> => (outerProps) => {
      const service = this.use<T>();
      const props = { ...outerProps, [property]: service };
      return createElement(target, props as P);
    };
  }

  /**
   * Ссылка на пул, в котором находится данный экземпляр сервиса.
   */
  private pool: Pool;

  /**
   * Создаёт экземпляр данного сервиса.
   *
   * @param pool Пул, которому принадлежит текущий экземпляр.
   */
  public constructor(pool: Pool) {
    super();
    this.pool = pool;
  }
}
