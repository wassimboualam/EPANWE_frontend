<script setup>

import { ref } from "vue"

const open = ref(0)

const faqs=[

{
question:"Who can participate?",
answer:"Children and young adults depending on each program's age requirements."
},

{
question:"How do I register?",
answer:"You can register online through the Join Us page."
},

{
question:"Are programs free?",
answer:"Some programs are free while others require a registration fee."
},

{
question:"Where are programs held?",
answer:"Programs are available in different Moroccan cities and online."
}

]

</script>

<template>

<section>

<div class="container">

<div class="header">

<p>FAQ</p>

<h2>

Frequently Asked Questions

</h2>

</div>

<div
class="faq"
v-for="(faq,index) in faqs"
:key="faq.question"
>

<button

@click="open = open === index ? null : index"

>

<span>

{{ faq.question }}

</span>

<span>

{{ open===index ? "−" : "+" }}

</span>

</button>

<div
v-if="open===index"
class="answer"
>

{{ faq.answer }}

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

}

.faq{

border-bottom:1px solid #ddd;

padding:20px 0;

}

button{

width:100%;

display:flex;

justify-content:space-between;

background:none;

font-size:1.1rem;

font-weight:600;

}

.answer{

margin-top:15px;

color:#666;

}

</style>