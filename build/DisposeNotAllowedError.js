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
exports.DisposeNotAllowedError = void 0;
var error_1 = require("@devim-front/error");
/**
 * Возникает, когда в коде происходит попытка прямого вызова метода dispose у
 * экземпляра сервиса-синглтона.
 */
var DisposeNotAllowedError = /** @class */ (function (_super) {
    __extends(DisposeNotAllowedError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param type Класс сервиса, сгенерировавший исключение.
     */
    function DisposeNotAllowedError(type) {
        var _this = this;
        var message = DisposeNotAllowedError.getMessage(type);
        _this = _super.call(this, message) || this;
        return _this;
    }
    /**
     * Возвращает сообщение об ошибке.
     *
     * @param type Класс сервиса.
     */
    DisposeNotAllowedError.getMessage = function (type) {
        var _a = type.name, name = _a === void 0 ? 'SingleService' : _a;
        return "It's not allowed to call dispose() method directly. Use " + name + ".delete() instead.";
    };
    return DisposeNotAllowedError;
}(error_1.NotSupportedError));
exports.DisposeNotAllowedError = DisposeNotAllowedError;
