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
var ServiceError_1 = require("./ServiceError");
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
     */
    function UndefinedInstanceError() {
        return _super.call(this, "Cannot get an instance because 'Service.instance' is not undefined. Please resolve this issue in a nested class.") || this;
    }
    return UndefinedInstanceError;
}(ServiceError_1.ServiceError));
exports.UndefinedInstanceError = UndefinedInstanceError;
