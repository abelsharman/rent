const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .js('resources/js/index.js', 'public/js')
	 .js('resources/js/vuee.js', 'public/js')
    .sass('resources/sass/main.scss', 'public/css')
    .sass('resources/sass/index.scss', 'public/css')
    .sass('resources/sass/basket.scss', 'public/css')
    .sass('resources/sass/category.scss', 'public/css')
    .sass('resources/sass/registration.scss', 'public/css')
    .sass('resources/sass/search.scss', 'public/css')
    .webpackConfig({
       module: {
           rules: [
               // We're registering the TypeScript loader here. It should only
               // apply when we're dealing with a `.ts` or `.tsx` file.
               {
                   test: /\.tsx?$/,
                   loader: 'ts-loader',
                   options: { appendTsSuffixTo: [/\.vue$/] },
                   exclude: /node_modules/,
               },
           ],
       },

       resolve: {
           // We need to register the `.ts` extension so Webpack can resolve
           // TypeScript modules without explicitly providing an extension.
           // The other extensions in this list are identical to the Mix
           // defaults.
           extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
       },
   });

    


