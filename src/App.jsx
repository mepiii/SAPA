import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SheetProvider } from './context/SheetContext';
import { BGPattern } from './components/ui/bg-pattern';
import FloatingPillNav from './components/layout/FloatingPillNav';
import SlideOutSheet from './components/forms/SlideOutSheet';
import TrackingModal from './components/forms/TrackingModal';
import Beranda from './pages/Beranda';
import TentangKami from './pages/TentangKami';
import Lapor from './pages/Lapor';
import { Toaster } from 'sonner';

function App() {
  return (
    <BrowserRouter>
      <SheetProvider>
        <main className="relative min-h-screen bg-[#F5F5F7]">
          {/* Grid Layer */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <BGPattern
              variant="grid"
              mask="fade-edges"
              className="w-full h-full opacity-50 stroke-black/10"
            />
          </div>

          {/* Noise Layer (Film Grain) */}
          <div
            className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Content Layer */}
          <div className="relative z-10">
            <FloatingPillNav />

            <Routes>
              <Route path="/" element={<Beranda />} />
              <Route path="/tentang-kami" element={<TentangKami />} />
              <Route path="/lapor" element={<Lapor />} />
            </Routes>

            <SlideOutSheet />
            <TrackingModal />

            <Toaster position="bottom-right" />

            {/* Footer */}
            <footer className="py-8 px-4 text-center border-t border-sapa-secondary/10 mt-16">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <img src="/BEM.png" alt="BEM Logo" className="h-8 w-auto" />
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
          </div>
        </main>
      </SheetProvider>
    </BrowserRouter>
  );
}

export default App;