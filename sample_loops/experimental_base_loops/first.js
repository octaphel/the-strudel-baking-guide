setCpm(140/4)

// KICK
$: s("bd*4")


// BASS
$: note("<g1 ~ eb1 ~>")
  .s("sawtooth")
  .lpf(slider(808, 80, 1200))
  .gain(0.6)


// HI-HATS
$: s("hh*8").gain("<0.15 0.3 0.2 0.4>")


// SNARE
$: s("~ sd ~ sd").gain(0.7)


// CHORDS
$: note("<[g3,bb3,d4] [eb3,g3,bb3] [f3,a3,c4] [d3,f3,a3]>")
  .s("sawtooth")
  .lpf(sine.range(400, 4000).slow(8))
  .gain(0.2)


// ARPEGGIO
$: note("g4 bb4 d5 bb4 eb5 d5 bb4 g4")
  .s("triangle")
  .fast(2)
  .delay(0.25)
  .gain(0.25)