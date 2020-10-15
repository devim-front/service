import { ComponentType, FC } from 'react';
import { Service } from './Service';
import { Pool } from './Pool';
/**
 * Базовый класс для любого ленивого сервиса.
 */
export declare class LazyService extends Service {
    /**
     * Возвращает экземпляр данного сервиса, который находится в указанном
     * контексте. Если в переданном контексте нет экземпляра данного класса, он
     * будет создан.
     *
     * @param pool Контекст, в котором должен находиться экземпляр сервиса.
     */
    static get<T extends typeof LazyService>(this: T, pool: Pool): InstanceType<T>;
    /**
     * Возвращает экземпляр данного сервиса, который находится в том же контексте,
     * что и переданный экземпляр. Если в контексте нет экземпляра данного
     * сервиса, то он будет создан.
     *
     * @param service Другой экземпляр сервиса.
     */
    static get<T extends typeof LazyService>(this: T, service: LazyService): InstanceType<T>;
    /**
     * Возвращает экземпляр данного сервиса. Если экземпляра ещё нет, он будет
     * создан.
     */
    static get<T extends typeof LazyService>(this: T): InstanceType<T>;
    /**
     * Возвращает экземпляр сервиса данного класса из указанного контекста. Если
     * в переданном контексте его не существует, экземпляр будет создан.
     *
     * @param context Контекст, которому принадлежит экземпляр.
     */
    private static getFromPool;
    /**
     * Хук, возвращающий экземпляр сервиса из текущего контекста сервисов.
     */
    static use<T extends typeof LazyService>(this: T): InstanceType<T>;
    /**
     * Возвращает High Ordered Component, который подставляет в свойство с
     * указанным именем экземпляр данного сервиса.
     *
     * @param property Название свойства, в которое нужно подставить
     * экземпляр данного сервиса.
     */
    static with<T extends typeof LazyService, K extends string>(this: T, property: K): <P extends { [V in K]: InstanceType<T>; }>(target: ComponentType<P>) => FC<Pick<P, Exclude<keyof P, K>>>;
    /**
     * Ссылка на пул, в котором находится данный экземпляр сервиса.
     */
    private pool;
    /**
     * Создаёт экземпляр данного сервиса.
     *
     * @param pool Пул, которому принадлежит текущий экземпляр.
     */
    constructor(pool: Pool);
}
