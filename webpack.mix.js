const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.browserSync('http://website-resmi-desa-jelutung.test/');

// Or:

// https://browsersync.io/docs/options/
mix.browserSync({
    proxy: 'http://website-resmi-desa-jelutung.test/',
    https: {
        cert: "./cert/localhost.crt",
        key: "./cert/localhost.decrypted.key"
    }
});

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
