[@devim-front/service](../README.md) › [FreeService](freeservice.md)

# Class: FreeService

Представляет свободный сервис. Свободный сервис никак не контролирует
количество своих экземпляров, поручая внешним классам управлять их
созданием и уничтожением. Рекомендуется использовать свободные сервисы
как составные части ленивых сервисов, вызывая их методы dispose при
удалении экземпляра-аргегата.

## Hierarchy

* [Service](service.md)

  ↳ **FreeService**

## Index

### Methods

* [dispose](freeservice.md#markdown-header-dispose)

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

*Inherited from [Service](service.md).[dispose](service.md#markdown-header-dispose)*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению.

**Returns:** *void*
