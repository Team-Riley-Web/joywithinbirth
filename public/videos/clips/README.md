# Clip library

Silent, seamlessly looping b-roll cut for `VideoBackdrop`. Nothing here is wired
into a page yet — drop one in with its matching `.jpg` poster:

```astro
<VideoBackdrop
  src="/videos/clips/teaching-pelvis-model.mp4"
  poster="/videos/clips/teaching-pelvis-model.jpg"
/>
```

Source: `Joy Within Birth- Video 2.mp4` (1280x720, 29.97fps, ~950 kbps).
Each clip is 8s, 1280x720, 30fps, no audio, CRF 23, faststart.

| File | Source in | What it shows |
|---|---|---|
| `teaching-pelvis-and-baby` | 2:03 | Hailey with the baby doll in one hand and the pelvis model in the other |
| `teaching-baby-position`   | 2:31 | Walking the doll through the pelvis to show position |
| `teaching-pelvis-model`    | 4:30 | Holding the pelvis model up to camera |
| `teaching-standing`        | 5:55 | Standing, holding the doll, wider framing |

## The portrait hero cut

A 47:52 portrait crop of the same source was tried as `hero-loop.mp4` and then
reverted — the original hero (880x974) is sharper than anything this 720p source
can give a portrait crop (650x720 at best). The cut itself is fine if it is ever
wanted again:

```sh
SRC="Joy Within Birth- Video 2.mp4"
ffmpeg -ss 470 -t 14 -i "$SRC" -ss 468.8 -t 1.2 -i "$SRC" \
  -filter_complex "[0:v]crop=650:720:302:0,setpts=PTS-STARTPTS,fps=24[a];\
                   [1:v]crop=650:720:302:0,setpts=PTS-STARTPTS,fps=24[b];\
                   [a][b]xfade=transition=fade:duration=1.2:offset=12.8,format=yuv420p[v]" \
  -map "[v]" -an -c:v libx264 -preset slow -crf 21 -movflags +faststart hero-loop.mp4
```

7:50 is a clean stretch: she is talking to camera with no props, between two
slides (slides run to ~7:33 and resume ~9:06). Poster from 5s in, where she is
looking up.

## Cutting more

`scratchpad/cut.sh <start> <duration> <fade> <out.mp4> [filter]` closes the loop
by crossfading into the `<fade>` seconds immediately BEFORE `<start>`, so the
last frame lands back on the first. Using the clip's own opening seconds instead
closes the loop one fade-length late and visibly jumps.

Verify a loop by comparing the first and last frames as PNG (not JPEG — the
artifacts swamp the signal) against a mid-clip control. These four measure a
seam of 1.5–2.9 against controls of 5.2–11.7.
