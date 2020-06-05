[@devim-front/service](../README.md) › [SingleService](singleservice.md)

# Class: SingleService <**E**>

Представляет единичный сервис или сервис-синглтон. Данный тип сервиса
запрещает прямые вызовы метода dispose и создание экземпляров через
оператор new, предоставляя взамен специальные статические методы delete и
init.

## Type parameters

▪ **E**: *[Events](../README.md#markdown-header-events)*

Коллекция событий сервиса. Собственные коллекции следует
наследовать от интерфейса SingleServiceEvents.

## Hierarchy

* [Service](service.md)‹E›

  ↳ **SingleService**

  ↳ [LazyService](lazyservice.md)

  ↳ [StrictService](strictservice.md)

## Index

### Constructors

* [constructor](singleservice.md#markdown-header-constructor)

### Properties

* [instance](singleservice.md#markdown-header-static-protected-instance)

### Accessors

* [isExists](singleservice.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](singleservice.md#markdown-header-dispose)
* [emit](singleservice.md#markdown-header-protected-emit)
* [off](singleservice.md#markdown-header-off)
* [on](singleservice.md#markdown-header-on)
* [create](singleservice.md#markdown-header-static-protected-create)
* [delete](singleservice.md#markdown-header-static-delete)
* [get](singleservice.md#markdown-header-static-get)
* [init](singleservice.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new SingleService**(...`_args`: any[]): *[SingleService](singleservice.md)*

Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
статического метода get, вызов конструктора напрямую приводит к ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`..._args` | any[] | Аргументы, полученные из метода create.  |

**Returns:** *[SingleService](singleservice.md)*

## Properties

### <a id="markdown-header-static-protected-instance" name="markdown-header-static-protected-instance"></a> `Static` `Protected` instance

▪ **instance**: *any*

Экземпляр сервиса.

## Accessors

### <a id="markdown-header-static-protected-isexists" name="markdown-header-static-protected-isexists"></a> `Static` `Protected` isExists

• **get isExists**(): *boolean*

Указывает, что экземпляр данного класса уже был создан.

**Returns:** *boolean*

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

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

Удаляет существующий экземпляр сервиса, освобождая все занятые им ресурсы.

**Returns:** *void*

___

### <a id="markdown-header-static-get" name="markdown-header-static-get"></a> `Static` get

▸ **get**<**T**>(`this`: T)

Возвращает экземпляр сервиса. Если на момент вызова этого метода сервис
ещё не был инициализирован методом init (или уже удален через метод
delete), будет выброшено исключение.

**Type parameters:**

▪ **T**: *typeof SingleService*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

___

### <a id="markdown-header-static-init" name="markdown-header-static-init"></a> `Static` init

▸ **init**(...`args`: any[]): *void*

Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
переданы в конструктор класса. Повторный вызов init уничтожит предыдущий
экземпляр вызовов delete и создаст новый.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] | Аргументы.  |

**Returns:** *void*
