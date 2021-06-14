export default {
  setUserName ({ commit }, name) {
    commit('SET_USER_NAME', name)
  },
  setUserGoals ({ commit }, goals) {
    commit('SET_USER_GOALS', goals)
  },
  setUserDiet ({ commit }, diet) {
    commit('SET_USER_DIET', diet)
  },
  setUserDob ({ commit }, dob) {
    commit('SET_USER_DOB', dob)
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

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error)
    }

    return true
  },
  postSurveyFailure ({ commit }, error) {
    commit('POST_SURVEY_FAILURE', error)
  },
  resetError ({ commit }) {
    commit('RESET_ERROR')
  }
}
