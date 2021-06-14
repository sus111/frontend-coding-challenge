<script>
  import { mapState } from 'vuex'

  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Success',
    components: {
      ThvButton
    },
    computed: {
      ...mapState({
        user: state => state.survey.user
      })
    },
    methods: {
      startOver () {
        this.$router.push('/')
        this.$store.dispatch('survey/resetUserData')
      },
      returnGoalWithComma (index) {
        const nonBreakingSpace = `\u00a0`

        return index !== this.user.goals.length - 1
          ? `${this.user.goals[index]},${nonBreakingSpace}`
          : this.user.goals[index]
      },
      returnDobString () {
        const userDob = new Date(this.user.dob)
        var parts = userDob.toISOString().substring(0, 10).split('-')
        var day = parts[2]
        var month = parts[1]
        var year = parts[0]

        return `${day}/${month}/${year}`
      }
    },
    mounted () {
      this.$store.dispatch('survey/setCurrentStep', 4)
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-4 medium-offset-4">
      <div class="align-center">
        <img class="success-img" :src="require('@/assets/images/thrivaling.png')" />
        <div class="spacer sp__top--xs"></div>
        <h1 class="heading--large">All done!</h1>
        <div class="spacer sp__top--xs"></div>
        <p class="body--medium">Thank you for completing the survey. The following results have been submitted:</p>
        <div class="spacer sp__top--sm"></div>
        <div class="user-data">
          <h5>Name</h5>
          <p class="field-value">{{ user.name }}</p>
          <div class="spacer sp__top--xs"></div>
          <h5>Goals</h5>
          <div class="field-value">
            <span v-for="(goal, index) in this.user.goals" :key="index">
              {{ returnGoalWithComma(index) }}
            </span>
          </div>
          <div class="spacer sp__top--xs"></div>
          <h5>Diet</h5>
          <p class="field-value">{{ user.diet }}</p>
          <div class="spacer sp__top--xs"></div>
          <h5>DOB</h5>
          <p class="field-value">{{ returnDobString() }}</p>
          <div class="spacer sp__top--sm"></div>
          <thv-button element="button" size="large" @click="startOver">Start over</thv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='css' scoped>
  .success-img {
    height: 150px;
  }
  h1 {
    color: #99A2BF;
  }
  .user-data {
    padding: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 12px;
  }
  h5 {
    margin: 0 0 0.5em;
    text-align: left;
    color: #B9C0D4;
    font-weight: normal;
  }
  .field-value {
    text-transform: capitalize;
    margin: 0;
    text-align: left;
    color: #7A7F89;
  }
</style>
