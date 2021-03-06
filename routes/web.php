<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
})->name('home');


Route::get('/registration', function () {
    return view('registration');
})->name('registration');

Route::get('/basket', function () {
    return view('basket');
})->name('basket');

Route::get('/search', function () {
    return view('search');
})->name('search');