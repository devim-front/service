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
var ServiceError_1 = require("./ServiceError");
/**
 * Возникает, когда в коде происходит создание экземпляра сервиса через
 * оператор 'new'.
 */
var NewNotAllowedError = /** @class */ (function (_super) {
    __extends(NewNotAllowedError, _super);
    /**
     * Создает экземпляр ошибки.
     */
    function NewNotAllowedError() {
        return _super.call(this, "It's not allowed to create a service's instance by 'new' operator. Use Service.get() instead.") || this;
    }
    return NewNotAllowedError;
}(ServiceError_1.ServiceError));
exports.NewNotAllowedError = NewNotAllowedError;
