<?php


use App\Events\UpdateDeliveryStatus;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CrmLogController;
use App\Http\Controllers\UserLevelController;


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

Route::get('/', 'PageController@indexPage')->name('get.index');
Route::get('/login', 'PageController@loginPage')->name('get.login');
Route::post('/login', 'Auth\AuthenticatedSessionController@store')->name('post.login');

Route::middleware('auth')->group(function () {

  Route::group(['prefix' => 'courier'], function () {
    Route::get('/', [PageController::class, 'manageCourier'])->name('courier.index');
  });
  Route::group(['prefix' => 'courier'], function () {
    //Form Routes
    Route::get('/', [PageController::class, 'manageCourier'])->name('courier.index');
  });

  Route::group(['prefix' => 'crmLog'], function () {
    //Form Routes
    Route::get('/', [PageController::class, 'manageCrmLog'])->name('crmLog.index');
    Route::post('table', [CrmLogController::class, 'crmLogTB'])->name('crmLog.table');
    Route::post('delete/{crmLog}', [CrmLogController::class, 'crmLogDelete'])->name('crmLog.delete');
  });
  Route::post('/logout', 'Auth\AuthenticatedSessionController@destroy')->name('logout');
  Route::get('/dashboard', 'PageController@dashboardPage')->name('user.dash');
});
