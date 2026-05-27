<template>
  <div class="c-sidebar" :class="{ collapsed: isCollapsed }">
    <div class="c-header">
      <div class="c-logo">M</div>
      <div class="c-brand" v-if="!isCollapsed">
        <span class="c-company">MotionStudio</span>
        <span class="c-plan">Pro Plan</span>
      </div>
    </div>
    
    <nav class="c-nav">
      <a href="#" class="c-link group active">
        <MotionIconsProvider :icon="Lucide.HomeIcon" :animation="animation" :size="20" />
        <span class="c-label" v-if="!isCollapsed">Dashboard</span>
        <div class="c-tooltip" v-if="isCollapsed">Dashboard</div>
      </a>
      <a href="#" class="c-link group">
        <MotionIconsProvider :icon="Lucide.SearchIcon" :animation="animation" :size="20" />
        <span class="c-label" v-if="!isCollapsed">Search</span>
        <div class="c-tooltip" v-if="isCollapsed">Search</div>
      </a>
      <a href="#" class="c-link group">
        <MotionIconsProvider :icon="Lucide.BarChartIcon" :animation="animation" :size="20" />
        <span class="c-label" v-if="!isCollapsed">Analytics</span>
        <div class="c-tooltip" v-if="isCollapsed">Analytics</div>
      </a>
      <a href="#" class="c-link group">
        <MotionIconsProvider :icon="Lucide.MailIcon" :animation="animation" :size="20" />
        <span class="c-label" v-if="!isCollapsed">Inbox</span>
        <div class="c-tooltip" v-if="isCollapsed">Inbox</div>
      </a>
      <a href="#" class="c-link group">
        <MotionIconsProvider :icon="Lucide.ListTodoIcon" :animation="animation" :size="20" />
        <span class="c-label" v-if="!isCollapsed">Tasks</span>
        <div class="c-tooltip" v-if="isCollapsed">Tasks</div>
      </a>
      <a href="#" class="c-link group">
        <MotionIconsProvider :icon="Lucide.UsersIcon" :animation="animation" :size="20" />
        <span class="c-label" v-if="!isCollapsed">Team</span>
        <div class="c-tooltip" v-if="isCollapsed">Team</div>
      </a>
    </nav>
    
    <div class="c-footer">
      <button class="c-toggle group" @click="isCollapsed = !isCollapsed">
        <MotionIconsProvider :icon="isCollapsed ? Lucide.ChevronRightIcon : Lucide.ChevronLeftIcon" :animation="animation" :size="20" />
      </button>
      
      <div class="c-user group">
        <div class="c-avatar"></div>
        <div class="c-user-info" v-if="!isCollapsed">
          <span class="c-name">Jane Doe</span>
          <span class="c-email">jane@motion.io</span>
        </div>
        <MotionIconsProvider v-if="!isCollapsed" :icon="Lucide.ChevronDownIcon" animation="" :size="16" class="c-user-chevron" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MotionIconsProvider from '../MotionIconsProvider.vue';
import * as Lucide from 'lucide-vue-next';

defineProps<{
  animation?: string;
}>();

const isCollapsed = ref(false);
</script>

<style scoped>
.c-sidebar {
  background: var(--bg-color, #fff); border: 1px solid var(--border-color, #eee);
  border-radius: 20px; display: flex; flex-direction: column;
  height: 600px; width: 260px; transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1.5rem 1rem; box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  font-family: sans-serif; position: relative; overflow: hidden;
}
.c-sidebar.collapsed { width: 80px; }
.c-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; padding: 0 0.5rem; }
.c-logo {
  min-width: 40px; height: 40px; border-radius: 10px;
  background: rgba(129, 140, 248, 0.1); color: #818CF8;
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 1.2rem;
}
.c-brand { display: flex; flex-direction: column; white-space: nowrap; overflow: hidden; }
.c-company { font-weight: 700; color: var(--text-color, #000); }
.c-plan { font-size: 0.8rem; opacity: 0.6; color: var(--text-color, #000); }
.c-nav { display: flex; flex-direction: column; gap: 0.5rem; flex-grow: 1; }
.c-link {
  display: flex; align-items: center; gap: 1rem; padding: 0.75rem;
  border-radius: 10px; color: var(--text-color, #000); text-decoration: none;
  font-weight: 500; transition: all 0.2s; position: relative;
}
.c-link:hover { background: rgba(128, 128, 128, 0.1); }
.c-link.active { background: rgba(129, 140, 248, 0.1); color: #818CF8; }
.c-label { white-space: nowrap; }
.c-tooltip {
  position: absolute; left: calc(100% + 15px); background: var(--text-color, #000);
  color: var(--bg-color, #fff); padding: 0.4rem 0.8rem; border-radius: 6px;
  font-size: 0.85rem; pointer-events: none; opacity: 0;
  transform: translateX(-10px); transition: all 0.2s; white-space: nowrap; z-index: 10; font-weight: 600;
}
.c-link:hover .c-tooltip { opacity: 1; transform: translateX(0); }
.c-footer { display: flex; flex-direction: column; gap: 1.5rem; }
.c-toggle {
  align-self: flex-start; margin-left: 0.5rem; background: transparent; border: none;
  color: var(--text-color, #000); cursor: pointer; opacity: 0.6; transition: opacity 0.2s;
}
.c-toggle:hover { opacity: 1; }
.c-sidebar.collapsed .c-toggle { align-self: center; margin-left: 0; }
.c-user { display: flex; align-items: center; gap: 1rem; padding: 0.5rem; border-radius: 12px; cursor: pointer; transition: background 0.2s; }
.c-user:hover { background: rgba(128, 128, 128, 0.1); }
.c-avatar { min-width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #ff7a18, #af002d 31.25%, #319197 100%); }
.c-user-info { display: flex; flex-direction: column; flex-grow: 1; white-space: nowrap; overflow: hidden; }
.c-name { font-weight: 600; font-size: 0.9rem; color: var(--text-color, #000); }
.c-email { font-size: 0.75rem; opacity: 0.6; color: var(--text-color, #000); }
.c-user-chevron { opacity: 0.5; color: var(--text-color, #000); }
</style>
