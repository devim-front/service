/// <reference types="react" />
import { Pool } from './Pool';
/**
 * Тип контекста.
 */
export declare type Context = {
    /**
     * Пул сервисов.
     */
    pool: Pool;
};
/**
 * Контекст сервисов.
 */
export declare const context: import("react").Context<Context>;
