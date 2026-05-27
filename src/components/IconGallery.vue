<template>
  <div class="gallery-container">
    <header class="gallery-header">
      <h1>MotionIcons</h1>
      <p>A highly performant, library-agnostic animated iconography system built for Vue 3</p>

      <div class="showcase-grid">
        <div class="code-panel">
          <div class="panel-header">
            <div class="panel-tabs">
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
          <div class="panel-body">
            <span class="dollar">$</span> 
            <span class="command">
              <template v-if="pkgManager === 'npm'">npm install motion-icons</template>
              <template v-else-if="pkgManager === 'pnpm'">pnpm add motion-icons</template>
              <template v-else-if="pkgManager === 'yarn'">yarn add motion-icons</template>
              <template v-else-if="pkgManager === 'bun'">bun add motion-icons</template>
            </span>
          </div>
        </div>

        <div class="code-panel">
          <div class="panel-header">
            <div class="panel-tabs">
              <span class="tab-btn active">App.vue</span>
            </div>
            <div class="mac-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
          </div>
          <div class="panel-body usage-body">
            <pre><code><span class="keyword">import</span> { MotionIconsProvider, Lucide } <span class="keyword">from</span> <span class="string">'motion-icons'</span>;

&lt;<span class="tag">template</span>&gt;
  &lt;<span class="tag">MotionIconsProvider</span> 
    <span class="attr">:icon</span>=<span class="string">"Lucide.RocketIcon"</span>
    <span class="attr">animation</span>=<span class="string">"bounce"</span>
  /&gt;
&lt;/<span class="tag">template</span>&gt;</code></pre>
          </div>
        </div>
      </div>
    </header>

    <AllIconsExplorer :isDark="isDark" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AllIconsExplorer from './AllIconsExplorer.vue';

defineProps<{ isDark: boolean }>();

const pkgManager = ref('npm');
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

.showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto 0;
  text-align: left;
}

.code-panel {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--border-color);
  background: rgba(128, 128, 128, 0.03);
}

.panel-tabs {
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

.panel-body {
  padding: 2rem 1.5rem;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 1.05rem;
  display: flex;
  gap: 1.5rem;
  flex-grow: 1;
  align-items: center;
}

.usage-body {
  padding: 1.5rem;
  font-size: 0.95rem;
  align-items: flex-start;
  line-height: 1.5;
}

.usage-body pre {
  margin: 0;
}

.keyword {
  color: #c678dd;
}

.string {
  color: #98c379;
}

.tag {
  color: #e06c75;
}

.attr {
  color: #d19a66;
}

.dollar {
  color: #10B981;
  font-weight: 700;
}

.command {
  color: var(--text-color);
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .showcase-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}

@media (max-width: 600px) {
  .gallery-header h1 {
    font-size: 2.5rem;
  }
  .panel-header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  .mac-dots {
    display: none;
  }
  .panel-tabs {
    width: 100%;
    justify-content: space-between;
  }
  .panel-body {
    font-size: 0.9rem;
    padding: 1.5rem 1rem;
  }
  .usage-body {
    overflow-x: auto;
  }
}
</style>
