import { ServiceError } from './ServiceError';
/**
 * Возникает, когда в коде происходит попытка прямого вызова метода dispose у
 * экземпляра сервиса-синглтона.
 */
export declare class DisposeNotAllowedError extends ServiceError {
    /**
     * Создает экземпляр ошибки.
     */
    constructor();
}
