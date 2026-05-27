import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import SettingsIcon from './SettingsIcon.vue';

describe('SettingsIcon', () => {
  it('renders correctly with default size', () => {
    const wrapper = mount(SettingsIcon);
    expect(wrapper.find('svg').attributes('viewBox')).toBe('0 0 24 24');
    expect(wrapper.classes()).toContain('motion-mechanical-inertia');
  });

  it('applies custom dimensions dynamically', () => {
    const wrapper = mount(SettingsIcon, {
      props: { size: 48, strokeWidth: 3 }
    });
    expect(wrapper.find('svg').attributes('stroke-width')).toBe('3');
  });
});