# Laravel Mix - Export Tailwind Config

Mix plugin to export the tailwind.js config file as a JSON file that can be used in conjunction with [Laravel Tailwind Config](https://github.com/approvedio/laravel-tailwind-config) 

## Usage
```bash
npm install laravel-mix-tailwind-export-config --save-dev
```

Update webpack.mix.js to require and use plugin

```js
require('laravel-mix-tailwind-export-config');

mix.exportTailwindConfig();
```

