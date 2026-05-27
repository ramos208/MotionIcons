<template>
  <div class="app-wrapper">
    <nav class="top-nav">
      <div class="nav-brand">
        <img :src="logoUrl" alt="MotionIcons Logo" class="logo-img" />
        <span class="logo-text">MotionIcons</span>
      </div>
      
      <div class="nav-links">
        <button :class="{ active: currentView === 'gallery' }" @click="currentView = 'gallery'">Explorer</button>
        <!-- <button :class="{ active: currentView === 'semantic' }" @click="currentView = 'semantic'">AI Engine</button> -->
        <button :class="{ active: currentView === 'examples' }" @click="currentView = 'examples'">Examples</button>
        <button :class="{ active: currentView === 'docs' }" @click="currentView = 'docs'">Documentation</button>
      </div>

      <div class="nav-actions">
        <button @click="toggleTheme" class="theme-btn">
          <svg v-if="isDark" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          <span class="theme-text">{{ isDark ? 'Toggle Light' : 'Toggle Dark' }}</span>
        </button>
        
        <a href="https://github.com/ramos208/MotionIcons.git" target="_blank" class="github-btn">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          <span class="github-text">View on GitHub</span>
        </a>
      </div>
    </nav>

    <main class="app-content">
      <IconGallery v-if="currentView === 'gallery'" :isDark="isDark" />
      <SemanticSandbox v-else-if="currentView === 'semantic'" :isDark="isDark" />
      <Examples v-else-if="currentView === 'examples'" :isDark="isDark" />
      <Documentation v-else />
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <p>
          Built on <a href="https://lucide.dev" target="_blank">Lucide</a>, 
          <a href="https://heroicons.com" target="_blank">Heroicons</a>, 
          <a href="https://iconoir.com" target="_blank">Iconoir</a>, 
          <a href="https://tabler-icons.io" target="_blank">Tabler</a>, 
          <a href="https://phosphoricons.com" target="_blank">Phosphor</a>, 
          <a href="https://hugeicons.com" target="_blank">HugeIcons</a>, 
          <a href="https://fontawesome.com" target="_blank">FontAwesome</a>, and 
          <a href="https://simpleicons.org" target="_blank">SimpleIcons</a>
        </p>
        <p class="footer-links">
          Icons licensed under MIT / ISC / CC BY 4.0 
          <span class="sep">&middot;</span> 
          <a href="https://github.com/ramos208/MotionIcons.git" target="_blank">Source on GitHub</a> 
          <span class="sep">&middot;</span> 
          Made by <strong>Edgar</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import logoUrl from "./assets/MotionIconsLogo.png";
import IconGallery from "./components/IconGallery.vue";
import SemanticSandbox from "./components/SemanticSandbox.vue";
import Documentation from "./components/Documentation.vue";
import Examples from "./components/Examples.vue";

const currentView = ref('gallery');
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute(
    "data-theme",
    isDark.value ? "dark" : "light",
  );
};

onMounted(() => {
  // Simple Hash Routing initialization
  const rawHash = window.location.hash.replace('#', '');
  const basePath = rawHash.split('/')[0];
  
  if (['gallery', 'semantic', 'examples', 'docs'].includes(basePath)) {
    currentView.value = basePath;
  } else {
    // Default to gallery if no valid hash
    window.location.hash = 'gallery';
  }

  // Handle browser back/forward buttons
  window.addEventListener('hashchange', () => {
    const newRawHash = window.location.hash.replace('#', '');
    const newBasePath = newRawHash.split('/')[0];
    
    if (['gallery', 'semantic', 'examples', 'docs'].includes(newBasePath) && currentView.value !== newBasePath) {
      currentView.value = newBasePath;
    }
  });

  document.documentElement.setAttribute("data-theme", "light");
});

// Sync state changes to URL hash, preserving subpaths if view hasn't changed
watch(currentView, (newView) => {
  const currentBasePath = window.location.hash.replace('#', '').split('/')[0];
  if (currentBasePath !== newView) {
    window.location.hash = newView;
  }
});
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-color);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  flex: 1;
}

.logo-img {
  height: 32px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  color: transparent !important;
  display: inline-block;
  font-weight: 800;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;
}

.nav-links button {
  background: transparent;
  border: none;
  color: var(--text-color);
  font-weight: 600;
  font-size: 0.95rem;
  opacity: 0.6;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-links button:hover {
  opacity: 0.8;
  background: rgba(128, 128, 128, 0.1);
}

.nav-links button.active {
  opacity: 1;
  background: rgba(129, 140, 248, 0.15);
  color: #818CF8;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
}

.theme-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-color);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-btn:hover {
  background: var(--btn-hover-bg);
  transform: translateY(-2px);
}

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--btn-bg);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid var(--border-color);
}

.github-btn:hover {
  background: var(--btn-hover-bg);
  transform: translateY(-2px);
}


.app-content {
  flex-grow: 1;
}

@media (max-width: 900px) {
  .github-text {
    display: none;
  }
}

@media (max-width: 600px) {
  .top-nav {
    flex-wrap: wrap;
    gap: 1rem;
  }
  .nav-brand {
    flex: 1 1 50%;
  }
  .nav-actions {
    flex: 1 1 50%;
  }
  .nav-links {
    flex: 1 1 100%;
    order: 3;
    justify-content: flex-start;
  }
}

.app-footer {
  margin-top: 4rem;
  padding: 3rem 2rem 2rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-color);
  text-align: center;
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.7;
  font-size: 0.85rem;
  line-height: 1.8;
}

.footer-content p {
  margin: 0 0 0.5rem;
}

.footer-links {
  margin-top: 0.75rem !important;
  font-weight: 500;
}

.app-footer a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  padding-bottom: 2px;
  transition: all 0.2s ease;
}

.app-footer a:hover {
  color: #818CF8;
  border-bottom-color: #818CF8;
}

.sep {
  margin: 0 0.5rem;
  opacity: 0.5;
}
</style>
