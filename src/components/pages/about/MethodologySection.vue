<script setup>

const steps = [

"Openness",

"Acceptance",

"Autonomy",

"Confidence",

"Joy",

"Social Engagement"

]

</script>

<template>

<section class="method">

<div class="container">

<div class="header">

<p id="section_name">OUR METHOD</p>

<h2>

The EPANWE Methodology

</h2>

<p>Our EPANWE method is there to nurture in our youth the following skills:</p>

</div>

<div class="timeline">

<div
class="step"
v-for="step in steps"
:key="step"
>

<div class="circle">

</div>

<h4>

{{ step }}

</h4>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.method{

background:white;

}

.header{

text-align:center;

margin-bottom:80px;

}

#section_name{

color:var(--gold);

font-weight:700;

letter-spacing:2px;

margin-bottom:10px;

}

.timeline{

display:flex;

justify-content:space-between;

position:relative;

}

.timeline::before{

content:"";

position:absolute;

left:0;

right:0;

top:15px;

height:3px;

background:var(--gold);

z-index:1;

}

.step{

position:relative;

z-index:2;

text-align:center;

width:150px;

}

.circle{

width:30px;

height:30px;

border-radius:50%;

background:var(--gold);

margin:auto;

margin-bottom:20px;

}

h4{

font-size:1rem;

}

@media(max-width:900px){

.timeline{

flex-direction:column;

gap:40px;

}

.timeline::before{

display:none;

}

.step{

width:100%;

}

}

</style>