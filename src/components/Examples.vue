<template>
  <div class="examples-container">
    <div class="examples-header">
      <h1 class="examples-title">Examples</h1>
      <p class="examples-lead">Explore our collection of animated components.</p>
    </div>

    <div class="examples-grid" v-if="!selectedExample">
      <div class="example-card group" v-for="example in examples" :key="example.id" @click="selectedExample = example">
        <div class="example-preview" :class="{ 'dark-preview': isDark }">
          <div class="preview-mockup-wrapper">
            <!-- X Sidebar Preview -->
            <div v-if="example.id === 'x-sidebar'" class="mini-mockup mockup-x-sidebar">
              <XSidebar animation="bounce" />
            </div>

            <!-- Animated Navbar Preview -->
            <div v-if="example.id === 'animated-navbar'" class="mini-mockup mockup-animated-navbar">
              <AnimatedNavbar animation="bounce" />
            </div>

            <!-- Dock Preview -->
            <div v-if="example.id === 'dock'" class="mini-mockup mockup-dock">
              <Dock animation="bounce" />
            </div>

            <!-- Collapsible Sidebar Preview -->
            <div v-if="example.id === 'collapsible-sidebar'" class="mini-mockup mockup-collapsible-sidebar">
              <CollapsibleSidebar animation="bounce" />
            </div>

            <!-- Profile Dropdown Preview -->
            <div v-if="example.id === 'profile'" class="mini-mockup mockup-profile">
              <ProfileDropdown animation="bounce" />
            </div>

            <!-- Command Palette Preview -->
            <div v-if="example.id === 'command-palette'" class="mini-mockup mockup-generic">
              <CommandPalette animation="bounce" />
            </div>

            <!-- Notification Panel Preview -->
            <div v-if="example.id === 'notification-panel'" class="mini-mockup mockup-generic">
              <NotificationPanel animation="bounce" />
            </div>

            <!-- Settings Panel Preview -->
            <div v-if="example.id === 'settings-panel'" class="mini-mockup mockup-generic">
              <SettingsPanel animation="bounce" />
            </div>
          </div>
        </div>
        <div class="example-info">
          <h3>{{ example.title }}</h3>
          <p>{{ example.description }}</p>
          <span class="example-author">by {{ example.author }}</span>
        </div>
      </div>
    </div>

    <div class="example-detail" v-else>
      <button class="back-btn" @click="selectedExample = null">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to Examples
      </button>

      <div class="detail-header">
        <div class="detail-title-section">
          <h1>{{ selectedExample.title }}</h1>
          <p>{{ selectedExample.description }}</p>
          <div class="author-badge">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            {{ selectedExample.author }}
          </div>
        </div>
        
        <div class="detail-meta">
          <div class="meta-group">
            <span>PLATFORM</span>
            <div class="badge-row">
              <span class="meta-badge" v-for="p in selectedExample.platforms" :key="p">{{ p }}</span>
            </div>
          </div>
          <div class="meta-group">
            <span>CATEGORY</span>
            <div class="badge-row">
              <span class="meta-badge" v-for="c in selectedExample.categories" :key="c">{{ c }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="preview-window">
        <div class="window-header">
          <div class="window-tabs">
            <button :class="{ active: viewMode === 'preview' }" @click="viewMode = 'preview'">Preview</button>
            <button :class="{ active: viewMode === 'code' }" @click="viewMode = 'code'">Code</button>
          </div>
          <div class="window-actions">
            <select v-model="selectedAnimation" class="animation-select">
              <option v-for="anim in availableAnimations" :key="anim" :value="anim">{{ anim }}</option>
            </select>
            <div class="toggle-container">
              <span>Animation</span>
              <label class="toggle-switch">
                <input type="checkbox" v-model="animationEnabled">
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="window-body" :class="{ 'dark-bg': isDark }">
          
          <div v-if="viewMode === 'preview'" class="interactive-preview">
            
            <!-- X Sidebar -->
            <div v-if="selectedExample.id === 'x-sidebar'" class="mockup-x-sidebar">
              <XSidebar :animation="animationEnabled ? selectedAnimation : undefined" />
            </div>

            <!-- Animated Navbar -->
            <div v-if="selectedExample.id === 'animated-navbar'" class="mockup-animated-navbar">
              <AnimatedNavbar :animation="animationEnabled ? selectedAnimation : undefined" />
            </div>

            <!-- Dock -->
            <div v-if="selectedExample.id === 'dock'" class="mockup-dock">
              <Dock :animation="animationEnabled ? selectedAnimation : undefined" />
            </div>

            <!-- Collapsible Sidebar -->
            <div v-if="selectedExample.id === 'collapsible-sidebar'" class="mockup-collapsible-sidebar">
              <CollapsibleSidebar :animation="animationEnabled ? selectedAnimation : undefined" />
            </div>

            <!-- Profile Dropdown -->
            <div v-if="selectedExample.id === 'profile'" class="mockup-profile">
              <ProfileDropdown :animation="animationEnabled ? selectedAnimation : undefined" />
            </div>

            <!-- Command Palette -->
            <div v-if="selectedExample.id === 'command-palette'" class="mockup-generic">
              <CommandPalette :animation="animationEnabled ? selectedAnimation : undefined" />
            </div>

            <!-- Notification Panel -->
            <div v-if="selectedExample.id === 'notification-panel'" class="mockup-generic">
              <NotificationPanel :animation="animationEnabled ? selectedAnimation : undefined" />
            </div>

            <!-- Settings Panel -->
            <div v-if="selectedExample.id === 'settings-panel'" class="mockup-generic">
              <SettingsPanel :animation="animationEnabled ? selectedAnimation : undefined" />
            </div>

          </div>

          <div v-else class="code-view">
            <pre><code>{{ getFullCodeFor(selectedExample.id) }}</code></pre>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw, h, onMounted, watch } from 'vue';
import MotionIconsProvider from './MotionIconsProvider.vue';
import * as Lucide from 'lucide-vue-next';
import * as SimpleIconsSource from 'simple-icons';

import XSidebarCode from './examples/XSidebar.vue?raw';
import AnimatedNavbarCode from './examples/AnimatedNavbar.vue?raw';
import CollapsibleSidebarCode from './examples/CollapsibleSidebar.vue?raw';
import DockCode from './examples/Dock.vue?raw';
import ProfileDropdownCode from './examples/ProfileDropdown.vue?raw';
import CommandPaletteCode from './examples/CommandPalette.vue?raw';
import NotificationPanelCode from './examples/NotificationPanel.vue?raw';
import SettingsPanelCode from './examples/SettingsPanel.vue?raw';

import XSidebar from './examples/XSidebar.vue';
import AnimatedNavbar from './examples/AnimatedNavbar.vue';
import CollapsibleSidebar from './examples/CollapsibleSidebar.vue';
import Dock from './examples/Dock.vue';
import ProfileDropdown from './examples/ProfileDropdown.vue';
import CommandPalette from './examples/CommandPalette.vue';
import NotificationPanel from './examples/NotificationPanel.vue';
import SettingsPanel from './examples/SettingsPanel.vue';

defineProps<{ isDark: boolean }>();

// Prepare simple icons for rendering
const prepareSimpleIcon = (path: string) => {
  return markRaw((props: any) => h('svg', {
    viewBox: `0 0 24 24`,
    fill: 'currentColor',
    width: props.size || 24,
    height: props.size || 24,
    ...props
  }, [h('path', { d: path })]));
};

const SimpleIcons = {
  siX: prepareSimpleIcon(SimpleIconsSource.siX.path),
  siWhatsapp: prepareSimpleIcon(SimpleIconsSource.siWhatsapp.path),
  siGithub: prepareSimpleIcon(SimpleIconsSource.siGithub.path),
  siFacebook: prepareSimpleIcon(SimpleIconsSource.siFacebook.path),
  siLinkedin: prepareSimpleIcon(SimpleIconsSource.siGoogle.path),
  siInstagram: prepareSimpleIcon(SimpleIconsSource.siInstagram.path)
};

const selectedExample = ref<any>(null);
const viewMode = ref('preview');
const animationEnabled = ref(true);
const selectedAnimation = ref('bounce');
const isCollapsed = ref(false);
const availableAnimations = ref([
  'pulse', 'bounce', 'spin', 'shake', 'jiggle', 'flip', 
  'float', 'heartbeat', 'swing', 'wobble', 'tada', 
  'zoom-in', 'zoom-out', 'rubber-band', 'spin-pulse', 'glitch'
]);

const getFullCodeFor = (id: string) => {
  let code = '';
  if (id === 'x-sidebar') code = XSidebarCode;
  else if (id === 'animated-navbar') code = AnimatedNavbarCode;
  else if (id === 'collapsible-sidebar') code = CollapsibleSidebarCode;
  else if (id === 'dock') code = DockCode;
  else if (id === 'profile') code = ProfileDropdownCode;
  else if (id === 'command-palette') code = CommandPaletteCode;
  else if (id === 'notification-panel') code = NotificationPanelCode;
  else if (id === 'settings-panel') code = SettingsPanelCode;
  else return 'Component code coming soon.';

  const animation = animationEnabled.value ? selectedAnimation.value : '';
  return code.replace(/:animation="animation"/g, `animation="${animation}"`);
};

const examples = ref([
  {
    id: 'x-sidebar',
    title: 'X Sidebar',
    description: 'An animated sidebar navigation component inspired by X (formerly Twitter). Features smooth hover effects.',
    author: 'ramos208',
    icon: Lucide.LayoutDashboardIcon,
    platforms: ['Vue 3', 'TypeScript'],
    categories: ['Sidebar', 'Navigation', 'Animation']
  },
  {
    id: 'animated-navbar',
    title: 'Animated Navbar',
    description: 'A responsive top navigation bar with a sliding active indicator and hover-triggered icon animations.',
    author: 'ramos208',
    icon: Lucide.PanelTopIcon,
    platforms: ['Vue 3', 'TypeScript'],
    categories: ['Navbar', 'Responsive', 'Micro-interactions']
  },
  {
    id: 'collapsible-sidebar',
    title: 'Collapsible Sidebar',
    description: 'A dashboard sidebar that expands and collapses with a smooth transition. Features icon-only mode.',
    author: 'ramos208',
    icon: Lucide.PanelLeftCloseIcon,
    platforms: ['Vue 3', 'TypeScript'],
    categories: ['Sidebar', 'Collapsible', 'Dashboard']
  },
  {
    id: 'dock',
    title: 'Dock',
    description: 'An animated dock navigation component inspired by macOS. Features smooth hover interactions.',
    author: 'ramos208',
    icon: Lucide.MonitorSmartphoneIcon,
    platforms: ['Vue 3', 'TypeScript'],
    categories: ['Dock', 'macOS', 'Animation']
  },
  {
    id: 'profile',
    title: 'Profile Dropdown',
    description: 'A sleek profile dropdown menu with animated icons and user information.',
    author: 'ramos208',
    icon: Lucide.UserCircleIcon,
    platforms: ['Vue 3', 'TypeScript'],
    categories: ['Dropdown', 'Menu']
  },
  {
    id: 'command-palette',
    title: 'Command Palette',
    description: 'A Spotlight-style command palette with fuzzy search and keyboard shortcut hints.',
    author: 'ramos208',
    icon: Lucide.SearchIcon,
    platforms: ['Vue 3', 'TypeScript'],
    categories: ['Search', 'Command', 'Productivity']
  },
  {
    id: 'notification-panel',
    title: 'Notification Panel',
    description: 'An animated notification dropdown with unread badges, read states, and mark-all action.',
    author: 'ramos208',
    icon: Lucide.BellIcon,
    platforms: ['Vue 3', 'TypeScript'],
    categories: ['Notification', 'Dropdown', 'UI']
  },
  {
    id: 'settings-panel',
    title: 'Settings Panel',
    description: 'A clean settings panel with toggle switches for appearance, notifications, and account actions.',
    author: 'ramos208',
    icon: Lucide.SettingsIcon,
    platforms: ['Vue 3', 'TypeScript'],
    categories: ['Settings', 'Panel', 'Dashboard']
  }
]);

onMounted(() => {
  const hashParts = window.location.hash.replace('#', '').split('/');
  if (hashParts.length > 1 && hashParts[0] === 'examples') {
    const exampleId = hashParts[1];
    const found = examples.value.find(e => e.id === exampleId);
    if (found) {
      selectedExample.value = found;
    }
  }

  window.addEventListener('hashchange', () => {
    const parts = window.location.hash.replace('#', '').split('/');
    if (parts[0] === 'examples') {
      if (parts.length > 1) {
        const found = examples.value.find(e => e.id === parts[1]);
        if (found && selectedExample.value?.id !== found.id) {
          selectedExample.value = found;
        }
      } else {
        selectedExample.value = null;
      }
    }
  });
});

watch(selectedExample, (newEx) => {
  if (newEx) {
    window.location.hash = `examples/${newEx.id}`;
  } else {
    window.location.hash = 'examples';
  }
});
</script>

<style scoped>
.examples-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.examples-header {
  margin-bottom: 4rem;
}

.examples-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  color: var(--text-color);
}

.examples-lead {
  font-size: 1.25rem;
  opacity: 0.7;
  color: var(--text-color);
  font-family: 'Fira Code', monospace;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.example-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.example-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  border-color: #818CF8;
}

.example-preview {
  height: 220px;
  background: rgba(128, 128, 128, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
}

.dark-preview {
  background: rgba(0, 0, 0, 0.2);
}

.preview-mockup-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.mini-mockup {
  transform: scale(0.5);
  transform-origin: center center;
  pointer-events: none;
  transition: transform 0.3s ease;
}

.example-card:hover .mini-mockup {
  transform: scale(0.55) translateY(-5px);
}

.example-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.example-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-color);
  font-family: 'Fira Code', monospace;
}

.example-info p {
  margin: 0 0 1.5rem 0;
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.7;
  color: var(--text-color);
  flex-grow: 1;
}

.example-author {
  font-size: 0.8rem;
  opacity: 0.5;
  color: var(--text-color);
  font-family: 'Fira Code', monospace;
}

/* Detailed View Styles */
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  margin-bottom: 3rem;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.back-btn:hover {
  opacity: 1;
}

.detail-header {
  display: flex;
  gap: 4rem;
  margin-bottom: 3rem;
  align-items: flex-start;
}

.detail-title-section {
  flex: 2;
}

.detail-title-section h1 {
  font-family: 'Fira Code', monospace;
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: var(--text-color);
}

.detail-title-section p {
  font-size: 1.15rem;
  line-height: 1.6;
  opacity: 0.7;
  color: var(--text-color);
  font-family: 'Fira Code', monospace;
  margin-bottom: 1.5rem;
  max-width: 800px;
}

.author-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.6;
  color: var(--text-color);
  font-family: 'Fira Code', monospace;
}

.detail-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.meta-group span {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-color);
  opacity: 0.5;
  margin-bottom: 0.75rem;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.meta-badge {
  background: #4B5563;
  color: white;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Fira Code', monospace;
}

.preview-window {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  background: var(--card-bg);
}

.window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.window-tabs {
  display: flex;
  background: rgba(128, 128, 128, 0.1);
  padding: 0.25rem;
  border-radius: 8px;
}

.window-tabs button {
  background: transparent;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-color);
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.2s;
}

.window-tabs button.active {
  background: var(--bg-color);
  opacity: 1;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.window-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: var(--text-color);
  font-family: 'Fira Code', monospace;
}

.toggle-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0.6;
}

.animation-select {
  background: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}

.animation-select:hover {
  border-color: #818CF8;
}

.animation-select:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

/* Toggle Switch CSS */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}
.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #6366f1;
}
input:checked + .slider:before {
  transform: translateX(20px);
}

.window-body {
  min-height: 500px;
  display: flex;
  background: #f8fafc;
}

.window-body.dark-bg {
  background: #0f172a;
}

.interactive-preview {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
}

.code-view {
  flex-grow: 1;
  padding: 2rem;
  overflow: auto;
  max-height: 700px;
}
.code-view pre {
  margin: 0;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.95rem;
  color: var(--text-color);
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  line-height: 1.5;
  white-space: pre;
}

/* MOCKUP STYLES */
.mockup-x-sidebar {
  background: var(--bg-color);
  padding: 1.5rem 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  min-width: 250px;
}

.x-logo {
  padding-left: 0.5rem;
}

.x-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.x-link {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  transition: background 0.2s;
  cursor: pointer;
}

.x-link:hover {
  background: rgba(128, 128, 128, 0.1);
}

.x-post-btn {
  background: #1d9bf0;
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 1rem;
}

.mockup-animated-navbar {
  background: var(--bg-color);
  padding: 0.5rem;
  border-radius: 9999px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.nav-pill {
  display: flex;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: var(--text-color);
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-item:hover {
  background: rgba(128, 128, 128, 0.05);
}

.nav-item.active {
  background: rgba(128, 128, 128, 0.1);
}

.mockup-dock {
  background: var(--bg-color);
  padding: 1rem 1.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border: 1px solid var(--border-color);
}

.macos-dock {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.dock-item {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  cursor: pointer;
  transition: transform 0.2s;
}

.dock-item:hover {
  transform: scale(1.2) translateY(-10px);
}

.mockup-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  opacity: 0.5;
  color: var(--text-color);
  font-family: 'Fira Code', monospace;
}

@media (max-width: 900px) {
  .detail-header {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
