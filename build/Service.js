"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var UndefinedInstanceError_1 = require("./UndefinedInstanceError");
var NewNotAllowedError_1 = require("./NewNotAllowedError");
/**
 * Базовый класс сервиса.
 */
var Service = /** @class */ (function () {
    /**
     * Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
     * статического метода get, вызов конструктора напрямую приводит к ошибке.
     *
     * @param _args Аргументы, полученные из метода create.
     */
    function Service() {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        var type = this.constructor;
        if (type.isCreate) {
            type.isCreate = false;
            return this;
        }
        throw new NewNotAllowedError_1.NewNotAllowedError();
    }
    Object.defineProperty(Service, "isExists", {
        /**
         * Указывает, что экземпляр данного класса уже был создан.
         */
        get: function () {
            return this.instance instanceof this;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Возвращает экземпляр сервиса. Если на момент вызова этого метода сервис
     * ещё не был инициализирован методом init (или уже удален через метод
     * delete), будет выброшено исключение.
     */
    Service.get = function () {
        if (!this.isExists) {
            throw new UndefinedInstanceError_1.UndefinedInstanceError();
        }
        return this.instance;
    };
    /**
     * Создает экземпляр сервиса и сохраняет его.
     *
     * @internal
     * @param args Аргументы конструктора.
     */
    Service.create = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.isCreate = true;
        this.instance = new (this.bind.apply(this, __spreadArrays([void 0], args)))();
    };
    /**
     * Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
     * переданы в конструктор класса. Повторный вызов init уничтожит предыдущий
     * экземпляр вызовов delete и создаст новый.
     *
     * @param args Аргументы.
     */
    Service.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.isExists) {
            this.delete();
        }
        this.create.apply(this, args);
    };
    /**
     * Удаляет существующий экземпляр сервиса, освобождая все занятые им ресурсы.
     */
    Service.delete = function () {
        if (!this.isExists) {
            return;
        }
        var instance = this.get();
        instance.dispose();
        this.instance = undefined;
    };
    /**
     * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
     * удалению.
     */
    Service.prototype.dispose = function () { };
    return Service;
}());
exports.Service = Service;
