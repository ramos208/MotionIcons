<template>
  <div class="docs-container">
    <div class="docs-layout">
      <aside class="docs-sidebar">
        <nav class="toc">
          <h4 class="toc-title">ON THIS PAGE</h4>
          <a href="#intro" class="toc-link">1. Introduction</a>
          <a href="#installation" class="toc-link">2. Installation</a>
          <a href="#quickstart" class="toc-link">3. Quick Start</a>
          <a href="#usage" class="toc-link">4. Usage Guide</a>
          <a href="#typescript" class="toc-link">5. TypeScript Setup</a>
          <a href="#props" class="toc-link">6. Props API</a>
          <a href="#animations" class="toc-link">7. Animations</a>
          <a href="#explorer" class="toc-link">8. Explorer Features</a>
          <a href="#roadmap" class="toc-link">9. Roadmap</a>
        </nav>
      </aside>

      <main class="docs-content">
        <h1 class="docs-title">Documentation</h1>
        <p class="docs-lead">MotionIcons is a highly performant, library-agnostic animated iconography system built for Vue 3.</p>

        <!-- Intro -->
        <section id="intro" class="doc-section">
          <h2>Introduction</h2>
          <p>
            MotionIcons brings your interfaces to life with effortless, CSS-driven 60fps animations. 
            Instead of manually writing complex CSS keyframes or importing heavy JavaScript animation libraries, 
            MotionIcons pre-packages an optimized animation engine and automatically wraps over 20,000+ open-source icons.
          </p>
          <div class="feature-grid">
            <div class="feature-card">
              <h3>⚡ Zero JS Overhead</h3>
              <p>Animations run entirely on CSS keyframes, leaving your JavaScript thread free for core app logic.</p>
            </div>
            <div class="feature-card">
              <h3>📦 Zero External Installs</h3>
              <p>Over 8 massive icon libraries are pre-bundled and cleanly re-exported for you. Install one package, get them all.</p>
            </div>
            <div class="feature-card">
              <h3>🎨 Plug & Play</h3>
              <p>Drop the provider in, set the animation string, and you're instantly done.</p>
            </div>
          </div>
        </section>

        <!-- Installation -->
        <section id="installation" class="doc-section">
          <h2>2. Installation</h2>
          <p>
            Choose your preferred package manager to install <code>motion-icons</code>:
          </p>
          <div class="code-block">
            <pre><code>npm install motion-icons</code></pre>
          </div>
          <h3>Global Registration</h3>
          <p>Register the plugin in your <code>main.ts</code> or <code>main.js</code> to enable automatic global icon aliases.</p>
          <div class="code-block">
            <pre><code><span class="keyword">import</span> { createApp } <span class="keyword">from</span> <span class="string">'vue'</span>
<span class="keyword">import</span> App <span class="keyword">from</span> <span class="string">'./App.vue'</span>
<span class="keyword">import</span> MotionIcons <span class="keyword">from</span> <span class="string">'motion-icons'</span>

<span class="keyword">const</span> app = createApp(App)
app.use(MotionIcons)
app.mount(<span class="string">'#app'</span>)</code></pre>
          </div>
        </section>

        <!-- Quick Start -->
        <section id="quickstart" class="doc-section">
          <h2>3. Quick Start</h2>
          <p>Get your first animated icon rendering in under 60 seconds!</p>
          <ol style="line-height: 1.7; font-size: 1.05rem; opacity: 0.9; padding-left: 1.5rem; margin-bottom: 1.5rem;">
            <li><strong>Install</strong> the package using <code>npm install motion-icons</code></li>
            <li><strong>Register</strong> the plugin in your <code>main.ts</code> with <code>app.use(MotionIcons)</code></li>
            <li><strong>Use</strong> the provider in any Vue component:</li>
          </ol>
          <div class="code-block">
            <pre><code>&lt;<span class="tag">script</span> <span class="attr">setup</span>&gt;
<span class="keyword">import</span> { MotionIconsProvider } <span class="keyword">from</span> <span class="string">'motion-icons'</span>
&lt;/<span class="tag">script</span>&gt;

&lt;<span class="tag">template</span>&gt;
  <span class="comment">&lt;!-- Renders a heart that beats when hovered! --&gt;</span>
  &lt;<span class="tag">MotionIconsProvider</span> <span class="attr">:icon</span>=<span class="string">"l.Heart"</span> <span class="attr">animation</span>=<span class="string">"heartbeat"</span> <span class="attr">color</span>=<span class="string">"red"</span> /&gt;
&lt;/<span class="tag">template</span>&gt;</code></pre>
          </div>
        </section>

        <!-- Usage -->
        <section id="usage" class="doc-section">
          <h2>4. Usage Guide</h2>
          <p>
            Import the <code>MotionIconsProvider</code> and the library namespace you want to use. 
            Then, pass the specific icon component to the <code>:icon</code> prop.
          </p>
          <div class="code-block">
            <pre><code>&lt;<span class="tag">script</span> <span class="attr">setup</span>&gt;
<span class="keyword">import</span> { MotionIconsProvider } <span class="keyword">from</span> <span class="string">'motion-icons'</span>;
&lt;/<span class="tag">script</span>&gt;

&lt;<span class="tag">template</span>&gt;
  <span class="comment">&lt;!-- Standard 2D Icon --&gt;</span>
  &lt;<span class="tag">MotionIconsProvider</span> 
    <span class="attr">:icon</span>=<span class="string">"l.Rocket"</span> 
    <span class="attr">animation</span>=<span class="string">"bounce"</span> 
    <span class="attr">:size</span>=<span class="string">"32"</span> 
    <span class="attr">color</span>=<span class="string">"#3B82F6"</span> 
  /&gt;

  <span class="comment">&lt;!-- Enable 3D Extrusion! --&gt;</span>
  &lt;<span class="tag">MotionIconsProvider</span> 
    <span class="attr">:icon</span>=<span class="string">"l.Box"</span> 
    <span class="attr">:is3d</span>=<span class="string">"true"</span> 
    <span class="attr">animation</span>=<span class="string">"spin-3d"</span> 
  /&gt;
&lt;/<span class="tag">template</span>&gt;</code></pre>
          </div>
        </section>

        <!-- TypeScript Setup -->
        <section id="typescript" class="doc-section">
          <h2>5. TypeScript Setup</h2>
          <p>
            To get full autocomplete and type-safety for the global library aliases (like <code>l.Rocket</code>) in your Vue templates, add the following declarations to your project's <code>env.d.ts</code> or <code>global.d.ts</code> file:
          </p>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Alias</th>
                  <th>Library</th>
                  <th>Type Declaration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>l</code></td>
                  <td>Lucide</td>
                  <td><code>typeof import('lucide-vue-next')</code></td>
                </tr>
                <tr>
                  <td><code>h</code></td>
                  <td>Heroicons</td>
                  <td><code>typeof import('@heroicons/vue/24/outline')</code></td>
                </tr>
                <tr>
                  <td><code>i</code></td>
                  <td>Iconoir</td>
                  <td><code>typeof import('@iconoir/vue')</code></td>
                </tr>
                <tr>
                  <td><code>p</code></td>
                  <td>Phosphor</td>
                  <td><code>typeof import('@phosphor-icons/vue')</code></td>
                </tr>
                <tr>
                  <td><code>t</code></td>
                  <td>Tabler</td>
                  <td><code>typeof import('@tabler/icons-vue')</code></td>
                </tr>
                <tr>
                  <td><code>hg</code></td>
                  <td>HugeIcons</td>
                  <td><code>typeof import('hugeicons-vue')</code></td>
                </tr>
                <tr>
                  <td><code>f</code></td>
                  <td>FontAwesome</td>
                  <td><code>typeof import('@fortawesome/free-solid-svg-icons').fas</code></td>
                </tr>
                <tr>
                  <td><code>b</code></td>
                  <td>Brand Logos</td>
                  <td><code>typeof import('simple-icons')</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Props -->
        <section id="props" class="doc-section">
          <h2>6. Props API</h2>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>icon</code></td>
                  <td><code>Component</code></td>
                  <td><strong>Required</strong></td>
                  <td>The raw SVG Vue component to render.</td>
                </tr>
                <tr>
                  <td><code>animation</code></td>
                  <td><code>String</code></td>
                  <td><code>'bounce'</code></td>
                  <td>The animation to play on hover/interaction.</td>
                </tr>
                <tr>
                  <td><code>size</code></td>
                  <td><code>Number</code></td>
                  <td><code>24</code></td>
                  <td>Width and height of the icon in pixels.</td>
                </tr>
                <tr>
                  <td><code>color</code></td>
                  <td><code>String</code></td>
                  <td><code>'currentColor'</code></td>
                  <td>The fill/stroke color of the icon.</td>
                </tr>
                <tr>
                  <td><code>glow</code></td>
                  <td><code>Boolean</code></td>
                  <td><code>false</code></td>
                  <td>Enables a neon drop-shadow effect based on the icon's color.</td>
                </tr>
                <tr>
                  <td><code>is3d</code></td>
                  <td><code>Boolean</code></td>
                  <td><code>false</code></td>
                  <td>Enables the Three.js 3D extrusion engine for true 3D meshes.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Animations -->
        <section id="animations" class="doc-section">
          <h2>7. Animations</h2>
          <p>Pass any of these string values to the <code>animation</code> prop. Hover over the icons below to see them in action!</p>
          <div class="table-wrapper scrollable-table">
            <table>
              <thead>
                <tr>
                  <th>Animation</th>
                  <th>Description</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="anim in animationsList" :key="anim.name">
                  <td><code>{{ anim.name }}</code></td>
                  <td>{{ anim.desc }}</td>
                  <td class="preview-cell">
                    <MotionIconsProvider 
                      :icon="sampleIcon" 
                      :animation="anim.name" 
                      :size="32" 
                      color="#818CF8" 
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Explorer -->
        <section id="explorer" class="doc-section">
          <h2>8. Explorer Features</h2>
          <p>
            The built-in Icon Explorer provides a massive library aggregation system with an intelligent, dynamic taxonomy. It allows you to search and discover icons across 8+ libraries simultaneously.
          </p>
          <ul style="line-height: 1.7; font-size: 1.05rem; opacity: 0.9; padding-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
            <li><strong>Intelligent Taxonomy:</strong> Icons are algorithmically sorted into exactly 30 top-level semantic categories.</li>
            <li><strong>Precision Sub-categories:</strong> Deeply nested sub-categorization for complex groups. <code>Brand Logos</code> are split across 14 industries.</li>
            <li><strong>Live Preview Engine:</strong> Test animations and view up to 500+ icons side-by-side in real-time.</li>
            <li><strong>3D Viewport Toggle:</strong> Extrude the currently selected icon into a physical, rotating mesh.</li>
            <li><strong>1-Click Export:</strong> Instantly copy the Vue component snippet or download the raw SVG with baked-in animations.</li>
          </ul>
        </section>

        <!-- Roadmap -->
        <section id="roadmap" class="doc-section">
          <h2>9. Roadmap</h2>
          <ul style="line-height: 1.7; font-size: 1.05rem; opacity: 0.9; padding-left: 1.5rem; margin-bottom: 1.5rem;">
            <li><strong>AI Semantic Engine:</strong> A future update will introduce a fully local AI search engine to allow natural-language icon discovery.</li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import MotionIconsProvider from './MotionIconsProvider.vue';
import { Box as BoxIcon } from 'lucide-vue-next';

const sampleIcon = BoxIcon;

const animationsList = [
  { name: 'aurora', desc: 'Glowing, shifting colors like the northern lights.' },
  { name: 'blink', desc: 'Blinks in and out completely.' },
  { name: 'blob', desc: 'Soft, organic pulsing and morphing.' },
  { name: 'blur-in', desc: 'Comes into focus from a blur.' },
  { name: 'blur-out', desc: 'Fades out into a blur.' },
  { name: 'boomerang', desc: 'Flies out and spins back.' },
  { name: 'bounce', desc: 'Moves up and down continuously.' },
  { name: 'bounce-wave', desc: 'A rolling up-and-down wave.' },
  { name: 'breathing', desc: 'Slow, steady scaling like breathing.' },
  { name: 'bubble', desc: 'Pops in with a bubbly bounce.' },
  { name: 'cartoon-shake', desc: 'Exaggerated, bouncy shake.' },
  { name: 'charge', desc: 'Draws back and launches forward.' },
  { name: 'cinematic-zoom', desc: 'Slow, dramatic zoom in.' },
  { name: 'combo-bounce', desc: 'Multiple quick bounces.' },
  { name: 'compress', desc: 'Squishes inward from all sides.' },
  { name: 'cyber-pulse', desc: 'Throbs with a neon purple glow.' },
  { name: 'dash', desc: 'Zips horizontally.' },
  { name: 'distort', desc: 'Wavy, erratic deformation.' },
  { name: 'drift', desc: 'Slides smoothly side-to-side.' },
  { name: 'drift-float', desc: 'Slides side-to-side while floating.' },
  { name: 'drift-spin', desc: 'Spins while drifting sideways.' },
  { name: 'elastic', desc: 'Snaps back with high elasticity.' },
  { name: 'elegant-swing', desc: 'Smooth, graceful pendulum motion.' },
  { name: 'energy-burst', desc: 'Rapid outward scaling.' },
  { name: 'explosion-pop', desc: 'Violent pop and shatter.' },
  { name: 'fade-drift', desc: 'Fades in and out while moving.' },
  { name: 'flash', desc: 'Briefly flashes intense brightness.' },
  { name: 'flicker', desc: 'Rapidly changes opacity.' },
  { name: 'flip', desc: 'Flips horizontally in 3D space.' },
  { name: 'float', desc: 'Smoothly hovers up and down.' },
  { name: 'flutter', desc: 'Quick, butterfly-like vibration.' },
  { name: 'frost', desc: 'Fades out with a crystalline effect.' },
  { name: 'glass-shine', desc: 'A bright sheen slides across.' },
  { name: 'glitch', desc: 'Rapid, erratic futuristic glitch effect.' },
  { name: 'glow-pulse', desc: 'Fades glow in and out.' },
  { name: 'gooey', desc: 'Melting, sticky deformation.' },
  { name: 'heartbeat', desc: 'Mimics a double-beat pulse.' },
  { name: 'hologram', desc: 'Changes opacity and hue.' },
  { name: 'hop', label: 'Hop', desc: 'A small, quick jump.' },
  { name: 'hover-lift', desc: 'Rises smoothly off the ground.' },
  { name: 'impact', desc: 'Heavy landing with a shake.' },
  { name: 'jelly', desc: 'Wobbles like gelatin.' },
  { name: 'jiggle', desc: 'Tilts slightly left and right.' },
  { name: 'light-sweep', desc: 'A beam of light sweeps across.' },
  { name: 'liquid', desc: 'Flows and undulates like water.' },
  { name: 'magnetic', desc: 'Pulls diagonally outwards.' },
  { name: 'matrix', desc: 'Digital green code rain effect.' },
  { name: 'morph', desc: 'Slightly alters its shape.' },
  { name: 'neon-flicker', desc: 'Flickers like a faulty neon sign.' },
  { name: 'orbit', desc: 'Rotates in a circular path.' },
  { name: 'peek', desc: 'Slides up slightly to look.' },
  { name: 'pendulum', desc: 'Swings heavily like a clock.' },
  { name: 'pixelate', desc: 'Breaks into chunky pixels.' },
  { name: 'pop', desc: 'Quickly pops outward and back.' },
  { name: 'power-up', desc: 'Glows and scales intensely.' },
  { name: 'pulse', desc: 'Gently scales up and down.' },
  { name: 'recoil', desc: 'Pushes back from a force.' },
  { name: 'rgb-split', desc: 'Colors separate into RGB channels.' },
  { name: 'ripple', desc: 'Scales out smoothly while fading.' },
  { name: 'roll', desc: 'Rotates while moving sideways.' },
  { name: 'rotate-3d', desc: 'Spins around the Y-axis.' },
  { name: 'rubber-band', desc: 'Stretches and squishes playfully.' },
  { name: 'scanline', desc: 'Retro CRT scanline effect.' },
  { name: 'shake', desc: 'Vibrates left and right quickly.' },
  { name: 'shockwave', desc: 'Violent outward shake.' },
  { name: 'slam', desc: 'Hits the ground hard.' },
  { name: 'slide-down', desc: 'Moves straight down.' },
  { name: 'slide-left', desc: 'Moves straight left.' },
  { name: 'slide-right', desc: 'Moves straight right.' },
  { name: 'slide-up', desc: 'Moves straight up.' },
  { name: 'smooth-orbit', desc: 'Gentle, wide circular motion.' },
  { name: 'snap', desc: 'Snaps left and right sharply.' },
  { name: 'soft-pulse', desc: 'A very gentle scale variation.' },
  { name: 'spin', desc: 'Rotates 360 degrees infinitely.' },
  { name: 'spin-pulse', desc: 'Spins while scaling up.' },
  { name: 'spiral', desc: 'Moves inward in a circle.' },
  { name: 'squish', desc: 'Flattens vertically.' },
  { name: 'static-noise', desc: 'Jerky, noisy TV static.' },
  { name: 'stretch', desc: 'Elongates vertically.' },
  { name: 'swing', desc: 'Swings back and forth.' },
  { name: 'swing-3d', desc: 'Swings into the Z-axis.' },
  { name: 'tada', desc: 'Playful pop and shake effect.' },
  { name: 'tilt', desc: 'Leans to one side.' },
  { name: 'turbo-spin', desc: 'Extremely fast rotation.' },
  { name: 'vhs', desc: 'Skews and splits colors like an old tape.' },
  { name: 'warp', desc: 'Skews and deforms the shape.' },
  { name: 'wave', desc: 'Wobbles in a wave pattern.' },
  { name: 'wiggle', desc: 'Fast, short tilts.' },
  { name: 'wobble', desc: 'Intense shaky side-to-side movement.' },
  { name: 'zoom-in', desc: 'Scales up slightly.' },
  { name: 'zoom-out', desc: 'Scales down slightly.' },
];
</script>

<style scoped>
.docs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

.docs-layout {
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.docs-sidebar {
  width: 250px;
  flex-shrink: 0;
  position: sticky;
  top: 4rem;
}

.toc {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.toc-title {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-color);
  opacity: 0.5;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.toc-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 0.95rem;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.toc-link:hover {
  opacity: 1;
  color: #818CF8;
}

.docs-content {
  flex-grow: 1;
  min-width: 0;
}

.docs-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.docs-lead {
  font-size: 1.25rem;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 4rem;
}

.doc-section {
  margin-bottom: 4rem;
}

.doc-section h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
}

.doc-section p {
  font-size: 1.05rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 1.5rem;
  border-radius: 12px;
}

.feature-card h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.feature-card p {
  font-size: 0.95rem;
  margin: 0;
  opacity: 0.8;
}

.code-block {
  background: #1e1e1e;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.code-block pre {
  margin: 0;
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 0.95rem;
  color: #d4d4d4;
}

.keyword { color: #c678dd; }
.string { color: #98c379; }
.tag { color: #e06c75; }
.attr { color: #d19a66; }
.comment { color: #5c6370; font-style: italic; }

code {
  background: rgba(128, 128, 128, 0.15);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9em;
}

.table-wrapper {
  overflow-x: auto;
}

.scrollable-table {
  max-height: 500px;
  overflow-y: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.scrollable-table th {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--card-bg, #1a1a1a); /* Fallback to dark if var missing */
  box-shadow: 0 1px 0 var(--border-color);
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th, td {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

th {
  font-weight: 600;
  background: rgba(128, 128, 128, 0.05);
}

.badge-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
}

.badge-list li {
  background: rgba(129, 140, 248, 0.1);
  color: #818CF8;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid rgba(129, 140, 248, 0.2);
}

@media (max-width: 900px) {
  .docs-layout {
    flex-direction: column;
    gap: 2rem;
  }
  .docs-sidebar {
    width: 100%;
    position: static;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }
}

.preview-cell {
  text-align: center;
  padding: 1rem;
}
</style>
