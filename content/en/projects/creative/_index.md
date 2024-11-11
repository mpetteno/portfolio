+++
title = 'Creative Projects'
date = 2023-01-01T08:30:00-07:00
draft = false
+++
{{< projectTitle title="Ego"
title1="Code" link1="https://github.com/mpetteno-polimi/CPAC-Ego?tab=readme-ov-file#ego" icon1="fa-brands fa-square-github"
title2="Live Demo" link2="https://mpetteno-polimi.github.io/CPAC-Ego/" icon2="fa-solid fa-desktop" >}}
{{< youtube id="zK5xQAdvrfw" loading="lazy" class="flex justify-center m-auto mb-m m:float-right m:ml-m m:mb-none" >}}

Ego is a project that is meant to explore the idea of human perception, in particular the idea of identity and self 
consciousness and the way it is distorted and biased. The project has been implemented as a webapp to make the experience 
available to everyone, but it can also be imagined in the context of an artistic installation: the user's first 
approach would be defined by the vision of a cloud of swirling particles, while an undefined drone sound is playing. 
Once the user is close enough to be detected by our system the cloud will start to slowly morph into a shape resembling 
its face: the user is now witnessing their identity take shape. A repeating melody would be heard, whose generation is 
based on the user's face, in particular on their somatic traits and their current mood. The intrigued user might now 
get even closer, in which case they'll hear the music become more and more intense, in a higher pitch and faster, 
representing an ever-growing feedback loop of self consciousness. The final phase of Ego will show the user their face 
being morphed into a new shape, reminiscent of a
{{< link href="https://en.wikipedia.org/wiki/Rorschach_test" title="Rorschach Test" target="_blank" >}},
to finally express the idea of the distortion of the self caused by the filtering of external point of view.

{{< projectKeywords "three.js, glsl, svelte, mediapipe, max4live, tone.js" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Pulseq" 
    title1="Code" link1="https://github.com/mpetteno-polimi/ACTM-Pulseq?tab=readme-ov-file#pulseq" icon1="fa-brands fa-square-github" 
    title2="Live Demo" link2="https://mpetteno-polimi.github.io/ACTM-Pulseq" icon2="fa-solid fa-desktop" >}}
{{< giphy id="L21SKDrcwTMnoDNDSC" class="medium-img m-auto mb-m m:float-right m:ml-m m:mb-none" size="230px">}}

Pulseq is a fractal sequencer implemented as a single-page application (SPA) and inspired by the Eurorack module 
{{< link href="https://www.qubitelectronix.com/shop/p/bloom" title="Bloom by Qu-Bit Electronix" target="_blank" >}}.
It uses a user-constructed sequence to recursively generate a tree of related subsequences that are strung together to 
create large musical sequences that relate back to the originally programmed sequence. First, the user programs the main
sequence which from now on will (called *trunk*) than the *branches* and *path* knobs can be used to control the tree 
generation. Beside these knobs, the user has the possibility to play the sequences with eight different sounds and to 
apply three different pre-set effects: a reverb, a ping-pong delay and a distortion.

{{< projectKeywords "svelte, tone.js, glsl" >}}

<div class="clear-both"></div>
