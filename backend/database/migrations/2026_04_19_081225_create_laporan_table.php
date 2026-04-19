<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('laporan', function (Blueprint $table) {
            $table->id();
            $table->string('nomor_resi')->unique();
            $table->enum('kategori', [
                'kinerja_dosen',
                'kebijakan_kampus',
                'kerusakan_fasilitas',
                'aspirasi_ormawa',
                'pengajuan_seminar'
            ]);
            $table->string('judul');
            $table->text('isi');
            $table->boolean('anonim')->default(false);
            $table->string('nama_pelapor')->nullable();
            $table->string('email_pelapor')->nullable();  
            $table->enum('status', [
                'Menunggu',
                'Diterima',
                'Diproses',
                'Selesai'
            ])->default('Menunggu');
            $table->text('catatan_admin')->nullable();    // Feedback ke mahasiswa
            $table->timestamp('feedback_at')->nullable(); // Kapan feedback dikirim
            $table->boolean('is_read')->default(false);   // Notif laporan baru
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('laporan');
    }
};