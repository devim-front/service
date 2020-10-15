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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LazyService = void 0;
var react_1 = require("react");
var Service_1 = require("./Service");
var Pool_1 = require("./Pool");
var Context_1 = require("./Context");
/**
 * Базовый класс для любого ленивого сервиса.
 */
var LazyService = /** @class */ (function (_super) {
    __extends(LazyService, _super);
    /**
     * Создаёт экземпляр данного сервиса.
     *
     * @param pool Пул, которому принадлежит текущий экземпляр.
     */
    function LazyService(pool) {
        var _this = _super.call(this) || this;
        _this.pool = pool;
        return _this;
    }
    /**
     * Возвращает экземпляр ленивого сервиса данного класса. Если экземпляра не
     * существует, он будет создан.
     *
     * @param destination Способ определения контекста, которому должен
     * принадлежать возвращаемый экземпляр. Если передан непосредственно контекст,
     * экземпляр сервиса будет получен из него. Если в качестве аргумента указан
     * другой экземпляр сервиса, то искомый экземпляр будет получен из того
     * контекста, в котором находится переданный. Если же передано undefined, то
     * для получения экземпляра будет использоваться контекст по умолчанию.
     */
    LazyService.get = function (destination) {
        var pool = Pool_1.Pool[Pool_1.DEFAULT];
        if (destination instanceof LazyService) {
            pool = destination.pool;
        }
        if (destination instanceof Pool_1.Pool) {
            pool = destination;
        }
        return this.getFromPool(pool);
    };
    /**
     * Возвращает экземпляр сервиса данного класса из указанного контекста. Если
     * в переданном контексте его не существует, экземпляр будет создан.
     *
     * @param context Контекст, которому принадлежит экземпляр.
     */
    LazyService.getFromPool = function (context) {
        var instance = context[Pool_1.GET_SERVICE](this);
        if (instance == null) {
            instance = new this(context);
            context[Pool_1.SET_SERVICE](instance);
        }
        return instance;
    };
    /**
     * Хук, возвращающий экземпляр сервиса из текущего контекста сервисов.
     */
    LazyService.use = function () {
        var pool = react_1.useContext(Context_1.context).pool;
        return this.getFromPool(pool);
    };
    /**
     * Возвращает High Ordered Component, который подставляет в свойство с
     * указанным именем экземпляр данного сервиса.
     *
     * @param property Название свойства, в которое нужно подставить
     * экземпляр данного сервиса.
     */
    LazyService.with = function (property) {
        var _this = this;
        return function (target) { return function (outerProps) {
            var _a;
            var service = _this.use();
            var props = __assign(__assign({}, outerProps), (_a = {}, _a[property] = service, _a));
            return react_1.createElement(target, props);
        }; };
    };
    return LazyService;
}(Service_1.Service));
exports.LazyService = LazyService;
