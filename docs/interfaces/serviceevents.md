[@devim-front/service](../README.md) › [ServiceEvents](serviceevents.md)

# Interface: ServiceEvents

Коллекция событий базового сервиса.

## Hierarchy

* object

  ↳ **ServiceEvents**

  ↳ [FreeServiceEvents](freeserviceevents.md)

  ↳ [SingleServiceEvents](singleserviceevents.md)

  ↳ [LazyServiceEvents](lazyserviceevents.md)

## Indexable

* \[ **key**: *string*\]: function

Коллекция событий базового сервиса.

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

## Index

### Properties

* [dispose](serviceevents.md#markdown-header-dispose)

## Properties

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

• **dispose**: *function*

Вызывается, когда экземпляр сервиса подготавливается к удалению.

#### Type declaration:

▸ (): *void*
