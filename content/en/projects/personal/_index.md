+++
title = 'Personal Projects'
date = 2025-01-04T19:30:00
draft = false
[_build]
render = 'never'
+++
{{< projectTitle title="Advent of Code" id="aoc"
title1="Page" link1="./projects/personal/aoc" icon1="fa-solid fa-newspaper" target1="_self" >}}

{{< link href="https://adventofcode.com/" title="Advent of Code" target="_blank" >}} is an annual event that takes
place every December, where participants solve a series of programming puzzles. Each puzzle is released daily, starting
on December 1st and continuing through December 25th. The puzzles cover a wide range of topics, from algorithms and
data structures to mathematical problems and optimization challenges.

Each year, I will choose a programming language either randomly or deliberately if I wish to learn or explore a
specific language. I will follow two rules: no external help and no external libraries.

Every day, I will attempt to solve the proposed challenge and publish a brief description of the solution on this
website.

Additionally, I have implemented a web server that can be called from each day’s page: this server
allows you to upload the input file for the current day’s challenge and returns the solution.

{{< projectKeywords "python, flask, render, coding-challenge" >}}

<div class="m:mb-l clear-both"></div>

{{< projectTitle title="Around the Job"
title1="Code" link1="https://github.com/mpetteno/around-the-job" icon1="fa-brands fa-square-github"
title2="Web App" link2="https://around-the-job.web.app/" icon2="fa-solid fa-globe" >}}

Around the Job (hello Daft Punk), is a web app I built to assist with my job search. Over the 
past few years, I collected data about companies I was interested in and decided to display them on an interactive map 
for easy navigation. This project reflects my belief that we should first choose a place where we’d love to live and 
then look for a job we’re passionate about in that area. The frontend is implemented using
{{< link href="https://vuejs.org/" title="Vue.js" target="_blank" >}} and the map is handled with 
{{< link href="https://leafletjs.com/" title="Leaflet" target="_blank" >}}, while the database is managed with
{{< link href="https://firebase.google.com/" title="Firebase" target="_blank" >}}.

{{< projectKeywords "vue.js, firebase, firestore, leaflet" >}}
