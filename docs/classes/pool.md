[@devim-front/service](../README.md) › [Pool](pool.md)

# Class: Pool

Пул ленивых сервисов.

## Hierarchy

* **Pool**

## Index

### Accessors

* [[DEFAULT]](pool.md#markdown-header-static-[default])

### Methods

* [dispose](pool.md#markdown-header-dispose)

## Accessors

### <a id="markdown-header-static-[default]" name="markdown-header-static-[default]"></a> `Static` [DEFAULT]

• **get [DEFAULT]**(): *[Pool](pool.md)‹›*

Пул сервисов, используемых по умолчанию.

**Returns:** *[Pool](pool.md)‹›*

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

Освобождает ресурсы, занятые всеми экземплярами сервисов из этого пула,
подготавливая их к удалению.

**Returns:** *void*
