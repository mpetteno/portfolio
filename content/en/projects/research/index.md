+++
title = 'Research Activity'
date = 2024-10-09T08:00:00
draft = false
[_build]
render = 'never'
[cascade._build]
render = 'never'
+++
{{< projectTitle id="eusipco-2025-paper" title="Conditional Diffusion as Latent Constraints for Unconditional Symbolic Music Generation Models"
title1="Code" link1="https://github.com/mpetteno/controllable-latent-diffusion" icon1="fa-brands fa-square-github"
title2="Dataset" link2="https://zenodo.org/records/13369389" icon2="fa-solid fa-database" >}}

We explore the application of denoising diffusion processes as plug-and-play latent constraints for unconditional 
symbolic music generation models. Recent advances in latent diffusion models have demonstrated state-of-the-art 
performance in high-dimensional time-series data synthesis while providing flexible control through conditioning and 
guidance. However, existing methodologies primarily rely on musical context or natural language as the main modality of 
interacting with the generative process, which may not be ideal for expert users seeking precise fader-like manipulation 
of specific musical attributes. In this work, we focus on a framework leveraging a library of small conditional 
diffusion models operating as implicit probabilistic priors on the latents of a frozen unconditional backbone. While
previous studies have explored domain-specific use cases, this work, to the best of our knowledge, is the first to 
demonstrate the versatility of such an approach across a diverse array of musical attributes, such as note density, 
pitch range, contour, and rhythm complexity. Our experiments show that diffusion-driven constraints outperform 
traditional attribute regularization and other latent constraints architectures, achieving significantly stronger 
correlations between target and generated attributes while maintaining high perceptual quality and diversity.

{{< projectKeywords "symbolic music, attribute-controlled generation, diffusion models, latent constraints" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle id="eusipco-2025-paper" title="On the Joint Minimization of Regularization Loss Functions in Deep Variational Bayesian Methods for Attribute-Controlled Symbolic Music Generation"
title1="Code" link1="https://github.com/mpetteno/box-cox-latent-reg" icon1="fa-brands fa-square-github" 
title2="Dataset" link2="https://zenodo.org/records/13369389" icon2="fa-solid fa-database" >}}

This research project in Deep Learning builds on top of the 
{{< link href="https://arxiv.org/abs/1612.00410" title="variational information bottleneck (VIB)" target="_blank" >}}
framework (a generalization of the well known VAE) and it uses a supervised multi-objective learning approach that 
allows to encode a particular attribute relative to the input in a designated dimension of the latent space by 
introducing a regularization term. This offer precise control over a specific attribute of the content to generate by 
manipulating latent variables unlike prompt-based generative models that often lack this ability. The novel 
contribution of this research consists in the introduction of an invertible transformation for the univariate 
distribution of the attribute to encode: the goal of this proposal is to make this distribution as close as possible to
the prior distribution used choose for the latent space; moreover, being the transformation invertible, it allows to 
map the encoded property back to the original domain improving the model interpretability. The method has been applied 
in the symbolic music domain, particularly in the task of generating 4 bars melodies and the dataset created to train
the models is publicly available on Zenodo (link above).

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
title1="Code" link1="https://github.com/mpetteno-polimi/MAEC-L04-Music-Generation?tab=readme-ov-file#maec---l04-project" icon1="fa-brands fa-square-github"
title2="Article" link2="https://github.com/mpetteno-polimi/MAEC-L04-Music-Generation/blob/main/assets/L04_Report.pdf" icon2="fa-solid fa-newspaper" >}}

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
title1="Code" link1="https://github.com/mpetteno/fonti4.0?tab=readme-ov-file#speech-to-text-experiments" icon1="fa-brands fa-square-github" 
title2="Article" link2="https://ceur-ws.org/Vol-3033/paper45.pdf" icon2="fa-solid fa-newspaper" >}}

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