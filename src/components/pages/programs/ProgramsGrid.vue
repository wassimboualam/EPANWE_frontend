<script setup>
import ProgramCard from '@/components/cards/ProgramCard.vue'
import { useProgramsStore } from '@/stores/programs'
import { onMounted } from 'vue'

let programs
onMounted(async () => {
  const programsStore = useProgramsStore()
  await programsStore.loadPrograms()
  programs = programsStore.programs
})
programs = `[{"id":1,"title":"Helping Children Build Self-Confidence Through Creative Activities","text":"Confidence grows when children are encouraged to explore, create and express themselves. Through theatre, music and collaborative projects, participants learn to trust their abilities while developing communication and teamwork skills.","age_group":"8-12","category":"Personal & Emotional Development","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":2,"title":"Discovering the Joy of Reading Together","text":"Reading circles encourage curiosity, imagination and confidence while helping children develop language and comprehension skills in a fun environment.","age_group":"8-12","category":"Creativity & Wellbeing","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":3,"title":"Learning Through Play","text":"Games and collaborative activities provide opportunities to strengthen problem-solving, communication and emotional intelligence.","age_group":"8-12","category":"Social Skills & Communication","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":4,"title":"The Benefits of Team Sports for Young Learners","text":"Sports develop discipline, respect, resilience and cooperation while encouraging healthy habits from an early age.","age_group":"8-12","category":"Sports","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":5,"title":"Music as a Tool for Personal Growth","text":"Music education develops patience, creativity and confidence while encouraging collaboration between participants.","age_group":"13-17","category":"Creativity & Wellbeing","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":6,"title":"Developing Leadership During the Teenage Years","text":"Leadership programs encourage initiative, empathy and responsibility through real-life collaborative projects.","age_group":"13-17","category":"Personal Projects & Self-Management","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":7,"title":"Building Healthy Digital Habits","text":"Young people learn how to use technology responsibly while maintaining healthy online and offline relationships.","age_group":"13-17","category":"Personal & Emotional Development","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":8,"title":"Volunteering Starts with Small Actions","text":"Community service projects encourage teenagers to discover how they can positively influence the world around them.","age_group":"13-17","category":"Civic Engagement & Participation","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":9,"title":"Preparing Young Adults for Their Future Careers","text":"Professional development workshops help participants discover career opportunities while strengthening soft skills and confidence.","age_group":"18-25","category":"Personal Projects & Self-Management","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":10,"title":"Why Emotional Intelligence Matters in the Workplace","text":"Self-awareness, empathy and communication are among the most valuable professional skills for young adults.","age_group":"18-25","category":"Personal & Emotional Development","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":11,"title":"Creating Positive Change Through Community Projects","text":"Community engagement develops leadership while allowing participants to contribute to meaningful local initiatives.","age_group":"18-25","category":"Civic Engagement & Participation","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":12,"title":"Communication Skills That Open Doors","text":"Effective communication builds stronger professional relationships, increases confidence and improves teamwork.","age_group":"18-25","category":"Social Skills & Communication","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":13,"title":"Creative Thinking for Future Innovators","text":"Innovation begins with curiosity. Creative workshops encourage participants to transform ideas into practical solutions.","age_group":"18-25","category":"Creativity & Wellbeing","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":14,"title":"Lifelong Learning Never Stops","text":"Continuous learning allows adults to adapt, grow professionally and remain curious throughout every stage of life.","age_group":"26+","category":"Personal Projects & Self-Management","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":15,"title":"Building Stronger Communities Together","text":"Community involvement strengthens neighborhoods while creating opportunities to mentor and support younger generations.","age_group":"26+","category":"Civic Engagement & Participation","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":16,"title":"Leading by Example","text":"Leadership is demonstrated through everyday actions, collaboration and a commitment to helping others succeed.","age_group":"26+","category":"Personal & Emotional Development","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":17,"title":"The Importance of Work-Life Balance","text":"Maintaining physical and emotional wellbeing helps individuals remain productive, creative and engaged in their communities.","age_group":"26+","category":"Creativity & Wellbeing","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":18,"title":"Strengthening Family Communication","text":"Healthy communication creates stronger relationships between parents, children and the wider community.","age_group":"26+","category":"Social Skills & Communication","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":19,"title":"Mentoring the Next Generation","text":"Experienced adults play a vital role in supporting young people by sharing knowledge, encouragement and life experiences.","age_group":"26+","category":"Civic Engagement & Participation","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"},{"id":20,"title":"Turning Personal Goals Into Reality","text":"Planning, organization and perseverance help individuals transform ideas into successful personal and professional achievements.","age_group":"18-25","category":"Personal Projects & Self-Management","created_at":"2026-07-21T05:02:38.000000Z","updated_at":"2026-07-21T05:02:38.000000Z"}]`
programs = JSON.parse(programs)
</script>

<template>
  <section>
    <div class="container">
      <div class="grid">
        <ProgramCard v-for="program in programs" :key="program.title" :program="program" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 35px;
}

@media (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
