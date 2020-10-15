import { LazyService } from './LazyService';
/**
 * Свойство, содержащее экземпляр контекста по умолчанию.
 */
export declare const DEFAULT: unique symbol;
/**
 * Метод, возвращающий экземпляр сервиса.
 */
export declare const GET_SERVICE: unique symbol;
/**
 * Метод, задающий экземпляр сервиса.
 */
export declare const SET_SERVICE: unique symbol;
/**
 * Пул ленивых сервисов.
 */
export declare class Pool {
    /**
     * Сохранённое значение свойства DEFAULT.
     */
    private static defaultValue;
    /**
     * Пул сервисов, используемых по умолчанию.
     */
    static get [DEFAULT](): Pool;
    /**
     * Коллекция сохранённых уникальный идентификаторов, сгрупированная
     * по соответствующим им классам сервисов.
     */
    private static typeIds;
    /**
     * Последний уникальный идентификатор, присвоенный классу сервиса.
     */
    private static lastTypeId;
    /**
     * Возвращает уникальный идентификатор, соответствующий указанному классу
     * сервиса.
     *
     * @param type Класс сервиса.
     */
    private static getTypeId;
    /**
     * Коллекция экземпляров сервисов.
     */
    private services;
    /**
     * Возвращает экземпляр сервиса указанного класса.
     *
     * @internal
     * @param type Тип класса сервиса.
     */
    [GET_SERVICE]<T extends typeof LazyService>(type: T): InstanceType<T> | undefined;
    /**
     * Добавляет указанынй экземпляр сервиса в данный контекст.
     *
     * @internal
     * @param service Экземпляр сервиса.
     */
    [SET_SERVICE](service: LazyService): void;
    /**
     * Освобождает ресурсы, занятые всеми экземплярами сервисов из этого пула,
     * подготавливая их к удалению.
     */
    dispose(): void;
}
