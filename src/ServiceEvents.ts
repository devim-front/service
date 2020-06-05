import { Events } from './Events';

/**
 * Коллекция событий базового сервиса.
 */
export interface ServiceEvents extends Events {
  /**
   * Вызывается, когда экземпляр сервиса подготавливается к удалению.
   */
  dispose: () => void;
}
