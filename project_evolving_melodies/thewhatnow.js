
// =====================================================
// OCTAPHEL - thewhatnow?
// HYPNOTIC MACHINE
//
// Progressive / Industrial Techno
// 126 BPM | F# minor | 4/4
// 212 bars | approximately 6:44
//
// Arrangement:
// 00:00 - 01:30  Minimal intro
// 01:30 - 03:30  Main groove
// 03:30 - 04:46  Breakdown
// 04:46 - 06:02  Peak
// 06:02 - 06:44  Outro
// =====================================================

setcpm(31.5);

// =====================================================
// MIXER - ADJUST THESE WHILE PLAYING
// =====================================================

const master = slider(0.80, 0, 1.2, 0.01);

const introLevel = slider(0.65, 0, 1, 0.01);
const grooveLevel = slider(0.85, 0, 1.2, 0.01);
const breakLevel = slider(0.75, 0, 1.2, 0.01);
const peakLevel = slider(1.00, 0, 1.2, 0.01);
const outroLevel = slider(0.70, 0, 1, 0.01);

const bassLevel = slider(0.75, 0, 1.2, 0.01);
const kickLevel = slider(0.90, 0, 1.2, 0.01);

const atmosphere = slider(0.30, 0, 1, 0.01);
const echo = slider(0.20, 0, 1, 0.01);
const brightness = slider(4500, 300, 12000, 100);

// =====================================================
// 01 - SOUND PALETTE
// =====================================================

// Main kick
const kick = s("bd*4")
  .gain(kickLevel);

// Secondary percussion
const clap = s("~ cp ~ cp")
  .gain(0.38);

const closedHat = s("hh*8")
  .gain("0.30 0.15 0.30 0.15 0.30 0.15 0.30 0.15");

const openHat = s("~ oh ~ oh")
  .gain(0.28);

// Subtle industrial percussion
const metallic = s("~ ~ [rim ~] ~")
  .gain(0.22)
  .room(0.3)
  .orbit(3);

// =====================================================
// 02 - BASS ENGINE
// =====================================================

// Rolling bassline
const bass = note(
  "f#2 f#2 a2 f#2"
)
  .s("sawtooth")
  .lpf(650)
  .gain(bassLevel);

// Deep sub layer
const sub = note(
  "f#1 ~ f#1 ~"
)
  .s("sine")
  .gain(0.48);

// Rhythmic bass variation
const bassAlt = note(
  "f#2 ~ f#2 a2"
)
  .s("sawtooth")
  .lpf(850)
  .gain(bassLevel * 0.65);

// Short industrial stab
const stab = note(
  "f#3 ~ ~ c#3"
)
  .s("sawtooth")
  .lpf(1800)
  .decay(0.15)
  .sustain(0)
  .gain(0.20);

// =====================================================
// 03 - ATMOSPHERIC ELEMENTS
// =====================================================

// Long evolving pad
const pad = note(
  "<[f#3,a3,c#4] [d3,f#3,a3] [a2,c#3,e3] [e3,g#3,b3]>"
)
  .s("triangle")
  .attack(1.5)
  .release(3)
  .gain(0.16)
  .room(atmosphere)
  .roomsize(6)
  .orbit(2);

// Atmospheric pulse
const pulse = note("f#4 ~ c#5 ~")
  .s("sine")
  .attack(0.2)
  .release(0.8)
  .gain(0.10)
  .delay(echo)
  .delaytime(0.75)
  .delayfeedback(0.45)
  .room(0.4)
  .orbit(4);

// =====================================================
// 04 - MELODIC ELEMENTS
// =====================================================

// Restrained two-note motif
const motif = note(
  "f#5 ~ c#5 ~"
)
  .s("triangle")
  .attack(0.05)
  .release(0.6)
  .gain(0.18)
  .delay(echo)
  .delaytime(0.375)
  .delayfeedback(0.35)
  .room(atmosphere)
  .orbit(2);

// Breakdown melody
const breakdownMelody = note(
  "f#5 a5 c#6 a5 e5 c#5"
)
  .s("sawtooth")
  .lpf(brightness)
  .attack(0.4)
  .release(1)
  .gain(0.20)
  .room(0.65)
  .roomsize(8)
  .delay(0.25)
  .delaytime(0.75)
  .orbit(5);

// =====================================================
// 05 - BUILDING TEXTURES
// =====================================================

// Increasing high-frequency energy
const buildHat = s("hh*16")
  .gain(0.24)
  .lpf(sine.range(1000, 10000).slow(16));

// Snare tension
const snareBuild = s("~ sd ~ sd")
  .gain(0.38);

// Faster tension roll
const snareRoll = s("sd*8")
  .gain(0.32);

// Noise-like rising synth
const riser = note("f#4")
  .s("sawtooth")
  .lpf(sine.range(300, 9000).slow(16))
  .attack(0.8)
  .release(0.5)
  .gain(0.12)
  .room(0.5)
  .orbit(6);

// =====================================================
// 06 - INTRO
// 47 bars / 1:29.5
// =====================================================

const intro = stack(
  s("bd ~ ~ ~").gain(0.55),
  s("~ ~ ~ hh").gain(0.10),
  pad,
  pulse,
  metallic
).gain(introLevel);

// =====================================================
// 07 - MAIN GROOVE
// 63 bars / 2:00
// =====================================================

const groove = stack(
  kick,
  clap,
  closedHat,
  openHat,
  metallic,
  bass,
  sub,
  stab,
  motif
).gain(grooveLevel);

// =====================================================
// 08 - BREAKDOWN
// 40 bars / 1:16
// =====================================================

const breakdown = stack(
  pad.gain(1.3),
  pulse.gain(1.3),
  breakdownMelody,
  metallic.gain(0.4)
).gain(breakLevel);

// =====================================================
// 09 - PEAK
// 40 bars / 1:16
// =====================================================

const peak = stack(
  kick,
  clap,
  closedHat,
  openHat,
  metallic,
  bass.gain(1.15),
  bassAlt,
  sub,
  stab,
  motif.gain(0.6),
  breakdownMelody.gain(0.65)
).gain(peakLevel);

// =====================================================
// 10 - OUTRO
// 22 bars / 0:42
// =====================================================

// Progressive gain reduction
const fade = "<0.75 0.65 0.55 0.45 0.35 0.25 0.15 0.08>";

const outro = stack(
  s("bd ~ ~ ~")
    .gain(fade),

  s("hh*4")
    .gain(fade),

  bass.gain(0.45),
  pad.gain(0.8),
  pulse.gain(0.7)
).gain(outroLevel);

// =====================================================
// 11 - COMPLETE ARRANGEMENT
// =====================================================

$: arrange(
  [47, intro],
  [63, groove],
  [40, breakdown],
  [40, peak],
  [22, outro]
).gain(master);
