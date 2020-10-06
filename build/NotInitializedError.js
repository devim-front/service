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
exports.NotInitializedError = void 0;
var ServiceError_1 = require("./ServiceError");
/**
 * Возникает, когда происходит попытка получить экземпляр строгого сервиса
 * перед тем, как он был инициализирован.
 */
var NotInitializedError = /** @class */ (function (_super) {
    __extends(NotInitializedError, _super);
    /**
     * Создает экземпляр ошибки.
     *
     * @param type Класс сервиса, сгенерировавшего исключение.
     */
    function NotInitializedError(type) {
        var _this = this;
        var message = NotInitializedError.getMessage(type);
        _this = _super.call(this, message) || this;
        return _this;
    }
    /**
     * Возвращает сообщение об ошибке.
     *
     * @param type Класс сервиса.
     */
    NotInitializedError.getMessage = function (type) {
        var _a = type.name, name = _a === void 0 ? 'StrictService' : _a;
        return "Service '" + name + "' is not initialized. Please use method " + name + ".init ap application startup.";
    };
    return NotInitializedError;
}(ServiceError_1.ServiceError));
exports.NotInitializedError = NotInitializedError;
