# Tasks

Queue of work for Claude. Add new tasks to the bottom. Do not remove or edit an
unchecked task unless you are starting it.

## Rules
- Work on only one task at a time.
- New tasks go at the bottom of the list.
- Do not abandon or interrupt the current task unless the user explicitly says "interrupt".
- Finish, test, and verify the current task before starting the next.
- Before starting another task, re-read this file and select the oldest pending (unchecked) task.
- After completing a task, check it off, briefly tell the user it's done, and state which task is starting next.
- Do not combine unrelated tasks into one implementation.

## Queue
- [x] Homepage "Start learning for free": show only three classes by default with a "Show more" button underneath that reveals the rest
  Done 2026-09-10: src/pages/index.astro. Six cards render, the last three carry
  `freebie-card--extra` and a centered "Show more" / "Show less" button toggles
  `.is-collapsible.is-expanded` on the wrapper.
  Not Alpine: the nested `x-data` I first put on this section never came alive
  (the header's identical `@click` fires, this one's did not), so it is a
  six-line inline script. All six cards ship visible and the script collapses
  them, so a reader without scripting gets every resource instead of a dead
  button.
  CORRECTION 2026-09-10: I wrote this up as "Alpine directives inside <main>
  never come alive", which is wrong - TestimonialCarousel's mobile carousel
  sits inside <main> and its child bindings update fine. Whatever broke was
  specific to the extra x-data I nested inside this section's own x-data.
  Superseded anyway: this section is now a carousel, see the last task.
  Grouped with the two tasks below - one section, one edit.
- [x] Link each free class/resource to its proper destination (homepage and anywhere else they are listed)
  Done 2026-09-10: every card now points at its own Flodesk page instead of the
  bare `myflodesk.com/` root all three shared before. The homepage is the only
  place free resources are listed - nothing in the header, footer, or other
  pages links to them.
- [x] Rename anywhere it says "monthly live Q&A" to "live Q&A calls with Hailey" — they are not necessarily monthly
  Done 2026-09-10: six mentions across four files. CtaBand.astro meta chip,
  enroll.astro (coaching feature + the "Is coaching required" FAQ answer),
  testimonials.astro support chip, course.astro (the include title and the
  "Stay supported" step). No "monthly" left anywhere in src/pages,
  src/components, or src/layouts.
  Left alone: src/assets/images/design-inspiration/joy-within-birth-redesign.html.
  It is a saved design reference, not shipped.
  One extra touch: the course include's description read "Ask Hailey directly"
  right under a title that now ends in "with Hailey", so it is "Ask her
  directly" now.
- [x] Add and correctly map the free resources: 5 Keys to a Joy-Filled Birth https://joywithinbirth.myflodesk.com/5keystojoywithinbirth | How to Prep Your Body for Birth 36 Weeks On https://joywithinbirth.myflodesk.com/birthprep | How to Use Essential Oils for Labor https://joywithinbirth.myflodesk.com/oilsforpregnancy | Flow & Energy for Each Stage of Labor https://joywithinbirth.myflodesk.com/joyfulflow | Doula Guide https://joywithinbirth.myflodesk.com/doulaguide | Holistic Fertility Ebook https://joywithinbirth.myflodesk.com/fertilityebook
  Done 2026-09-10: all six added in that order, each with its own URL, image,
  and copy. Two existing cards were renamed to match the real product names
  ("5 Keys to Joy Within Birth" -> "5 Keys to a Joy-Filled Birth", "Flow for
  Each Stage of Labor" -> "Flow & Energy for Each Stage of Labor").
  Removed: "How to Visualize Your Dream Birth" - it is not on the list of six,
  so I read the list as the full set. Say the word if it should come back.
  New copy for Birth Prep, Essential Oils, Doula Guide, and the Fertility
  Ebook is mine - worth a read before this goes live.
- [x] About page: link the Holistic Fertility ebook from the paragraph "We have been married for 13 years, and for the first 7 years of our marriage we struggled to conceive. (I wrote an entire Ebook called Holistic Fertility...)"
  Done 2026-09-10: "Holistic Fertility" in src/pages/about.astro now links to
  https://joywithinbirth.myflodesk.com/fertilityebook in a new tab. The site had
  no style for a link inside running prose - every other link is a button or a
  card - so about.astro gained a small scoped `.inline-link` rule.
- [x] Pull a few clips out of '/Users/joshuariley/Downloads/Joy Within Birth- Video 2.mp4' (higher quality source) that can be used on the site — clips around 2:03, 2:31, 4:30, and 5:55
  Done 2026-09-10: four 8s silent loops in public/videos/clips/, each with a
  matching .jpg poster and a README listing source timestamps:
  teaching-pelvis-and-baby (2:03), teaching-baby-position (2:31),
  teaching-pelvis-model (4:30), teaching-standing (5:55).
  1280x720, 30fps, CRF 23, faststart - ready to drop into <VideoBackdrop>.
  Each closes its loop by crossfading into the 1s immediately before its start,
  so the last frame lands back on the first. Measured seams 1.5-2.9 against
  mid-clip controls of 5.2-11.7.
  Not wired into any page yet - they are a library.
- [x] Use '/Users/joshuariley/Downloads/Joy Within Birth- Video 2.mp4' for the homepage hero video, since it is higher quality than the current source
  Done 2026-09-10: public/videos/hero-loop.mp4 + .jpg rebuilt from 7:50 in the
  new source. 650x720 (the arch's 47:52), 24fps, 14s, CRF 21, seamless loop
  (seam 1.85 vs control 16.09). Poster taken 5s in, where she is looking at
  camera.
  Worth knowing: this source is NOT higher quality than what the old hero came
  from. It is 1280x720 at ~950 kbps, so a 47:52 portrait crop maxes out at
  650x720 - the previous hero was 880x974. The arch renders 635x703, so the new
  clip is pixel-exact at 1x and softer than before on a retina screen. It holds
  up on screen; if you have the 1080p original of this shoot, recutting from
  that would be strictly better.
  The old hero is recoverable: `git show 89ec114:public/videos/hero-loop.mp4`.
- [x] When showing more free resources the page seems to move up, which is offputting UX — it should reveal down while keeping the user in the same place on the page
  Done 2026-09-10: the culprit was the browser's scroll anchoring, not the CSS.
  Growing the grid made Chrome pick an anchor node below it and scroll down to
  hold that node still, which read as the page lurching up by exactly one row
  (415px at desktop). Reproduced at scroll offsets +300 and +600 past the
  button; offsets at or above the section were unaffected, which is why it
  looked intermittent.
  Fix in src/pages/index.astro: the toggle records the section's own top before
  the change and scrolls back by whatever moved it - once synchronously, once
  on the next frame, since the adjustment can land on either side of layout.
  Verified 0px shift on both expand and collapse across seven scroll positions
  at 1440px and 390px, plus page-top and page-bottom edge cases.
- [x] Replace the free resources "Show more" with a carousel that auto-advances and has arrows for navigation — moving 3 at a time on desktop, 1 at a time on mobile
  Done 2026-09-10: src/pages/index.astro. The grid is now a scroll-snap track -
  three slides to a page above 980px, one below, arrows and an "n / total"
  counter under it, auto-advancing every 6s.
  It is a real scroll container rather than a transformed track, so swipe,
  trackpad, and keyboard scrolling all work natively and the arrows are just a
  nicer way to do what a drag already did. Without scripting it stays a
  swipeable row holding all six; the script unhides the arrows.
  Drift stops on hover, on focus, while the section is off screen, and entirely
  under prefers-reduced-motion (arrows still work there, they just jump). A
  manual swipe is adopted rather than fought, and a resize across 980px
  re-aligns to the nearest page.
  Verified at 1440px (2 pages) and 390px (6 pages): arrows step by the right
  amount, wrap at both ends, auto-advance fires and wraps, hover holds it, and
  a desktop-page-2 -> mobile resize lands on page 4 of 6 (same slide).
  This removes the "Show more" disclosure and with it the scroll-anchoring pin
  from the previous task - a horizontal track does not change page height, so
  there is nothing left to jump.
- [x] The entire free resource card should be linked, not just the link at the bottom
  Done 2026-09-10: src/pages/index.astro. The card's existing link now stretches
  over the whole card via a `::after` overlay, so image, title, description and
  corner are all clickable - one real link and one tab stop per card, not a
  second nested one.
  The overlay sits at z-index 3, above the image's rose tint, so the artwork is
  clickable too. The focus ring moved from the few words at the card's foot to
  the card itself, guarded behind `@supports selector(:has(*))` so a browser
  without :has() keeps the link's own ring instead of losing the indicator. The
  track gained top padding so that ring is not clipped by the scroller when the
  card is also lifted on hover.
  Each link now carries `aria-label="<cta>: <title>"` - three cards otherwise
  announced as just "Get the free ebook".
  Verified all six cards hit their own href from five points across the card, at
  1440px and 390px.
  Tradeoff: text inside a card is no longer selectable by dragging, which is
  inherent to a stretched link.
- [x] Free resource cards: the shadow gets cut off funky at the edges of the carousel — remove the shadow from these cards, or make the overflow visible
  Done 2026-09-10: kept the shadow, gave it room. src/pages/index.astro.
  "Overflow visible" is not available here - a horizontal scroll container
  clips vertically no matter what, since `overflow-x: auto` forces overflow-y
  off `visible`. The only way to let a shadow paint outside is padding inside
  the scroller.
  --shadow-card paints 19px below the card and --shadow-card-hover paints
  34 + 64/2 - 30 = 36px; the track only had 16px of room, so both ended in a
  hard line. Bottom padding is now 40px and the nav's margin-top dropped to 0,
  so the gap to the arrows is unchanged.
  Verified at 1440px (hovered card on page 2) and 390px: the shadow fades out
  instead of cutting, and the track still has no vertical overflow.
- [x] Show a video clip on the course page as well — maybe in the "Simple, self-paced, supported" section
  Done 2026-09-10: src/pages/course.astro. A silent looping 16:9 panel sits in
  the "Simple, self-paced, supported" section, between the heading and the five
  steps - so "move through the modules" has a picture attached before the
  reader is asked to imagine one.
  Same <VideoBackdrop> the home page uses: poster paints first, plays while on
  screen, pauses off it, still image under prefers-reduced-motion. The figure is
  aspect-ratio 16/9 at max 860px so nothing is cropped. 342x192 on a 390px
  phone, no horizontal overflow.
- [x] Keep the old video clip that was originally on the homepage hero
  Done 2026-09-10: restored from git (`git checkout 89ec114 -- hero-loop.mp4
  hero-loop.jpg`). The hero is back to the original 880x974 clip, which is
  sharper than anything the new 720p source can give a portrait crop.
  This reverses the earlier "use Video 2 for the homepage hero" task - you saw
  the comparison and chose the original. The 650x720 cut is not kept as a file;
  its exact ffmpeg recipe is in public/videos/clips/README.md so it can be
  regenerated in seconds if wanted.
  INTERPRETATION: I read "the old video clip that was originally here" as the
  home page hero I had replaced. If you meant keep it and also place it on the
  course page, that is a two-line change - say the word.
- [x] Use the video clip with the pelvis and the baby
  Done 2026-09-10: that is the clip in the course page section above -
  /videos/clips/teaching-pelvis-and-baby.mp4, cut from 2:03 of the new source,
  where Hailey has the doll in one hand and the pelvis model in the other.
- [x] Show a video clip on the course page as well — maybe in the "Simple, self-paced, supported" section
  Done 2026-09-10: already shipped - this repeats the task three entries above.
  No new work; verified the clip is still in src/pages/course.astro and in the
  build output.
- [x] Move the free resources carousel arrows to the sides of the cards
  Done 2026-09-10: src/pages/index.astro. Both arrows are absolutely positioned
  on the carousel, vertically centred on the card (not on the track, whose
  padding is lopsided to clear the shadow) and straddling the outer card edge -
  half in the gutter, half over the card, so they need no space the narrow
  breakpoints do not have. Measured dead centre on the card at 1440px and
  fully on screen at 390px (left edge 2px, right edge 388px of 390).
  They sit at z-index 4, above the card's stretched link, so clicking an arrow
  hits the arrow and not the card - verified by hit test.
  Also removed the "1 / 2" counter that used to sit between them: a page count
  works against the infinite feel asked for in the next task. Say the word if
  you want position shown some other way, dots for instance.
- [x] Free resources carousel should not slide backwards when it wraps — make it feel infinite
  Done 2026-09-10: the set is rendered twice (12 slides). Forward past the last
  card runs straight into the duplicate set, and once the scroll settles the
  script hops back by exactly one set - identical pixels, so the seam is
  invisible and nothing ever rewinds. Backward from the first card does the
  mirror: an instant hop into the duplicates, then a real backwards slide.
  The copies carry aria-hidden and their links tabindex="-1", so nothing is
  announced or focused twice.
  Verified: forward through the wrap, scrollLeft only rises (1260 -> 2517) then
  hops; the two positions either side of the hop differ by 0.4/255 mean abs
  pixel difference, i.e. JPEG noise. Backward from page one descends 2520 ->
  1260. Same in both directions at 390px.
- [x] Move the free resources arrows so they don't overlay the cards, and make them dark like the header's Enroll Now button
  Done 2026-09-10: src/pages/index.astro. The arrows now sit in their own
  columns beside the rail: the carousel's side padding is arrow width + a 20px
  gap, so there is 20px of clear space between each arrow and the nearest card
  at 1440px and at 1024px. At phone widths there is no room for a side column
  without squeezing the card, so below 980px the pair drops into a centred row
  under the card. It still never overlaps.
  Paint is the header's actual `btn-grad` class (same rose gradient, cream
  glyph, lift, and hover drift) with only the geometry overridden into a 44px
  circle. So if the Enroll Now button is ever restyled, these follow it.
  Verified at 1440, 1024, and 390px: no overlap with any visible card, the arrow
  centre hit-tests as the arrow, no horizontal overflow, and the infinite loop
  still slides backwards correctly from page one at all three widths.
