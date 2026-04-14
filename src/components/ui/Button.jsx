export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const variants = {
    primary: 'bg-sapa-accent text-white hover:bg-sapa-primary',
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
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}