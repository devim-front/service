"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleService = void 0;
var UndefinedInstanceError_1 = require("./UndefinedInstanceError");
var DisposeNotAllowedError_1 = require("./DisposeNotAllowedError");
var NewNotAllowedError_1 = require("./NewNotAllowedError");
var Service_1 = require("./Service");
/**
 * Представляет единичный сервис или сервис-синглтон. Данный тип сервиса
 * запрещает прямые вызовы метода dispose и создание экземпляров через
 * оператор new, предоставляя взамен специальные статические методы delete и
 * init.
 */
var SingleService = /** @class */ (function (_super) {
    __extends(SingleService, _super);
    /**
     * Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
     * статического метода get, вызов конструктора напрямую приводит к ошибке.
     *
     * @param _args Аргументы, полученные из метода create.
     */
    function SingleService() {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        var type = _this.constructor;
        if (!type.isCreate) {
            throw new NewNotAllowedError_1.NewNotAllowedError();
        }
        type.isCreate = false;
        return _this;
    }
    Object.defineProperty(SingleService, "isExists", {
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
    SingleService.get = function () {
        if (!this.isExists) {
            throw new UndefinedInstanceError_1.UndefinedInstanceError();
        }
        return this.instance;
    };
    /**
     * Создает экземпляр сервиса и сохраняет его. Для создания экземпляра класса
     * следует использовать именно его; вызов оператора new приводит к ошибке.
     *
     * @param args Аргументы конструктора.
     */
    SingleService.create = function () {
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
    SingleService.init = function () {
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
    SingleService.delete = function () {
        if (!this.isExists) {
            return;
        }
        var instance = this.get();
        instance.isDelete = true;
        instance.dispose();
        this.instance = undefined;
    };
    /**
     * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
     * удалению. Для строго или ленивого сервиса прямой вызов этого метода
     * запрещён и приведет к ошибке, поскольку это может создать неоднозначность
     * в коде. Используйте вместо него статический метод delete.
     */
    SingleService.prototype.dispose = function () {
        if (!this.isDelete) {
            throw new DisposeNotAllowedError_1.DisposeNotAllowedError();
        }
        this.isDelete = false;
        _super.prototype.dispose.call(this);
    };
    return SingleService;
}(Service_1.Service));
exports.SingleService = SingleService;
