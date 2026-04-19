<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\AdminController;

// ===== PUBLIC ROUTES =====
Route::post('/laporan', [LaporanController::class, 'store']);
Route::get('/laporan/{resi}', [LaporanController::class, 'cekStatus']);

// ===== ADMIN AUTH =====
Route::post('/admin/login', [AdminController::class, 'login']);

// ===== ADMIN PROTECTED ROUTES (butuh token) =====
Route::middleware('auth:sanctum')->prefix('admin')->group(function () {
    Route::post('/logout', [AdminController::class, 'logout']);
    Route::get('/laporan', [LaporanController::class, 'index']);
    Route::patch('/laporan/{id}', [LaporanController::class, 'update']);
    Route::get('/notif', [LaporanController::class, 'notifikasi']);

    Route::get('/export/excel', [LaporanController::class, 'exportExcel']);
    Route::get('/export/pdf', [LaporanController::class, 'exportPdf']);
});