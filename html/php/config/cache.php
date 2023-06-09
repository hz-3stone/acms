<?php

return [
    'type' => [
        // テンプレートのキャッシュをするドライバーを選択します
        'template' => [
            'driver' => env('CACHE_TEMPLATE_DRIVER', 'apcu|file'),
            'namespace' => env('CACHE_TEMPLATE_NAMESPACE', 'template'),
            'lifetime' => env('CACHE_TEMPLATE_LIFETIME', 60 * 60 * 24),
        ],

        // フィールド情報のキャッシュをするドライバーを選択します
        'field' => [
            'driver' => env('CACHE_FIELD_DRIVER', 'apcu|php'),
            'namespace' => env('CACHE_FIELD_NAMESPACE', 'field'),
            'lifetime' => env('CACHE_FIELD_LIFETIME', 60 * 60 * 24),
        ],

        // 一時キャッシュで利用するドライバーを選択します
        'temp' => [
            'driver' => env('CACHE_TEMP_DRIVER', 'apcu'),
            'namespace' => env('CACHE_TEMP_NAMESPACE', 'temp'),
            'lifetime' => env('CACHE_TEMP_LIFETIME', 60 * 60 * 3),
        ],

        // コンフィグのキャッシュをするドライバーを選択します
        'config' => [
            'driver' => env('CACHE_CONFIG_DRIVER', 'file'),
            'namespace' => env('CACHE_CONFIG_NAMESPACE', 'config'),
            'lifetime' => env('CACHE_CONFIG_LIFETIME', 60 * 60 * 24),
        ],

        // ページキャッシュをするドライバーを選択します
        'page' => [
            'driver' => env('CACHE_PAGE_DRIVER', 'file'),
            'namespace' => env('CACHE_PAGE_NAMESPACE', 'page'),
        ],
    ],

    'drivers' => [
        'apcu' => [
            'driver' => 'apcu',
        ],
        'php' => [
            'driver' => 'php',
        ],
        'file' => [
            'driver' => 'file',
        ],
        'redis' => [
            'driver' => 'redis',
            'connection' => [
                'host' => env('CACHE_REDIS_HOST', '127.0.0.1'),
                'password' => env('CACHE_REDIS_PASSWORD', null),
                'port' => env('CACHE_REDIS_PORT', 6379),
                'db' => env('CACHE_REDIS_DB', 0),
            ]
        ],
    ]
];
