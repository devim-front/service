import { Component, PropsWithChildren } from 'react';
import { Context } from './Context';
import { Pool } from './Pool';
/**
 * Свойства компонента.
 */
declare type Props = PropsWithChildren<{
    /**
     * Пул сервисов, который будет использоваться в данном контексте.
     */
    pool?: Pool;
}>;
/**
 * Объявляет контекст сервисов.
 */
export declare class Provider extends Component<Props> {
    /**
     * Сохранённый объект контекста.
     */
    private value;
    /**
     * Сохранённое значение свойства pool.
     */
    private pool?;
    /**
     * @inheritdoc
     */
    render(): import("react").FunctionComponentElement<import("react").ProviderProps<Context>>;
}
export {};
