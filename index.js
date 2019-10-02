const Dependencies = require('laravel-mix/src/Dependencies');

module.exports = {
    require(module) {
        new Dependencies(module).install()
    }
}
