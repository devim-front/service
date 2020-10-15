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
exports.Provider = void 0;
var react_1 = require("react");
var Context_1 = require("./Context");
var Pool_1 = require("./Pool");
/**
 * Объявляет контекст сервисов.
 */
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritdoc
     */
    Provider.prototype.render = function () {
        var _a = this.props, pool = _a.pool, children = _a.children;
        if (this.value == null || this.pool !== pool) {
            var finalPool = pool || new Pool_1.Pool();
            this.value = { pool: finalPool };
        }
        var value = this.value;
        return react_1.createElement(Context_1.context.Provider, { value: value }, children);
    };
    return Provider;
}(react_1.Component));
exports.Provider = Provider;
