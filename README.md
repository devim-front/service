# Devim Front: Service

Содержит реализацию шаблона проектирования "сервис" и его вариации.

## Установка

Подключите этот пакет в зависимости:

```bash
npm i -S @devim-front/service
```

## Общие концепции

Перед тем, как описывать API библиотеки, следует сказать пару слов о сервисах и условиях их применений.

### Сервис

Сервис - это класс, содержащий методы для работы с какой-либо логической сущностью, способный иметь промежуточное состояние.

Что такое сервис, проще всего объяснить, сравнивая его с [хэлпером](https://github.com/devim-front/helper). Напомним, хэлпер - это статический класс, содержащий функционально чистые методы, предназначенные для работы с какой-либо одной логической сущностью (дата, денежная сумма, телефон и тому подобное). Но, если вдруг потребуется сохранить внутри класса некое промежуточное состояние (например, объявить статическое свойство), использовать хэлпер для этой цели уже нельзя, поскольку тогда методы потеряют функциональную чистоту. В этом случае вместо хэлпера стоит использовать сервис.

Поскольку сервис хранит своё промежуточное состояние - раз, - и, два, зависит от других сервисов, простое удаление экземпляра его класса чревато побочными эффектами и утечками памяти. Чтобы решить эту проблему, у каждого сервиса есть метод [dispose](https://github.com/devim-front/service/blob/master/docs/classes/service.md#markdown-header-dispose), который следует вызвать перед уничтожением экземпляра. При написании собственного сервиса в этом методе следует освободить все ресурсы занятые ресурсы, отписаться ото всех событий и вызвать методы `dispose` у всех вложенных экземпляров, если такие есть.

Чтобы один сервис мог реагировать на изменение состояния другого сервиса, используется механизм событий. У каждого экземпляра есть методы [on](https://github.com/devim-front/service/blob/master/docs/classes/service.md#--on), [off](https://github.com/devim-front/service/blob/master/docs/classes/service.md#--off) и [emit](https://github.com/devim-front/service/blob/master/docs/classes/service.md#-protected-emit), полностью аналогичные соответствующим методам класса [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) из API NodeJS. По умолчанию сервис умеет генерировать лишь событие `dispose`, уведомляющее, что экземпляр сервиса готовится к удалению. Сам же метод `dispose` удаляет все подписавшиеся на экземпляр обработчики, поэтому не нужно каждый раз делать этого вручную.

Глобально сервисы делятся на два типа: _свободные_ и _одиночные_.

Базовый класс сервиса из библиотеки описан здесь: [Service](https://github.com/devim-front/service/blob/master/docs/classes/service.md).

### Свободный сервис

Свободный сервис - это обычный сервис. Он никак не контролирует количество своих экземпляров и не добавляет ничего к описанным выше механикам. В библиотеке он представлен классом [FreeService](https://github.com/devim-front/service/blob/master/docs/classes/freeservice.md).

### Единичный сервис

Единичный сервис - это сервис, у которого может быть не более одного экземпляра. Архитектурно это реализуется с помощью паттерна "синглтон". В проектах чаще всего встречается именно этот тип сервисов, поскольку на front-end почти все логические сущности существует лишь в единственном числе.

Единичный сервис требует инициализации, то есть создания экземпляра класса. Инициализация производится с помощью статического метода [init](https://github.com/devim-front/service/blob/master/docs/classes/singleservice.md#-static-init), который пробрасывает переданные аргументы в конструктор класса. Явный вызов конструктора единичного сервиса запрещён и приводит к ошибке.

Также единичный сервис позволяет удалить свой экземпляр с помощью статического метода [delete](https://github.com/devim-front/service/blob/master/docs/classes/singleservice.md#-static-delete). Это приведет к тому, что у экземпляра сервиса будет вызван метод `dispose`, а затем он будет удалён. Чтобы избежать неоднозначности в коде, вызов метода `dispose` вручную запрещён и приведет к ошибке.

Получить экземпляр единичного сервиса можно статическим методом [get](https://github.com/devim-front/service/blob/master/docs/classes/singleservice.md#-static-get). Возникает вопрос, что произойдет, если вызвать метод до того, как экземпляр синглтона будет создан? По поведению в этой ситуации единичные сервисы разделяются ещё на две группы: _строгие_ и _ленивые_.

В библиотеке единичный сервис представлен классом [SingleService](https://github.com/devim-front/service/blob/master/docs/classes/singleservice.md).

#### Строгий сервис

Строгий - это единичный сервис, требующий обязательной инициализации до его использования. Если вызвать метод `get` до метода `init`, произойдет ошибка. Такие сервисы предпочтительно инициализировать при запуске приложения.

В библиотеке этот тип сервиса представлен классом [StrictService](https://github.com/devim-front/service/blob/master/docs/classes/strictservice.md).

#### Ленивый сервис

Ленивый - это единичный сервис, чья инициализация происходит перед попыткой обратиться к его экземпляру. Если вызвать метод `get` до `init`, экземпляр класса будет создан и возвращён. Таким образом, метод `init` у ленивого сервиса бесполезен и не используется вовсе. Также следует помнить, что в конструкторе у ленивого сервиса не может быть аргументов, так как при их наличии невозможно свободно создавать экземпляры класса "на лету".

В библиотеке ленивый сервис представлен классом [LazyService](https://github.com/devim-front/service/blob/master/docs/classes/lazyservice.md).

## API

Документация находится [в этом разделе](https://github.com/devim-front/service/tree/master/docs).

## Пример

Чтобы разобраться, как проектировать собственные сервисы на основе классов из этой библиотеки, сделаем один ради примера. Допустим, нам нужно получить возможность реагировать на любое необработанное исключение, возникшее в приложении (без разницы, возникло ли оно при запуске в браузере или на NodeJS). Таким образом, наш сервис должен определять, в какой среде запустился, в зависимости от этого добавлять свой обработчик для необработанных исключений и генерировать собственное событие, когда они возникают.

Так как источник необработанных исключений у нас только один - среда выполнения, - резонно использовать для реализации одиночный сервис. Далее, так как наш сервис умеет только генерировать события, какой-либо специфической инициализации ему не требуется. Поэтому наш сервис будет ленивым.

```typescript
// ErrorService.ts
import { LazyService } from '@devim-front/service';

export class ErrorService extends LazyService {}
```

Добавляем в сервис обработчики исключений для браузера и для NodeJS (код перехвата необработанных исключений в браузере сокращен для упрощения; реальный код должен использовать более сложный полифилл):

```typescript
// ErrorService.ts
import { LazyService } from '@devim-front/service';

export class ErrorService extends LazyService {
  private nativeOnError: Function;

  private handleError = (error: Error) => {};

  public constructor() {
    super();

    if (typeof window === 'undefined') {
      process.on('uncaughtException', this.handleError);
      return this;
    }

    this.nativeOnError = window.onerror;
    const self = this;

    window.onerror = function (
      message: string,
      url: string,
      line: number,
      column: number,
      error?: Error
    ) {
      if (error != null) {
        self.handleError(error);
      }

      return self.nativeOnError.apply(this, arguments);
    };
  }
}
```

Далее, если сервис будет удалён, следует вернуть среду выполнения к первоначальному стоянию:

```typescript
// ErrorService.ts
import { LazyService } from '@devim-front/service';

export class ErrorService extends LazyService {
  private nativeOnError: Function;

  private handleError = (error: Error) => {};

  public constructor() {
    super();

    if (typeof window === 'undefined') {
      process.on('uncaughtException', this.handleError);
      return this;
    }

    this.nativeOnError = window.onerror;
    const self = this;

    window.onerror = function (
      message: string,
      url: string,
      line: number,
      column: number,
      error?: Error
    ) {
      if (error != null) {
        self.handleError(error);
      }

      return nativeOnError.apply(this, arguments);
    };
  }

  public dispose() {
    super.dispose();

    if (typeof window === 'undefined') {
      process.off('uncaughtException', this.handleError);
      return;
    }

    window.onerror = this.nativeOnError;
  }
}
```

На данном этапе наш сервис только прослушивает события среды, но не генерирует собственных. Исправим это:

```typescript
// ErrorService.ts
import { LazyService, LazyServiceEvents } from '@devim-front/service';

interface Events extends LazyServiceEvents {
  error: (error: Error) => void;
}

export class ErrorService extends LazyService<Events> {
  private nativeOnError: Function;

  private handleError = (error: Error) => {
    this.emit('error', error);
  };

  public constructor() {
    super();

    if (typeof window === 'undefined') {
      process.on('uncaughtException', this.handleError);
      return this;
    }

    this.nativeOnError = window.onerror;
    const self = this;

    window.onerror = function (
      message: string,
      url: string,
      line: number,
      column: number,
      error?: Error
    ) {
      if (error != null) {
        self.handleError(error);
      }

      return nativeOnError.apply(this, arguments);
    };
  }

  public dispose() {
    super.dispose();

    if (typeof window === 'undefined') {
      process.off('uncaughtException', this.handleError);
      return;
    }

    window.onerror = this.nativeOnError;
  }
}
```

Следует заметить, что мы унаследовали коллекцию собственных событий от стандартной: у базового класса есть собственное событие `dispose`, терять которое не следует.

Теперь мы можем использовать сервис:

```typescript
// ErrorService.test.ts
import { ErrorService } from './ErrorService';

ErrorService.get().on('error', (error: Error) => {
  console.log(error);
});
```
