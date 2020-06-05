import { SingleService } from './SingleService';
import { Events } from './Events';
import { LazyServiceEvents } from './LazyServiceEvents';

/**
 * Представляет "ленивый" единичный сервис. Ленивый сервис не требует
 * инициализации. Непосредственно экземпляр сервиса создаётся во время первого
 * обращения к нему через метод get. Соответственно, конструктор ленивого
 * сервиса не должен иметь параметров.
 *
 * @template E Коллекция событий ленивого сервиса. Пользовательскую коллекцию
 * событий следует наследовать от интерфейса LazyServiceEvents.
 */
export class LazyService<
  E extends Events = LazyServiceEvents
> extends SingleService<E> {
  /**
   * Возвращает экземпляр сервиса. Если экземпляр сервиса ещё не был создан,
   * создаёт его.
   */
  public static get<T extends typeof SingleService>(this: T) {
    if (!this.isExists) {
      this.create();
    }

    return this.instance as InstanceType<T>;
  }

  /**
   * Инициализирует экземпляр сервиса. В случае с ленивым сервисом, метод
   * просто создаёт экземпляр класса, если тот не был создан ранее. Повторные
   * вызовы init его не пересоздают. Чтобы пересоздать экземпляр принудительно,
   * используйте метод delete, а затем init.
   */
  public static init() {
    this.get();
  }
}
