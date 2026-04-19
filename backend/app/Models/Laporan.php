<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    protected $table = 'laporan';

    protected $fillable = [
        'nomor_resi',
        'kategori',
        'judul',
        'isi',
        'anonim',
        'nama_pelapor',
        'email_pelapor',
        'status',
        'catatan_admin',
        'feedback_at',
        'is_read',
    ];

    protected $casts = [
        'anonim' => 'boolean',
        'is_read' => 'boolean',
        'feedback_at' => 'datetime',
    ];
}