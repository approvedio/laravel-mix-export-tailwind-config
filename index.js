let mix = require('laravel-mix');

class ExportTailwindConfig {
    dependencies() {
        this.requiresReload = true;

        return ['write-webpack-plugin']
    }

    register(configPath = './tailwind.js', outputPath = '../tailwind.json') {
        this.configPath = configPath;
        this.outputPath = outputPath;
    }

    webpackPlugins() {
        const WriteWebpackPlugin = require('write-webpack-plugin');

        let config = require(__dirname + '/../../' + this.configPath);
        let json = JSON.stringify(config, null, 2);

        return new WriteWebpackPlugin([
            {'name': this.outputPath,  data: Buffer.from(json)}
        ]);
    }
}

mix.extend('exportTailwindConfig', new ExportTailwindConfig());