+++
title = 'Research Activity'
date = 2024-10-09T08:00:00
draft = false
[build]
render = 'never'
[cascade.build]
render = 'never'
+++
{{< projectTitle id="ismir-2025-paper" title="Conditional Diffusion as Latent Constraints for Unconditional Symbolic Music Generation Models"
title1="Paper" link1="https://ismir2025program.ismir.net/poster_133.html" icon1="fa-solid fa-newspaper"
title2="Code" link2="https://github.com/mpetteno/controllable-latent-diffusion" icon2="fa-brands fa-square-github">}}

Recent advances in latent diffusion models have demonstrated state-of-the-art performance in high-dimensional 
time-series data synthesis while providing flexible control through conditioning and guidance. However, existing 
methodologies primarily rely on musical context or natural language as the main modality of interacting with the 
generative process, which may not be ideal for expert users who seek precise fader-like control over specific musical 
attributes. In this work, we explore the application of denoising diffusion processes as plug-and-play latent 
constraints for unconditional symbolic music generation models. We focus on a framework that leverages a library of 
small conditional diffusion models operating as implicit probabilistic priors on the latents of a frozen unconditional 
backbone. While previous studies have explored domain-specific use cases, this work, to the best of our knowledge, is 
the first to demonstrate the versatility of such an approach across a diverse array of musical attributes, such as note 
density, pitch range, contour, and rhythm complexity. Our experiments show that diffusion-driven constraints outperform 
traditional attribute regularization and other latent constraints architectures, achieving significantly stronger 
correlations between target and generated attributes while maintaining high perceptual quality and diversity.

{{< projectKeywords "symbolic music, attribute-controlled generation, diffusion models, latent constraints" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle id="eusipco-2025-paper" title="On the Joint Minimization of Regularization Loss Functions in Deep Variational Bayesian Methods for Attribute-Controlled Symbolic Music Generation"
title1="Paper" link1="https://eusipco2025.org/wp-content/uploads/pdfs/0000441.pdf" icon1="fa-solid fa-newspaper"
title2="Code" link2="https://github.com/mpetteno/box-cox-latent-reg" icon2="fa-brands fa-square-github" >}}

Explicit latent variable models provide a flexible yet powerful framework for data synthesis, enabling controlled 
manipulation of generative factors. With latent variables drawn from a tractable probability density function that can 
be further constrained, these models enable continuous and semantically rich exploration of the output space by 
navigating their latent spaces. Structured latent representations are typically obtained through the joint minimization 
of regularization loss functions. In variational information bottleneck models, reconstruction loss and 
Kullback-Leibler Divergence (KLD) are often linearly combined with an auxiliary Attribute-Regularization (AR) loss. 
However, balancing KLD and AR turns out to be a very delicate matter. When KLD dominates over AR, generative models 
tend to lack controllability; when AR dominates over KLD, the stochastic encoder is encouraged to violate the standard 
normal prior. We explore this trade-off in the context of symbolic music generation with explicit control over 
continuous musical attributes. We show that existing approaches struggle to jointly minimize both regularization 
objectives, whereas suitable attribute transformations can help achieve both controllability and regularization of the 
target latent dimensions.

{{< projectKeywords "symbolic music, attribute-controlled generation, latent space regularization, power transforms" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Resolv - Machine Learning Development for Research"
title1="Code" link1="https://github.com/resolv-libs" icon1="fa-brands fa-square-github" >}}

Resolv is a system designed to streamline machine learning and deep learning workflows for research purposes. The focus
is on providing a comprehensive platform that facilitates model development, data processing, and infrastructure 
management. The system is organized into multiple components, each handling a specific part of the machine learning 
workflow. The goal is to create a flexible, scalable and reusable system that supports model experimentation, improves 
data processing through well-structured pipelines, and automates orchestration using modern tools like
{{< link href="https://keras.io/" title="Keras" target="_blank" >}},
{{< link href="https://beam.apache.org/" title="Apache Beam" target="_blank" >}} and
{{< link href="https://airflow.apache.org/" title="Apache Airflow" target="_blank" >}}. 
Resolv is built to serve as a flexible and modular system aimed at supporting research in machine 
learning and deep learning: the organization of the system allows for clear separation of tasks by making it easier to 
experiment with new ides and techniques.

{{< projectKeywords "deep learning, keras, apache-beam, apache-airflow" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Do Unconditional Deep Generative Models Spontaneously Learn How to Encode Human-Interpretable Musical Attributes?"
title1="Report" link1="https://github.com/mpetteno-polimi/MAEC-L04-Music-Generation/blob/main/assets/L04_Report.pdf" icon1="fa-solid fa-newspaper"
title2="Code" link2="https://github.com/mpetteno-polimi/MAEC-L04-Music-Generation?tab=readme-ov-file#maec---l04-project" icon2="fa-brands fa-square-github" >}}

This study is focused on investigating the presence of any correlations between the topological structure of the latent 
space and high-level features of the output. This project supplies a valid starting point for the systematic sampling of 
the pre-trained model of MusicVAE, a β-VAE by
{{< link href="https://magenta.tensorflow.org/" title="Magenta" target="_blank" >}}.
It offers ready-to-use tools for the analysis of the 2-bar and 16-bar pre-trained model configurations and it employ
{{< link href="https://en.wikipedia.org/wiki/Latin_hypercube_sampling" title="Latin Hypercube Sampling" target="_blank" >}}
to perform latent space regularization, which leads to an explicit control between the output’s characteristics and the 
locations of the samples within the embedding. The available tools automate sampling, output feature calculations and 
evaluation. The purpose of this work is to unveil the presence of eventual correlations between the topological 
structure of the latent space and high level features of the output, which could be relevant for future works involving 
the refining of post hoc conditioning in generative models.

{{< projectKeywords "variational autoencoders, latent space topological structure" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Fonti 4.0 - Evaluation of the performance of commercial STT and NER services"
title1="Paper" link1="https://ceur-ws.org/Vol-3033/paper45.pdf" icon1="fa-solid fa-newspaper"
title2="Code" link2="https://github.com/mpetteno/fonti4.0?tab=readme-ov-file#speech-to-text-experiments" icon2="fa-brands fa-square-github" >}}

The FONTI 4.0 project aims at exploring the suitability of automatic transcription and information extraction 
technologies for making historical oral sources available. In this work, we conducted an experiment to test the 
performance of two commercial speech-to-text services -
{{< link href="https://cloud.google.com/speech-to-text/" title="Google Cloud Speech-to-text" target="_blank" >}}
and 
{{< link href="https://aws.amazon.com/transcribe/" title="Amazon Transcribe" target="_blank" >}} - 
on digitized oral sources. We created an eight-hour corpus made of manually transcribed and annotated historical 
speech recordings in
{{< link href="https://en.wikipedia.org/wiki/Text_Encoding_Initiative" title="TEI" target="_blank" >}}
format. The results clearly show how audio quality and disturbing elements (e.g., overlaps, foreign words, etc.) impact 
on the automatic transcription, showing what needs to be improved for implementing an unsupervised transcription chain.

{{< projectKeywords "speech-to-text, named-entity-recognition, gcp, aws" >}}