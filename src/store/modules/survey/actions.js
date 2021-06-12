export default {
  setName ({ commit }, name) {
    commit('SET_NAME', name)
  },
  setGoals ({ commit }, goals) {
    commit('SET_GOALS', goals)
  },
  setDiet ({ commit }, diet) {
    commit('SET_DIET', diet)
  },
  setDob ({ commit }, dob) {
    commit('SET_DOB', dob)
  },
  setCurrentStep ({ commit }, step) {
    commit('SET_CURRENT_STEP', step)
  },
  async postSurveyRequest ({ commit }, user) {
    commit('POST_SURVEY_REQUEST')
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          ...user
        }
      })
    })

    // throw error manually in order to pass detailed error message
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error)
    }

    return true
  },
  postSurveyFailure ({ commit }, error) {
    commit('POST_SURVEY_FAILURE', error)
  },
  postSurveySuccess ({ commit }) {
    commit('POST_SURVEY_SUCCESS')
  },
  resetError ({ commit }) {
    commit('RESET_ERROR')
  }
}
