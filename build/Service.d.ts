import { Events } from './Events';
import { ServiceEvents } from './ServiceEvents';
/**
 * Базовый класс сервиса.
 *
 * @template E Коллекция событий сервиса, где ключами служат названия событий,
 * а значениями - сигнатуры обработчиков этих событий.
 */
export declare class Service<E extends Events = ServiceEvents> {
    /**
     * Менеджер событий сервиса.
     */
    private events;
    /**
     * Добавляет обработчик указанному событию.
     *
     * @param event Событие.
     * @param handler Обработчик.
     */
    on<T extends keyof E>(event: T, handler: E[T]): void;
    /**
     * Удаляет указанный обработчик события.
     *
     * @param event Событие.
     * @param handler Обработчик.
     */
    off<T extends keyof E>(event: T, handler: E[T]): void;
    /**
     * Вызывает указанное событие, передавая аргументы в его обработчики.
     *
     * @param event Событие.
     * @param args Аргументы, передаваемые в обработчики.
     */
    protected emit<T extends keyof E>(event: T, ...args: Parameters<E[T]>): void;
    /**
     * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
     * удалению. Помимо этого, отключает все добавленные обработчики событий
     * сервиса.
     */
    dispose(): void;
}
