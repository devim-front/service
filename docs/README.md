[@devim-front/service](README.md)

# @devim-front/service

## Index

### Classes

* [DisposeNotAllowedError](classes/disposenotallowederror.md)
* [FreeService](classes/freeservice.md)
* [LazyService](classes/lazyservice.md)
* [NewNotAllowedError](classes/newnotallowederror.md)
* [NotInitializedError](classes/notinitializederror.md)
* [Service](classes/service.md)
* [ServiceError](classes/serviceerror.md)
* [SingleService](classes/singleservice.md)
* [StrictService](classes/strictservice.md)
* [UndefinedInstanceError](classes/undefinedinstanceerror.md)

### Interfaces

* [FreeServiceEvents](interfaces/freeserviceevents.md)
* [LazyServiceEvents](interfaces/lazyserviceevents.md)
* [ServiceEvents](interfaces/serviceevents.md)
* [SingleServiceEvents](interfaces/singleserviceevents.md)
* [StrictServiceEvents](interfaces/strictserviceevents.md)

### Type aliases

* [Events](README.md#markdown-header-events)

## Type aliases

### <a id="markdown-header-events" name="markdown-header-events"></a>  Events

Ƭ **Events**: *object*

Коллекция событий сервиса. Ключом служит тип события, значением -
сигнатура обработчика события.

#### Type declaration:

* \[ **key**: *string*\]: function

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |
