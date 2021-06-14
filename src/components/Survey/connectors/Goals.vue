<script>
  import { mapState } from 'vuex'

  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    computed: {
      selectedGoals: {
        get () {
          return this.$store.state.survey.user.goals
        },
        set (goal) {
          this.$store.dispatch('survey/setUserGoals', goal)
        }
      },
      ...mapState({
        name: state => state.survey.user.name
      })
    },
    data () {
      return {
        goals: {
          improveEnergy: {
            name: 'Energy',
            value: 'energy'
          },
          improveFitness: {
            name: 'Fitness',
            value: 'fitness'
          },
          improveLongTermHealth: {
            name: 'Long-term health',
            value: 'long-term health'
          },
          improveMood: {
            name: 'Mood',
            value: 'mood'
          },
          improveSleep: {
            name: 'Sleep',
            value: 'sleep'
          },
          improveWeight: {
            name: 'Weight',
            value: 'weight'
          }
        },
        maxGoals: 4
      }
    },
    methods: {
      handleGoalClick (goal) {
        const goalAlreadySelected = this.selectedGoals.includes(goal)

        // remove goal from selectedGoals
        if (goalAlreadySelected) {
          this.selectedGoals = this.selectedGoals.filter(selectedGoals => selectedGoals !== goal)
        }

        // add goal to selectedGoals
        if (!goalAlreadySelected && (this.selectedGoals.length < this.maxGoals)) {
          this.selectedGoals = [...this.selectedGoals, goal]
        }
      },
      submit () {
        this.$router.push('/diet')
      },
      back () {
        this.$router.push('/name')
      }
    },
    mounted () {
      this.$store.dispatch('survey/setCurrentStep', 1)
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ name }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to four</p>
        <div class="spacer sp__top--sm"></div>
        <check-button @handle-goal-click="handleGoalClick" v-for="(goal, key) in goals" :key="key" :text="goal.name" :value="goal.value" :selected="selectedGoals.includes(goal.value)" :disabled="selectedGoals.length === maxGoals && !selectedGoals.includes(goal.value)" customEvent="handle-goal-click"></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" :disabled="!selectedGoals.length" @click="submit">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
