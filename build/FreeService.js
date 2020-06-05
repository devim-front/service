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
exports.FreeService = void 0;
var Service_1 = require("./Service");
/**
 * Представляет свободный сервис. Свободный сервис никак не контролирует
 * количество своих экземпляров, поручая внешним классам управлять их
 * созданием и уничтожением. Рекомендуется использовать свободные сервисы
 * как составные части ленивых или строгих, вызывая их методы dispose при
 * удалении экземпляра-аргегата.
 *
 * @template E Коллекция событий сервиса. Все дочерние коллекции событий
 * следует наследовать от FreeServiceEvents.
 */
var FreeService = /** @class */ (function (_super) {
    __extends(FreeService, _super);
    function FreeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FreeService;
}(Service_1.Service));
exports.FreeService = FreeService;
