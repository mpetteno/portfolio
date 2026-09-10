+++
title = 'Personal Projects'
date = 2025-01-04T19:30:00
draft = false
[build]
render = 'never'
+++
{{< projectTitle title="Unbaised" id="aoc">}}

<div class="project-details grid grid-rows-[0fr] transition-[grid-template-rows,opacity] duration-300 opacity-0">
  <div class="overflow-hidden"></div>
</div>

I have co-designed and engineered an AI-driven media platform allowing users to control news generation through bias 
metrics (e.g. political spectrum alignment). The system autonomously ingests daily multi-source news, synthesizes 
parameter-conditioned summary articles and dynamically generates custom audio podcasts.

{{< projectKeywords "python, docker, gcp, expo, tavily, eleven labs" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Self-Hosted Homelab & Smart Home" id="aoc">}}

I've architected, and I am actively maintain a Proxmox VE hypervisor running self-hosted services across LXC containers and VMs. 
Deployed media ecosystems (*arr stack, Jellyfin, Audiobookshelf), network storage (OMV, Nextcloud, PhotoPrism), and
networking/security (Caddy reverse proxy, Pi-hole, WireGuard VPN, Dante SOCKS proxy, Gitea). Engineered an automated 
smart irrigation system managed via Home Assistant over a custom Zigbee mesh network.

{{< projectKeywords "proxmox, *arr, jellyfin, nextcloud, caddy, pi-hole, wg, gitea, HA, zigbee" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Advent of Code" id="aoc"
title1="Page" link1="./projects/personal/aoc" icon1="fa-solid fa-newspaper" target1="_self" detailsView="true">}}

<div class="project-details grid grid-rows-[0fr] transition-[grid-template-rows,opacity] duration-300 opacity-0">
  <div class="overflow-hidden">{{< link href="https://adventofcode.com/" title="Advent of Code" target="_blank" >}} is 
an annual event that takes place every December, where participants solve a series of programming puzzles. Each puzzle 
is released daily, starting on December 1st and continuing through December 25th. The puzzles cover a wide range of 
topics, from algorithms and data structures to mathematical problems and optimization challenges.
Each year, I will choose a programming language either randomly or deliberately if I wish to learn or explore a
specific language. I will follow two rules: no external help and no external libraries.
Every day, I will attempt to solve the proposed challenge and publish a brief description of the solution on this
website.
Additionally, I have implemented a web server that can be called from each day’s page: this server
allows you to upload the input file for the current day’s challenge and returns the solution.</div>
</div>

{{< projectKeywords "python, flask, render, coding-challenge" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Around the Job"
title1="Code" link1="https://github.com/mpetteno/around-the-job" icon1="fa-brands fa-square-github"
title2="Web App" link2="https://around-the-job.web.app/" icon2="fa-solid fa-globe" detailsView="true">}}

<div class="project-details grid grid-rows-[0fr] transition-[grid-template-rows,opacity] duration-300 opacity-0">
  <div class="overflow-hidden">Around the Job (hello Daft Punk), is a web app I built to assist with my job search. Over the 
past few years, I collected data about companies I was interested in and decided to display them on an interactive map 
for easy navigation. This project reflects my belief that we should first choose a place where we’d love to live and 
then look for a job we’re passionate about in that area. The frontend is implemented using
{{< link href="https://vuejs.org/" title="Vue.js" target="_blank" >}} and the map is handled with 
{{< link href="https://leafletjs.com/" title="Leaflet" target="_blank" >}}, while the database is managed with
{{< link href="https://firebase.google.com/" title="Firebase" target="_blank" >}}.</div>
</div>

{{< projectKeywords "vue.js, firebase, firestore, leaflet" >}}
