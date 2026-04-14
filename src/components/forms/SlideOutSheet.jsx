import { X, GraduationCap, Scale, Wrench, Users, Presentation, Loader2 } from 'lucide-react';
import { useSheet } from '../../context/SheetContext';
import KinerjaDosenForm from './forms/KinerjaDosenForm';
import KebijakanKampusForm from './forms/KebijakanKampusForm';
import KerusakanFasilitasForm from './forms/KerusakanFasilitasForm';
import AspirasiOrmawaForm from './forms/AspirasiOrmawaForm';
import PengajuanSeminarForm from './forms/PengajuanSeminarForm';
import SuccessView from './SuccessView';

const categoryConfig = {
  'kinerja-dosen': {
    title: 'Kinerja Dosen',
    icon: GraduationCap,
    component: KinerjaDosenForm,
  },
  'kebijakan-kampus': {
    title: 'Kebijakan Kampus',
    icon: Scale,
    component: KebijakanKampusForm,
  },
  'kerusakan-fasilitas': {
    title: 'Kerusakan Fasilitas',
    icon: Wrench,
    component: KerusakanFasilitasForm,
  },
  'aspirasi-ormawa': {
    title: 'Aspirasi Ormawa',
    icon: Users,
    component: AspirasiOrmawaForm,
  },
  'pengajuan-seminar': {
    title: 'Pengajuan Seminar',
    icon: Presentation,
    component: PengajuanSeminarForm,
  },
};

export default function SlideOutSheet() {
  const { isOpen, category, isSubmitted, trackingId, closeSheet } = useSheet();

  if (!category) return null;

  const config = categoryConfig[category];
  const Icon = config.icon;
  const FormComponent = config.component;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSheet}
      />

      {/* Sheet */}
      <div
        className={`fixed top-0 right-0 h-full z-50 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full md:w-[480px] bg-white shadow-2xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sapa-secondary/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sapa-accent/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-sapa-accent" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-sapa-primary">
                {config.title}
              </h2>
              <p className="text-xs text-sapa-secondary">
                Isi form berikut untuk melapor
              </p>
            </div>
          </div>
          <button
            onClick={closeSheet}
            className="p-2 rounded-lg hover:bg-sapa-highlight transition-colors text-sapa-secondary hover:text-sapa-primary"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="h-[calc(100vh-88px)] overflow-y-auto p-6">
          {isSubmitted && trackingId ? (
            <SuccessView trackingId={trackingId} onClose={closeSheet} />
          ) : (
            <FormComponent />
          )}
        </div>
      </div>
    </>
  );
}