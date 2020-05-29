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
exports.ServiceError = void 0;
/**
 * Возникает, когда произошла ошибка при использовании базовых механик сервиса.
 * Наследовать от этого класса собственные исключения не нужно.
 */
var ServiceError = /** @class */ (function (_super) {
    __extends(ServiceError, _super);
    /**
     * Создает экземпляр класса с указанным сообщением об ошибке.
     *
     * @param message Сообщение об ошибке.
     */
    function ServiceError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'ServiceError';
        return _this;
    }
    return ServiceError;
}(Error));
exports.ServiceError = ServiceError;
