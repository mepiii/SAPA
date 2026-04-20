import { useState } from 'react';
import { Input, Textarea, Toggle } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { useSheet } from '../../../context/SheetContext';

export default function KinerjaDosenForm() {
  const { submitForm } = useSheet();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    subjekAspirasi: '',
    targetAspirasi: '',
    jurusanDosen: '',
    mataKuliahDosen: '',
    isiAspirasi: '',
    isAnonymous: false,
    namaLengkap: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    submitForm(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {!formData.isAnonymous && (
        <Input
          label="Nama Lengkap"
          placeholder="Masukkan nama lengkap Anda"
          value={formData.namaLengkap}
          onChange={(e) => handleChange('namaLengkap', e.target.value)}
          required={!formData.isAnonymous}
        />
      )}
      <Input
        label="Subjek Aspirasi"
        placeholder="Masukkan subjek aspirasi"
        value={formData.subjekAspirasi}
        onChange={(e) => handleChange('subjekAspirasi', e.target.value)}
        required
      />
      <Input
        label="Target Aspirasi"
        placeholder="Nama dosen yang dituju"
        value={formData.targetAspirasi}
        onChange={(e) => handleChange('targetAspirasi', e.target.value)}
        required
      />
      <Input
        label="Jurusan Dosen"
        placeholder="Jurusan dosen tersebut"
        value={formData.jurusanDosen}
        onChange={(e) => handleChange('jurusanDosen', e.target.value)}
        required
      />
      <Input
        label="Mata Kuliah Dosen"
        placeholder="Mata kuliah yang diampu"
        value={formData.mataKuliahDosen}
        onChange={(e) => handleChange('mataKuliahDosen', e.target.value)}
        required
      />
      <Textarea
        label="Isi Aspirasi"
        placeholder="Jelaskan aspirasi Anda secara detail"
        value={formData.isiAspirasi}
        onChange={(e) => handleChange('isiAspirasi', e.target.value)}
        rows={5}
        required
      />
      <div className="pt-2 border-t border-sapa-secondary/20">
        <Toggle
          label="Kirim secara anonim"
          checked={formData.isAnonymous}
          onChange={(val) => handleChange('isAnonymous', val)}
        />
        <p className="text-xs text-sapa-secondary mt-1">
          Data identitas Anda tidak akan disimpan
        </p>
      </div>
      <Button type="submit" className="mt-2" disabled={isSubmitting}>
        {isSubmitting ? 'Mengirim...' : 'Kirim Laporan'}
      </Button>
    </form>
  );
}