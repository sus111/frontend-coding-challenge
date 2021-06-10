<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'

  export default {
    name: 'Diet',
    components: {
      ThvButton,
      CheckButton
    },
    computed: {
      selectedDiet: {
        get () {
          return this.$store.state.survey.diet
        },
        set (diet) {
          this.$store.dispatch('survey/setDiet', diet)
        }
      }
    },
    data () {
      return {
        diets: {
          no: {
            name: 'No',
            value: 'no'
          },
          coeliac: {
            name: 'Coeliac',
            value: 'coeliac'
          },
          lowCarbHighFat: {
            name: 'Low-carb, high-fat',
            value: 'low-carb, high-fat'
          },
          paleo: {
            name: 'Paleo',
            value: 'paleo'
          },
          pescatarian: {
            name: 'Pescatarian',
            value: 'pescatarian'
          },
          plantBased: {
            name: 'Plant-based',
            value: 'plant-based'
          },
          other: {
            name: 'Other',
            value: 'other'
          }
        }
      }
    },
    methods: {
      updateDiet (diet) {
        this.selectedDiet = diet
      },
      submit () {
        this.$router.push('/dob')
      },
      back () {
        this.$router.push('/goals')
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__diet align-center">
        <h1>Do you follow a particular diet?</h1>
        <div class="spacer sp__top--sm"></div>
        <check-button @update-diet="updateDiet" v-for="(diet, key) in diets" :key="key" :text="diet.name" :value="diet.value" :selected="diet.value === selectedDiet" customEvent="update-diet"></check-button>
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" @click="submit" :disabled="!selectedDiet">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
