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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrictService = void 0;
var NotInitializedError_1 = require("./NotInitializedError");
var SingleService_1 = require("./SingleService");
/**
 * Представляет строгий единичный сервис. Строгий сервис, в отличии от ленивого,
 * требует обязательной инициализации перед попыткой к нему обратиться.
 *
 * @template E Коллекция событий строгого сервиса. Все пользовательские
 * коллекция следует наследовать от интерфейса StrictServiceEvents.
 */
var StrictService = /** @class */ (function (_super) {
    __extends(StrictService, _super);
    /**
     * Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
     * статического метода get, вызов конструктора напрямую приводит к ошибке.
     *
     * @param args Аргументы, полученные из метода init.
     */
    function StrictService() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        /**
         * Аргументы, которые были переданы в конструктор сервиса.
         */
        _this.args = [];
        _this.args = args;
        return _this;
    }
    /**
     * Возвращает экземпляр сервиса. Если сервис ещё не был инициализирован
     * методом init, вызов get приведёт к ошибке.
     */
    StrictService.get = function () {
        if (this.isExists) {
            return this.instance;
        }
        throw new NotInitializedError_1.NotInitializedError(this.name);
    };
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
    StrictService.init = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.isExists) {
            if (this.get().isSameArgs(args)) {
                return;
            }
            this.delete();
        }
        this.create.apply(this, args);
    };
    /**
     * Возвращает true, если указанные аргументы конструктора строго равны
     * аргументам, которые были использованы для создания этого экземпляра.
     *
     * @param args Список аргументов.
     */
    StrictService.prototype.isSameArgs = function (args) {
        var length = args.length;
        if (length !== this.args.length) {
            return false;
        }
        for (var i = 0; i < length; i += 1) {
            var valueA = this.args[i];
            var valueB = args[i];
            if (valueA !== valueB) {
                return false;
            }
        }
        return true;
    };
    return StrictService;
}(SingleService_1.SingleService));
exports.StrictService = StrictService;
