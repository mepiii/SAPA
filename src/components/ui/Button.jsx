export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) {
  const variants = {
    primary: 'bg-sapa-accent text-white hover:bg-sapa-primary shadow-[0_10px_30px_rgba(122,71,166,0.3)] hover:-translate-y-1',
    secondary: 'bg-sapa-highlight text-sapa-primary hover:bg-sapa-accent/10',
    outline: 'border border-sapa-secondary/30 text-sapa-primary hover:bg-sapa-highlight',
    ghost: 'text-sapa-secondary hover:text-sapa-primary hover:bg-sapa-highlight',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-95 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-sapa-accent focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
