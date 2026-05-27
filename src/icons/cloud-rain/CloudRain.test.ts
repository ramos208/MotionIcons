import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CloudRainIcon from './CloudRainIcon.vue';

describe('CloudRainIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(CloudRainIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-turbulence');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(CloudRainIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});