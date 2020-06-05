import { EventEmitter } from 'events';

import { Events } from './Events';
import { ServiceEvents } from './ServiceEvents';

/**
 * Базовый класс сервиса.
 *
 * @template E Коллекция событий сервиса, где ключами служат названия событий,
 * а значениями - сигнатуры обработчиков этих событий.
 */
export class Service<E extends Events = ServiceEvents> {
  /**
   * Менеджер событий сервиса.
   */
  private events = new EventEmitter();

  /**
   * Добавляет обработчик указанному событию.
   *
   * @param event Событие.
   * @param handler Обработчик.
   */
  public on<T extends keyof E>(event: T, handler: E[T]) {
    this.events.on(event as string, handler);
  }

  /**
   * Удаляет указанный обработчик события.
   *
   * @param event Событие.
   * @param handler Обработчик.
   */
  public off<T extends keyof E>(event: T, handler: E[T]) {
    this.events.off(event as string, handler);
  }

  /**
   * Вызывает указанное событие, передавая аргументы в его обработчики.
   *
   * @param event Событие.
   * @param args Аргументы, передаваемые в обработчики.
   */
  protected emit<T extends keyof E>(event: T, ...args: Parameters<E[T]>) {
    this.events.emit(event as string, ...args);
  }

  /**
   * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
   * удалению. Помимо этого, отключает все добавленные обработчики событий
   * сервиса.
   */
  public dispose() {
    // @ts-ignore
    this.emit('dispose');

    this.events.removeAllListeners();
  }
}
