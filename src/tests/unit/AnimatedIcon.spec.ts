import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AnimatedIcon from '../../components/AnimatedIcon.vue'

describe('AnimatedIcon.vue', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(AnimatedIcon, {
      slots: {
        default: '<circle cx="12" cy="12" r="10" />'
      }
    })
    expect(wrapper.find('.animated-icon-wrapper').exists()).toBe(true)
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('applies color prop correctly', () => {
    const wrapper = mount(AnimatedIcon, {
      props: {
        color: '#ff0000'
      }
    })
    expect(wrapper.attributes('style')).toContain('color: rgb(255, 0, 0)')
  })

  it('toggles hover state classes', async () => {
    const wrapper = mount(AnimatedIcon)
    await wrapper.trigger('mouseenter')
    expect(wrapper.classes()).toContain('is-hovering')
    await wrapper.trigger('mouseleave')
    expect(wrapper.classes()).not.toContain('is-hovering')
  })
})
