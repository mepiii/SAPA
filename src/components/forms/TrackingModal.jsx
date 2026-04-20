import { useEffect, useState } from 'react';
import { X, Search, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { useSheet } from '../../context/SheetContext';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import useEscapeKey from '../../hooks/useEscapeKey';
import useFocusTrap from '../../hooks/useFocusTrap';

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
 const containerRef = useFocusTrap(isTrackingModalOpen);
 const titleId = 'tracking-modal-title';

 useEffect(() => {
 document.body.style.overflow = isTrackingModalOpen ? 'hidden' : 'unset';
 return () => {
 document.body.style.overflow = 'unset';
 };
 }, [isTrackingModalOpen]);

 useEscapeKey(isTrackingModalOpen, closeTrackingModal);

 const handleSearch = async () => {
 if (!trackingId.trim()) {
 setError('Masukkan nomor resi');
 return;
 }

 setIsSearching(true);
 setError('');
 setResult(null);

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
 <div
 aria-hidden="true"
 className="absolute inset-0 bg-black/40 backdrop-blur-sm"
 onClick={closeTrackingModal}
 />

 <div ref={containerRef} role="dialog" aria-modal="true" aria-labelledby={titleId} className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl border border-white/80 shadow-2xl rounded-3xl p-6 animate-fade-up">
 <div className="flex items-center justify-between mb-6">
 <div>
 <h3 id={titleId} className="text-xl font-display font-bold text-sapa-primary dark:text-white/90">Cek Status Laporan</h3>
 <p className="text-sm font-body text-sapa-secondary dark:text-white/60 mt-1">
 Masukkan nomor resi untuk melacak laporan Anda
 </p>
 </div>
 <button
 type="button"
 onClick={closeTrackingModal}
 aria-label="Tutup"
 className="p-2 rounded-lg hover:bg-sapa-highlight dark:hover:bg-white/10 transition-physical text-sapa-secondary dark:text-white/60 hover:text-sapa-primary dark:hover:text-white focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 <X aria-hidden="true" width={20} height={20} />
 </button>
 </div>

 <div className="flex gap-2 mb-4 font-body">
 <Input
 label="Nomor Resi"
 placeholder="Contoh: SAPA-A1B2"
 value={trackingId}
 onChange={(e) => setTrackingId(e.target.value)}
 error={error}
 className="flex-1"
 />
 <Button onClick={handleSearch} disabled={isSearching} aria-label="Cari" className="self-end transition-physical hover:scale-105">
 {isSearching ? (
 <Loader2 aria-hidden="true" width={16} height={16} className="animate-spin" />
 ) : (
 <Search aria-hidden="true" width={16} height={16} />
 )}
 </Button>
 </div>

 {error && (
 <p role="alert" className="text-sm font-body text-red-500 dark:text-red-400 mb-4">{error}</p>
 )}

 {result && (
 <div aria-live="polite" className="p-4 bg-gray-50 rounded-xl border border-gray-100 animate-fade-in">
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
 aria-hidden="true"
 width={16} height={16}
 className={`${
 result.status === 'Proses' ? 'animate-spin' : ''
 }`}
 />
 {statusConfig[result.status].label}
 </span>
 );
 })()}
 </div>

 <div className="space-y-2 text-sm font-body">
 <div className="flex justify-between gap-4">
 <span className="text-sapa-secondary dark:text-white/60">Kategori</span>
 <span className="font-medium text-right text-sapa-primary dark:text-white/90">{result.category}</span>
 </div>
 <div className="flex justify-between gap-4">
 <span className="text-sapa-secondary dark:text-white/60">Tanggal Kirim</span>
 <span className="font-medium text-right text-sapa-primary dark:text-white/90">{result.submittedAt}</span>
 </div>
 </div>

 <p className="mt-4 text-sm font-body text-sapa-primary bg-white rounded-lg p-3 border border-gray-100">
 {result.message}
 </p>
 </div>
 )}

 <p className="text-xs font-body text-sapa-secondary dark:text-white/40 mt-4 text-center">
 Demo: Coba dengan SAPA-A1B2, SAPA-X9Y8, atau SAPA-Z7W6
 </p>
 </div>
 </div>
 );
}
