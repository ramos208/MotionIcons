import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CloudLightningIcon from './CloudLightningIcon.vue';

describe('CloudLightningIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(CloudLightningIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-turbulence');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(CloudLightningIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});