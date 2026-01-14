<?php

use App\Http\Controllers\CommandeController;
use App\Http\Controllers\ProduitController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('produits', ProduitController::class);
Route::apiResource('commandes', CommandeController::class);
