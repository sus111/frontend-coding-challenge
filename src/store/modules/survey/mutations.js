export default {
  // SET USER DATA
  SET_NAME (state, name) {
    state.user.name = name
  },
  SET_DOB (state, dob) {
    state.user.dob = dob
  },
  SET_DIET (state, diet) {
    state.user.diet = diet
  },
  SET_GOALS (state, goals) {
    state.user.goals = goals
  },
  // SET CURRENT SURVEY STEP
  SET_CURRENT_STEP (state, step) {
    state.currentStep = step
  },
  // SET SURVERY REQUEST STATUS
  POST_SURVEY_REQUEST (state) {
    state.error = ''
  },
  POST_SURVEY_SUCCESS () {},
  POST_SURVEY_FAILURE (state, error) {
    state.error = error
  },
  RESET_ERROR (state) {
    state.error = ''
  }
}
