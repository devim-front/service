[@devim-front/service](../README.md) › [UndefinedInstanceError](undefinedinstanceerror.md)

# Class: UndefinedInstanceError

Возникает, когда в базовом классе Service происходит попытка получить
экземпляр сервиса до его создания. Классы-наследники решают эту проблему
по-разному: ленивый сервис создает новый экземпляр перед тем, как его
вернуть; строгий сервис выбрасывает более специфическое исключение.
Если вы наследуете свои классы от Service напрямую, вы должны решить эту
проблему самостоятельно.

## Hierarchy

  ↳ [ServiceError](serviceerror.md)

  ↳ **UndefinedInstanceError**

## Index

### Constructors

* [constructor](undefinedinstanceerror.md#markdown-header-constructor)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new UndefinedInstanceError**(): *[UndefinedInstanceError](undefinedinstanceerror.md)*

*Overrides [ServiceError](serviceerror.md).[constructor](serviceerror.md#markdown-header-constructor)*

Создает экземпляр ошибки.

**Returns:** *[UndefinedInstanceError](undefinedinstanceerror.md)*
