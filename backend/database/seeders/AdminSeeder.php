<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        Admin::create([
            'name'     => 'Admin BEM Fasilkom',
            'username' => 'admin_bem',
            'password' => 'admin1234',
        ]);
    }
}