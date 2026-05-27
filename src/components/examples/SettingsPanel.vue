<template>
  <div class="sp-wrapper">
    <div class="sp-panel">
      <!-- Header -->
      <div class="sp-header">
        <MotionIconsProvider :icon="Lucide.SettingsIcon" :animation="animation" :size="20" class="sp-header-icon" />
        <span class="sp-header-title">Settings</span>
      </div>

      <!-- Sections -->
      <div class="sp-body">
        <div class="sp-section">
          <div class="sp-section-label">Appearance</div>

          <div class="sp-row">
            <div class="sp-row-left">
              <MotionIconsProvider :icon="Lucide.MoonIcon" :animation="animation" :size="18" class="sp-row-icon" />
              <div>
                <div class="sp-row-title">Dark Mode</div>
                <div class="sp-row-desc">Switch to dark interface</div>
              </div>
            </div>
            <div class="sp-toggle" :class="{ on: settings.darkMode }" @click="settings.darkMode = !settings.darkMode">
              <div class="sp-toggle-knob"></div>
            </div>
          </div>

          <div class="sp-row">
            <div class="sp-row-left">
              <MotionIconsProvider :icon="Lucide.ZapIcon" :animation="animation" :size="18" class="sp-row-icon" />
              <div>
                <div class="sp-row-title">Reduce Motion</div>
                <div class="sp-row-desc">Minimize animations</div>
              </div>
            </div>
            <div class="sp-toggle" :class="{ on: settings.reduceMotion }" @click="settings.reduceMotion = !settings.reduceMotion">
              <div class="sp-toggle-knob"></div>
            </div>
          </div>
        </div>

        <div class="sp-divider"></div>

        <div class="sp-section">
          <div class="sp-section-label">Notifications</div>

          <div class="sp-row">
            <div class="sp-row-left">
              <MotionIconsProvider :icon="Lucide.BellIcon" :animation="animation" :size="18" class="sp-row-icon" />
              <div>
                <div class="sp-row-title">Push Alerts</div>
                <div class="sp-row-desc">In-app notifications</div>
              </div>
            </div>
            <div class="sp-toggle" :class="{ on: settings.pushAlerts }" @click="settings.pushAlerts = !settings.pushAlerts">
              <div class="sp-toggle-knob"></div>
            </div>
          </div>

          <div class="sp-row">
            <div class="sp-row-left">
              <MotionIconsProvider :icon="Lucide.MailIcon" :animation="animation" :size="18" class="sp-row-icon" />
              <div>
                <div class="sp-row-title">Email Digest</div>
                <div class="sp-row-desc">Weekly summary emails</div>
              </div>
            </div>
            <div class="sp-toggle" :class="{ on: settings.emailDigest }" @click="settings.emailDigest = !settings.emailDigest">
              <div class="sp-toggle-knob"></div>
            </div>
          </div>
        </div>

        <div class="sp-divider"></div>

        <div class="sp-section">
          <div class="sp-section-label">Account</div>
          <button class="sp-action-row group">
            <MotionIconsProvider :icon="Lucide.ShieldIcon" :animation="animation" :size="18" class="sp-row-icon" />
            <span class="sp-row-title">Privacy & Security</span>
            <MotionIconsProvider :icon="Lucide.ChevronRightIcon" :animation="animation" :size="16" class="sp-chevron" />
          </button>
          <button class="sp-action-row group danger">
            <MotionIconsProvider :icon="Lucide.LogOutIcon" :animation="animation" :size="18" class="sp-row-icon" />
            <span class="sp-row-title">Sign Out</span>
            <MotionIconsProvider :icon="Lucide.ChevronRightIcon" :animation="animation" :size="16" class="sp-chevron" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import MotionIconsProvider from '../MotionIconsProvider.vue';
import * as Lucide from 'lucide-vue-next';

defineProps<{ animation?: string }>();

const settings = reactive({
  darkMode: false,
  reduceMotion: false,
  pushAlerts: true,
  emailDigest: true,
});
</script>

<style scoped>
.sp-wrapper {
  display: flex;
  justify-content: center;
  font-family: var(--font-body);
}

.sp-panel {
  width: 340px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 18px;
  backdrop-filter: blur(16px);
  overflow: hidden;
}

.sp-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 1rem 1.2rem;
  border-bottom: 1px solid var(--border-color);
}

.sp-header-icon { color: #818cf8; }
.sp-header-title { font-weight: 700; font-size: 0.95rem; color: var(--text-color); }

.sp-body { padding: 0.5rem 0.75rem; }

.sp-section { padding: 0.25rem 0; }

.sp-section-label {
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-color);
  opacity: 0.45;
  padding: 0.5rem 0.5rem 0.3rem;
}

.sp-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.5rem;
  border-radius: 10px;
}

.sp-row-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.sp-row-icon { color: var(--text-color); opacity: 0.6; flex-shrink: 0; }
.sp-row-title { font-size: 0.86rem; font-weight: 500; color: var(--text-color); }
.sp-row-desc { font-size: 0.74rem; color: var(--text-color); opacity: 0.5; margin-top: 1px; }

/* Toggle */
.sp-toggle {
  width: 40px;
  height: 22px;
  background: var(--btn-bg);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}
.sp-toggle.on { background: #818cf8; border-color: #818cf8; }
.sp-toggle-knob {
  position: absolute;
  top: 1px; left: 2px;
  width: 16px; height: 16px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}
.sp-toggle.on .sp-toggle-knob { transform: translateX(18px); }

.sp-divider { height: 1px; background: var(--border-color); margin: 0.25rem 0; }

/* Action rows */
.sp-action-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.65rem 0.5rem;
  border: none;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;
  text-align: left;
}
.sp-action-row:hover { background: var(--btn-hover-bg); }
.sp-action-row.danger .sp-row-icon { color: #ef4444; opacity: 1; }
.sp-action-row.danger .sp-row-title { color: #ef4444; }
.sp-action-row.danger:hover { background: rgba(239, 68, 68, 0.1); }
.sp-chevron { color: var(--text-color); opacity: 0.5; margin-left: auto; flex-shrink: 0; }

</style>
