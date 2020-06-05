[@devim-front/service](../README.md) › [FreeService](freeservice.md)

# Class: FreeService <**E**>

Представляет свободный сервис. Свободный сервис никак не контролирует
количество своих экземпляров, поручая внешним классам управлять их
созданием и уничтожением. Рекомендуется использовать свободные сервисы
как составные части ленивых или строгих, вызывая их методы dispose при
удалении экземпляра-аргегата.

## Type parameters

▪ **E**: *[Events](../README.md#markdown-header-events)*

Коллекция событий сервиса. Все дочерние коллекции событий
следует наследовать от FreeServiceEvents.

## Hierarchy

* [Service](service.md)‹E›

  ↳ **FreeService**

## Index

### Methods

* [dispose](freeservice.md#markdown-header-dispose)
* [emit](freeservice.md#markdown-header-protected-emit)
* [off](freeservice.md#markdown-header-off)
* [on](freeservice.md#markdown-header-on)

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

*Inherited from [Service](service.md).[dispose](service.md#markdown-header-dispose)*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению. Помимо этого, отключает все добавленные обработчики событий
сервиса.

**Returns:** *void*

___

### <a id="markdown-header-protected-emit" name="markdown-header-protected-emit"></a> `Protected` emit

▸ **emit**<**T**>(`event`: T, ...`args`: Parameters‹E[T]›): *void*

*Inherited from [Service](service.md).[emit](service.md#markdown-header-protected-emit)*

Вызывает указанное событие, передавая аргументы в его обработчики.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`...args` | Parameters‹E[T]› | Аргументы, передаваемые в обработчики.  |

**Returns:** *void*

___

### <a id="markdown-header-off" name="markdown-header-off"></a>  off

▸ **off**<**T**>(`event`: T, `handler`: E[T]): *void*

*Inherited from [Service](service.md).[off](service.md#markdown-header-off)*

Удаляет указанный обработчик события.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*

___

### <a id="markdown-header-on" name="markdown-header-on"></a>  on

▸ **on**<**T**>(`event`: T, `handler`: E[T]): *void*

*Inherited from [Service](service.md).[on](service.md#markdown-header-on)*

Добавляет обработчик указанному событию.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*
