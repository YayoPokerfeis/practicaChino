<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Login\LoginController;
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
    return redirect('/login');
});


Route::get('/login', function () {
    return view('login');
});
//aca es get y en el java script es post
Route::post('/loginData', [LoginController::class, 'loginData']);//ahi es el nombre del controlador y el metodo
    //ese ya no nos sirve ya lo tenemos en el controllador
    //en teoria ya tendria que estar funcionando

//pero bueno ya viste que ya entro ahora en este punto ya estamos en el back 
//ahora falta cachar esa informacion y guardarla en una variable.
//podemos hacerlo directo oooooooo como bien te enseñe por MVC (modelo vista controlador)
//la vista ya esta fue la de la pagina de internet, falta en controlador y el modelo igual ya esta .

//ahi ya se creo ese controlador como puedes ver junto con su carpeta login.