[@devim-front/service](../README.md) › [Service](service.md)

# Class: Service

Базовый класс сервиса.

## Hierarchy

* **Service**

  ↳ [LazyService](lazyservice.md)

  ↳ [StrictService](strictservice.md)

## Index

### Constructors

* [constructor](service.md#markdown-header-constructor)

### Properties

* [instance](service.md#markdown-header-static-protected-instance)

### Accessors

* [isExists](service.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](service.md#markdown-header-protected-dispose)
* [delete](service.md#markdown-header-static-delete)
* [get](service.md#markdown-header-static-get)
* [init](service.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new Service**(...`_args`: any[]): *[Service](service.md)*

Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
статического метода get, вызов конструктора напрямую приводит к ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`..._args` | any[] | Аргументы, полученные из метода create.  |

**Returns:** *[Service](service.md)*

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

### <a id="markdown-header-protected-dispose" name="markdown-header-protected-dispose"></a> `Protected` dispose

▸ **dispose**(): *void*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению.

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

▪ **T**: *typeof Service*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

___

### <a id="markdown-header-static-init" name="markdown-header-static-init"></a> `Static` init

▸ **init**<**T**>(...`args`: ConstructorParameters‹T›): *void*

Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
переданы в конструктор класса. Повторный вызов init уничтожит предыдущий
экземпляр вызовов delete и создаст новый.

**Type parameters:**

▪ **T**: *typeof Service*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | ConstructorParameters‹T› | Аргументы.  |

**Returns:** *void*
