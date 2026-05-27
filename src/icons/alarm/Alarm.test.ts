import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AlarmIcon from './AlarmIcon.vue';

describe('AlarmIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(AlarmIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-pendulum-swing');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(AlarmIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});