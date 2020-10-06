[@devim-front/service](../README.md) › [NewNotAllowedError](newnotallowederror.md)

# Class: NewNotAllowedError

Возникает, когда в коде происходит создание экземпляра сервиса через
оператор 'new'.

## Hierarchy

* NotSupportedError

  ↳ **NewNotAllowedError**

## Index

### Constructors

* [constructor](newnotallowederror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new NewNotAllowedError**(`type`: Function): *[NewNotAllowedError](newnotallowederror.md)*

*Overrides void*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | Function | Класс сервиса, сгенерировавшего исключение.  |

**Returns:** *[NewNotAllowedError](newnotallowederror.md)*
