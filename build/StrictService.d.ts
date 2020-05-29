import { Service } from './Service';
/**
 * Представляет строгий сервис. Строгий сервис, в отличии от ленивого, требует
 * обязательной инициализации перед попыткой к нему обратиться.
 */
export declare class StrictService extends Service {
    /**
     * Возвращает экземпляр сервиса. Если сервис ещё не был инициализирован
     * методом init, вызов get приведёт к ошибке.
     */
    static get<T extends typeof Service>(this: T): InstanceType<T>;
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
    static init<T extends typeof StrictService>(...args: ConstructorParameters<T>): void;
    /**
     * Аргументы, которые были переданы в конструктор сервиса.
     */
    private args;
    /**
     * Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
     * статического метода get, вызов конструктора напрямую приводит к ошибке.
     *
     * @param args Аргументы, полученные из метода init.
     */
    constructor(...args: any[]);
    /**
     * Возвращает true, если указанные аргументы конструктора строго равны
     * аргументам, которые были использованы для создания этого экземпляра.
     *
     * @param args Список аргументов.
     */
    private isSameArgs;
}
