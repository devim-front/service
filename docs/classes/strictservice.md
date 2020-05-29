[@devim-front/service](../README.md) › [StrictService](strictservice.md)

# Class: StrictService

Представляет строгий сервис. Строгий сервис, в отличии от ленивого, требует
обязательной инициализации перед попыткой к нему обратиться.

## Hierarchy

* [Service](service.md)

  ↳ **StrictService**

## Index

### Constructors

* [constructor](strictservice.md#markdown-header-constructor)

### Properties

* [instance](strictservice.md#markdown-header-static-protected-instance)

### Accessors

* [isExists](strictservice.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](strictservice.md#markdown-header-protected-dispose)
* [delete](strictservice.md#markdown-header-static-delete)
* [get](strictservice.md#markdown-header-static-get)
* [init](strictservice.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new StrictService**(...`args`: any[]): *[StrictService](strictservice.md)*

*Overrides [Service](service.md).[constructor](service.md#markdown-header-constructor)*

Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
статического метода get, вызов конструктора напрямую приводит к ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] | Аргументы, полученные из метода init.  |

**Returns:** *[StrictService](strictservice.md)*

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

Возвращает экземпляр сервиса. Если сервис ещё не был инициализирован
методом init, вызов get приведёт к ошибке.

**Type parameters:**

▪ **T**: *typeof Service*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

___

### <a id="markdown-header-static-init" name="markdown-header-static-init"></a> `Static` init

▸ **init**<**T**>(...`args`: ConstructorParameters‹T›): *void*

*Overrides [Service](service.md).[init](service.md#markdown-header-static-init)*

Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
переданы в конструктор класса. Если вызвать метод инициализации повторно с
теми же аргументами, то новый экземпляр создан не будет. Если же при
повторном вызове метода аргументы изменятся, то предыдущий экземпляр
сервиса будет уничтожен через метод delete и создан новый. Чтобы
пересоздать сервис с теми же аргументами, используйте метод delete, а
уж затем init.

**Type parameters:**

▪ **T**: *typeof StrictService*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | ConstructorParameters‹T› | Аргументы, которые будут переданы в конструктор.  |

**Returns:** *void*
