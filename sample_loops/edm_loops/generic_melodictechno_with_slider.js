setcps(126/60/4) // 126 BPM Melodic Techno

// ==========================================
// 1. SECTION FADERS (0 = MUTE, 1 = FULL)
// ==========================================
let kickVol   = slider(0.25, 0, 1, 0.05)    // Four-on-the-floor kick
let percVol   = slider(0.25, 0, 1, 0.05)  // Claps, open hats, and 16th hats
let bassVol   = slider(0.6, 0, 1, 0.05)    // Rolling sub/mid bassline
let leadVol   = slider(1, 0, 1, 0.05) // Hypnotic arpeggio lead
let padVol    = slider(0.15, 0, 1, 0.05)  // Dark background chords

// ==========================================
// 2. SOUND DESIGN & BUILD-UP MACROS
// ==========================================
let bassCut   = slider(660, 120, 2200, 10)   // Bass filter frequency
let leadCut   = slider(3525, 200, 5000, 25)  // Lead synth sweep
let leadRes   = slider(8.5, 1, 16, 0.5)        // Lead filter resonance
let washSpace = slider(0.45, 0, 0.95, 0.05)  // Delay & reverb wash

// ==========================================
// 3. KICK DRUM
// ==========================================
$: s("bd*4")
  .bank("RolandTR909")
  .shape(0.2)
  .gain(kickVol)

// ==========================================
// 4. PERCUSSION & HATS
// ==========================================
$: stack(
  s("[~ cp]*2").gain(0.75).room(0.3),
  s("[~ oh]*4").gain(0.65).decay(0.18),
  s("hh*16").gain("0.3 0.55 0.25 0.6").hpf(4000)
).bank("RolandTR909")
 .gain(percVol)

// ==========================================
// 5. ROLLING MELODIC BASSLINE
// ==========================================
$: note("<f1*16 db1*16 ab1*16 eb1*16>")
  .struct("~ x x x ~ x x x ~ x x x ~ x x x")
  .s("sawtooth")
  .lpf(bassCut)
  .lpq(5)
  .decay(0.16)
  .sustain(0)
  .gain(bassVol)

// ==========================================
// 6. HYPNOTIC ARPEGGIO LEAD (FIXED)
// ==========================================
$: n("<0 2 4 7 9 7 4 2 0 4 7 11 9 7 4 2>*2")
  .scale("F4:minor")
  .s("sawtooth")
  .detune(0.2) // Gives it a thick, wide supersaw-style chorus
  .lpf(leadCut)
  .lpq(leadRes)
  .decay(0.22)
  .sustain(0.1)
  .delay(washSpace)
  .delaytime(0.375)
  .room(washSpace)
  .gain(leadVol)

// ==========================================
// 7. DARK ATMOSPHERIC PAD
// ==========================================
$: note("<[f2,ab2,c3,g3] [db2,f2,ab2,eb3] [ab2,c3,eb3,bb3] [eb2,g2,bb2,f3]>")
  .s("sawtooth")
  .lpf(850)
  .attack(0.8)
  .release(1.2)
  .room(0.8)
  .gain(padVol)