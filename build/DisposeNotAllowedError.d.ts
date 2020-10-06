import { NotSupportedError } from '@devim-front/error';
/**
 * Возникает, когда в коде происходит попытка прямого вызова метода dispose у
 * экземпляра сервиса-синглтона.
 */
export declare class DisposeNotAllowedError extends NotSupportedError {
    /**
     * Возвращает сообщение об ошибке.
     *
     * @param type Класс сервиса.
     */
    private static getMessage;
    /**
     * Создает экземпляр ошибки.
     *
     * @param type Класс сервиса, сгенерировавший исключение.
     */
    constructor(type: Function);
}
