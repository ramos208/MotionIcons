import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ShieldCheckIcon from './ShieldCheckIcon.vue';

describe('ShieldCheckIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(ShieldCheckIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-elastic-scale');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(ShieldCheckIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});