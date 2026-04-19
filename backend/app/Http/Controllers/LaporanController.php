<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Exports\LaporanExport;
use Maatwebsite\Excel\Facades\Excel;
use Barryvdh\DomPDF\Facade\Pdf;

class LaporanController extends Controller
{
    // POST /api/laporan — Kirim laporan baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'kategori'     => 'required|in:kinerja_dosen,kebijakan_kampus,kerusakan_fasilitas,aspirasi_ormawa,pengajuan_seminar',
            'judul'        => 'required|string|max:255',
            'isi'          => 'required|string',
            'anonim'       => 'boolean',
            'nama_pelapor' => 'nullable|string|max:255',
            'email_pelapor' => 'nullable|email',
        ]);

        // Generate nomor resi otomatis, contoh: SAPA-A1B2C3
        $validated['nomor_resi'] = 'SAPA-' . strtoupper(Str::random(6));
        $validated['status'] = 'Menunggu';

        $laporan = Laporan::create($validated);

        return response()->json([
            'message'     => 'Laporan berhasil dikirim!',
            'nomor_resi'  => $laporan->nomor_resi,
            'status'      => $laporan->status,
        ], 201);
    }

    // GET /api/laporan/{resi} — Cek status by nomor resi
    public function cekStatus($resi)
    {
        $laporan = Laporan::where('nomor_resi', $resi)->first();

        if (!$laporan) {
            return response()->json(['message' => 'Laporan tidak ditemukan.'], 404);
        }

        return response()->json([
            'nomor_resi'    => $laporan->nomor_resi,
            'judul'         => $laporan->judul,
            'kategori'      => $laporan->kategori,
            'status'        => $laporan->status,
            'catatan_admin' => $laporan->catatan_admin,
            'feedback_at'   => $laporan->feedback_at,
            'dikirim_pada'  => $laporan->created_at,
        ]);
    }

    public function index(Request $request)
    {
        $query = Laporan::query();

        if ($request->has('kategori')) {
            $query->where('kategori', $request->kategori);
        }

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        if ($request->has('dari') && $request->has('sampai')) {
            $query->whereBetween('created_at', [
                $request->dari . ' 00:00:00',
                $request->sampai . ' 23:59:59'
            ]);
        }

        if ($request->has('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('judul', 'like', '%' . $request->search . '%')
                    ->orWhere('isi', 'like', '%' . $request->search . '%');
            });
        }

        $laporan = $query->latest()->paginate(10);

        return response()->json($laporan);
    }

    // PATCH /api/admin/laporan/{id} — Update status + feedback
    public function update(Request $request, $id)
    {
        $laporan = Laporan::findOrFail($id);

        $validated = $request->validate([
            'status'        => 'in:Menunggu,Diterima,Diproses,Selesai',
            'catatan_admin' => 'nullable|string',
        ]);

        if (isset($validated['catatan_admin'])) {
            $validated['feedback_at'] = now();
        }

        $laporan->update($validated);

        return response()->json([
            'message' => 'Laporan berhasil diperbarui!',
            'laporan' => $laporan,
        ]);
    }

    // GET /api/admin/notif — Cek jumlah laporan belum dibaca
    public function notifikasi()
    {
        $belumDibaca = Laporan::where('is_read', false)->count();

        return response()->json([
            'belum_dibaca' => $belumDibaca,
        ]);
    }
    // GET /api/admin/export/excel
    public function exportExcel(Request $request)
    {
        $filters = $request->only(['kategori', 'status', 'dari', 'sampai']);

        return Excel::download(new LaporanExport($filters), 'laporan.xlsx');
    }

    public function exportPdf(Request $request)
    {
        $query = Laporan::query();

        if ($request->has('kategori')) {
            $query->where('kategori', $request->kategori);
        }

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        $laporan = $query->latest()->get();

        $pdf = Pdf::loadView('exports.laporan', compact('laporan'))
            ->setPaper('a4', 'landscape');

        return $pdf->download('laporan.pdf');
    }
}
