## Mix Dependency

Dynamically install npm packages in laravel applications if not installed

## Usage

```javascript

const mixDependency = require('mix-dependency');

// Require one package
mixDependency.require('awesome-npm-package');

// Require Multiple packages
mixDependency.requireAll(['awesome-npm-package', 'react']);


```
