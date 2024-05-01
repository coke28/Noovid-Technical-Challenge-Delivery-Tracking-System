<?php

use App\Http\Controllers\CourierController;
use App\Http\Controllers\DeliveryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\CrmLogController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
| - Dex
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'courier'], function () {
    Route::post('add', [CourierController::class, 'courierAdd'])->name('courier.add');
    Route::get('courierTB', [CourierController::class, 'courierTB'])->name('courier.tb');
    Route::get('get/{courier}', [CourierController::class, 'courierGet'])->name('courier.get');
    Route::post('edit/{courier}', [CourierController::class, 'courierEdit'])->name('courier.edit');
    Route::post('delete/{courier}', [CourierController::class, 'courierDelete'])->name('courier.delete');
});

Route::group(['prefix' => 'delivery'], function () {
    Route::post('add', [DeliveryController::class, 'deliveryAdd'])->name('delivery.add');
    Route::get('deliveryActiveTB', [DeliveryController::class, 'deliveryActiveTB'])->name('delivery.active.tb');
    Route::get('deliveryInactiveTB', [DeliveryController::class, 'deliveryInactiveTB'])->name('delivery.inactive.tb');
    Route::get('get/{delivery}', [DeliveryController::class, 'deliveryGet'])->name('delivery.get');
    Route::post('edit/{delivery}', [DeliveryController::class, 'deliveryEdit'])->name('delivery.edit');
    Route::post('delete/{delivery}', [DeliveryController::class, 'deliveryDelete'])->name('delivery.delete');
});
Route::group(['prefix' => 'crmLog'], function () {
    Route::get('table', [CrmLogController::class, 'crmLogTB'])->name('crmLog.table');
    Route::post('delete/{crmLog}', [CrmLogController::class, 'crmLogDelete'])->name('crmLog.delete');
});
