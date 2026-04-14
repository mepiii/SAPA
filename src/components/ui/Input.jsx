export function Input({
  label,
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-sapa-primary">
          {label}
        </label>
      )}
      <input
        className={`px-4 py-2.5 rounded-xl border bg-white text-sapa-primary placeholder:text-sapa-secondary/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sapa-accent/30 focus:border-sapa-accent ${
          error ? 'border-red-400' : 'border-sapa-secondary/20'
        }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
}

export function Textarea({
  label,
  error,
  className = '',
  rows = 4,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-sapa-primary">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`px-4 py-2.5 rounded-xl border bg-white text-sapa-primary placeholder:text-sapa-secondary/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sapa-accent/30 focus:border-sapa-accent resize-none ${
          error ? 'border-red-400' : 'border-sapa-secondary/20'
        }`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
}

export function FileInput({
  label,
  accept,
  className = '',
  onChange,
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-sapa-primary">
          {label}
        </label>
      )}
      <label className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 border-dashed border-sapa-secondary/30 bg-sapa-highlight/30 cursor-pointer hover:border-sapa-accent/50 hover:bg-sapa-highlight/50 transition-all duration-200">
        <svg
          className="w-5 h-5 text-sapa-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-sm text-sapa-secondary">Klik untuk upload file</span>
        <input
          type="file"
          accept={accept}
          onChange={onChange}
          className="hidden"
          {...props}
        />
      </label>
    </div>
  );
}

export function Toggle({
  label,
  checked,
  onChange,
  className = '',
}) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`w-11 h-6 rounded-full transition-colors duration-200 ${
            checked ? 'bg-sapa-accent' : 'bg-sapa-secondary/30'
          }`}
        />
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
      <span className="text-sm font-medium text-sapa-primary">{label}</span>
    </label>
  );
}