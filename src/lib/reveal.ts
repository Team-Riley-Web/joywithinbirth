/**
 * Scroll reveal attributes, spread onto any element.
 *
 *   <article class="card" {...reveal()}>
 *   <article class="card" {...reveal(120)}>   // staggered 120ms behind
 *
 * Returns Alpine `x-intersect` wiring plus the data attributes the CSS in
 * global.css keys off. Deliberately does NOT return `class` or wrap the element
 * in anything: reveals are applied to grid and flex children throughout the
 * home page, and a wrapper div would become the grid item and break their
 * sizing.
 *
 * Motion itself lives in global.css so the timing is defined once. Elements
 * stay visible when JS never runs — see the `.js` guard there.
 */
export function reveal(delay = 0) {
  return {
    'data-reveal': true,
    'x-data': '{ shown: false }',
    'x-intersect.once': 'shown = true',
    'x-bind:data-shown': 'shown',
    ...(delay ? { style: `--reveal-delay: ${delay}ms` } : {}),
  };
}

/**
 * Stagger helper for mapped lists.
 *
 *   {items.map((item, i) => <li {...reveal(stagger(i))}>)}
 *
 * Caps the delay so a long list never leaves the last item waiting seconds
 * after the rest have settled.
 */
export function stagger(index: number, step = 110, max = 560) {
  return Math.min(index * step, max);
}
