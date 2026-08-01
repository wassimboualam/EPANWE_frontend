<script setup>

const services = [
{
    icon:"volunteer_activism",
    title:"Help",
    text:"Supporting children and young people through programs that encourage personal growth, confidence and well-being."
},
{
    icon:"school",
    title:"Teach",
    text:"Delivering educational experiences that inspire curiosity, creativity and lifelong learning."
},
{
    icon:"emoji_people",
    title:"Empower",
    text:"Helping every participant develop leadership, responsibility and the confidence to create positive change."
}
]

</script>

<template>

<section class="services">

<div class="container">

<div class="section-title">

<p>WHAT WE DO</p>

<h2>

Helping young people flourish in every aspect of life.

</h2>

</div>

<div class="cards">

<div
class="service-card"
v-for="service in services"
:key="service.title"
>

<div class="icon">

<span class="material-symbols-outlined">

{{ service.icon }}

</span>

</div>

<h3>

{{ service.title }}

</h3>

<p>

{{ service.text }}

</p>

<a href="#">

Learn More →

</a>

</div>

</div>

</div>

</section>

</template>


<style scoped>

.services{

background:#F9FAFB;

}

.section-title{

text-align:center;

max-width:700px;

margin:auto auto 70px;

}

.section-title p{

font-weight:700;

color:var(--gold);

letter-spacing:2px;

margin-bottom:15px;

}

.cards{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:35px;

}

.service-card{

padding:40px;

background:white;

border-radius:24px;

box-shadow:var(--shadow);

transition:.35s;

}

.service-card:hover{

transform:translateY(-10px);

}

.icon{

width:70px;

height:70px;

border-radius:18px;

display:flex;

justify-content:center;

align-items:center;

background:var(--gold-soft);

margin-bottom:25px;

}

.icon span{

font-size:38px;

color:var(--gold);

}

h3{

margin-bottom:18px;

font-size:1.4rem;

}

p{

margin-bottom:25px;

}

a{

font-weight:600;

color:var(--gold);

}

@media(max-width:900px){

.cards{

grid-template-columns:1fr;

}

}

</style>