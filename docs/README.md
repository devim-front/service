[@devim-front/service](README.md)

# @devim-front/service

## Index

### Classes

* [FreeService](classes/freeservice.md)
* [LazyService](classes/lazyservice.md)
* [Pool](classes/pool.md)
* [Provider](classes/provider.md)
* [Service](classes/service.md)

### Type aliases

* [Context](README.md#markdown-header-context)
* [Props](README.md#markdown-header-props)

### Variables

* [DEFAULT](README.md#markdown-header-const-default)
* [GET_SERVICE](README.md#markdown-header-const-get_service)
* [SET_SERVICE](README.md#markdown-header-const-set_service)
* [context](README.md#markdown-header-const-context)

### Functions

* [withProvider](README.md#markdown-header-const-withprovider)

## Type aliases

### <a id="markdown-header-context" name="markdown-header-context"></a>  Context

Ƭ **Context**: *object*

Тип контекста.

#### Type declaration:

* **pool**: *[Pool](classes/pool.md)*

___

### <a id="markdown-header-props" name="markdown-header-props"></a>  Props

Ƭ **Props**: *PropsWithChildren‹object›*

Свойства компонента.

## Variables

### <a id="markdown-header-const-default" name="markdown-header-const-default"></a> `Const` DEFAULT

• **DEFAULT**: *unique symbol* = Symbol('DEFAULT')

Свойство, содержащее экземпляр контекста по умолчанию.

___

### <a id="markdown-header-const-get_service" name="markdown-header-const-get_service"></a> `Const` GET_SERVICE

• **GET_SERVICE**: *unique symbol* = Symbol('GET_SERVICE')

Метод, возвращающий экземпляр сервиса.

___

### <a id="markdown-header-const-set_service" name="markdown-header-const-set_service"></a> `Const` SET_SERVICE

• **SET_SERVICE**: *unique symbol* = Symbol('SET_SERVICE')

Метод, задающий экземпляр сервиса.

___

### <a id="markdown-header-const-context" name="markdown-header-const-context"></a> `Const` context

• **context**: *Context‹object›* = createContext<Context>({
  pool: Pool[DEFAULT],
})

Контекст сервисов.

## Functions

### <a id="markdown-header-const-withprovider" name="markdown-header-const-withprovider"></a> `Const` withProvider

▸ **withProvider**(`pool?`: [Pool](classes/pool.md)): *(Anonymous function)*

Оборачивает переданный компонент в провайдер ленивых сервисов.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`pool?` | [Pool](classes/pool.md) | Пул сервисов, который будет использован в провайдере. Если не указан, то будет создан новый пул.  |

**Returns:** *(Anonymous function)*
