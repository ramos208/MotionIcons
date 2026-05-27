import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import RefreshCwIcon from './RefreshCwIcon.vue';

describe('RefreshCwIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(RefreshCwIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-acceleration');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(RefreshCwIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});