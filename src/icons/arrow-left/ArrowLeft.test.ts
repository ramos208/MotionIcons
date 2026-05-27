import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ArrowLeftIcon from './ArrowLeftIcon.vue';

describe('ArrowLeftIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(ArrowLeftIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-anticipation-spring');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(ArrowLeftIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});