setcps(140/60/4) // 140 BPM Half-Time Dubstep

// ==========================================
// 1. SECTION FADERS (0 = MUTE, 1 = FULL)
// ==========================================
let drumVol   = slider(0.2, 0, 1, 0.05)    // Half-time kick, snare & hats
let subVol    = slider(1, 0, 1, 0.05) // Heavy clean sub-bass
let wobbleVol = slider(0.2, 0, 1, 0.05) // Filthy FM/saw wobble bass
let arpVol    = slider(0.2, 0, 1, 0.05) // Eerie dark intro/breakdown pluck

// ==========================================
// 2. WOBBLE & DROP MACROS
// ==========================================
let wobbleSpd = slider(10, 1, 16, 1)         // LFO speed (1=whole, 4=quarter, 8=eighth)
let wobbleCut = slider(1900, 300, 4500, 50) // Wobble filter bite
let gritDrive = slider(0.2, 0, 0.85, 0.05) // Distortion saturation
let riserAmt  = slider(0, 0, 1, 0.05)       // Drag 0 -> 1 before the drop!

// ==========================================
// 3. HALF-TIME DRUMS (KICK ON 1, SNARE ON 3)
// ==========================================
$: stack(
  s("bd ~ ~ [~ bd] ~ ~ bd ~").gain(1).shape(0.25),
  s("~ ~ sd ~ ~ ~ sd ~").gain(0.95).room(0.35),
  s("hh*8").gain("0.35 0.6 0.3 0.7").hpf(5000)
).bank("RolandTR909")
 .gain(drumVol)

// ==========================================
// 4. CLEAN SUB-BASS (CHEST WEIGHT)
// ==========================================
$: note("<f1 ~ f1 ~ db1 ~ c1 ~>")
  .s("sine")
  .lpf(140)
  .decay(0.45)
  .sustain(0.3)
  .gain(subVol)

// ==========================================
// 5. WOBBLE & SCREECH BASS
// ==========================================
$: note("<f1 f1 f1 [f1 ab1] db1 db1 c1 [eb1 c1]>")
  .s("sawtooth")
  .detune(0.25)
  .lpf(sine.range(180, wobbleCut).fast(wobbleSpd)) // LFO wobble modulation
  .lpq(8)
  .shape(gritDrive)
  .room(0.2)
  .gain(wobbleVol)

// ==========================================
// 6. DARK ATMOSPHERIC PLUCK (INTRO / BREAKDOWN)
// ==========================================
$: n("<0 3 7 8 7 3 0 -1>*2")
  .scale("F4:minor")
  .s("triangle")
  .decay(0.18)
  .sustain(0)
  .delay(0.6)
  .delaytime(0.375)
  .room(0.75)
  .gain(arpVol)

// ==========================================
// 7. ONE-SLIDER BUILD-UP RISER
// ==========================================
$: stack(
  s("white").lpf(riserAmt * 5000 + 200).lpq(6).gain(riserAmt * 0.45),
  s("sd*16").bank("RolandTR909").speed(0.8 + riserAmt * 0.8).gain(riserAmt * 0.7)
)