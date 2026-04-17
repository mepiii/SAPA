import { useState } from 'react';
import { Input, Textarea, Toggle } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { useSheet } from '../../../context/SheetContext';

export default function AspirasiOrmawaForm() {
  const { submitForm } = useSheet();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    subjekAspirasi: '',
    organisasiDituju: '',
    kritikSaran: '',
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
        label="Subjek Aspirasi"
        placeholder="Masukkan subjek aspirasi"
        value={formData.subjekAspirasi}
        onChange={(e) => handleChange('subjekAspirasi', e.target.value)}
        required
      />
      <Input
        label="Organisasi yang Dituju"
        placeholder="Nama organisasi mahasiswa"
        value={formData.organisasiDituju}
        onChange={(e) => handleChange('organisasiDituju', e.target.value)}
        required
      />
      <Textarea
        label="Kritik dan Saran"
        placeholder="Tuliskan kritik dan saran Anda"
        value={formData.kritikSaran}
        onChange={(e) => handleChange('kritikSaran', e.target.value)}
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