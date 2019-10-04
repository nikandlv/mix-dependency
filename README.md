## Mix Dependency

Dynamically install npm packages in laravel applications if not installed

## Install
```console
nikandlv@nikandlv.ir:~$ npm i -D mix-dependency
```

## Usage

```javascript

const mixDependency = require('mix-dependency');

// Require one package
mixDependency.require('awesome-npm-package');

// Require Multiple packages
mixDependency.requireAll(['awesome-npm-package', 'react']);


```
