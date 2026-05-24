<template>
  <div class="gallery-container">
    <header class="gallery-header">
      <h1>MotionIcons</h1>
      <p>A highly performant, library-agnostic animated iconography system built for Vue 3</p>

      <div class="controls">
        <button @click="toggleTheme" class="btn">
          Toggle {{ isDark ? "Light" : "Dark" }}
        </button>
      </div>

      <div class="install-guide">
        <div class="install-header">
          <div class="install-tabs">
            <button 
              v-for="mgr in ['npm', 'pnpm', 'yarn', 'bun']" 
              :key="mgr"
              class="tab-btn"
              :class="{ active: pkgManager === mgr }"
              @click="pkgManager = mgr"
            >
              {{ mgr }}
            </button>
          </div>
          <div class="mac-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
        </div>
        <div class="install-body">
          <span class="dollar">$</span> 
          <span class="command">
            <template v-if="pkgManager === 'npm'">npm install motion-icons</template>
            <template v-else-if="pkgManager === 'pnpm'">pnpm add motion-icons</template>
            <template v-else-if="pkgManager === 'yarn'">yarn add motion-icons</template>
            <template v-else-if="pkgManager === 'bun'">bun add motion-icons</template>
          </span>
        </div>
      </div>
    </header>

    <AllIconsExplorer :isDark="isDark" />

    <footer class="gallery-footer">
      <p>
        Built on <a href="https://lucide.dev" target="_blank">Lucide</a>, 
        <a href="https://heroicons.com" target="_blank">Heroicons</a>, 
        <a href="https://iconoir.com" target="_blank">Iconoir</a>, 
        <a href="https://tabler-icons.io" target="_blank">Tabler</a>, 
        <a href="https://phosphoricons.com" target="_blank">Phosphor</a>, 
        <a href="https://hugeicons.com" target="_blank">HugeIcons</a>, 
        <a href="https://fontawesome.com" target="_blank">FontAwesome</a>, and 
        <a href="https://simpleicons.org" target="_blank">SimpleIcons</a>
        &middot; Icons licensed under MIT / ISC / CC BY 4.0 
        &middot; <a href="#" target="_blank">Source on GitHub</a> 
        &middot; Made by Edgar
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import AllIconsExplorer from './AllIconsExplorer.vue';

const isDark = ref(true);
const pkgManager = ref('npm');

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute(
    "data-theme",
    isDark.value ? "dark" : "light",
  );
};

onMounted(() => {
  document.documentElement.setAttribute("data-theme", "dark");
});
</script>

<style scoped>
.gallery-container {
  max-width: 1800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  color: var(--text-color);
}

.gallery-header {
  text-align: center;
  margin-bottom: 4rem;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(to right, #818cf8, #c084fc);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.gallery-grid {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.icon-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.icon-card:hover {
  transform: translateY(-5px);
  border-color: #818cf8;
  box-shadow: 0 10px 30px rgba(129, 140, 248, 0.1);
}

.icon-label {
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.8;
}

.btn {
  background: var(--btn-bg);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn:hover {
  background: var(--btn-hover-bg);
}

.install-guide {
  max-width: 600px;
  margin: 3rem auto 0;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: left;
}

.install-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--border-color);
  background: rgba(128, 128, 128, 0.03);
}

.install-tabs {
  display: flex;
  gap: 0.25rem;
}

.tab-btn {
  background: transparent;
  border: none;
  color: var(--text-color);
  opacity: 0.5;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: monospace;
  transition: all 0.2s;
}

.tab-btn:hover {
  background: rgba(128, 128, 128, 0.1);
}

.tab-btn.active {
  background: rgba(128, 128, 128, 0.15);
  opacity: 1;
}

.mac-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot.red { background: #FF5F56; opacity: 0.8; }
.dot.yellow { background: #FFBD2E; opacity: 0.8; }
.dot.green { background: #27C93F; opacity: 0.8; }

.install-body {
  padding: 2rem 1.5rem;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 1.05rem;
  display: flex;
  gap: 1.5rem;
}

.dollar {
  color: #10B981;
  font-weight: 700;
}

.command {
  color: var(--text-color);
  opacity: 0.9;
}

.gallery-footer {
  text-align: center;
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.5;
  font-weight: 400;
}

.gallery-footer p {
  line-height: 1.8;
}

.gallery-footer a {
  color: var(--text-color);
  text-decoration: none;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  padding-bottom: 1px;
  transition: all 0.2s ease;
}

.gallery-footer a:hover {
  color: #818CF8;
  border-bottom-color: #818CF8;
  opacity: 1;
}

@media (max-width: 600px) {
  .gallery-header h1 {
    font-size: 2.5rem;
  }
  .install-header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  .mac-dots {
    display: none;
  }
  .install-tabs {
    width: 100%;
    justify-content: space-between;
  }
  .install-body {
    font-size: 0.9rem;
    padding: 1.5rem 1rem;
  }
}
</style>
