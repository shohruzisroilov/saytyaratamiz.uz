// Shared scroll-reveal tuning so every section animates in with the same soft, smooth feel.
export const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

// `amount` (percent of element visible) instead of pixel `margin` keeps the trigger
// point consistent across viewport heights — pixel margins shrink disproportionately
// on short mobile screens and make the reveal fire late/abruptly while scrolling.
export const REVEAL_VIEWPORT = { once: true, amount: 0.2 } as const;
