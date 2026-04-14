import { useState } from 'react';
import { X, Search, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { useSheet } from '../../context/SheetContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

const mockStatus = {
  'SAPA-A1B2': {
    status: 'Pending',
    category: 'Kinerja Dosen',
    submittedAt: '2026-04-14',
    message: 'Laporan Anda sedang dalam antrean untuk diproses.',
  },
  'SAPA-X9Y8': {
    status: 'Proses',
    category: 'Kerusakan Fasilitas',
    submittedAt: '2026-04-13',
    message: 'Laporan Anda sedang ditangani oleh tim terkait.',
  },
  'SAPA-Z7W6': {
    status: 'Selesai',
    category: 'Kebijakan Kampus',
    submittedAt: '2026-04-12',
    message: 'Laporan Anda telah selesai ditangani.',
  },
};

const statusConfig = {
  Pending: {
    icon: Clock,
    color: 'text-sapa-warning bg-sapa-warning/10',
    label: 'Menunggu',
  },
  Proses: {
    icon: Loader2,
    color: 'text-blue-600 bg-blue-100',
    label: 'Diproses',
  },
  Selesai: {
    icon: CheckCircle,
    color: 'text-green-600 bg-green-100',
    label: 'Selesai',
  },
};

export default function TrackingModal() {
  const { isTrackingModalOpen, closeTrackingModal } = useSheet();
  const [trackingId, setTrackingId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!trackingId.trim()) {
      setError('Masukkan nomor resi');
      return;
    }

    setIsSearching(true);
    setError('');
    setResult(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    const found = mockStatus[trackingId.toUpperCase()];
    if (found) {
      setResult(found);
    } else {
      setError('Nomor resi tidak ditemukan');
    }

    setIsSearching(false);
  };

  if (!isTrackingModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={closeTrackingModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-sapa-primary">Cek Status Laporan</h3>
            <p className="text-sm text-sapa-secondary mt-1">
              Masukkan nomor resi untuk melacak laporan Anda
            </p>
          </div>
          <button
            onClick={closeTrackingModal}
            className="p-2 rounded-lg hover:bg-sapa-highlight transition-colors text-sapa-secondary"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Input */}
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Contoh: SAPA-A1B2"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSearch} disabled={isSearching}>
            {isSearching ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Search className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-500 mb-4">{error}</p>
        )}

        {/* Result */}
        {result && (
          <div className="p-4 bg-sapa-highlight rounded-xl border border-sapa-secondary/20 animate-fade-in">
            {/* Status Badge */}
            <div className="flex items-center gap-2 mb-4">
              {(() => {
                const StatusIcon = statusConfig[result.status].icon;
                return (
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                      statusConfig[result.status].color
                    }`}
                  >
                    <StatusIcon
                      className={`w-4 h-4 ${
                        result.status === 'Proses' ? 'animate-spin' : ''
                      }`}
                    />
                    {statusConfig[result.status].label}
                  </span>
                );
              })()}
            </div>

            {/* Details */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-sapa-secondary">Kategori</span>
                <span className="font-medium text-sapa-primary">{result.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sapa-secondary">Tanggal Kirim</span>
                <span className="font-medium text-sapa-primary">{result.submittedAt}</span>
              </div>
            </div>

            {/* Message */}
            <p className="mt-4 text-sm text-sapa-primary bg-white rounded-lg p-3 border border-sapa-secondary/10">
              {result.message}
            </p>
          </div>
        )}

        {/* Demo Notice */}
        <p className="text-xs text-sapa-secondary mt-4 text-center">
          Demo: Coba dengan SAPA-A1B2, SAPA-X9Y8, atau SAPA-Z7W6
        </p>
      </div>
    </div>
  );
}