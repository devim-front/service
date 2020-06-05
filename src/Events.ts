/**
 * Коллекция событий сервиса. Ключом служит тип события, значением -
 * сигнатура обработчика события.
 */
export type Events = {
  [key: string]: (...args: any[]) => void;
};