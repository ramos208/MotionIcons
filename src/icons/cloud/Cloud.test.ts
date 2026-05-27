import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CloudIcon from './CloudIcon.vue';

describe('CloudIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(CloudIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-turbulence');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(CloudIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});