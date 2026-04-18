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
 <div className="flex flex-col items-center justify-center h-full text-center p-8">
 {/* Success Icon */}
 <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-fade-in">
 <CheckCircle className="w-10 h-10 text-green-600" />
 </div>

 {/* Success Message */}
 <h3 className="text-2xl font-display font-bold text-sapa-primary dark:text-white/90 mb-2 animate-fade-up">
 Laporan Berhasil Dikirim!
 </h3>
 <p className="text-sapa-secondary dark:text-white/60 font-body mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
 Simpan nomor resi berikut untuk melacak status laporan Anda
 </p>

 {/* Tracking ID */}
 <div className="w-full max-w-xs mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
 <p className="text-sm font-body text-sapa-secondary dark:text-white/60 mb-2">Nomor Resi</p>
 <div className="flex items-center gap-2 p-4 bg-sapa-highlight dark:bg-white/10 rounded-xl border border-sapa-accent/30 dark:border-white/10">
 <span className="flex-1 text-lg font-mono font-bold text-sapa-accent text-center">
 {trackingId}
 </span>
 <button
 onClick={copyToClipboard}
 className="p-2 hover:bg-sapa-accent/10 rounded-lg transition-colors"
 title="Salin"
 >
 <Copy width={20} height={20} className="text-sapa-accent" />
 </button>
 </div>
 {copied && (
 <p className="text-xs text-green-600 mt-1 animate-fade-in">Tersalin!</p>
 )}
 </div>

 {/* Close Button */}
 <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
 <Button variant="primary" onClick={onClose}>
 Tutup
 </Button>
 </div>
 </div>
 );
}