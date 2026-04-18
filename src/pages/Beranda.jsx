import { motion } from 'motion/react';
import { FileText, Send, Clock, CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';

const alurSteps = [
 {
 step: 1,
 title: 'Pilih Kategori',
 description: 'Tentukan kategori laporan yang sesuai',
 icon: FileText,
 },
 {
 step: 2,
 title: 'Isi Formulir',
 description: 'Lengkapi detail laporan Anda',
 icon: Send,
 },
 {
 step: 3,
 title: 'Terima ID Tracking',
 description: 'Simpan ID untuk memantau status',
 icon: Clock,
 },
 {
 step: 4,
 title: 'Pantau Progres',
 description: 'Cek status laporan kapan saja',
 icon: CheckCircle2,
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
 visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Beranda() {
  return (
    <main className="relative min-h-screen overflow-hidden">
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
 <h2 className="text-3xl md:text-4xl font-display font-bold text-sapa-primary mb-4 tracking-tight">
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
           <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-md transition-all duration-300 hover:bg-white/60 hover:-translate-y-2 hover:shadow-2xl rounded-2xl p-6 h-full flex flex-col items-center text-center">
             <div className="bg-[#7A47A6]/10 text-[#7A47A6] p-4 rounded-full mb-4">
               <Icon width={28} height={28} strokeWidth={2} />
             </div>
             <div className="text-sm font-bold tracking-wider text-[#A7A3A3] uppercase mb-2">
               Langkah {step.step}
             </div>
             <h3 className="text-lg font-display font-semibold text-sapa-primary mb-2 tracking-tight">
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