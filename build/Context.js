"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
var react_1 = require("react");
var Pool_1 = require("./Pool");
/**
 * Контекст сервисов.
 */
exports.context = react_1.createContext({
    pool: Pool_1.Pool[Pool_1.DEFAULT],
});
