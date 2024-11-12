+++
title = 'Research Activity'
date = 2023-01-01T08:30:00-07:00
draft = false
+++
{{< projectTitle title="Latent Space Regularization via Normalizing Attribute Transformations"
title1="Code" link1="https://github.com/mpetteno-polimi/thesis?tab=readme-ov-file#latent-space-regularization-via-normalizing-attribute-transformations-for-symbolic-music-generation" icon1="fa-brands fa-square-github" 
title2="Dataset" link2="https://zenodo.org/records/13369389" icon2="fa-solid fa-database" >}}

Surely my most relevant project in the Deep Learning field was my thesis work, of which you can find the article and its 
executive summary attached. In short, the core approach of it is built on top of the variational information bottleneck
(VIB) framework (a generalization of the well known VAE) and it uses a supervised multi-objective learning approach that 
allows to encode a particular attribute relative to the input in a designated dimension of the latent space by 
introducing a regularization term. This offer precise control over a specific attribute of the content to generate by 
manipulating latent variables unlike prompt-based generative models that often lack this ability. As already mentioned 
my thesis work was a research work which hopefully will be published in an upcoming conference in 2025. The novel 
contribution of this research consists in the introduction of an invertible transformation for the univariate 
distribution of the attribute to encode: the goal of this proposal is to make this distribution as close as possible to
the prior distribution used choose for the latent space, according to the idea that this will help the multi-objective 
optimization process by making the new regularization synergic to the KL divergence in the original VIB loss function; 
moreover, being the transformation invertible, it allows to map the encoded property back to the original domain 
improving the model interpretability.

{{< projectKeywords "symbolic music, attribute-controlled generation, data gaussianization" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Resolv - Machine Learning Development for Research"
title1="Code" link1="https://github.com/resolv-libs" icon1="fa-brands fa-square-github" >}}

Resolv is a system designed to streamline machine learning and deep learning workflows for research purposes. The focus
is on providing a comprehensive platform that facilitates model development, data processing, and infrastructure 
management. The system is organized into multiple components, each handling a specific part of the machine learning 
workflow. The goal is to create a flexible, scalable and reusable system that supports model experimentation, improves data 
processing through well-structured pipelines, and automates orchestration using modern tools like Keras, Apache Beam, 
and Apache Airflow. Resolv is built to serve as a flexible and modular system aimed at supporting research in machine 
learning and deep learning: the organization of the system allows for clear separation of tasks by making it easier to 
experiment with new ides and techniques.

{{< projectKeywords "deep learning, keras, apache-beam, apache-airflow" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Do Unconditional Deep Generative Models Spontaneously Learn How to Encode Human-Interpretable Musical Attributes?"
title1="Code" link1="https://github.com/mpetteno-polimi/MAEC-L04-Music-Generation?tab=readme-ov-file#maec---l04-project" icon1="fa-brands fa-square-github"
title2="Article" link2="https://github.com/mpetteno-polimi/MAEC-L04-Music-Generation/blob/main/assets/L04_Report.pdf" icon2="fa-solid fa-newspaper" >}}

Our study is focused on investigating the presence of any correlations between the topological structure of the latent 
space and high-level features of the output. This project supplies a valid starting point for the systematic sampling of 
the pre-trained model of MusicVAE, a beta Variational AutoEncoder by Magenta. We offer ready-to-use tools for the 
analysis of the 2-bar and 16-bar pre-trained model configurations. We employ Latin Hypercube Sampling to perform latent 
space regularization, which leads to an explicit control between the output’s characteristics and the locations of the 
samples within the embedding. The available tools automate sampling, output feature calculations and evaluation. The 
purpose of this work is to unveil the presence of eventual correlations between the topological structure of the latent 
space and high level features of the output, which could be relevant for future works involving the refining of post hoc 
conditioning in generative models.

{{< projectKeywords "variational autoencoders, latent space topological structure" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Fonti 4.0 - Evaluation of the performance of commercial STT and NER services"
title1="Code" link1="https://github.com/mpetteno/fonti4.0?tab=readme-ov-file#speech-to-text-experiments" icon1="fa-brands fa-square-github" 
title2="Article" link2="https://ceur-ws.org/Vol-3033/paper45.pdf" icon2="fa-solid fa-newspaper" >}}

The FONTI 4.0 project aims at exploring the suitability of automatic transcription and information extraction 
technologies for making historical oral sources available. In this work, we conducted an experiment to test the 
performance of two commercial speech-to-text services (Google Cloud Speech-to-text and Amazon Transcribe) on digitized
oral sources. We created an eight-hour corpus made of manually transcribed and annotated historical speech recordings in 
TEI format. The results clearly show how audio quality and disturbing elements (e.g., overlaps, foreign words, etc.) 
impact on the automatic transcription, showing what needs to be improved for implementing an unsupervised transcription 
chain.

{{< projectKeywords "speech-to-text, named-entity-recognition, gcp, aws" >}}