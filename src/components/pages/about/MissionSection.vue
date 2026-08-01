<script setup>

const cards = [

{
icon:"flag",
title:"Our Mission",
text:"Empower young people through innovative educational, cultural and personal development experiences."
},

{
icon:"public",
title:"Our Vision",
text:"A future where every young person has access to opportunities that help them flourish and succeed.",
bg:"blue"
}

]

</script>

<template>

<section>

<div class="container">

<div class="header">

<p>MISSION & VISION</p>

<h2>

Why We Exist

</h2>

</div>

<div class="grid">

<div
v-for="card in cards"
:key="card.title"
class="card mission-card"
:class="card.bg"
>

<span class="material-symbols-outlined icon">

{{ card.icon }}

</span>

<h3>

{{ card.title }}

</h3>

<p>

{{ card.text }}

</p>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.header{

text-align:center;

margin-bottom:60px;

}

.header p{

color:var(--gold);

font-weight:700;

letter-spacing:2px;

margin-bottom:10px;

}

.grid{

display:grid;

grid-template-columns:repeat(2,1fr);

gap:35px;

}

.mission-card{

padding:50px;

}

.blue{

background:var(--blue-soft);

}

.icon{

font-size:48px;

color:var(--gold);

margin-bottom:20px;

}

@media(max-width:900px){

.grid{

grid-template-columns:1fr;

}

}

</style>