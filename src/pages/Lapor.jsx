import {
 BookOpenText,
 Landmark,
 Building2,
 Network,
 Ticket,
 Headset,
} from 'lucide-react';
import { useSheet } from '../context/SheetContext';
import { motion } from 'motion/react';
import PageMeta from '../components/seo/PageMeta';

const categories = [
 {
 id: 'kinerja-dosen',
 title: 'Kinerja Dosen',
 description: 'Sampaikan aspirasi terkait kinerja dosen',
 icon: BookOpenText,
 },
 {
 id: 'kebijakan-kampus',
 title: 'Kebijakan Kampus',
 description: 'Berikan masukan tentang kebijakan kampus',
 icon: Landmark,
 },
 {
 id: 'kerusakan-fasilitas',
 title: 'Kerusakan Fasilitas',
 description: 'Laporkan fasilitas kampus yang rusak',
 icon: Building2,
 },
 {
 id: 'aspirasi-ormawa',
 title: 'Aspirasi Ormawa',
 description: 'Kritik dan saran untuk organisasi mahasiswa',
 icon: Network,
 },
 {
 id: 'pengajuan-seminar',
 title: 'Pengajuan Seminar',
 description: 'Ajukan proposal seminar atau kegiatan',
 icon: Ticket,
 },
 {
 id: 'pelayanan-umum',
 title: 'Pelayanan Umum',
 description: 'Layanan administrasi dan fasilitas umum.',
 icon: Headset,
 }
];

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.1,
 delayChildren: 0.2,
 },
 },
};

const itemVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
 },
};

export default function Lapor() {
  const { openSheet } = useSheet();

  return (
    <main id="main-content" className="min-h-screen pt-24 relative overflow-hidden">
      <PageMeta
        title="Lapor - SAPA"
        description="Pilih kategori dan kirim aspirasi atau pengaduan Anda melalui SAPA BEM Fasilkom Unsri."
      />
      <section className="py-12 px-4 relative z-10">
 <motion.div
 className="max-w-5xl mx-auto"
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={containerVariants}
 >
 {/* Section Header */}
 <motion.div variants={itemVariants} className="text-center mb-12">
 <h1 className="text-3xl md:text-4xl font-display font-bold text-sapa-primary drop-shadow-heading mb-4 tracking-tight">
 Sampaikan Aspirasi Anda
 </h1>
 <p className="text-sapa-secondary font-body max-w-lg mx-auto">
 Pilih kategori yang sesuai dengan laporan Anda. Semua laporan akan
 ditindaklanjuti oleh tim BEM Fasilkom.
 </p>
 </motion.div>

 {/* Bento Grid */}
 <motion.div
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
 variants={containerVariants}
 >
 {categories.map((category) => {
 const Icon = category.icon;
 return (
 <motion.div
 key={category.id}
 variants={itemVariants}
 className=""
 >
 <button
 type="button"
 onClick={() => openSheet(category.id)}
 className="w-full h-full text-left cursor-pointer group bg-white/50 backdrop-blur-md border border-white/50 shadow-md transition-all duration-300 hover:bg-white/70 hover:-translate-y-2 hover:shadow-cinematic hover:scale-[1.03] active:scale-95 rounded-2xl overflow-hidden focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2"
 >
 <div className="p-6">
 {/* Icon */}
 <div className="w-12 h-12 rounded-xl bg-sapa-accent/10 flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:bg-sapa-accent/20 group-hover:scale-110">
 <Icon width={24} height={24} className="text-sapa-accent" strokeWidth={2} />
 </div>

 {/* Content */}
 <h2 className="text-lg font-display font-semibold text-sapa-primary drop-shadow-heading mb-2 tracking-tight">
 {category.title}
 </h2>
 <p className="text-sm font-body text-sapa-secondary leading-relaxed">
 {category.description}
 </p>

 {/* Arrow indicator */}
 <div className="mt-4 flex items-center font-display text-sapa-accent opacity-60 group-hover:opacity-100 transition-all duration-300">
 <span className="text-sm font-medium">Mulai Lapor</span>
 <svg
 aria-hidden="true"
 className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M9 5l7 7-7 7"
 />
 </svg>
 </div>
 </div>
 </button>
 </motion.div>
 );
 })}
 </motion.div>
 </motion.div>
 </section>
 </main>
 );
}