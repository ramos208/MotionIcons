<template>
  <div class="x-sidebar">
    <div class="x-logo group">
      <MotionIconsProvider :icon="SimpleIcons.siX" :animation="animation" :size="30" />
    </div>
    <nav class="x-nav">
      <a v-for="item in navItems" :key="item.label" href="#" class="x-link group" :class="{ active: item.active }">
        <MotionIconsProvider :icon="item.icon" :animation="animation" :size="26" />
        <span>{{ item.label }}</span>
      </a>
    </nav>
    <button class="x-post-btn">Post</button>
    <div class="x-user-row group">
      <div class="x-avatar"></div>
      <div class="x-user-info">
        <span class="x-name">John Doe</span>
        <span class="x-handle">@johndoe</span>
      </div>
      <MotionIconsProvider :icon="Lucide.MoreHorizontalIcon" :animation="animation" :size="18" class="x-more" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MotionIconsProvider from '../MotionIconsProvider.vue';
import * as Lucide from 'lucide-vue-next';
import * as SimpleIconsSource from 'simple-icons';
import { markRaw, h } from 'vue';

defineProps<{ animation?: string }>();

const prepareSimpleIcon = (path: string) =>
  markRaw((props: any) => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', width: props.size || 24, height: props.size || 24 }, [h('path', { d: path })]));

const SimpleIcons = { siX: prepareSimpleIcon(SimpleIconsSource.siX.path) };

const navItems = [
  { label: 'Home', icon: Lucide.HomeIcon, active: true },
  { label: 'Explore', icon: Lucide.SearchIcon, active: false },
  { label: 'Notifications', icon: Lucide.BellIcon, active: false },
  { label: 'Messages', icon: Lucide.MailIcon, active: false },
  { label: 'Bookmarks', icon: Lucide.BookmarkIcon, active: false },
  { label: 'Profile', icon: Lucide.UserIcon, active: false },
];
</script>

<style scoped>
.x-sidebar {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 1.25rem 1.5rem 1rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 240px;
  font-family: var(--font-body);
}
.x-logo { padding-left: 0.4rem; color: var(--text-color); }
.x-nav { display: flex; flex-direction: column; gap: 0.2rem; }
.x-link {
  display: flex; align-items: center; gap: 1rem;
  color: var(--text-color); text-decoration: none;
  font-size: 1rem; font-weight: 500;
  padding: 0.6rem 0.9rem; border-radius: 9999px;
  transition: background 0.2s; cursor: pointer;
}
.x-link:hover, .x-link.active { background: var(--btn-hover-bg); }
.x-post-btn {
  background: #1d9bf0; color: white; border: none;
  border-radius: 9999px; padding: 0.8rem;
  font-size: 0.95rem; font-weight: 700; cursor: pointer;
  margin-top: 0.25rem;
}
.x-user-row {
  display: flex; align-items: center; gap: 0.7rem;
  border-top: 1px solid var(--border-color);
  padding: 0.65rem 0.75rem;
  margin-top: 0.25rem;
  border-radius: 9999px;
  cursor: pointer; transition: background 0.2s;
}
.x-user-row:hover { background: var(--btn-hover-bg); }
.x-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #1d9bf0, #0a5fa3); flex-shrink: 0; }
.x-user-info { display: flex; flex-direction: column; flex: 1; }
.x-name { font-size: 0.85rem; font-weight: 700; color: var(--text-color); }
.x-handle { font-size: 0.74rem; color: var(--text-color); opacity: 0.55; }
.x-more { color: var(--text-color); opacity: 0.5; }
</style>
