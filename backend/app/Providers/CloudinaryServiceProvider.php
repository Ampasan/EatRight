<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class CloudinaryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(\App\Services\CloudinaryService::class, function ($app) {
            return new \App\Services\CloudinaryService();
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
