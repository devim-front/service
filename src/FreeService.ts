import { Service } from './Service';
import { Events } from './Events';
import { FreeServiceEvents } from './FreeServiceEvents';

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
export class FreeService<E extends Events = FreeServiceEvents> extends Service<
  E
> {}
