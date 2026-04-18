import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

export default function MobileMenu({ isOpen, onClose }) {
 if (!isOpen) return null;

 return (
 <div className="fixed inset-0 z-50 md:hidden">
 <div
 className="absolute inset-0 bg-black/20 backdrop-blur-sm"
 onClick={onClose}
 />
 <div className="absolute right-0 top-0 h-full w-64 bg-white/60 p-6 animate-slide-in-right">
 <button
 onClick={onClose}
 className="absolute top-4 right-4 p-2 text-sapa-secondary hover:text-sapa-primary transition-colors"
 >
 <X width={24} height={24} />
 </button>

 <nav className="flex flex-col gap-4 mt-12">
 <Link
 to="/"
 onClick={onClose}
 className="text-sapa-primary dark:text-white/90 font-display hover:text-sapa-accent dark:hover:text-white transition-physical"
 >
 Beranda
 </Link>
 <Link
 to="/tentang-kami"
 onClick={onClose}
 className="text-sapa-primary font-medium hover:text-sapa-accent transition-colors"
 >
 Tentang Kami
 </Link>
 <Link
 to="/lapor"
 onClick={onClose}
 className="text-sapa-primary font-medium hover:text-sapa-accent transition-colors"
 >
 Lapor
 </Link>
 <button
 onClick={onClose}
 className="text-sapa-primary dark:text-white/90 font-display hover:text-sapa-accent dark:hover:text-white transition-physical text-left"
 >
 Cek Status
 </button>

 <div className="border-t border-sapa-secondary/20 pt-4 mt-2">
 <p className="text-sapa-secondary dark:text-white/60 text-sm font-display mb-2">BEM APPS</p>
 <a
 href="#"
 className="block text-sapa-secondary dark:text-white/60 font-body hover:text-sapa-primary dark:hover:text-white transition-physical py-1"
 >
 BEM OFFICIAL
 </a>
 <a
 href="#"
 className="block text-sapa-secondary hover:text-sapa-primary transition-colors py-1"
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
 onClick={onClick}
 className="md:hidden p-2 text-sapa-primary hover:text-sapa-accent transition-colors"
 aria-label="Open menu"
 >
 <Menu width={24} height={24} />
 </button>
 );
}