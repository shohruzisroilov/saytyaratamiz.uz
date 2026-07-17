export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      aria-label="Yuklanmoqda..."
      role="status"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Brand mark */}
        <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-[0_8px_28px_rgba(37,99,235,0.25)] animate-pulse">
          <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="loading-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="loading-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <rect width="36" height="36" rx="9" fill="url(#loading-grad-1)" />
            <path
              d="M23.5 13C23.5 13 21 10.5 18 10.5C14.5 10.5 12.5 12.5 12.5 15.5C12.5 19.5 23.5 17.5 23.5 21.5C23.5 24.5 21.5 26.5 18 26.5C14.5 26.5 12.5 24 12.5 24"
              stroke="white"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="18" cy="18.5" r="2.2" fill="url(#loading-grad-2)" />
          </svg>
        </div>

        {/* Tri-color bouncing dots */}
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2.5 h-2.5 rounded-full bg-mint animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2.5 h-2.5 rounded-full bg-lavender animate-bounce" />
        </div>

        <p className="text-sm text-muted-foreground font-medium tracking-wide">Yuklanmoqda...</p>
      </div>
    </div>
  );
}
