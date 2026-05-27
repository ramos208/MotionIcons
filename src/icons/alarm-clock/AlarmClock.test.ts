import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AlarmClockIcon from './AlarmClockIcon.vue';

describe('AlarmClockIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(AlarmClockIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-pendulum-swing');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(AlarmClockIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});