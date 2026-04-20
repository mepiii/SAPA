import { motion } from 'motion/react';
import { MousePointerClick, FileText, Key, Activity } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import PageMeta from '../components/seo/PageMeta';

const alurSteps = [
 {
 step: 1,
 title: 'Pilih Kategori',
 description: 'Tentukan kategori laporan yang sesuai',
 icon: MousePointerClick,
 },
 {
 step: 2,
 title: 'Isi Formulir',
 description: 'Lengkapi detail laporan Anda',
 icon: FileText,
 },
 {
 step: 3,
 title: 'Terima ID Tracking',
 description: 'Simpan ID untuk memantau status',
 icon: Key,
 },
 {
 step: 4,
 title: 'Pantau Progres',
 description: 'Cek status laporan kapan saja',
 icon: Activity,
 },
];

const containerVariants = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: { staggerChildren: 0.15, delayChildren: 0.2 },
 },
};

const itemVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 } },
};

export default function Beranda() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden">
      <PageMeta
        title="SAPA - Sentra Aspirasi Pengaduan Asa"
        description="Platform aspirasi dan pengaduan mahasiswa BEM Fasilkom Unsri dengan alur pelaporan yang mudah dan transparan."
      />
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#7A47A6]/[0.07] blur-[120px] rounded-full z-[-1] pointer-events-none"></div>

      <HeroSection />

 {/* Alur Pelaporan Section */}
 <section id="alur" className="py-16 px-4 relative z-10">
 <motion.div
 className="max-w-5xl mx-auto"
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, amount: 0.2 }}
 variants={containerVariants}
 >
 <motion.div variants={itemVariants} className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-display font-bold text-sapa-primary drop-shadow-heading mb-4 tracking-tight">
 Alur Pelaporan
 </h2>
 <p className="text-sapa-secondary font-body max-w-lg mx-auto">
 Empat langkah mudah untuk menyampaikan aspirasi Anda
 </p>
 </motion.div>

 <div className="relative">
   {/* Horizontal connecting line on desktop */}
   <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#7A47A6]/20 to-transparent -translate-y-1/2 z-0"></div>

   <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
     {alurSteps.map((step) => {
       const Icon = step.icon;
       return (
         <motion.div key={step.step} variants={itemVariants} className="relative">
           <div className="group bg-white/40 backdrop-blur-xl border border-white/60 shadow-md transition-all duration-300 hover:bg-white/60 hover:-translate-y-2 hover:shadow-cinematic hover:scale-[1.03] active:scale-95 rounded-2xl p-6 h-full flex flex-col items-center text-center">
             <div className="bg-[#7A47A6]/10 text-[#7A47A6] p-3 rounded-xl mb-4 transition-all duration-300 ease-out group-hover:scale-110">
               <Icon width={28} height={28} strokeWidth={2} />
             </div>
             <div className="text-sm font-bold tracking-wider text-[#A7A3A3] uppercase mb-2">
               Langkah {step.step}
             </div>
             <h3 className="text-lg font-display font-semibold text-sapa-primary drop-shadow-heading mb-2 tracking-tight">
               {step.title}
             </h3>
             <p className="text-sm font-body text-sapa-secondary leading-relaxed">
               {step.description}
             </p>
           </div>
         </motion.div>
       );
     })}
   </div>
 </div>
 </motion.div>
 </section>

 </main>
 );
}