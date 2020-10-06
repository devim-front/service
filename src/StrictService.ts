import { NotInitializedError } from './NotInitializedError';
import { SingleService } from './SingleService';
import { Events } from './Events';
import { StrictServiceEvents } from './StrictServiceEvents';

/**
 * Представляет строгий единичный сервис. Строгий сервис, в отличии от ленивого,
 * требует обязательной инициализации перед попыткой к нему обратиться.
 *
 * @template E Коллекция событий строгого сервиса. Все пользовательские
 * коллекция следует наследовать от интерфейса StrictServiceEvents.
 */
export class StrictService<
  E extends Events = StrictServiceEvents
> extends SingleService<E> {
  /**
   * Возвращает экземпляр сервиса. Если сервис ещё не был инициализирован
   * методом init, вызов get приведёт к ошибке.
   */
  public static get<T extends typeof SingleService>(this: T) {
    if (this.isExists) {
      return this.instance as InstanceType<T>;
    }

    throw new NotInitializedError(this);
  }

  /**
   * Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
   * переданы в конструктор класса. Если вызвать метод инициализации повторно с
   * теми же аргументами, то новый экземпляр создан не будет. Если же при
   * повторном вызове метода аргументы изменятся, то предыдущий экземпляр
   * сервиса будет уничтожен через метод delete и создан новый. Чтобы
   * пересоздать сервис с теми же аргументами, используйте метод delete, а
   * уж затем init.
   *
   * @param args Аргументы, которые будут переданы в конструктор.
   */
  public static init(...args: any[]) {
    if (this.isExists) {
      if (this.get().isSameArgs(args)) {
        return;
      }

      this.delete();
    }

    this.create(...args);
  }

  /**
   * Аргументы, которые были переданы в конструктор сервиса.
   */
  private args: any[] = [];

  /**
   * Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
   * статического метода get, вызов конструктора напрямую приводит к ошибке.
   *
   * @param args Аргументы, полученные из метода init.
   */
  public constructor(...args: any[]) {
    super(...args);
    this.args = args;
  }

  /**
   * Возвращает true, если указанные аргументы конструктора строго равны
   * аргументам, которые были использованы для создания этого экземпляра.
   *
   * @param args Список аргументов.
   */
  private isSameArgs(args: any[]) {
    const { length } = args;

    if (length !== this.args.length) {
      return false;
    }

    for (let i = 0; i < length; i += 1) {
      const valueA = this.args[i];
      const valueB = args[i];

      if (valueA !== valueB) {
        return false;
      }
    }

    return true;
  }
}
