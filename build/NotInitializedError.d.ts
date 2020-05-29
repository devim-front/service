import { ServiceError } from './ServiceError';
/**
 * Возникает, когда происходит попытка получить экземпляр строгого сервиса
 * перед тем, как он был инициализирован.
 */
export declare class NotInitializedError extends ServiceError {
    /**
     * Создает экземпляр ошибки для сервиса с указанным именем.
     */
    constructor(name: string);
}
