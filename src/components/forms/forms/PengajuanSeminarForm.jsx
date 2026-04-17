import { useState } from 'react';
import { Input, Textarea, Toggle } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { useSheet } from '../../../context/SheetContext';

export default function PengajuanSeminarForm() {
  const { submitForm } = useSheet();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    jurusan: '',
    judulSeminar: '',
    deskripsiSeminar: '',
    isAnonymous: true,
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
      <Input
        label="Jurusan"
        placeholder="Jurusan penyelenggara"
        value={formData.jurusan}
        onChange={(e) => handleChange('jurusan', e.target.value)}
        required
      />
      <Input
        label="Judul Seminar"
        placeholder="Judul seminar yang diajukan"
        value={formData.judulSeminar}
        onChange={(e) => handleChange('judulSeminar', e.target.value)}
        required
      />
      <Textarea
        label="Deskripsi Seminar"
        placeholder="Jelaskan proposal seminar secara detail"
        value={formData.deskripsiSeminar}
        onChange={(e) => handleChange('deskripsiSeminar', e.target.value)}
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