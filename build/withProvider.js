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
exports.withProvider = void 0;
var react_1 = require("react");
var Provider_1 = require("./Provider");
/**
 * Оборачивает переданный компонент в провайдер ленивых сервисов.
 *
 * @param pool Пул сервисов, который будет использован в провайдере. Если
 * не указан, то будет создан новый пул.
 */
exports.withProvider = function (pool) { return function (target) { var _a; return _a = /** @class */ (function (_super) {
        __extends(WithProvider, _super);
        function WithProvider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @inheritdoc
         */
        WithProvider.prototype.render = function () {
            return react_1.createElement(Provider_1.Provider, { pool: pool }, react_1.createElement(target, this.props));
        };
        return WithProvider;
    }(react_1.Component)),
    /**
     * @inheritdoc
     */
    _a.displayName = "WithServiceProvider(" + (target.displayName || target.name) + ")",
    _a; }; };
