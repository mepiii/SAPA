import { CheckCircle, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

export default function SuccessView({ trackingId, onClose }) {
 const [copied, setCopied] = useState(false);

 const copyToClipboard = () => {
 navigator.clipboard.writeText(trackingId);
 setCopied(true);
 setTimeout(() => setCopied(false), 2000);
 };

 return (
 <div className="flex flex-col items-center justify-center h-full text-center p-8" role="status" aria-live="polite">
 <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-fade-in">
 <CheckCircle aria-hidden="true" className="w-10 h-10 text-green-600" />
 </div>

 <h3 className="text-2xl font-display font-bold text-sapa-primary dark:text-white/90 mb-2 animate-fade-up">
 Laporan Berhasil Dikirim!
 </h3>
 <p className="text-sapa-secondary dark:text-white/60 font-body mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
 Simpan nomor resi berikut untuk melacak status laporan Anda
 </p>

 <div className="w-full max-w-xs mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
 <p className="text-sm font-body text-sapa-secondary dark:text-white/60 mb-2">Nomor Resi</p>
 <div className="flex items-center gap-2 p-4 bg-sapa-highlight dark:bg-white/10 rounded-xl border border-sapa-accent/30 dark:border-white/10">
 <span className="flex-1 text-lg font-mono font-bold text-sapa-accent text-center">
 {trackingId}
 </span>
 <button
 type="button"
 onClick={copyToClipboard}
 aria-label="Salin nomor resi"
 className="p-2 hover:bg-sapa-accent/10 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 title="Salin"
 >
 <Copy aria-hidden="true" width={20} height={20} className="text-sapa-accent" />
 </button>
 </div>
 {copied && (
 <p aria-live="assertive" className="text-xs text-green-600 mt-1 animate-fade-in">Tersalin!</p>
 )}
 </div>

 <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
 <Button variant="primary" onClick={onClose}>
 Tutup
 </Button>
 </div>
 </div>
 );
}
