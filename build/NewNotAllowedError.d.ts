import { NotSupportedError } from '@devim-front/error';
/**
 * Возникает, когда в коде происходит создание экземпляра сервиса через
 * оператор 'new'.
 */
export declare class NewNotAllowedError extends NotSupportedError {
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
