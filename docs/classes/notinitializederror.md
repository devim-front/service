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

\+ **new NotInitializedError**(`name`: string): *[NotInitializedError](notinitializederror.md)*

*Overrides [ServiceError](serviceerror.md).[constructor](serviceerror.md#markdown-header-constructor)*

Создает экземпляр ошибки для сервиса с указанным именем.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[NotInitializedError](notinitializederror.md)*
