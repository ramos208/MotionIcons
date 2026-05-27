<template>
  <div class="docs-container">
    <div class="docs-layout">
      <aside class="docs-sidebar">
        <nav class="toc">
          <h4 class="toc-title">ON THIS PAGE</h4>
          <a href="#intro" class="toc-link">Introduction</a>
          <a href="#installation" class="toc-link">Installation</a>
          <a href="#usage" class="toc-link">Usage Guide</a>
          <a href="#props" class="toc-link">Props API</a>
          <a href="#animations" class="toc-link">Animations</a>
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
          <h2>Installation</h2>
          <p>
            Install the <code>motion-icons</code> package using your preferred package manager. 
            You do not need to install the individual icon libraries (like Lucide or Heroicons), as they are included automatically via our re-exports.
          </p>
          <div class="code-block">
            <pre><code>npm install motion-icons</code></pre>
          </div>
        </section>

        <!-- Usage -->
        <section id="usage" class="doc-section">
          <h2>Usage Guide</h2>
          <p>
            Import the <code>MotionIconsProvider</code> and the library namespace you want to use. 
            Then, pass the specific icon component to the <code>:icon</code> prop.
          </p>
          <div class="code-block">
            <pre><code><span class="keyword">import</span> { MotionIconsProvider, Lucide, Phosphor } <span class="keyword">from</span> <span class="string">'motion-icons'</span>;

&lt;<span class="tag">template</span>&gt;
  &lt;<span class="tag">MotionIconsProvider</span> 
    <span class="attr">:icon</span>=<span class="string">"Lucide.RocketIcon"</span> 
    <span class="attr">animation</span>=<span class="string">"bounce"</span> 
    <span class="attr">:size</span>=<span class="string">"32"</span> 
    <span class="attr">color</span>=<span class="string">"#3B82F6"</span> 
  /&gt;
&lt;/<span class="tag">template</span>&gt;</code></pre>
          </div>
        </section>

        <!-- Props -->
        <section id="props" class="doc-section">
          <h2>Props API</h2>
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
              </tbody>
            </table>
          </div>
        </section>

        <!-- Animations -->
        <section id="animations" class="doc-section">
          <h2>Supported Animations</h2>
          <p>Pass any of these strings to the <code>animation</code> prop:</p>
          <ul class="badge-list">
            <li>bounce</li>
            <li>pulse</li>
            <li>shake</li>
            <li>spin</li>
            <li>wiggle</li>
            <li>flip</li>
            <li>tada</li>
            <li>zoom-in</li>
            <li>zoom-out</li>
            <li>rubber-band</li>
            <li>spin-pulse</li>
            <li>glitch</li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Documentation Page
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
</style>
