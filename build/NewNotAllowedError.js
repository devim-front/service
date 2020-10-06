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
exports.NewNotAllowedError = void 0;
var error_1 = require("@devim-front/error");
/**
 * Возникает, когда в коде происходит создание экземпляра сервиса через
 * оператор 'new'.
 */
var NewNotAllowedError = /** @class */ (function (_super) {
    __extends(NewNotAllowedError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param type Класс сервиса, сгенерировавшего исключение.
     */
    function NewNotAllowedError(type) {
        var _this = this;
        var message = NewNotAllowedError.getMessage(type);
        _this = _super.call(this, message) || this;
        return _this;
    }
    /**
     * Возвращает сообщение об ошибке.
     *
     * @param type Класс сервиса.
     */
    NewNotAllowedError.getMessage = function (type) {
        var name = type.name;
        return "It's not allowed to use a \"new\" operator. Use " + name + ".get() instead.";
    };
    return NewNotAllowedError;
}(error_1.NotSupportedError));
exports.NewNotAllowedError = NewNotAllowedError;
