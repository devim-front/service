"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
var events_1 = require("events");
/**
 * Базовый класс сервиса.
 *
 * @template E Коллекция событий сервиса, где ключами служат названия событий,
 * а значениями - сигнатуры обработчиков этих событий.
 */
var Service = /** @class */ (function () {
    function Service() {
        /**
         * Менеджер событий сервиса.
         */
        this.events = new events_1.EventEmitter();
    }
    /**
     * Добавляет обработчик указанному событию.
     *
     * @param event Событие.
     * @param handler Обработчик.
     */
    Service.prototype.on = function (event, handler) {
        this.events.on(event, handler);
    };
    /**
     * Удаляет указанный обработчик события.
     *
     * @param event Событие.
     * @param handler Обработчик.
     */
    Service.prototype.off = function (event, handler) {
        this.events.off(event, handler);
    };
    /**
     * Вызывает указанное событие, передавая аргументы в его обработчики.
     *
     * @param event Событие.
     * @param args Аргументы, передаваемые в обработчики.
     */
    Service.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.events).emit.apply(_a, __spreadArrays([event], args));
    };
    /**
     * Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
     * удалению. Помимо этого, отключает все добавленные обработчики событий
     * сервиса.
     */
    Service.prototype.dispose = function () {
        // @ts-ignore
        this.emit('dispose');
        this.events.removeAllListeners();
    };
    return Service;
}());
exports.Service = Service;
