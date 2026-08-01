import { defineStore } from 'pinia'

export const useProgramsStore = defineStore('programs', {
  state: () => ({
    programs: [],
    age_groups: ['8-12', '13-17', '18-25', '26+'],
    categories: [
      'Personal Growth',
      'Communication & Relationships',
      'Community Engagement',
      'Creativity & Wellbeing',
      'Leadsership and self-management',
    ],
  }),
  getters: {},
  actions: {
    async loadPrograms() {
      const freshPrograms = await fetch('http://127.0.0.1:8000/programs')
      this.programs = [...(await freshPrograms.json())]
    },

    async filterPrograms(text = null, category = null, age_group = null) {
      this.programs = this.programs.filter((program) => {
        // If the text input has something in it (so, not empty) and that text is not the same as the
        // title of the program, it gets filtered out
        if (text !== null && !program.title.includes(text)) {
          return false
        }

        if (category !== null && program.category !== category) {
          return false
        }

        if (age_group !== null && program.age_group !== age_group) {
          return false
        }

        return true
      })
    },

    async loadProgram(id) {
      const obj = await fetch('http://127.0.0.1:8000/programs/' + id)
      return await obj.json()
    },
  },
})
