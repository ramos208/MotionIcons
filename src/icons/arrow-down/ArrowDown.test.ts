import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ArrowDownIcon from './ArrowDownIcon.vue';

describe('ArrowDownIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(ArrowDownIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-anticipation-spring');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(ArrowDownIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});