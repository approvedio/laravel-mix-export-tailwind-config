# Laravel Mix - Export Tailwind Config

Mix plugin to export the tailwind.js config file as a JSON file that can be used in conjunction with [Laravel Tailwind Config](https://github.com/approvedio/laravel-tailwind-config) 

## Usage
```bash
npm i laravel-mix-export-tailwind-config
```

Update webpack.mix.js to require and use plugin

```js
require('laravel-mix-export-tailwind-config');

mix.exportTailwindConfig();
```

