<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Laporan SAPA - Fasilkom Unsri</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            color: #333;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
        }
        .header h2 {
            margin: 0;
            font-size: 16px;
        }
        .header p {
            margin: 4px 0;
            font-size: 11px;
            color: #666;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        th {
            background-color: #4F81BD;
            color: white;
            padding: 8px;
            text-align: left;
            font-size: 11px;
        }
        td {
            padding: 6px 8px;
            border-bottom: 1px solid #ddd;
            font-size: 11px;
            vertical-align: top;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .footer {
            margin-top: 20px;
            font-size: 10px;
            color: #999;
            text-align: right;
        }
        .badge {
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 10px;
            font-weight: bold;
        }
        .badge-menunggu { background: #FFF3CD; color: #856404; }
        .badge-diterima { background: #CCE5FF; color: #004085; }
        .badge-diproses { background: #D4EDDA; color: #155724; }
        .badge-selesai  { background: #D1ECF1; color: #0C5460; }
    </style>
</head>
<body>
    <div class="header">
        <h2>SAPA - Sentra Aspirasi Pengaduan Asa</h2>
        <p>Fakultas Ilmu Komputer, Universitas Sriwijaya</p>
        <p>BEM Fasilkom - Kabinet Arka Satyawira</p>
        <p>Dicetak pada: {{ now()->format('d/m/Y H:i') }}</p>
    </div>

    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Nomor Resi</th>
                <th>Kategori</th>
                <th>Judul</th>
                <th>Pelapor</th>
                <th>Status</th>
                <th>Tanggal</th>
            </tr>
        </thead>
        <tbody>
            @foreach($laporan as $index => $item)
            <tr>
                <td>{{ $index + 1 }}</td>
                <td>{{ $item->nomor_resi }}</td>
                <td>{{ ucfirst(str_replace('_', ' ', $item->kategori)) }}</td>
                <td>{{ $item->judul }}</td>
                <td>{{ $item->anonim ? 'Anonim' : ($item->nama_pelapor ?? '-') }}</td>
                <td>
                    <span class="badge badge-{{ strtolower($item->status) }}">
                        {{ $item->status }}
                    </span>
                </td>
                <td>{{ $item->created_at->format('d/m/Y') }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div class="footer">
        Total: {{ count($laporan) }} laporan
    </div>
</body>
</html>