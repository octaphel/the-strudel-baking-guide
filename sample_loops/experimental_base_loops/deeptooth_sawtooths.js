stack(
  // HARD KICK — synth
  s("sine").note("c1")
    .penv(24).pcurve(1)
    .decay(0.25).sustain(0)
    .shape(0.4).gain(1.2)
    .struct("x ~ x ~"),
  s("noise")
    .decay(0.02).sustain(0)
    .hpf(1500).gain(0.5)
    .struct("x ~ x ~"),

  // PUNCHY BASS — 4 on the floor
  note("c2 c2 eb2 bb1")
    .s("sawtooth")
    .lpf(450).lpenv(5).lpd(0.07)
    .decay(0.12).sustain(0)
    .shape(0.35).gain(0.9),

  // SYNTH CHORDS
  note("c2 eb2 g2 bb2".fast(2)).s("sawtooth")
    .lpf(sine.range(300, 2000).slow(4))
    .room(0.4).gain(0.7),

  // OFFBEAT HI-HATS — sample "hh", hits on the "and" of each beat
  s("hh").struct("~ x ~ x ~ x ~ x")
    .gain(0.6)
    .hpf(6000)              // thins them out so they don't fight the synths
    .decay(0.04).sustain(0), // tight, closed-hat feel

  // ACTUAL DRUMS — snare on 2 & 4 + a ghost note
  s("sd").struct("~ x ~ x")
    .gain(0.7).room(0.2),
  s("sd").struct("~ ~ ~ x")
    .gain(0.22).room(0.2)   // ghost snare for a bit of human looseness
)