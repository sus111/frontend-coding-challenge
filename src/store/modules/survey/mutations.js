export default {
  SET_USER_NAME (state, name) {
    state.user.name = name
  },
  SET_USER_DOB (state, dob) {
    state.user.dob = dob
  },
  SET_USER_DIET (state, diet) {
    state.user.diet = diet
  },
  SET_USER_GOALS (state, goals) {
    state.user.goals = goals
  },
  SET_CURRENT_STEP (state, step) {
    state.currentStep = step
  },
  POST_SURVEY_REQUEST (state) {
    state.error = ''
  },
  POST_SURVEY_FAILURE (state, error) {
    state.error = error
  },
  RESET_ERROR (state) {
    state.error = ''
  }
}
