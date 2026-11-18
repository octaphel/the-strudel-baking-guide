setcps(150/60/4) // 150 BPM Hardbass

// ==========================================
// 1. SECTION FADERS (0 = MUTE, 1 = FULL)
// ==========================================
let kickVol  = slider(0.1, 0, 1, 0.05)    // Punchy four-on-the-floor kick
let percVol  = slider(0.3, 0, 1, 0.05) // Off-beat hats & crisp claps
let donkVol  = slider(0.25, 0, 1, 0.05) // Signature hollow off-beat donk
let vocalVol = slider(0.2, 0, 1, 0.05) // Rhythmic vocal hype chops
let leadVol  = slider(0.55, 0, 1, 0.05)  // Anthemic eastern-style synth lead

// ==========================================
// 2. DONK, VOCAL & BUILD-UP MACROS
// ==========================================
let donkPitch = slider(1, 0.5, 2, 0.25)      // Shift donk octave/pitch live
let donkBite  = slider(2300, 500, 4000, 50)  // Hollow metallic resonance
let vocalSpd  = slider(1.45, 0.7, 1.8, 0.05) // Pitch/formant of vocal chops
let riserAmt  = slider(0, 0, 1, 0.05)        // Drag 0 -> 1 before the drop!

// ==========================================
// 3. HARD PUNCHY KICK
// ==========================================
$: s("bd*4")
  .bank("RolandTR909")
  .shape(0.45)
  .lpf(2200)
  .gain(kickVol)

// ==========================================
// 4. OFF-BEAT HATS & CLAPS
// ==========================================
$: stack(
  s("[~ cp]*2").gain(0.85).room(0.25),
  s("[~ oh]*4").gain(0.75).decay(0.16),
  s("hh*16").gain("0.2 0.45 0.25 0.5").hpf(5000)
).bank("RolandTR909")
 .gain(percVol)

// ==========================================
// 5. SIGNATURE OFF-BEAT DONK BASS
// ==========================================
$: note("<f2 f2 f2 f2 db2 db2 c2 c2>*4")
  .struct("~ x ~ x ~ x ~ x")
  .s("square")
  .detune(0.15)
  .lpf(donkBite)
  .lpq(11)
  .decay(0.14)
  .sustain(0)
  .speed(donkPitch)
  .shape(0.35)
  .gain(donkVol)

// ==========================================
// 6. RHYTHMIC VOCAL CHOP & CHANT LAYER
// ==========================================
$: s("numbers:1 numbers:3 [numbers:4 numbers:2] numbers:5")
  .struct("x ~ x x ~ x [x x] ~")
  .speed(vocalSpd)
  .hpf(450)
  .lpf(3500)
  .shape(0.3)
  .room(0.3)
  .gain(vocalVol)

// ==========================================
// 7. ANTHEMIC HARDBASS SYNTH LEAD
// ==========================================
$: n("<0 0 3 2 0 -1 0 3 5 3 2 0 -1 -1 0 ~>*2")
  .scale("F4:phrygian")
  .s("sawtooth")
  .detune(0.25)
  .lpf(2800)
  .decay(0.2)
  .sustain(0.15)
  .delay(0.35)
  .delaytime(0.25)
  .room(0.4)
  .gain(leadVol)

// ==========================================
// 8. ONE-SLIDER BUILD-UP RISER (FIXED)
// ==========================================
$: stack(
  s("white")
    .lpf(riserAmt.range(250, 6500))
    .lpq(7)
    .gain(riserAmt.mul(0.5)),
  s("sd*16")
    .bank("RolandTR909")
    .speed(riserAmt.range(0.85, 1.85))
    .gain(riserAmt.mul(0.8))
)