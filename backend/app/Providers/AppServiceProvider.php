<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Tidak ada binding service karena HelperService tidak ditemukan di project
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
