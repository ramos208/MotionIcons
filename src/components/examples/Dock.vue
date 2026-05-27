<template>
  <div class="dock-bar">
    <div
      v-for="item in dockItems"
      :key="item.label"
      class="dock-item group"
      @mouseenter="hovered = item.label"
      @mouseleave="hovered = ''"
    >
      <div class="dock-tooltip" v-if="hovered === item.label">{{ item.label }}</div>
      <MotionIconsProvider :icon="item.icon" :animation="animation" :size="26" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw, h } from 'vue';
import MotionIconsProvider from '../MotionIconsProvider.vue';
import * as SimpleIconsSource from 'simple-icons';

defineProps<{ animation?: string }>();

const hovered = ref('');

const prepareSimpleIcon = (path: string) =>
  markRaw((props: any) => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', width: props.size || 24, height: props.size || 24 }, [h('path', { d: path })]));

const dockItems = [
  { label: 'X', icon: prepareSimpleIcon(SimpleIconsSource.siX.path) },
  { label: 'WhatsApp', icon: prepareSimpleIcon(SimpleIconsSource.siWhatsapp.path) },
  { label: 'GitHub', icon: prepareSimpleIcon(SimpleIconsSource.siGithub.path) },
  { label: 'Facebook', icon: prepareSimpleIcon(SimpleIconsSource.siFacebook.path) },
  { label: 'Google', icon: prepareSimpleIcon(SimpleIconsSource.siGoogle.path) },
  { label: 'Instagram', icon: prepareSimpleIcon(SimpleIconsSource.siInstagram.path) },
];
</script>

<style scoped>
.dock-bar {
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
  background: var(--card-bg);
  backdrop-filter: blur(12px);
  padding: 0.8rem 1.2rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
}
.dock-item {
  position: relative;
  width: 52px; height: 52px;
  border-radius: 14px;
  background: var(--btn-bg);
  border: 1px solid var(--border-color);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-color);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.dock-item:hover {
  transform: scale(1.3) translateY(-10px);
  background: var(--btn-hover-bg);
  z-index: 2;
}
.dock-tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--text-color);
  color: var(--bg-color);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 6px;
  white-space: nowrap;
  pointer-events: none;
  font-family: var(--font-body);
}
</style>
