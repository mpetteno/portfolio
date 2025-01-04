+++
title = 'Computer Music Projects'
date = 2024-10-09T08:00:00
draft = false
[_build]
render = 'never'
[cascade._build]
render = 'never'
+++
{{< projectTitle title="OranJam"
title1="Code" link1="https://github.com/mpetteno-polimi/CMLS-Homework2?tab=readme-ov-file#oranjam" icon1="fa-brands fa-square-github" >}}
{{< figure src="/oranjam-gui.png" alt="OranJam GUI" class="large-img m-auto mb-m m:float-left m:mr-m m:mb-none" >}}

OranJam is an audio plugin that implements a polyphonic subtractive synthesizer. The software is implemented in 
C++ with the aid of {{< link href="https://juce.com/" title="JUCE" target="_blank" >}}. The DSP chain includes several 
functional blocks: an oscillators bank, a white noise generator, an ADSR envelope, a filters bank and a LFO. A GUI 
enables the user to control the available parameters, such as waveform for each oscillator, cutoff frequency and 
resonance for each filter.

{{< projectKeywords "juce, c++, cmake" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="HarMMMLonizer"
title1="Code" link1="https://github.com/mpetteno-polimi/CMLS-Homework1?tab=readme-ov-file#harmmmlonizer" icon1="fa-brands fa-square-github" >}}
{{< figure src="/harmonizer-gui.png" alt="HarMMMLonizer GUI" class="large-img m-auto mb-m m:float-right m:ml-m m:mb-none" >}}

HarMMMLonizer is a real-time harmonizer implemented in 
{{< link href="https://supercollider.github.io/" title="SuperCollider" target="_blank" >}}. The software implements a 
DSP system featuring mono input and stereo output. The DSP chain includes a delay line block which supports different 
feedback setups. Furthermore, the GUI enables the musician to control available parameters, each specifically related
to pitch shifting, delay effect and master. HarMMMLonizer supports three additional pitched voices to build the harmony,
but a global variable within the code enables the programmer to change the number of voices.

{{< projectKeywords "supercollider, harmonizer, delay lines, crosstalk delay feedback" >}}

<div class="m:mb-l clear-both"></div>
