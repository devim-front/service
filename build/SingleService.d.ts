import { Service } from './Service';
/**
 * Представляет единичный сервис или сервис-синглтон. Данный тип сервиса
 * запрещает прямые вызовы метода dispose и создание экземпляров через
 * оператор new, предоставляя взамен специальные статические методы delete и
 * init.
 */
export declare class SingleService extends Service {
    /**
     * Экземпляр сервиса.
     */
    protected static instance: any;
    /**
     * Указывает, что конструктор сервиса был вызван с помощью статического
     * метода create, а не напрямую через оператор new.
     */
    private static isCreate;
    /**
     * Указывает, что экземпляр данного класса уже был создан.
     */
    protected static get isExists(): boolean;
    /**
     * Возвращает экземпляр сервиса. Если на момент вызова этого метода сервис
     * ещё не был инициализирован методом init (или уже удален через метод
     * delete), будет выброшено исключение.
     */
    static get<T extends typeof SingleService>(this: T): InstanceType<T>;
    /**
     * Создает экземпляр сервиса и сохраняет его. Для создания экземпляра класса
     * следует использовать именно его; вызов оператора new приводит к ошибке.
     *
     * @param args Аргументы конструктора.
     */
    protected static create<T extends typeof SingleService>(...args: ConstructorParameters<T>): void;
    /**
     * Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
     * переданы в конструктор класса. Повторный вызов init уничтожит предыдущий
     * экземпляр вызовов delete и создаст новый.
     *
     * @param args Аргументы.
     */
    static init(...args: any[]): void;
    /**
     * Удаляет существующий экземпляр сервиса, освобождая все занятые им ресурсы.
     */
    static delete(): void;
    /**
     * Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
     * статического метода get, вызов конструктора напрямую приводит к ошибке.
     *
     * @param _args Аргументы, полученные из метода create.
     */
    constructor(..._args: any[]);
    /**
     * Указывает, что метод dispose был вызван внутри метода delete, а не
     * напрямую.
     */
    private isDelete;
    /**
     * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
     * удалению. Для строго или ленивого сервиса прямой вызов этого метода
     * запрещён и приведет к ошибке, поскольку это может создать неоднозначность
     * в коде. Используйте вместо него статический метод delete.
     */
    dispose(): void;
}
