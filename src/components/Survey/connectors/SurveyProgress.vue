<script>
  import ProgressBar from '@/components/Shared/ProgressBar'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    },
    props: {
      currentStep: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        stages: ['name', 'goals', 'diet', 'dob']
      }
    },
  }
</script>

<template>
  <div class="progress-bar-container">
  <progress-bar :currentStep='currentStep' :totalSteps='stages.length'></progress-bar>
  </div>
</template>

<style lang="css">
  .progress-bar-container {
    display: flex;
    flex-wrap: nowrap;
    width: 80px;
    align-items: center;
  }

</style>
