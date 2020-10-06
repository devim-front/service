[@devim-front/service](../README.md) › [DisposeNotAllowedError](disposenotallowederror.md)

# Class: DisposeNotAllowedError

Возникает, когда в коде происходит попытка прямого вызова метода dispose у
экземпляра сервиса-синглтона.

## Hierarchy

* NotSupportedError

  ↳ **DisposeNotAllowedError**

## Index

### Constructors

* [constructor](disposenotallowederror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new DisposeNotAllowedError**(`type`: Function): *[DisposeNotAllowedError](disposenotallowederror.md)*

*Overrides void*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | Function | Класс сервиса, сгенерировавший исключение.  |

**Returns:** *[DisposeNotAllowedError](disposenotallowederror.md)*
