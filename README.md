# fp-modules

`fp-modules` is a series of functional programming modules. It consists of two parts: `core` and `operators`.


## Install

```bash
$ yarn add fp-modules

# or

$ npm install fp-modules
```

## Usage

> We recommend using `typescript` to follow the proper usage.

### `operators`

`operators` has a variety of immutable functions. And you can pipe all operators with `pipe` function.

```javascript
import { pipe, sort, filter } from 'fp-modules/operators';

const employeeList = getAllEmployees();

// get alphabetically ordered senior employee list.
const seniorEmployeeList = pipe(
  employeeList,
  filter((emp) => emp.position.includes('senior')),
  sort((a, b) => a.name - b.name),
);

```
### `core`
`core` is a value wrapper. You can use it by wrapping the values by this module.

For example, You can use `Maybe` like below.

```javascript
import { Maybe } from 'fp-modules/core';

const user = getUser('kwoncharles');
const mUser = Maybe.of(user);
const username = mUser
  .map(user => user.name)
  .getOrElse('unnamed');

// If user doens't have name property, 'unnamed' will be logged
console.log('username: ', username);
```

You can create your own `core` by implements `Monad` or `Functor`.

### License

fp-modules is [MIT licensed](./LICENSE).
