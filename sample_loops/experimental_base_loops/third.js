setcps(138/60/4) // 138 BPM

// Driving Kick & Percussion
$: s("bd*4, [~ oh]*4, hh*16")
  .bank("RolandTR909")
  .gain("0.95 0.8 0.4 0.7")

// Rolling Bass
$: note("a1*16")
  .struct("~ x x x ~ x x x ~ x x x ~ x x x")
  .s("sawtooth")
  .lpf(600)
  .decay(0.15)
  .sustain(0)
  .gain(0.85)

// Trance Arp Lead
$: n("<0 2 4 7 9 7 4 2>*2")
  .scale("A:minor")
  .octave(4)
  .s("supersaw")
  .lpf(sine.range(600, 3200).slow(8)) // Automated filter sweep
  .delay(0.5)
  .delaytime(0.375)
  .room(0.6)
  .gain(0.6)