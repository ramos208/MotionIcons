import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MagnifyingGlassIcon from './MagnifyingGlassIcon.vue';

describe('MagnifyingGlassIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(MagnifyingGlassIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-radar-scanning');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(MagnifyingGlassIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});