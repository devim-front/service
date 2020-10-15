"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.SET_SERVICE = exports.GET_SERVICE = exports.DEFAULT = void 0;
/**
 * Свойство, содержащее экземпляр контекста по умолчанию.
 */
exports.DEFAULT = Symbol('DEFAULT');
/**
 * Метод, возвращающий экземпляр сервиса.
 */
exports.GET_SERVICE = Symbol('GET_SERVICE');
/**
 * Метод, задающий экземпляр сервиса.
 */
exports.SET_SERVICE = Symbol('SET_SERVICE');
/**
 * Пул ленивых сервисов.
 */
var Pool = /** @class */ (function () {
    function Pool() {
        /**
         * Коллекция экземпляров сервисов.
         */
        this.services = new Map();
    }
    Object.defineProperty(Pool, exports.DEFAULT, {
        /**
         * Пул сервисов, используемых по умолчанию.
         */
        get: function () {
            if (this.defaultValue == null) {
                this.defaultValue = new this();
            }
            return this.defaultValue;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Возвращает уникальный идентификатор, соответствующий указанному классу
     * сервиса.
     *
     * @param type Класс сервиса.
     */
    Pool.getTypeId = function (type) {
        if (this.typeIds.has(type)) {
            return this.typeIds.get(type);
        }
        this.lastTypeId += 1;
        var id = this.lastTypeId;
        this.typeIds.set(type, id);
        return id;
    };
    /**
     * Возвращает экземпляр сервиса указанного класса.
     *
     * @internal
     * @param type Тип класса сервиса.
     */
    Pool.prototype[exports.GET_SERVICE] = function (type) {
        var id = Pool.getTypeId(type);
        return this.services.has(id)
            ? this.services.get(id)
            : undefined;
    };
    /**
     * Добавляет указанынй экземпляр сервиса в данный контекст.
     *
     * @internal
     * @param service Экземпляр сервиса.
     */
    Pool.prototype[exports.SET_SERVICE] = function (service) {
        var id = Pool.getTypeId(service.constructor);
        this.services.set(id, service);
    };
    /**
     * Освобождает ресурсы, занятые всеми экземплярами сервисов из этого пула,
     * подготавливая их к удалению.
     */
    Pool.prototype.dispose = function () {
        this.services.forEach(function (service) { return service.dispose(); });
    };
    /**
     * Коллекция сохранённых уникальный идентификаторов, сгрупированная
     * по соответствующим им классам сервисов.
     */
    Pool.typeIds = new WeakMap();
    /**
     * Последний уникальный идентификатор, присвоенный классу сервиса.
     */
    Pool.lastTypeId = 0;
    return Pool;
}());
exports.Pool = Pool;
