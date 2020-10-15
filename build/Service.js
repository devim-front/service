"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
/**
 * Базовый класс сервиса.
 */
var Service = /** @class */ (function () {
    function Service() {
    }
    /**
     * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
     * удалению.
     */
    Service.prototype.dispose = function () { };
    return Service;
}());
exports.Service = Service;
