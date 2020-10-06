[@devim-front/service](../README.md) › [UndefinedInstanceError](undefinedinstanceerror.md)

# Class: UndefinedInstanceError

Возникает, когда в базовом классе Service происходит попытка получить
экземпляр сервиса до его создания. Классы-наследники решают эту проблему
по-разному: ленивый сервис создает новый экземпляр перед тем, как его
вернуть; строгий сервис выбрасывает более специфическое исключение.
Если вы наследуете свои классы от Service напрямую, вы должны решить эту
проблему самостоятельно.

## Hierarchy

* NotImplementedError

  ↳ **UndefinedInstanceError**

## Index

### Constructors

* [constructor](undefinedinstanceerror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new UndefinedInstanceError**(`type`: Function): *[UndefinedInstanceError](undefinedinstanceerror.md)*

*Overrides void*

Создает экземпляр ошибки.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | Function | Класс сервиса, который сгенерировал исключение.  |

**Returns:** *[UndefinedInstanceError](undefinedinstanceerror.md)*
