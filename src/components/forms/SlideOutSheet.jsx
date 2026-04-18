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
 className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
 isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
 }`}
 onClick={closeSheet}
 />

 {/* Centered Modal */}
 <div
 className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none`}
 >
 <div
 className={`relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-2xl rounded-3xl transition-all duration-300 ease-in-out pointer-events-auto flex flex-col max-h-[90vh] ${
 isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
 }`}
 >
 {/* Header */}
 <div className="flex items-center justify-between p-6 border-b border-sapa-secondary/20 dark:border-white/10 shrink-0">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl bg-sapa-accent/10 flex items-center justify-center">
 <Icon className="w-5 h-5 text-sapa-accent" />
 </div>
 <div>
 <h2 className="text-xl font-display font-bold text-sapa-primary dark:text-white/90">
 {config.title}
 </h2>
 <p className="text-sm font-body text-sapa-secondary dark:text-white/60">
 Isi form berikut untuk melapor
 </p>
 </div>
 </div>
 <button
 onClick={closeSheet}
 className="p-2 rounded-lg hover:bg-sapa-highlight dark:hover:bg-white/10 transition-physical text-sapa-secondary dark:text-white/60 hover:text-sapa-primary dark:hover:text-white"
 >
 <X width={20} height={20} />
 </button>
 </div>

 {/* Content */}
 <div className="overflow-y-auto p-6 font-body text-sapa-primary dark:text-white/90">
 {isSubmitted && trackingId ? (
 <SuccessView trackingId={trackingId} onClose={closeSheet} />
 ) : (
 <FormComponent />
 )}
 </div>
 </div>
 </div>
 </>
 );
}