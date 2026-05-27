<template>
  <div class="profile-wrapper">
    <!-- Dropdown panel (opens upward from trigger) -->
    <div v-if="isOpen" class="profile-dropdown">
      <div class="dropdown-header">
        <div class="header-avatar"></div>
        <div class="header-info">
          <span class="user-name">John Doe</span>
          <span class="user-email">johndoe@email.com</span>
        </div>
      </div>

      <div class="dropdown-divider"></div>

      <div class="dropdown-menu">
        <button class="menu-item group">
          <MotionIconsProvider :icon="Lucide.UserIcon" :animation="animation" :size="20" class="menu-icon" />
          Profile
        </button>
        <button class="menu-item group">
          <MotionIconsProvider :icon="Lucide.SettingsIcon" :animation="animation" :size="20" class="menu-icon" />
          Account Settings
        </button>
        <button class="menu-item group">
          <MotionIconsProvider :icon="Lucide.BellIcon" :animation="animation" :size="20" class="menu-icon" />
          Notifications
        </button>

        <div class="menu-item has-toggle">
          <div class="item-left">
            <MotionIconsProvider :icon="Lucide.MoonIcon" :animation="animation" :size="20" class="menu-icon" />
            Dark Mode
          </div>
          <div class="toggle-track" :class="{ on: darkMode }" @click="darkMode = !darkMode">
            <div class="toggle-knob"></div>
          </div>
        </div>

        <button class="menu-item group danger">
          <MotionIconsProvider :icon="Lucide.LogOutIcon" :animation="animation" :size="20" class="menu-icon" />
          Logout
        </button>
      </div>
    </div>

    <!-- Trigger button -->
    <button class="profile-trigger" @click="isOpen = !isOpen">
      <div class="trigger-avatar"></div>
      <div class="trigger-info">
        <span class="trigger-name">John Doe</span>
        <span class="trigger-role">Administrator</span>
      </div>
      <svg class="trigger-chevron" :class="{ rotated: isOpen }" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MotionIconsProvider from '../MotionIconsProvider.vue';
import * as Lucide from 'lucide-vue-next';

defineProps<{
  animation?: string;
}>();

const isOpen = ref(true);
const darkMode = ref(false);
</script>

<style scoped>
.profile-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-family: 'Inter', sans-serif;
}

/* Dropdown panel */
.profile-dropdown {
  width: 280px;
  background: var(--card-bg, #1e293b);
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.dropdown-header {
  padding: 1.1rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.header-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #000046, #1cb5e0);
  flex-shrink: 0;
}

.header-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-color, #f1f5f9);
}

.user-email {
  font-size: 0.8rem;
  color: var(--text-color, #94a3b8);
  opacity: 0.7;
  margin-top: 1px;
}

.dropdown-divider {
  height: 1px;
  background: var(--border-color, rgba(255,255,255,0.07));
}

.dropdown-menu {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  padding: 0.7rem 1rem;
  border: none;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.92rem;
  color: var(--text-color, #cbd5e1);
  transition: background 0.15s;
  text-align: left;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.menu-item.has-toggle {
  justify-content: space-between;
  cursor: default;
}

.item-left {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.menu-item.danger {
  color: #f87171;
}

.menu-item.danger:hover {
  background: rgba(248, 113, 113, 0.08);
}

.menu-icon {
  opacity: 0.75;
  flex-shrink: 0;
}

/* Toggle switch */
.toggle-track {
  width: 40px;
  height: 22px;
  background: rgba(255,255,255,0.15);
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
}

.toggle-track.on {
  background: #6366f1;
}

.toggle-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
}

.toggle-track.on .toggle-knob {
  transform: translateX(18px);
}

/* Trigger button */
.profile-trigger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 280px;
  padding: 0.65rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border-color, rgba(255,255,255,0.08));
  background: var(--card-bg, #1e293b);
  cursor: pointer;
  transition: background 0.2s;
  text-align: left;
}

.profile-trigger:hover {
  background: rgba(255, 255, 255, 0.06);
}

.trigger-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #000046, #1cb5e0);
  flex-shrink: 0;
}

.trigger-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.trigger-name {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-color, #f1f5f9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.trigger-role {
  font-size: 0.75rem;
  color: var(--text-color, #94a3b8);
  opacity: 0.6;
}

.trigger-chevron {
  color: var(--text-color, #94a3b8);
  opacity: 0.6;
  flex-shrink: 0;
  transition: transform 0.2s;
}

.trigger-chevron.rotated {
  transform: rotate(180deg);
}
</style>
