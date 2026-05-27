import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import JavascriptIcon from './JavascriptIcon.vue';

describe('JavascriptIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(JavascriptIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-elastic-scale');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(JavascriptIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});