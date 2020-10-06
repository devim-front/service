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
exports.UndefinedInstanceError = void 0;
var error_1 = require("@devim-front/error");
/**
 * Возникает, когда в базовом классе Service происходит попытка получить
 * экземпляр сервиса до его создания. Классы-наследники решают эту проблему
 * по-разному: ленивый сервис создает новый экземпляр перед тем, как его
 * вернуть; строгий сервис выбрасывает более специфическое исключение.
 * Если вы наследуете свои классы от Service напрямую, вы должны решить эту
 * проблему самостоятельно.
 */
var UndefinedInstanceError = /** @class */ (function (_super) {
    __extends(UndefinedInstanceError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param type Класс сервиса, который сгенерировал исключение.
     */
    function UndefinedInstanceError(type) {
        var _this = this;
        var message = UndefinedInstanceError.getMessage(type);
        _this = _super.call(this, message) || this;
        return _this;
    }
    /**
     * Возвращает сообщение об ошибке.
     *
     * @param type Класс сервиса.
     */
    UndefinedInstanceError.getMessage = function (type) {
        var _a = type.name, name = _a === void 0 ? 'SingleService' : _a;
        return "Cannot get an instance because " + name + ".instance is not undefined. Please resolve this issue in a nested class.";
    };
    return UndefinedInstanceError;
}(error_1.NotImplementedError));
exports.UndefinedInstanceError = UndefinedInstanceError;
