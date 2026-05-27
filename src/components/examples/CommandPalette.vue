<template>
  <div class="cp-wrapper">
    <div class="cp-panel">
      <!-- Search Bar -->
      <div class="cp-search">
        <MotionIconsProvider :icon="Lucide.SearchIcon" :animation="animation" :size="18" class="cp-search-icon" />
        <input class="cp-input" type="text" v-model="query" placeholder="Search commands, files, actions..." />
        <kbd class="cp-kbd">ESC</kbd>
      </div>

      <div class="cp-divider"></div>

      <div class="cp-results">
        <div class="cp-section-label">Suggestions</div>

        <button
          class="cp-item group"
          v-for="item in filtered"
          :key="item.label"
          :class="{ active: activeItem === item.label }"
          @mouseenter="activeItem = item.label"
        >
          <div class="cp-item-icon" :style="{ background: item.color }">
            <MotionIconsProvider :icon="item.icon" :animation="animation" :size="16" />
          </div>
          <div class="cp-item-info">
            <span class="cp-item-label">{{ item.label }}</span>
            <span class="cp-item-desc">{{ item.desc }}</span>
          </div>
          <kbd class="cp-shortcut">{{ item.shortcut }}</kbd>
        </button>
      </div>

      <!-- Footer always visible -->
      <div class="cp-footer">
        <div class="cp-hint"><kbd>↑↓</kbd> navigate</div>
        <div class="cp-hint"><kbd>↵</kbd> open</div>
        <div class="cp-hint"><kbd>⌘K</kbd> toggle</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import MotionIconsProvider from '../MotionIconsProvider.vue';
import * as Lucide from 'lucide-vue-next';

defineProps<{ animation?: string }>();

const query = ref('');
const activeItem = ref('Dashboard');

const commands = [
  { label: 'Dashboard', desc: 'Go to main dashboard', icon: Lucide.LayoutDashboardIcon, shortcut: '⌘1', color: 'rgba(99,102,241,0.12)' },
  { label: 'New Document', desc: 'Create a new file', icon: Lucide.FilePlusIcon, shortcut: '⌘N', color: 'rgba(34,197,94,0.12)' },
  { label: 'Analytics', desc: 'View usage statistics', icon: Lucide.BarChartIcon, shortcut: '⌘A', color: 'rgba(245,158,11,0.12)' },
  { label: 'Settings', desc: 'Manage preferences', icon: Lucide.SettingsIcon, shortcut: '⌘,', color: 'rgba(236,72,153,0.12)' },
  { label: 'Invite Team', desc: 'Add new members', icon: Lucide.UserPlusIcon, shortcut: '⌘I', color: 'rgba(59,130,246,0.12)' },
];

const filtered = computed(() =>
  query.value
    ? commands.filter(c => c.label.toLowerCase().includes(query.value.toLowerCase()))
    : commands
);
</script>

<style scoped>
.cp-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: var(--font-body);
}

.cp-panel {
  width: 500px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  backdrop-filter: blur(16px);
  overflow: hidden;
}

.cp-search {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.1rem;
}

.cp-search-icon { opacity: 0.5; flex-shrink: 0; color: var(--text-color); }

.cp-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.95rem;
  color: var(--text-color);
  font-family: inherit;
}
.cp-input::placeholder { color: var(--text-color); opacity: 0.4; }

.cp-kbd {
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 5px;
  background: var(--btn-bg);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  opacity: 0.8;
  font-family: var(--font-mono);
}

.cp-divider { height: 1px; background: var(--border-color); }

.cp-results { padding: 0.5rem; }

.cp-section-label {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-color);
  opacity: 0.45;
  padding: 0.4rem 0.75rem;
  margin-bottom: 2px;
}

.cp-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: none;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.12s;
  text-align: left;
}

.cp-item.active,
.cp-item:hover { background: var(--btn-hover-bg); }

.cp-item-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  flex-shrink: 0;
}

.cp-item-info { display: flex; flex-direction: column; flex: 1; }
.cp-item-label { font-size: 0.87rem; font-weight: 500; color: var(--text-color); }
.cp-item-desc { font-size: 0.74rem; color: var(--text-color); opacity: 0.5; margin-top: 1px; }

.cp-shortcut {
  font-size: 0.7rem;
  padding: 2px 7px;
  border-radius: 5px;
  background: var(--btn-bg);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  opacity: 0.8;
  font-family: var(--font-mono);
  flex-shrink: 0;
}

.cp-footer {
  display: flex;
  gap: 1.25rem;
  padding: 0.65rem 1.1rem;
  border-top: 1px solid var(--border-color);
  background: var(--btn-bg);
}

.cp-hint {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  color: var(--text-color);
  opacity: 0.6;
}

.cp-hint kbd {
  font-size: 0.68rem;
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--btn-bg);
  border: 1px solid var(--border-color);
  font-family: var(--font-mono);
  color: var(--text-color);
}

</style>
