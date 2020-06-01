import { Service } from './Service';
/**
 * Представляет свободный сервис. Свободный сервис никак не контролирует
 * количество своих экземпляров, поручая внешним классам управлять их
 * созданием и уничтожением. Рекомендуется использовать свободные сервисы
 * как составные части ленивых или строгих, вызывая их методы dispose при
 * удалении экземпляра-аргегата.
 */
export declare class FreeService extends Service {
}