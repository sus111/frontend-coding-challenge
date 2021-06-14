import actions from '@/store/modules/survey/actions'

const { postSurveyRequest } = actions

const commit = jest.fn()
const user = {
  name: 'Karen',
  goals: ['long-term health', 'fitness'],
  diet: 'paleo',
  dob: '1999-09-23T17:05:04.606Z'
}

describe('actions', () => {
  describe('postSurveyRequest success', () => {
    const mockFetchSuccess = () => (
      Promise.resolve({
        ok: true,
        status: 200
      })
    )

    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => mockFetchSuccess())
    })

    afterEach(() => {
      global.fetch.mockClear()
      delete global.fetch
    })

    it('returns true', () => {
      expect(postSurveyRequest({ commit }, user))
        .resolves
        .toEqual(true)
    })
  })

  describe('postSurveyRequest error', () => {
    const mockFetchError = () => (
      Promise.resolve({
        ok: false,
        status: 400,
        json: () => Promise.resolve({
          error: 'Missing user field'
        })
      })
    )

    beforeEach(() => {
      global.fetch = jest.fn().mockImplementation(() => mockFetchError())
    })

    afterEach(() => {
      global.fetch.mockClear()
      delete global.fetch
    })

    it('returns error message', () => {
      expect(postSurveyRequest({ commit }, user))
        .rejects
        .toThrow('Missing user field')
    })
  })
})
