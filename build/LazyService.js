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
exports.LazyService = void 0;
var SingleService_1 = require("./SingleService");
/**
 * Представляет "ленивый" единичный сервис. Ленивый сервис не требует
 * инициализации. Непосредственно экземпляр сервиса создаётся во время первого
 * обращения к нему через метод get. Соответственно, конструктор ленивого
 * сервиса не должен иметь параметров.
 */
var LazyService = /** @class */ (function (_super) {
    __extends(LazyService, _super);
    function LazyService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Возвращает экземпляр сервиса. Если экземпляр сервиса ещё не был создан,
     * создаёт его.
     */
    LazyService.get = function () {
        if (!this.isExists) {
            this.create();
        }
        return this.instance;
    };
    /**
     * Инициализирует экземпляр сервиса. В случае с ленивым сервисом, метод
     * просто создаёт экземпляр класса, если тот не был создан ранее. Повторные
     * вызовы init его не пересоздают. Чтобы пересоздать экземпляр принудительно,
     * используйте метод delete, а затем init.
     */
    LazyService.init = function () {
        this.get();
    };
    return LazyService;
}(SingleService_1.SingleService));
exports.LazyService = LazyService;
