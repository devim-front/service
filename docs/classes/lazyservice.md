[@devim-front/service](../README.md) › [LazyService](lazyservice.md)

# Class: LazyService

Базовый класс для любого ленивого сервиса.

## Hierarchy

* [Service](service.md)

  ↳ **LazyService**

## Index

### Constructors

* [constructor](lazyservice.md#markdown-header-constructor)

### Methods

* [dispose](lazyservice.md#markdown-header-dispose)
* [get](lazyservice.md#markdown-header-static-get)
* [use](lazyservice.md#markdown-header-static-use)
* [with](lazyservice.md#markdown-header-static-with)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new LazyService**(`pool`: [Pool](pool.md)): *[LazyService](lazyservice.md)*

Создаёт экземпляр данного сервиса.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pool` | [Pool](pool.md) | Пул, которому принадлежит текущий экземпляр.  |

**Returns:** *[LazyService](lazyservice.md)*

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

*Inherited from [Service](service.md).[dispose](service.md#markdown-header-dispose)*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению.

**Returns:** *void*

___

### <a id="markdown-header-static-get" name="markdown-header-static-get"></a> `Static` get

▸ **get**<**T**>(`this`: T, `pool`: [Pool](pool.md)): *InstanceType‹T›*

Возвращает экземпляр данного сервиса, который находится в указанном
контексте. Если в переданном контексте нет экземпляра данного класса, он
будет создан.

**Type parameters:**

▪ **T**: *typeof LazyService*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | T | - |
`pool` | [Pool](pool.md) | Контекст, в котором должен находиться экземпляр сервиса.  |

**Returns:** *InstanceType‹T›*

▸ **get**<**T**>(`this`: T, `service`: [LazyService](lazyservice.md)): *InstanceType‹T›*

Возвращает экземпляр данного сервиса, который находится в том же контексте,
что и переданный экземпляр. Если в контексте нет экземпляра данного
сервиса, то он будет создан.

**Type parameters:**

▪ **T**: *typeof LazyService*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | T | - |
`service` | [LazyService](lazyservice.md) | Другой экземпляр сервиса.  |

**Returns:** *InstanceType‹T›*

▸ **get**<**T**>(`this`: T): *InstanceType‹T›*

Возвращает экземпляр данного сервиса. Если экземпляра ещё нет, он будет
создан.

**Type parameters:**

▪ **T**: *typeof LazyService*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

**Returns:** *InstanceType‹T›*

___

### <a id="markdown-header-static-use" name="markdown-header-static-use"></a> `Static` use

▸ **use**<**T**>(`this`: T)

Хук, возвращающий экземпляр сервиса из текущего контекста сервисов.

**Type parameters:**

▪ **T**: *typeof LazyService*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

___

### <a id="markdown-header-static-with" name="markdown-header-static-with"></a> `Static` with

▸ **with**<**T**, **K**>(`this`: T, `property`: K): *(Anonymous function)*

Возвращает High Ordered Component, который подставляет в свойство с
указанным именем экземпляр данного сервиса.

**Type parameters:**

▪ **T**: *typeof LazyService*

▪ **K**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | T | - |
`property` | K | Название свойства, в которое нужно подставить экземпляр данного сервиса.  |

**Returns:** *(Anonymous function)*
