import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { SheetProvider } from './context/SheetContext';
import { BGPattern } from './components/ui/bg-pattern';
import FloatingPillNav from './components/layout/FloatingPillNav';
import SlideOutSheet from './components/forms/SlideOutSheet';
import TrackingModal from './components/forms/TrackingModal';
import { Toaster } from 'sonner';

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" role="status" aria-live="polite" aria-label="Memuat halaman">
      <span className="sr-only">Memuat...</span>
      <div className="h-10 w-10 rounded-full border-2 border-sapa-accent/20 border-t-sapa-accent animate-spin" aria-hidden="true" />
    </div>
  );
}

function AppFooter() {
  return (
    <footer className="py-8 px-4 text-center border-t border-sapa-secondary/10 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src="/BEM.png" alt="Logo BEM Fasilkom Unsri" className="h-8 w-auto" />
          <span className="text-sm font-display font-medium text-sapa-primary">
            BEM Fasilkom Unsri
          </span>
        </div>
        <p className="text-xs font-body text-sapa-secondary">
          © 2026 BEM Fasilkom Unsri, Kabinet Arka Satyawira. All rights reserved.
        </p>
        <p className="text-xs font-body text-sapa-secondary/60 mt-2">
          Sentra Aspirasi Pengaduan Asa (SAPA)
        </p>
      </div>
    </footer>
  );
}

const Beranda = lazy(() => import('./pages/Beranda'));
const TentangKami = lazy(() => import('./pages/TentangKami'));
const Lapor = lazy(() => import('./pages/Lapor'));

function App() {
  return (
    <BrowserRouter>
      <SheetProvider>
        <div className="relative min-h-screen bg-[#F5F5F7]">
          {/* Grid Layer */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <BGPattern
              variant="grid"
              mask="fade-edges"
              className="w-full h-full opacity-50 stroke-black/10"
            />
          </div>

          {/* Content Layer */}
          <div className="relative z-10">
            <FloatingPillNav />

            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/tentang-kami" element={<TentangKami />} />
                <Route path="/lapor" element={<Lapor />} />
              </Routes>
            </Suspense>

            <SlideOutSheet />
            <TrackingModal />

            <Toaster position="bottom-right" />
          </div>

          <AppFooter />
        </div>
      </SheetProvider>
    </BrowserRouter>
  );
}

export default App;