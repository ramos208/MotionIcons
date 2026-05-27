<template>
  <div class="notif-wrapper">
    <!-- Panel always visible -->
    <div class="notif-panel">
      <div class="notif-header">
        <div class="notif-header-left">
          <MotionIconsProvider :icon="Lucide.BellIcon" :animation="animation" :size="18" class="notif-header-icon" />
          <span class="notif-title">Notifications</span>
          <span class="notif-count" v-if="unread > 0">{{ unread }}</span>
        </div>
        <button class="notif-mark-all" @click="markAll">Mark all read</button>
      </div>

      <div class="notif-list">
        <div
          class="notif-item group"
          v-for="n in notifications"
          :key="n.id"
          :class="{ unread: !n.read }"
          @click="n.read = true; recalcUnread()"
        >
          <div class="notif-icon" :style="{ background: n.color }">
            <MotionIconsProvider :icon="n.icon" :animation="animation" :size="16" />
          </div>
          <div class="notif-content">
            <div class="notif-text">{{ n.text }}</div>
            <div class="notif-time">{{ n.time }}</div>
          </div>
          <div class="notif-dot" v-if="!n.read"></div>
        </div>
      </div>

      <!-- Footer always visible -->
      <div class="notif-footer">
        <button class="notif-view-all group">
          <MotionIconsProvider :icon="Lucide.ExternalLinkIcon" :animation="animation" :size="14" />
          View all notifications
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MotionIconsProvider from '../MotionIconsProvider.vue';
import * as Lucide from 'lucide-vue-next';

defineProps<{ animation?: string }>();

const notifications = ref([
  { id: 1, text: 'Alex merged your pull request', time: '2 min ago', read: false, icon: Lucide.GitMergeIcon, color: 'rgba(99,102,241,0.12)' },
  { id: 2, text: 'New comment on your design', time: '15 min ago', read: false, icon: Lucide.MessageSquareIcon, color: 'rgba(34,197,94,0.12)' },
  { id: 3, text: 'Build succeeded on main', time: '1 hr ago', read: false, icon: Lucide.CheckCircleIcon, color: 'rgba(34,197,94,0.12)' },
  { id: 4, text: 'Sara invited you to a project', time: '3 hrs ago', read: true, icon: Lucide.UserPlusIcon, color: 'rgba(59,130,246,0.12)' },
  { id: 5, text: 'Deployment failed on staging', time: '5 hrs ago', read: true, icon: Lucide.AlertTriangleIcon, color: 'rgba(239,68,68,0.12)' },
]);

const unread = ref(notifications.value.filter(n => !n.read).length);

function recalcUnread() {
  unread.value = notifications.value.filter(n => !n.read).length;
}

function markAll() {
  notifications.value.forEach(n => n.read = true);
  unread.value = 0;
}
</script>

<style scoped>
.notif-wrapper {
  display: flex;
  justify-content: center;
  font-family: var(--font-body);
}

.notif-panel {
  width: 360px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  backdrop-filter: blur(16px);
  overflow: hidden;
}

.notif-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.1rem 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.notif-header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.notif-header-icon { color: #818cf8; }

.notif-title {
  font-weight: 700;
  font-size: 0.93rem;
  color: var(--text-color);
}

.notif-count {
  background: #818cf8;
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
}

.notif-mark-all {
  font-size: 0.75rem;
  color: #818cf8;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
}
.notif-mark-all:hover { text-decoration: underline; }

.notif-list { padding: 0.4rem 0.5rem; }

.notif-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.7rem 0.6rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.12s;
  position: relative;
}
.notif-item:hover { background: var(--btn-hover-bg); }
.notif-item.unread { background: rgba(129, 140, 248, 0.08); }

.notif-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  flex-shrink: 0;
}

.notif-content { flex: 1; }

.notif-text {
  font-size: 0.83rem;
  color: var(--text-color);
  font-weight: 500;
  line-height: 1.4;
}

.notif-time {
  font-size: 0.72rem;
  color: var(--text-color);
  opacity: 0.5;
  margin-top: 2px;
}

.notif-dot {
  width: 8px;
  height: 8px;
  background: #818cf8;
  border-radius: 50%;
  flex-shrink: 0;
}

.notif-footer {
  border-top: 1px solid var(--border-color);
  padding: 0.55rem 0.5rem;
  background: var(--btn-bg);
}

.notif-view-all {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.55rem;
  border: none;
  background: transparent;
  border-radius: 8px;
  font-size: 0.81rem;
  color: var(--text-color);
  opacity: 0.7;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, color 0.15s;
}
.notif-view-all:hover {
  background: var(--btn-hover-bg);
  opacity: 1;
}

</style>
