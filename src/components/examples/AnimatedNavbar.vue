<template>
  <div class="animated-navbar">
    <button
      v-for="item in navItems"
      :key="item.label"
      class="nav-item group"
      :class="{ active: activeTab === item.label }"
      @click="activeTab = item.label"
    >
      <MotionIconsProvider :icon="item.icon" :animation="animation" :size="20" />
      <span>{{ item.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MotionIconsProvider from '../MotionIconsProvider.vue';
import * as Lucide from 'lucide-vue-next';

defineProps<{ animation?: string }>();

const activeTab = ref('Home');
const navItems = [
  { label: 'Home', icon: Lucide.HomeIcon },
  { label: 'Search', icon: Lucide.SearchIcon },
  { label: 'Alerts', icon: Lucide.BellIcon },
  { label: 'Lists', icon: Lucide.ListIcon },
  { label: 'Profile', icon: Lucide.UserIcon },
];
</script>

<style scoped>
.animated-navbar {
  display: flex;
  gap: 0.25rem;
  background: var(--bg-color, #fff);
  padding: 0.4rem;
  border-radius: 9999px;
  border: 1px solid var(--border-color, #e2e8f0);
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  font-family: 'Inter', sans-serif;
}
.nav-item {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.65rem 1.1rem; border-radius: 9999px;
  border: none; background: transparent;
  color: var(--text-color, #64748b); font-family: inherit;
  font-size: 0.87rem; font-weight: 500; cursor: pointer; transition: all 0.18s;
}
.nav-item:hover { background: rgba(128,128,128,0.07); }
.nav-item.active { background: rgba(128,128,128,0.12); font-weight: 600; }
</style>
