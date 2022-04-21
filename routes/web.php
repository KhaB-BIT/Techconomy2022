<?php

use App\Http\Controllers\AddPostPageController;
use App\Http\Controllers\User\HomePageController;
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
    return view('login');
});
Route::get('/trang-chu',[HomePageController::class, 'index']);
Route::get('/dang-bai',[AddPostPageController::class, 'index']);