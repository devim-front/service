[@devim-front/service](../README.md) › [ServiceError](serviceerror.md)

# Class: ServiceError

Возникает, когда произошла ошибка при использовании базовых механик сервиса.
Наследовать от этого класса собственные исключения не нужно.

## Hierarchy

* CustomError

  ↳ **ServiceError**

  ↳ [NotInitializedError](notinitializederror.md)

## Index

### Constructors

* [constructor](serviceerror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new ServiceError**(`message`: string): *[ServiceError](serviceerror.md)*

*Overrides void*

Создает экземпляр класса с указанным сообщением об ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | Сообщение об ошибке.  |

**Returns:** *[ServiceError](serviceerror.md)*
