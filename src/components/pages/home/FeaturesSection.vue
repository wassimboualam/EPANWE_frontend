<script setup>

const features = [
  {
    title: "Holistic Development",
    text: "Educational, sports, cultural and personal development programs designed to help every participant flourish.",
    icon: "school"
  },
  {
    title: "Experienced Mentors",
    text: "Our educators, coaches and professionals guide every participant throughout their learning journey.",
    icon: "groups"
  },
  {
    title: "Programs Across Morocco",
    text: "Accessible programs delivered through schools, organizations and community partners across the country.",
    icon: "public"
  }
]

</script>

<template>

<section id="whyus">

<div class="container">

<div class="heading">

<h2>Why Choose EPANWE?</h2>

<p>
Everything we do is centered around helping young people
learn, grow and become confident members of society.
</p>

</div>

<div class="grid">

<div
v-for="feature in features"
:key="feature.title"
class="card feature">

<span class="material-symbols-outlined icon">

{{ feature.icon }}

</span>

<h3>

{{ feature.title }}

</h3>

<p>

{{ feature.text }}

</p>

</div>

</div>

</div>

</section>

</template>

<style scoped>

.heading{

text-align:center;

max-width:700px;

margin:auto auto 60px;

}

.grid{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}

.feature{

padding:40px;

transition:.3s;

}

.feature:hover{

transform:translateY(-8px);

}

.icon{

font-size:52px;

color:var(--gold);

margin-bottom:20px;

}

h3{

margin-bottom:15px;

}

@media(max-width:900px){

.grid{

grid-template-columns:1fr;

}

}

</style>