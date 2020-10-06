import { ServiceError } from './ServiceError';
/**
 * Возникает, когда происходит попытка получить экземпляр строгого сервиса
 * перед тем, как он был инициализирован.
 */
export declare class NotInitializedError extends ServiceError {
    /**
     * Возвращает сообщение об ошибке.
     *
     * @param type Класс сервиса.
     */
    private static getMessage;
    /**
     * Создает экземпляр ошибки.
     *
     * @param type Класс сервиса, сгенерировавшего исключение.
     */
    constructor(type: Function);
}
