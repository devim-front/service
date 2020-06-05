[@devim-front/service](../README.md) › [LazyService](lazyservice.md)

# Class: LazyService <**E**>

Представляет "ленивый" единичный сервис. Ленивый сервис не требует
инициализации. Непосредственно экземпляр сервиса создаётся во время первого
обращения к нему через метод get. Соответственно, конструктор ленивого
сервиса не должен иметь параметров.

## Type parameters

▪ **E**: *[Events](../README.md#markdown-header-events)*

Коллекция событий ленивого сервиса. Пользовательскую коллекцию
событий следует наследовать от интерфейса LazyServiceEvents.

## Hierarchy

  ↳ [SingleService](singleservice.md)‹E›

  ↳ **LazyService**

## Index

### Constructors

* [constructor](lazyservice.md#markdown-header-constructor)

### Properties

* [instance](lazyservice.md#markdown-header-static-protected-instance)

### Accessors

* [isExists](lazyservice.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](lazyservice.md#markdown-header-dispose)
* [emit](lazyservice.md#markdown-header-protected-emit)
* [off](lazyservice.md#markdown-header-off)
* [on](lazyservice.md#markdown-header-on)
* [create](lazyservice.md#markdown-header-static-protected-create)
* [delete](lazyservice.md#markdown-header-static-delete)
* [get](lazyservice.md#markdown-header-static-get)
* [init](lazyservice.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new LazyService**(...`_args`: any[]): *[LazyService](lazyservice.md)*

*Inherited from [SingleService](singleservice.md).[constructor](singleservice.md#markdown-header-constructor)*

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

*Inherited from [SingleService](singleservice.md).[instance](singleservice.md#markdown-header-static-protected-instance)*

Экземпляр сервиса.

## Accessors

### <a id="markdown-header-static-protected-isexists" name="markdown-header-static-protected-isexists"></a> `Static` `Protected` isExists

• **get isExists**(): *boolean*

*Inherited from [SingleService](singleservice.md).[isExists](singleservice.md#markdown-header-static-protected-isexists)*

Указывает, что экземпляр данного класса уже был создан.

**Returns:** *boolean*

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

*Inherited from [SingleService](singleservice.md).[dispose](singleservice.md#markdown-header-dispose)*

*Overrides [Service](service.md).[dispose](service.md#markdown-header-dispose)*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению. Для строго или ленивого сервиса прямой вызов этого метода
запрещён и приведет к ошибке, поскольку это может создать неоднозначность
в коде. Используйте вместо него статический метод delete.

**Returns:** *void*

___

### <a id="markdown-header-protected-emit" name="markdown-header-protected-emit"></a> `Protected` emit

▸ **emit**<**T**>(`event`: T, ...`args`: Parameters‹E[T]›): *void*

*Inherited from [Service](service.md).[emit](service.md#markdown-header-protected-emit)*

Вызывает указанное событие, передавая аргументы в его обработчики.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`...args` | Parameters‹E[T]› | Аргументы, передаваемые в обработчики.  |

**Returns:** *void*

___

### <a id="markdown-header-off" name="markdown-header-off"></a>  off

▸ **off**<**T**>(`event`: T, `handler`: E[T]): *void*

*Inherited from [Service](service.md).[off](service.md#markdown-header-off)*

Удаляет указанный обработчик события.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*

___

### <a id="markdown-header-on" name="markdown-header-on"></a>  on

▸ **on**<**T**>(`event`: T, `handler`: E[T]): *void*

*Inherited from [Service](service.md).[on](service.md#markdown-header-on)*

Добавляет обработчик указанному событию.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*

___

### <a id="markdown-header-static-protected-create" name="markdown-header-static-protected-create"></a> `Static` `Protected` create

▸ **create**<**T**>(...`args`: ConstructorParameters‹T›): *void*

*Inherited from [SingleService](singleservice.md).[create](singleservice.md#markdown-header-static-protected-create)*

Создает экземпляр сервиса и сохраняет его. Для создания экземпляра класса
следует использовать именно его; вызов оператора new приводит к ошибке.

**Type parameters:**

▪ **T**: *typeof SingleService*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | ConstructorParameters‹T› | Аргументы конструктора.  |

**Returns:** *void*

___

### <a id="markdown-header-static-delete" name="markdown-header-static-delete"></a> `Static` delete

▸ **delete**(): *void*

*Inherited from [SingleService](singleservice.md).[delete](singleservice.md#markdown-header-static-delete)*

Удаляет существующий экземпляр сервиса, освобождая все занятые им ресурсы.

**Returns:** *void*

___

### <a id="markdown-header-static-get" name="markdown-header-static-get"></a> `Static` get

▸ **get**<**T**>(`this`: T)

*Overrides [SingleService](singleservice.md).[get](singleservice.md#markdown-header-static-get)*

Возвращает экземпляр сервиса. Если экземпляр сервиса ещё не был создан,
создаёт его.

**Type parameters:**

▪ **T**: *typeof SingleService*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

___

### <a id="markdown-header-static-init" name="markdown-header-static-init"></a> `Static` init

▸ **init**(): *void*

*Overrides [SingleService](singleservice.md).[init](singleservice.md#markdown-header-static-init)*

Инициализирует экземпляр сервиса. В случае с ленивым сервисом, метод
просто создаёт экземпляр класса, если тот не был создан ранее. Повторные
вызовы init его не пересоздают. Чтобы пересоздать экземпляр принудительно,
используйте метод delete, а затем init.

**Returns:** *void*
