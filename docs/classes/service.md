[@devim-front/service](../README.md) › [Service](service.md)

# Class: Service <**E**>

Базовый класс сервиса.

## Type parameters

▪ **E**: *[Events](../README.md#markdown-header-events)*

Коллекция событий сервиса, где ключами служат названия событий,
а значениями - сигнатуры обработчиков этих событий.

## Hierarchy

* **Service**

  ↳ [FreeService](freeservice.md)

  ↳ [SingleService](singleservice.md)

## Index

### Methods

* [dispose](service.md#markdown-header-dispose)
* [emit](service.md#markdown-header-protected-emit)
* [off](service.md#markdown-header-off)
* [on](service.md#markdown-header-on)

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению. Помимо этого, отключает все добавленные обработчики событий
сервиса.

**Returns:** *void*

___

### <a id="markdown-header-protected-emit" name="markdown-header-protected-emit"></a> `Protected` emit

▸ **emit**<**T**>(`event`: T, ...`args`: Parameters‹E[T]›): *void*

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

Добавляет обработчик указанному событию.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*
