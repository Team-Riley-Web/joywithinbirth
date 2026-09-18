/**
 * Scroll-driven image parallax, spread onto the ancestor a scale-tracked
 * image should be measured relative to.
 *
 *   <section {...scrollScale()}>
 *     <div class="frame"><Image data-scroll-scale-image style="transform: scale(1.04);" /></div>
 *   </section>
 *
 * Originally built for the homepage's free-resources carousel and now shared
 * with /resources — the query is document-wide (not scoped to this host
 * element), so one instance covers every `[data-scroll-scale-image]` on the
 * page even if they sit in a different section, as /resources does with its
 * hero photo, free-resources grid, and digital-guides grid all handled by a
 * single instance.
 *
 * Each tracked image scales from 1.04 up to `max` (1.2 by default — the
 * homepage's original tuning) as its own parent (the `.frame`/`.freebie-image`
 * wrapper, found via `image.parentElement`) travels through the viewport — 0
 * at the frame's own height past the bottom edge, 1 once it reaches the top.
 * /resources passes a subtler `max: 1.1`, since its cards read busier at 1.2
 * than the homepage's wider, more spaced-out carousel slides do.
 *
 * The image needs `overflow: hidden` on that parent and its own `transition:
 * transform 600ms ease` to smooth the per-frame updates; the inline
 * `scale(1.04)` on the image is the no-JS baseline.
 */
export function scrollScale({ max = 1.2 }: { max?: number } = {}) {
  const base = 1.04;
  const amplitude = max - base;

  return {
    'x-data': `{
      updateScrollScaleImages() {
        const viewportHeight = window.innerHeight;

        document.querySelectorAll('[data-scroll-scale-image]').forEach((image) => {
          const frame = image.parentElement;
          const rect = frame.getBoundingClientRect();

          if (rect.bottom < 0 || rect.top > viewportHeight) return;

          const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
          const scale = ${base} + progress * ${amplitude};

          image.style.transform = \`scale(\${scale})\`;
        });
      }
    }`,
    'x-init': `
      updateScrollScaleImages();
      window.addEventListener('scroll', () => requestAnimationFrame(() => updateScrollScaleImages()), { passive: true });
      window.addEventListener('resize', () => requestAnimationFrame(() => updateScrollScaleImages()), { passive: true });
    `,
  };
}
