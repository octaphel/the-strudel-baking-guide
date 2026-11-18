setcps(126/60/4) // 126 BPM

// Drums
$: s("bd*4, [~ cp]*2, [~ hh]*4")
  .bank("RolandTR909")
  .gain(0.9)

// Pumping Bassline
$: note("<f1 f1 ab1 c2>")
  .s("sawtooth")
  .lpf(450)
  .lpq(6)
  .decay(0.25)
  .sustain(0)
  .gain(0.8)

// Off-beat House Stabs
$: note("<[f3,ab3,c4] [f3,ab3,c4] [ab3,c4,eb4] [c4,eb4,g4]>")
  .struct("~ x ~ x ~ x ~ x")
  .s("supersaw")
  .lpf(1400)
  .decay(0.15)
  .sustain(0)
  .room(0.4)
  .gain(0.5)