[@devim-front/service](../README.md) › [StrictService](strictservice.md)

# Class: StrictService

Представляет строгий единичный сервис. Строгий сервис, в отличии от ленивого,
требует обязательной инициализации перед попыткой к нему обратиться.

## Hierarchy

  ↳ [SingleService](singleservice.md)

  ↳ **StrictService**

## Index

### Constructors

* [constructor](strictservice.md#markdown-header-constructor)

### Properties

* [instance](strictservice.md#markdown-header-static-protected-instance)

### Accessors

* [isExists](strictservice.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](strictservice.md#markdown-header-dispose)
* [create](strictservice.md#markdown-header-static-protected-create)
* [delete](strictservice.md#markdown-header-static-delete)
* [get](strictservice.md#markdown-header-static-get)
* [init](strictservice.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new StrictService**(...`args`: any[]): *[StrictService](strictservice.md)*

*Overrides [SingleService](singleservice.md).[constructor](singleservice.md#markdown-header-constructor)*

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

Возвращает экземпляр сервиса. Если сервис ещё не был инициализирован
методом init, вызов get приведёт к ошибке.

**Type parameters:**

▪ **T**: *typeof SingleService*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

___

### <a id="markdown-header-static-init" name="markdown-header-static-init"></a> `Static` init

▸ **init**(...`args`: any[]): *void*

*Overrides [SingleService](singleservice.md).[init](singleservice.md#markdown-header-static-init)*

Инициализирует экземпляр сервиса. Аргументы, указанные при вызове, будут
переданы в конструктор класса. Если вызвать метод инициализации повторно с
теми же аргументами, то новый экземпляр создан не будет. Если же при
повторном вызове метода аргументы изменятся, то предыдущий экземпляр
сервиса будет уничтожен через метод delete и создан новый. Чтобы
пересоздать сервис с теми же аргументами, используйте метод delete, а
уж затем init.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any[] | Аргументы, которые будут переданы в конструктор.  |

**Returns:** *void*
