+++
title = 'Computer Music Projects'
date = 2023-01-01T08:30:00-07:00
draft = false
+++
{{< projectTitle title="OranJam"
title1="Code" link1="https://github.com/mpetteno-polimi/CMLS-Homework2?tab=readme-ov-file#oranjam" icon1="fa-brands fa-square-github" >}}
{{< figure src="/oranjam-gui.png" alt="OranJam GUI" class="large-img m-auto mb-m m:float-left m:mr-m m:mb-none" >}}

OranJam is an audio plugin that implements a polyphonic subtractive synthesizer. The software is implemented in 
C++ with the aid of JUCE framework, a very powerful multi-platform and cross-standard library which
supports different operating systems (MacOS, Windows, Linux) and plugin standards available on the market today (VST, 
VST3, Audio Unit, Audio Unit V3, RTAS, AAX). The DSP chain includes several functional blocks: an oscillators bank, a 
white noise generator, an ADSR envelope, a filters bank and a LFO. A Graphical User Interface (Figure below) enables the 
user to control available parameters, such as Waveform for each oscillator, CutOff Frequency and Resonance for each 
filter.

{{< projectKeywords "juce, c++, cmake" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="HarMMMLonizer"
title1="Code" link1="https://github.com/mpetteno-polimi/CMLS-Homework1?tab=readme-ov-file#harmmmlonizer" icon1="fa-brands fa-square-github" >}}
{{< figure src="/harmonizer-gui.png" alt="HarMMMLonizer GUI" class="large-img m-auto mb-m m:float-right m:ml-m m:mb-none" >}}

HarMMMLonizer is a real-time harmonizer implemented in SuperCollider. The software implements a DSP system featuring 
mono input and stereo output. The DSP chain includes a delay line block which supports different feedback setups. 
Furthermore, a graphical user interface enables the musician to control available parameters, each specifically related
to pitch shifting, delay effect and master. HarMMMLonizer supports three additional pitched voices to build the harmony,
but a global variable within the code enables the programmer to change the number of voices.

{{< projectKeywords "supercollider, harmonizer, delay lines, crosstalk delay feedback" >}}

<div class="m:mb-l clear-both"></div>
