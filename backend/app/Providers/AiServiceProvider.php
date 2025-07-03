<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(\App\Services\Ai\OpenAiService::class, function ($app) {
            return new \App\Services\Ai\OpenAiService();
        });
        $this->app->singleton(\App\Services\Ai\ClarifaiService::class, function ($app) {
            return new \App\Services\Ai\ClarifaiService();
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
