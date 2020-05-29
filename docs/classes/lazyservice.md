[@devim-front/service](../README.md) › [LazyService](lazyservice.md)

# Class: LazyService

Представляет "ленивый" сервис. Ленивый сервис не требует инициализации.
Непосредственно экземпляр сервиса создаётся во время первого обращения к
нему через метод get. Соответственно, конструктор ленивого сервиса не
должен иметь параметров.

## Hierarchy

* [Service](service.md)

  ↳ **LazyService**

## Index

### Constructors

* [constructor](lazyservice.md#markdown-header-constructor)

### Properties

* [instance](lazyservice.md#markdown-header-static-protected-instance)

### Accessors

* [isExists](lazyservice.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](lazyservice.md#markdown-header-protected-dispose)
* [delete](lazyservice.md#markdown-header-static-delete)
* [get](lazyservice.md#markdown-header-static-get)
* [init](lazyservice.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new LazyService**(...`_args`: any[]): *[LazyService](lazyservice.md)*

*Inherited from [Service](service.md).[constructor](service.md#markdown-header-constructor)*

Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
статического метода get, вызов конструктора напрямую приводит к ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`..._args` | any[] | Аргументы, полученные из метода create.  |

**Returns:** *[LazyService](lazyservice.md)*

## Properties

### <a id="markdown-header-static-protected-instance" name="markdown-header-static-protected-instance"></a> `Static` `Protected` instance

▪ **instance**: *any*

*Inherited from [Service](service.md).[instance](service.md#markdown-header-static-protected-instance)*

Экземпляр сервиса.

## Accessors

### <a id="markdown-header-static-protected-isexists" name="markdown-header-static-protected-isexists"></a> `Static` `Protected` isExists

• **get isExists**(): *boolean*

*Inherited from [Service](service.md).[isExists](service.md#markdown-header-static-protected-isexists)*

Указывает, что экземпляр данного класса уже был создан.

**Returns:** *boolean*

## Methods

### <a id="markdown-header-protected-dispose" name="markdown-header-protected-dispose"></a> `Protected` dispose

▸ **dispose**(): *void*

*Inherited from [Service](service.md).[dispose](service.md#markdown-header-protected-dispose)*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению.

**Returns:** *void*

___

### <a id="markdown-header-static-delete" name="markdown-header-static-delete"></a> `Static` delete

▸ **delete**(): *void*

*Inherited from [Service](service.md).[delete](service.md#markdown-header-static-delete)*

Удаляет существующий экземпляр сервиса, освобождая все занятые им ресурсы.

**Returns:** *void*

___

### <a id="markdown-header-static-get" name="markdown-header-static-get"></a> `Static` get

▸ **get**<**T**>(`this`: T)

*Overrides [Service](service.md).[get](service.md#markdown-header-static-get)*

Возвращает экземпляр сервиса. Если экземпляр сервиса ещё не был создан,
создаёт его.

**Type parameters:**

▪ **T**: *typeof LazyService*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

___

### <a id="markdown-header-static-init" name="markdown-header-static-init"></a> `Static` init

▸ **init**(): *void*

*Overrides [Service](service.md).[init](service.md#markdown-header-static-init)*

Инициализирует экземпляр сервиса. В случае с ленивым сервисом, метод
просто создаёт экземпляр класса, если тот не был создан ранее. Повторные
вызовы init его не пересоздают. Чтобы пересоздать экземпляр принудительно,
используйте метод delete, а затем init.

**Returns:** *void*
