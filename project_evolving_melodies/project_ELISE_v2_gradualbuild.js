setCpm(127/4);

// ==========================================
// MASTER SLIDERS — ride these live
// ==========================================
const sDelay   = slider(0.45, 0, 1, 0.01, "delay");
const sRoom    = slider(0.40, 0, 1, 0.01, "reverb");
const sShape   = slider(0.20, 0, 1, 0.01, "distortion");
const sDecay   = slider(0.18, 0.02, 0.6, 0.01, "mel decay");
const sLpfBase = slider(1500, 200, 6000, 10, "mel filter");
const sMelGain = slider(0.35, 0, 1, 0.01, "mel gain");
const sKick    = slider(0.50, 0, 1, 0.01, "kick");
const sSnare   = slider(0.30, 0, 1, 0.01, "snare");
const sHat     = slider(0.60, 0, 1, 0.01, "hats");
const sMaster  = slider(0.90, 0, 1, 0.01, "master");

// ==========================================
// BUILDING BLOCKS
// ==========================================
const MEL = "<[e5 eb5 e5 eb5 e5 b4 d5 c5 a4 ~ ~ ~ c4 e4 a4 b4] [e4 ab4 b4 c5 ~ ~ ~ ~ e5 eb5 e5 eb5 e5 b4 d5 c5]>";

const melody = note(MEL).sound("gm_fx_rain").decay(sDecay).sustain(0.1).shape(sShape);
const kick   = s("bd:4!4").gain(sKick);
const snare  = s("sd").struct("~ x ~ x");
const hatVel = "<.8 .4 .7 .4 .8 .4 .7 .4>";
const hats   = s("hh*8");
const ohat   = s("~ ~ oh ~");

// ==========================================
// A — INTRO (10 cyc ≈ 17s)
// ==========================================
const A = melody
  .slow(2)
  .lpf(1200)
  .room(sRoom.mul(1.5))
  .delay(sDelay.mul(1.5))
  .gain(sMelGain.mul(saw.range(0, 1).slow(10)));

// ==========================================
// B — RHYTHM FADE-IN (10 cyc ≈ 17s)
// ==========================================
const B = stack(
  melody.lpf(sLpfBase.mul(1.3)).room(sRoom).delay(sDelay).gain(sMelGain),
  hats.gain(hatVel.mul(sHat).mul(saw.range(0, 1).slow(10))),
  snare.room(0.2).gain(sSnare.mul(saw.range(0, 1).slow(10))),
  ohat.gain(sHat.mul(0.5).mul(saw.range(0, 1).slow(10)))
);

// ==========================================
// C — MAIN GROOVE (19 cyc ≈ 33s)
// ==========================================
const C = stack(
  melody.lpf(sLpfBase.mul(sine.range(0.8, 2).slow(8))).room(sRoom).delay(sDelay).gain(sMelGain),
  kick,
  snare.room(0.2).gain(sSnare),
  hats.gain(hatVel.mul(sHat)),
  ohat.gain(sHat.mul(0.5))
);

// ==========================================
// D — BUILD (16 cyc ≈ 28s)
// ==========================================
const D = stack(
  melody.lpf(sLpfBase.mul(saw.range(0.7, 4).slow(16)))
        .gain(sMelGain.mul(saw.range(1, 0.35).slow(16)))
        .room(sRoom).delay(sDelay),
  kick,
  s("sd").struct("~ ~ ~ x")
    .fast(saw.range(1, 8).slow(16))
    .gain(sSnare.mul(saw.range(0.25, 1).slow(16)))
    .room(0.2),
  hats.fast("<1 1 1 1 1.5 1.5 1.5 1.5 2 2 2 2 2 2 2 2>")
       .gain(hatVel.mul(sHat.mul(0.9))),
  s("white!4")
    .attack(saw.range(0.1, 1.5).slow(16))
    .hpf(saw.range(800, 9000).slow(16))
    .gain(saw.range(0.02, 0.3).slow(16)),
  s("sawtooth")
    .n("<0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15>")
    .scale("a:minor")
    .lpf(saw.range(800, 5000).slow(16))
    .gain(saw.range(0, 0.14).slow(16))
);

// ==========================================
// E — OUTRO (24 cyc ≈ 42s)
// ==========================================
const E = melody
  .slow("<2 2 4 4>")
  .lpf(saw.range(2000, 600).slow(24))
  .room(sRoom.mul(1.5))
  .delay(sDelay.mul(1.5))
  .gain(sMelGain.mul(saw.range(1, 0).slow(24)));

// ==========================================
// ARRANGE — 80 cycles ≈ 2:21
// ==========================================
$: arrange(
  [10, A],
  [10, B],
  [19, C],
  [16, D],
  [1,  s("~")],
  [24, E]
).gain(sMaster);
