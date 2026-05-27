import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import GearIcon from './GearIcon.vue';

describe('GearIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(GearIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-mechanical-inertia');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(GearIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});