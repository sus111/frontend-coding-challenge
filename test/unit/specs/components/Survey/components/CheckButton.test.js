import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper
  const defaultProps = {
    text: 'Lorem ipsum',
    value: 'dummy-value',
    selected: false,
    disabled: false,
    customEvent: 'handle-click'
  }

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        ...defaultProps
      }
    })
  })

  describe('component rendering', () => {
    it('should exist as a component', () => {
      expect(wrapper.classes()).toContain('check-button')
    })

    it('should render the text value passed as prop correctly', () => {
      expect(wrapper.text()).toContain('Lorem ipsum')
    })
  })

  describe('"check-button--selected" modifier class', () => {
    it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
      expect(wrapper.find('div.check-button').classes()).not.toContain('check-button--selected')
    })

    it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {
      const wrapper = shallowMount(CheckButton, {
        propsData: {
          ...defaultProps,
          selected: true
        }
      })
      expect(wrapper.find('div.check-button').classes()).toContain('check-button--selected')
    })
  })

  describe('"check-button--disabled" modifier class', () => {
    it('should not attach the dynamic "check-button--disabled" class when the disabled prop is set to false', () => {
      expect(wrapper.find('div.check-button').classes()).not.toContain('check-button--disabled')
    })

    it('should attach the dynamic "check-button--disabled" class when the disabled prop is set to true', () => {
      const wrapper = shallowMount(CheckButton, {
        propsData: {
          ...defaultProps,
          disabled: true
        }
      })
      expect(wrapper.find('div.check-button').classes()).toContain('check-button--disabled')
    })
  })

  describe('click event', () => {
    it('should emit the passed custom event prop when clicked', () => {
      const checkButton = wrapper.find('div.check-button')
      checkButton.trigger('click')
      expect(wrapper.emitted('handle-click')).toHaveLength(1)
    })

    it('should emit the custom event with passed value prop when clicked', () => {
      const checkButton = wrapper.find('div.check-button')
      checkButton.trigger('click')
      expect(wrapper.emitted()['handle-click'][0]).toEqual(['dummy-value'])
    })
  })
})
