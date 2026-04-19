<?php

namespace App\Exports;

use App\Models\Laporan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class LaporanExport implements FromCollection, WithHeadings
{
    protected $filters;

    public function __construct(array $filters = [])
    {
        $this->filters = $filters;
    }

    public function collection()
    {
        $query = Laporan::query();

        if (!empty($this->filters['kategori'])) {
            $query->where('kategori', $this->filters['kategori']);
        }

        if (!empty($this->filters['status'])) {
            $query->where('status', $this->filters['status']);
        }

        return $query->latest()->get()->map(function ($item, $index) {
            return [
                'no'            => $index + 1,
                'nomor_resi'    => $item->nomor_resi,
                'kategori'      => str_replace('_', ' ', $item->kategori),
                'judul'         => $item->judul,
                'isi'           => $item->isi,
                'anonim'        => $item->anonim ? 'Ya' : 'Tidak',
                'nama_pelapor'  => $item->nama_pelapor ?? '-',
                'email_pelapor' => $item->email_pelapor ?? '-',
                'status'        => $item->status,
                'catatan_admin' => $item->catatan_admin ?? '-',
                'tanggal'       => $item->created_at->format('d/m/Y H:i'),
            ];
        });
    }

    public function headings(): array
    {
        return [
            'No',
            'Nomor Resi',
            'Kategori',
            'Judul',
            'Isi Laporan',
            'Anonim',
            'Nama Pelapor',
            'Email Pelapor',
            'Status',
            'Catatan Admin',
            'Tanggal Kirim',
        ];
    }
}