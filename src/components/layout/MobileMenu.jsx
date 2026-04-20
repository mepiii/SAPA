import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import useEscapeKey from '../../hooks/useEscapeKey';
import useFocusTrap from '../../hooks/useFocusTrap';

export default function MobileMenu({ isOpen, onClose }) {
 const containerRef = useFocusTrap(isOpen);

 useEffect(() => {
 document.body.style.overflow = isOpen ? 'hidden' : 'unset';
 return () => {
 document.body.style.overflow = 'unset';
 };
 }, [isOpen]);

 useEscapeKey(isOpen, onClose);

 if (!isOpen) return null;

 return (
 <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Menu navigasi">
 <div
 aria-hidden="true"
 className="absolute inset-0 bg-black/20 backdrop-blur-sm"
 onClick={onClose}
 />
 <div ref={containerRef} className="absolute right-0 top-0 h-full w-64 bg-white/95 backdrop-blur-xl p-6 animate-slide-in-right shadow-[0_30px_60px_rgba(48,11,85,0.12)]">
 <button
 type="button"
 onClick={onClose}
 aria-label="Tutup menu"
 className="absolute top-4 right-4 p-2 text-sapa-secondary hover:text-sapa-primary transition-colors focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 <X aria-hidden="true" width={24} height={24} />
 </button>

 <nav aria-label="Navigasi mobile" className="flex flex-col items-start w-full gap-2 mt-12">
 <Link
 to="/"
 onClick={onClose}
 className="w-full text-left px-4 py-3 rounded-xl transition-all font-display text-sapa-primary hover:bg-[#7A47A6]/10 hover:text-[#7A47A6] hover:translate-x-1 active:scale-95 block focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 Beranda
 </Link>
 <Link
 to="/tentang-kami"
 onClick={onClose}
 className="w-full text-left px-4 py-3 rounded-xl transition-all font-display text-sapa-primary hover:bg-[#7A47A6]/10 hover:text-[#7A47A6] hover:translate-x-1 active:scale-95 block focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 Tentang Kami
 </Link>
 <Link
 to="/lapor"
 onClick={onClose}
 className="w-full text-left px-4 py-3 rounded-xl transition-all font-display text-sapa-primary hover:bg-[#7A47A6]/10 hover:text-[#7A47A6] hover:translate-x-1 active:scale-95 block focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 Lapor
 </Link>
 <button
 type="button"
 onClick={onClose}
 className="w-full text-left px-4 py-3 rounded-xl transition-all font-display text-sapa-primary hover:bg-[#7A47A6]/10 hover:text-[#7A47A6] hover:translate-x-1 active:scale-95 block focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 Cek Status
 </button>

 <div className="w-full h-px bg-gray-200 my-4"></div>
 <div className="w-full">
 <p className="text-xs font-bold text-[#A7A3A3] px-4 mb-1">BEM APPS</p>
 <a
 href="#"
 className="w-full text-left px-4 py-3 rounded-xl transition-all font-display text-sapa-secondary hover:bg-[#7A47A6]/10 hover:text-[#7A47A6] hover:translate-x-1 active:scale-95 block pl-8 text-sm focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 BEM OFFICIAL
 </a>
 <a
 href="#"
 className="w-full text-left px-4 py-3 rounded-xl transition-all font-display text-sapa-secondary hover:bg-[#7A47A6]/10 hover:text-[#7A47A6] hover:translate-x-1 active:scale-95 block pl-8 text-sm focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 ILKOM NEWS
 </a>
 </div>
 </nav>
 </div>
 </div>
 );
}

export function MobileMenuButton({ onClick }) {
 return (
 <button
 type="button"
 onClick={onClick}
 className="md:hidden p-2 text-sapa-primary hover:text-sapa-accent transition-colors focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 aria-label="Open menu"
 >
 <Menu aria-hidden="true" width={24} height={24} />
 </button>
 );
}
