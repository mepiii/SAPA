import { useState } from 'react';
import { Input, Textarea, FileInput, Toggle } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { useSheet } from '../../../context/SheetContext';

export default function KerusakanFasilitasForm() {
  const { submitForm } = useSheet();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fasilitasRusak: '',
    deskripsiKerusakan: '',
    buktiKerusakan: null,
    isAnonymous: false,
    namaLengkap: '',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, buktiKerusakan: e.target.files[0] }));
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
        label="Fasilitas yang Rusak"
        placeholder="Nama fasilitas yang rusak"
        value={formData.fasilitasRusak}
        onChange={(e) => handleChange('fasilitasRusak', e.target.value)}
        required
      />
      <Textarea
        label="Deskripsi Kerusakan"
        placeholder="Jelaskan kondisi kerusakan secara detail"
        value={formData.deskripsiKerusakan}
        onChange={(e) => handleChange('deskripsiKerusakan', e.target.value)}
        rows={5}
        required
      />
      <FileInput
        label="Upload Bukti Kerusakan"
        accept="image/*"
        onChange={handleFileChange}
      />
      {formData.buktiKerusakan && (
        <p className="text-xs text-sapa-secondary">
          File: {formData.buktiKerusakan.name}
        </p>
      )}
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