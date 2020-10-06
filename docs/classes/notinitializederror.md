[@devim-front/service](../README.md) › [NotInitializedError](notinitializederror.md)

# Class: NotInitializedError

Возникает, когда происходит попытка получить экземпляр строгого сервиса
перед тем, как он был инициализирован.

## Hierarchy

  ↳ [ServiceError](serviceerror.md)

  ↳ **NotInitializedError**

## Index

### Constructors

* [constructor](notinitializederror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new NotInitializedError**(`type`: Function): *[NotInitializedError](notinitializederror.md)*

*Overrides [ServiceError](serviceerror.md).[constructor](serviceerror.md#markdown-header-constructor)*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | Function | Класс сервиса, сгенерировавшего исключение.  |

**Returns:** *[NotInitializedError](notinitializederror.md)*
