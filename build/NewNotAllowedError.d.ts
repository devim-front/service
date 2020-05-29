import { ServiceError } from './ServiceError';
/**
 * Возникает, когда в коде происходит создание экземпляра сервиса через
 * оператор 'new'.
 */
export declare class NewNotAllowedError extends ServiceError {
    /**
     * Создает экземпляр ошибки.
     */
    constructor();
}
