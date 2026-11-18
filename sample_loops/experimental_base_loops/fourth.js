setcps(135/60/4) // 135 BPM

// Heavy Kick
$: s("bd*4").bank("RolandTR909").shape(0.3).gain(1)

// Chopped Amen Break
$: s("breaks165")
  .slice(8, "0 1 2 3 4 5 [6 7] 2")
  .lpf(2800)
  .gain(0.75)

// Squelchy 303 Acid Line
$: note("c2 c2 c3 c2 eb2 c2 g2 bb1")
  .s("sawtooth")
  .lpf(perlin.range(300, 2200))
  .lpq(14) // High resonance for acid squelch
  .decay(0.18)
  .sustain(0.1)
  .shape(0.4)
  .gain(0.7)