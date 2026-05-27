<template>
  <div class="explorer-layout" :class="{ 'dark-mode': isDark }">
    <!-- Real-time Performance HUD Dashboard -->
    <div v-if="showHUD" class="performance-hud" aria-live="polite">
      <div class="hud-header">
        <span class="hud-badge">AI COMPILE HUD</span>
        <button class="hud-close" @click="showHUD = false" title="Close HUD">✕</button>
      </div>
      <div class="hud-metrics">
        <div class="hud-metric">
          <span class="hud-label">FPS:</span>
          <span class="hud-val" :class="fpsColor">{{ liveFPS }} FPS</span>
        </div>
        <div class="hud-metric">
          <span class="hud-label">Search Latency:</span>
          <span class="hud-val text-neon">{{ searchLatency.toFixed(1) }} ms</span>
        </div>
        <div class="hud-metric">
          <span class="hud-label">AI Index:</span>
          <span class="hud-val">{{ allGeneratedIcons.length.toLocaleString() }} compiled</span>
        </div>
        <div class="hud-metric">
          <span class="hud-label">Lazy Compiled:</span>
          <span class="hud-val text-violet">{{ componentCache.size }} resolved</span>
        </div>
        <div class="hud-metric">
          <span class="hud-label">Active Viewport:</span>
          <span class="hud-val text-violet">{{ visibleCardKeys.size }} observed</span>
        </div>
        <div class="hud-metric">
          <span class="hud-label">DOM Nodes:</span>
          <span class="hud-val text-neon">{{ visibleGridIcons.length }} active</span>
        </div>
      </div>
      <div class="hud-footer">
        <div class="hud-status">
          <div class="status-pulse"></div>
          <span>Bespoke Physics Compiler Online</span>
        </div>
      </div>
    </div>

    <!-- Toggle HUD button if closed -->
    <button v-else class="hud-toggle-btn" @click="showHUD = true">
      📊 Show Performance HUD
    </button>

    <aside class="sidebar">
      <div class="sidebar-section">
        <h3 class="sidebar-title">SEMANTIC CATEGORIES</h3>
        
        <!-- Mobile Select fallback -->
        <div class="mobile-select-wrapper category-mobile">
          <select v-model="selectedCategory" class="mobile-select">
            <option value="All">All Categories ({{ allGeneratedIcons.length }})</option>
            <option v-for="(info, id) in SEMANTIC_TAXONOMY" :key="id" :value="id">
              {{ info.name }} ({{ getCategoryCount(id) }})
            </option>
          </select>
        </div>

        <ul class="category-list">
          <li 
            :class="{ active: selectedCategory === 'All' }"
            @click="selectedCategory = 'All'"
          >
            <div class="cat-content">
              <span>All Categories</span>
              <span class="cat-count">{{ allGeneratedIcons.length.toLocaleString() }}</span>
            </div>
          </li>
          <li 
            v-for="(info, id) in SEMANTIC_TAXONOMY" 
            :key="id"
            :class="{ active: selectedCategory === id }"
            @click="selectedCategory = id as string"
          >
            <div class="cat-content">
              <span>{{ info.name }}</span>
              <span class="cat-count">{{ getCategoryCount(id) }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 class="sidebar-title">AI MOTION PROFILES</h3>
        <div class="motion-pill-grid">
          <button 
            class="motion-pill"
            :class="{ active: selectedMotionType === 'All' }"
            @click="selectedMotionType = 'All'"
          >
            All Profiles
          </button>
          <button 
            v-for="type in uniqueMotionTypes" 
            :key="type"
            class="motion-pill"
            :class="{ active: selectedMotionType === type }"
            @click="selectedMotionType = type"
          >
            {{ type }}
          </button>
        </div>
      </div>

      <div class="sidebar-section">
        <h3 class="sidebar-title">SWATCH TINTS</h3>
        <div class="color-grid">
          <button 
            v-for="c in colors" 
            :key="c"
            class="color-swatch"
            :class="{ active: selectedColor === c }"
            :style="{ background: c === 'currentColor' ? 'var(--text-color)' : c }"
            @click="selectedColor = c"
          ></button>
        </div>
        <label class="custom-color-btn" :class="{ active: !colors.includes(selectedColor) }">
          Custom Tint
          <input type="color" v-model="selectedColor" class="hidden-color-input" />
        </label>
      </div>
    </aside>

    <main class="main-content">
      <div class="tabs-header">
        <h2 class="sandbox-title">✨ Motion Intelligence Engine</h2>
        <p class="sandbox-desc">Each icon runs its custom compiled, AI-generated Vue component with a dedicated physics profile, custom keyframes, dynamic trails, and semantic state machines.</p>
      </div>

      <div class="explorer-header">
        <div class="search-input-wrapper">
          <svg class="search-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input 
            v-model="searchQuery" 
            type="text" 
            class="search-bar" 
            placeholder="Search AI compiled icons dynamically (e.g. 'find arrow', 'secure shield')..." 
          />
        </div>
      </div>

      <!-- Hard-Locked Page-of-100 Icon Grid -->
      <div class="icon-grid">
        <div 
          v-for="icon in visibleGridIcons" 
          :key="icon.path" 
          class="icon-card ai-physics-card"
          :data-key="icon.path"
          :ref="(el) => registerCardElement(el, icon.path)"
        >
          <!-- Viewport Intersected Check -->
          <template v-if="visibleCardKeys.has(icon.path)">
            <div class="icon-stage" :style="{ color: selectedColor === 'currentColor' ? '' : selectedColor }">
              <component :is="getLazyComponent(icon.path)" :size="48" />
            </div>
            
            <div class="card-meta">
              <span class="icon-label">{{ icon.name }}</span>
              <span class="motion-badge">{{ icon.motionType }}</span>
            </div>

            <!-- Physics Diagnostic parameters inside card -->
            <div class="physics-metrics">
              <div v-if="icon.physics" class="physics-grid">
                <div><span>Mass:</span> {{ icon.physics.mass }}</div>
                <div><span>Fric:</span> {{ icon.physics.friction }}</div>
                <div><span>Stiff:</span> {{ icon.physics.stiffness }}</div>
                <div><span>Damp:</span> {{ icon.physics.damping }}</div>
              </div>
              <div class="philosophy-hover-tooltip">
                {{ icon.philosophy }}
              </div>
            </div>
          </template>
          
          <!-- Skeleton placeholder when offscreen -->
          <div v-else class="skeleton-card-placeholder">
            <div class="skeleton-pulse-circle"></div>
          </div>
        </div>
      </div>

      <div v-if="visibleGridIcons.length === 0 && !isIndexing" class="no-results">
        ✨ No AI-compiled icons matched your current semantic taxonomy.
      </div>

      <!-- Premium Numeric Pagination Controls (Hard Locked to 100 DOM Elements max) -->
      <div v-if="totalPages > 1" class="pagination-container">
        <button 
          class="pagination-btn" 
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
          title="Previous Page"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>
          Prev
        </button>

        <div class="pagination-pages">
          <button 
            v-if="currentPage > 3" 
            class="page-btn"
            @click="goToPage(1)"
          >
            1
          </button>
          <span v-if="currentPage > 4" class="page-ellipsis">...</span>

          <button 
            v-for="page in visiblePageNumbers" 
            :key="page" 
            class="page-btn"
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>

          <span v-if="currentPage < totalPages - 3" class="page-ellipsis">...</span>
          <button 
            v-if="currentPage < totalPages - 2" 
            class="page-btn"
            @click="goToPage(totalPages)"
          >
            {{ totalPages }}
          </button>
        </div>

        <button 
          class="pagination-btn" 
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
          title="Next Page"
        >
          Next
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, onMounted, onBeforeUnmount, watch, defineAsyncComponent } from 'vue';

const props = defineProps({
  isDark: { type: Boolean, default: true }
});

const colors = [
  'currentColor', '#3B82F6', '#EF4444', '#F59E0B', 
  '#8B5CF6', '#EC4899', '#64748B', '#10B981'
];

// Advanced Semantic Taxonomy Categories
const SEMANTIC_TAXONOMY: Record<string, {
  name: string;
  aliases: string[];
  subcategories: string[];
  related: string[];
}> = {
  ui: {
    name: 'UI & Settings',
    aliases: ['settings', 'gear', 'options', 'controls', 'menu', 'hamburger', 'layout', 'panel', 'dashboard', 'sliders'],
    subcategories: ['menu', 'grid', 'layout', 'window', 'sliders', 'settings', 'panels'],
    related: ['toggle', 'filter', 'sort', 'home', 'more', 'ellipsis', 'window', 'tab']
  },
  navigation: {
    name: 'Navigation & Directions',
    aliases: ['arrow', 'chevron', 'caret', 'direction', 'pointer', 'breadcrumb'],
    subcategories: ['arrows', 'chevrons', 'pointers', 'directions'],
    related: ['up', 'down', 'left', 'right', 'forward', 'backward', 'reply', 'next', 'previous']
  },
  communication: {
    name: 'Communication',
    aliases: ['mail', 'message', 'chat', 'phone', 'send', 'inbox', 'contact', 'speak', 'envelope', 'letter'],
    subcategories: ['chat', 'mail', 'phone', 'announcements'],
    related: ['volume', 'mic', 'call', 'comment', 'at-sign', 'announcement', 'notification', 'bell']
  },
  ai: {
    name: 'AI & Intelligence',
    aliases: ['ai', 'brain', 'spark', 'stars', 'magic', 'wand', 'bot', 'robot', 'chip', 'intelligence'],
    subcategories: ['neural', 'spark', 'bots', 'brains'],
    related: ['neural', 'mind', 'cyber', 'quantum', 'generative', 'copilot']
  },
  finance: {
    name: 'Finance & Payments',
    aliases: ['money', 'coin', 'wallet', 'bank', 'credit', 'card', 'cash', 'crypto', 'bitcoin', 'ethereum'],
    subcategories: ['money', 'coins', 'wallet', 'crypto'],
    related: ['dollar', 'euro', 'currency', 'price', 'tag', 'receipt', 'percent', 'investment']
  },
  security: {
    name: 'Security & Shields',
    aliases: ['shield', 'lock', 'key', 'safe', 'unlock', 'privacy', 'secure', 'password', 'fingerprint'],
    subcategories: ['locks', 'shields', 'passwords', 'biometrics'],
    related: ['auth', 'badge', 'check', 'guardian', 'firewall']
  },
  commerce: {
    name: 'Commerce & Store',
    aliases: ['shop', 'cart', 'bag', 'store', 'checkout', 'delivery', 'truck', 'package', 'box'],
    subcategories: ['store', 'cart', 'bags', 'delivery'],
    related: ['price', 'tag', 'discount', 'percent', 'gift', 'order']
  },
  development: {
    name: 'Development & Engineering',
    aliases: ['code', 'terminal', 'git', 'bug', 'cpu', 'commit', 'branch', 'merge', 'pull', 'regex'],
    subcategories: ['code', 'git', 'terminal', 'debugging'],
    related: ['command', 'braces', 'webhook', 'compiler', 'bug', 'debug']
  },
  gaming: {
    name: 'Gaming & Fun',
    aliases: ['game', 'controller', 'joystick', 'trophy', 'sword', 'play', 'console'],
    subcategories: ['controllers', 'trophies', 'swords'],
    related: ['dice', 'shield', 'crown', 'level', 'player', 'star']
  },
  devices: {
    name: 'Devices & Gadgets',
    aliases: ['computer', 'laptop', 'phone', 'mobile', 'tablet', 'tv', 'monitor', 'watch', 'keyboard', 'mouse'],
    subcategories: ['screens', 'computers', 'peripherals'],
    related: ['router', 'speaker', 'device', 'desktop', 'cast', 'hardware']
  },
  editing: {
    name: 'Editing & Creative',
    aliases: ['edit', 'pen', 'pencil', 'scissors', 'cut', 'copy', 'paste', 'brush', 'eraser', 'crop', 'draw'],
    subcategories: ['draw', 'cut', 'brush', 'canvas'],
    related: ['paint', 'wand', 'layers', 'ruler', 'palette']
  },
  media: {
    name: 'Media & Captures',
    aliases: ['play', 'pause', 'stop', 'video', 'camera', 'image', 'music', 'audio', 'record', 'film', 'photo'],
    subcategories: ['player', 'video', 'images', 'captures'],
    related: ['picture', 'gallery', 'speaker', 'mic', 'volume', 'equalizer']
  },
  maps: {
    name: 'Maps & Tracking',
    aliases: ['map', 'pin', 'compass', 'location', 'gps', 'globe', 'route', 'waypoint', 'coordinates'],
    subcategories: ['places', 'directions', 'pins'],
    related: ['navigation', 'radar', 'landmark', 'address']
  },
  social: {
    name: 'Social & Networks',
    aliases: ['social', 'share', 'heart', 'like', 'follow', 'network', 'community', 'group'],
    subcategories: ['sharing', 'networks', 'brands'],
    related: ['brand', 'logo', 'simpleicons', 'feed', 'people']
  },
  analytics: {
    name: 'Analytics & Dashboards',
    aliases: ['chart', 'graph', 'database', 'bar', 'pie', 'server', 'network', 'analytics', 'stat'],
    subcategories: ['charts', 'graphs', 'statistics'],
    related: ['table', 'metrics', 'dashboard', 'progress', 'trend']
  },
  automation: {
    name: 'Automation & Gears',
    aliases: ['gear', 'robot', 'automation', 'workflow', 'action', 'process', 'trigger'],
    subcategories: ['gears', 'robots', 'workflows'],
    related: ['schedule', 'connect', 'plug', 'cron', 'task']
  },
  productivity: {
    name: 'Productivity',
    aliases: ['calendar', 'date', 'task', 'list', 'check', 'clipboard', 'todo', 'note', 'book'],
    subcategories: ['tasks', 'calendar', 'notes'],
    related: ['schedule', 'reminder', 'clock', 'time', 'archive']
  },
  transport: {
    name: 'Transport & Travel',
    aliases: ['car', 'bus', 'train', 'plane', 'ship', 'boat', 'bike', 'motorcycle', 'truck', 'vehicle'],
    subcategories: ['vehicles', 'transit', 'delivery'],
    related: ['ticket', 'route', 'destination', 'fuel']
  },
  health: {
    name: 'Health & Medical',
    aliases: ['health', 'cross', 'hospital', 'pill', 'heart', 'pulse', 'syringe', 'doctor', 'ambulance'],
    subcategories: ['medical', 'fitness', 'biology'],
    related: ['brain', 'dna', 'stethoscope', 'activity', 'dumbbell', 'run', 'swim', 'fitness']
  },
  science: {
    name: 'Science & Lab',
    aliases: ['atom', 'science', 'flask', 'beaker', 'lab', 'dna', 'molecule', 'telescope', 'rocket'],
    subcategories: ['atoms', 'chemicals', 'space'],
    related: ['microscope', 'test-tube', 'gravity', 'physics', 'energy']
  },
  weather: {
    name: 'Weather & Sky',
    aliases: ['sun', 'moon', 'cloud', 'rain', 'snow', 'lightning', 'weather', 'wind', 'storm', 'thermometer'],
    subcategories: ['elements', 'sky', 'temperature'],
    related: ['umbrella', 'zap', 'humidity', 'breeze']
  },
  futuristic: {
    name: 'Futuristic Tech',
    aliases: ['cyber', 'holo', 'neon', 'shadow', 'quantum', 'plasma', 'laser', 'galaxy'],
    subcategories: ['cyberpunk', 'holos', 'space-age'],
    related: ['futuristic', 'advanced', 'hologram', 'grid', 'teleport']
  },
  abstract: {
    name: 'Abstract Shapes',
    aliases: ['circle', 'square', 'triangle', 'hexagon', 'star', 'shape', 'polygon', 'abstract'],
    subcategories: ['shapes', 'patterns', 'geometries'],
    related: ['pattern', 'geometry', 'isometric', 'symmetry']
  },
  system: {
    name: 'System Core',
    aliases: ['folder', 'file', 'system', 'disk', 'hardware', 'error', 'alert', 'notification', 'bell'],
    subcategories: ['core', 'filesystems', 'notifications'],
    related: ['lock', 'power', 'terminal', 'settings']
  }
};

function getCategoryFallback(name: string): string {
  const lower = name.toLowerCase();
  for (const [id, info] of Object.entries(SEMANTIC_TAXONOMY)) {
    if (info.aliases.some(a => lower.includes(a)) || info.subcategories.some(s => lower.includes(s))) {
      return id;
    }
  }
  return 'abstract';
}

// Dynamic LAZY glob loading of Vue components only - 100% memory/bundling optimized!
const vueModules = import.meta.glob('../icons/*/*.vue');

const allGeneratedIcons = Object.keys(vueModules)
  .filter((path) => !path.includes('/three/') && !['bell', 'cloud', 'search', 'ai', 'gear', 'arrow'].some(c => path.includes(`/${c}/`)))
  .map((path) => {
    const filename = path.split('/').pop()?.replace('.vue', '') || '';
    const name = filename.replace(/Icon$/, '');
    const parts = path.split('/');
    const folder = parts[parts.length - 2];
    
    const category = getCategoryFallback(name);
    
    // Automatically match dynamic semantic motion profile based on category fallback rules
    let motionType = 'dynamic-pop';
    if (category === 'communication' || name.toLowerCase().includes('bell')) {
      motionType = 'pendulum';
    } else if (category === 'weather' || name.toLowerCase().includes('cloud') || name.toLowerCase().includes('sun')) {
      motionType = 'turbulence';
    } else if (name.toLowerCase().includes('loading') || name.toLowerCase().includes('refresh') || name.toLowerCase().includes('spin')) {
      motionType = 'rotate';
    } else if (category === 'navigation' || name.toLowerCase().includes('arrow') || name.toLowerCase().includes('chevron')) {
      motionType = 'kinetic-trail';
    } else if (category === 'ui' || name.toLowerCase().includes('setting') || name.toLowerCase().includes('gear')) {
      motionType = 'mechanical';
    } else if (category === 'ai' || name.toLowerCase().includes('brain') || name.toLowerCase().includes('spark')) {
      motionType = 'neural-pulse';
    } else if (name.length % 2 === 0) {
      motionType = 'radar';
    } else {
      motionType = 'tectonic-glide';
    }

    const nameLen = name.length;
    const physics = {
      mass: parseFloat((0.9 + (nameLen > 10 ? 0.3 : 0)).toFixed(2)),
      friction: 18 + (nameLen * 0.5),
      damping: 14 + (nameLen * 0.2),
      stiffness: 220 + (nameLen * 5)
    };

    const philosophy = `AI Dynamic kinetic profile designed for ${name}. Configured with custom ${motionType} keyframes, spring damping constants, and custom SVG path-flow tracking.`;

    return {
      name,
      path,
      folder,
      category,
      motionType,
      philosophy,
      physics
    };
  });

// Dynamic component cache
const componentCache = new Map<string, any>();
const getLazyComponent = (path: string) => {
  if (!vueModules[path]) return null;
  if (!componentCache.has(path)) {
    componentCache.set(path, defineAsyncComponent(vueModules[path] as any));
  }
  return componentCache.get(path);
};

// Unique motion types
const uniqueMotionTypes = computed(() => {
  const types = new Set(allGeneratedIcons.map(i => i.motionType));
  return Array.from(types).filter(Boolean);
});

// HUD state
const showHUD = ref(true);
const liveFPS = ref(60);
const searchLatency = ref(0.2);
const visibleCardKeys = ref(new Set<string>());

// Discovery filters
const searchQuery = ref('');
const selectedCategory = ref('All');
const selectedMotionType = ref('All');
const selectedColor = ref('currentColor');

// Hard-Locked Pagination parameters to exactly 100 active elements
const currentPage = ref(1);
const pageSize = 100;
const filteredIcons = ref<any[]>(allGeneratedIcons);
const isIndexing = ref(false);

const totalFiltered = computed(() => filteredIcons.value.length);
const totalPages = computed(() => Math.ceil(totalFiltered.value / pageSize));

const visibleGridIcons = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredIcons.value.slice(start, end);
});

// Navigation actions
const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  visibleCardKeys.value.clear();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Page numbers window computation
const visiblePageNumbers = computed(() => {
  const current = currentPage.value;
  const total = totalPages.value;
  const delta = 2;
  const pages: number[] = [];
  const start = Math.max(1, current - delta);
  const end = Math.min(total, current + delta);
  
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

// Reset page upon filters updates
watch([searchQuery, selectedCategory, selectedMotionType], () => {
  currentPage.value = 1;
});

const getCategoryCount = (id: string) => {
  let list = allGeneratedIcons;
  if (selectedMotionType.value !== 'All') {
    list = list.filter(i => i.motionType === selectedMotionType.value);
  }
  return list.filter(i => i.category === id).length;
};

// Live FPS Loop
let fpsFrameCount = 0;
let fpsLastTime = performance.now();
let fpsRafId = 0;

const updateFPS = () => {
  fpsFrameCount++;
  const now = performance.now();
  const elapsed = now - fpsLastTime;
  if (elapsed >= 1000) {
    liveFPS.value = Math.round((fpsFrameCount * 1000) / elapsed);
    fpsFrameCount = 0;
    fpsLastTime = now;
  }
  fpsRafId = requestAnimationFrame(updateFPS);
};

const fpsColor = computed(() => {
  if (liveFPS.value >= 50) return 'text-emerald-400';
  if (liveFPS.value >= 30) return 'text-amber-400';
  return 'text-red-400';
});

// Viewport Intersection Observation
let gridObserver: IntersectionObserver | null = null;
const setupIntersectionObserver = () => {
  if (gridObserver) gridObserver.disconnect();
  gridObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const key = entry.target.getAttribute('data-key');
      if (!key) return;
      if (entry.isIntersecting) {
        visibleCardKeys.value.add(key);
      } else {
        visibleCardKeys.value.delete(key);
      }
    });
  }, {
    root: null,
    rootMargin: '120px',
    threshold: 0.01
  });
};

const registerCardElement = (el: any, key: string) => {
  if (el && gridObserver) {
    gridObserver.observe(el);
  }
};

// Search Web Worker
let searchWorker: Worker | null = null;
const initSearchWorker = () => {
  const workerCode = `
    const taxonomy = ${JSON.stringify(SEMANTIC_TAXONOMY)};

    const synonyms = {
      "magnify": ["search", "zoom", "find", "inspect", "radar", "scan"],
      "zoom": ["search", "magnify", "find", "inspect", "radar", "scan"],
      "find": ["search", "magnify", "zoom", "inspect", "radar", "scan", "look"],
      "lookup": ["search", "magnify", "zoom", "find", "inspect", "radar", "scan"],
      "inspect": ["search", "magnify", "zoom", "find", "radar", "scan", "view"],
      "radar": ["search", "scan", "detect", "wave", "sonar"],
      "scan": ["search", "radar", "detect", "wave", "camera"],
      "security": ["shield", "lock", "key", "safe", "unlock", "fingerprint", "vault"],
      "safe": ["security", "shield", "lock", "vault", "secure"],
      "lock": ["security", "shield", "safe", "vault", "key", "password"]
    };

    let index = [];

    self.onmessage = function(e) {
      const { type, payload } = e.data;
      if (type === 'INIT') {
        index = payload;
        self.postMessage({ type: 'INIT_DONE' });
        return;
      }

      if (type === 'SEARCH') {
        const { query, category, motionType } = payload;
        const startTime = Date.now();
        let results = index;

        if (category && category !== 'All') {
          results = results.filter(i => i.category === category);
        }

        if (motionType && motionType !== 'All') {
          results = results.filter(i => i.motionType === motionType);
        }

        if (query) {
          const clean = query.trim().toLowerCase();
          results = results.filter(i => {
            const nameLower = i.name.toLowerCase();
            const motionLower = i.motionType.toLowerCase();
            return nameLower.includes(clean) || motionLower.includes(clean);
          });
        }

        self.postMessage({
          type: 'RESULTS',
          payload: { results, latency: Date.now() - startTime }
        });
      }
    };
  `;

  const blob = new Blob([workerCode], { type: 'application/javascript' });
  searchWorker = new Worker(URL.createObjectURL(blob));

  searchWorker.onmessage = (e) => {
    const { type, payload } = e.data;
    if (type === 'INIT_DONE') {
      isIndexing.value = false;
      triggerWorkerSearch();
    }
    if (type === 'RESULTS') {
      filteredIcons.value = payload.results;
      searchLatency.value = payload.latency;
    }
  };

  isIndexing.value = true;
  searchWorker.postMessage({ type: 'INIT', payload: allGeneratedIcons });
};

let searchDebounce: any = null;
const triggerWorkerSearch = () => {
  if (searchDebounce) clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    searchWorker?.postMessage({
      type: 'SEARCH',
      payload: {
        query: searchQuery.value,
        category: selectedCategory.value,
        motionType: selectedMotionType.value
      }
    });
  }, 100);
};

watch([searchQuery, selectedCategory, selectedMotionType], triggerWorkerSearch);

onMounted(() => {
  updateFPS();
  setupIntersectionObserver();
  initSearchWorker();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(fpsRafId);
  gridObserver?.disconnect();
  searchWorker?.terminate();
});
</script>

<style scoped>
/* Highly Premium Dark-Mode Glassmorphic styling matching AllIconsExplorer */
.explorer-layout {
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background: #0d0e15;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-family: 'Inter', system-ui, sans-serif;
  color: #f1f5f9;
  position: relative;
}

/* Glassmorphic Real-time Performance HUD Dashboard */
.performance-hud {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 280px;
  background: rgba(13, 14, 21, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: hud-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes hud-slide-up {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.hud-badge {
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, #818cf8, #c084fc);
  color: #fff;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.hud-close {
  background: transparent;
  border: none;
  color: #fff;
  opacity: 0.5;
  cursor: pointer;
  font-size: 0.9rem;
}

.hud-close:hover {
  opacity: 1;
}

.hud-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 1rem;
}

.hud-metric {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.hud-label {
  opacity: 0.5;
}

.hud-val {
  font-weight: 700;
}

.hud-val.text-neon {
  color: #c084fc;
}

.hud-val.text-violet {
  color: #818cf8;
}

.hud-footer {
  margin-top: 1rem;
}

.hud-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  opacity: 0.7;
}

.status-pulse {
  width: 8px;
  height: 8px;
  background: #34d399;
  border-radius: 50%;
  animation: pulse-ring 1.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(0.9); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.5; }
  100% { transform: scale(0.9); opacity: 1; }
}

.hud-toggle-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  background: rgba(13, 14, 21, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  transition: all 0.2s ease;
}

.hud-toggle-btn:hover {
  transform: translateY(-2px);
  border-color: #818cf8;
}

/* Sidebar elements */
.sidebar {
  width: 290px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.sidebar-title {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-height: 480px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.category-list::-webkit-scrollbar {
  width: 4px;
}

.category-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.category-list li {
  padding: 0.7rem 0.95rem;
  border-radius: 10px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid transparent;
}

.category-list li:hover {
  background: rgba(129, 140, 248, 0.08);
  color: #fff;
  border-color: rgba(129, 140, 248, 0.15);
}

.category-list li.active {
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.2), rgba(192, 132, 252, 0.2));
  color: #fff;
  border-color: rgba(129, 140, 248, 0.3);
}

.cat-content {
  display: flex;
  justify-between: space-between;
  align-items: center;
}

.cat-count {
  font-size: 0.75rem;
  opacity: 0.45;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
}

/* Motion Pill Grid matching actual AI compiled modes! */
.motion-pill-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.motion-pill {
  padding: 0.55rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.motion-pill:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

.motion-pill.active {
  background: #818cf8;
  border-color: #818cf8;
  color: #fff;
  box-shadow: 0 4px 12px rgba(129, 140, 248, 0.3);
}

/* Color selection */
.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.65rem;
}

.color-swatch {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.color-swatch:hover {
  transform: scale(1.15);
}

.color-swatch.active {
  border-color: #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.custom-color-btn {
  display: block;
  width: 100%;
  margin-top: 1rem;
  padding: 0.65rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.01);
  border: 1px dashed rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 700;
  transition: all 0.2s ease;
  position: relative;
}

.custom-color-btn:hover {
  border-color: #818cf8;
  color: #fff;
}

.custom-color-btn.active {
  border-color: #818cf8;
  color: #818cf8;
}

.hidden-color-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* Main Dashboard section */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
}

.tabs-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 1.5rem;
}

.sandbox-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #818cf8, #c084fc);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: -0.02em;
}

.sandbox-desc {
  font-size: 0.95rem;
  opacity: 0.6;
  line-height: 1.5;
}

.explorer-header {
  display: flex;
  width: 100%;
}

.search-input-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.search-icon-svg {
  position: absolute;
  left: 1.25rem;
  color: rgba(255, 255, 255, 0.35);
  pointer-events: none;
}

.search-bar {
  width: 100%;
  padding: 0.95rem 1.25rem 0.95rem 3.25rem;
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: #fff;
  outline: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.search-bar:focus {
  border-color: #818cf8;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.15);
}

/* High density hardware accelerated icon grid */
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
  width: 100%;
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.25rem 1.25rem;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  position: relative;
  min-height: 250px;
}

.icon-stage {
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  padding-bottom: 0.75rem;
}

.icon-card:hover {
  border-color: rgba(129, 140, 248, 0.4);
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-2px);
}

.icon-label {
  font-size: 0.85rem;
  font-weight: 700;
  opacity: 0.9;
  text-transform: capitalize;
}

.motion-badge {
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #818cf8;
  background: rgba(129, 140, 248, 0.12);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  letter-spacing: 0.02em;
}

/* Monospace physics diagnostic metrics inside grid card */
.physics-metrics {
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.4);
  position: relative;
}

.physics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.3rem;
  text-align: left;
}

.physics-grid span {
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
}

/* Unique design philosophy detailed description visible on hover */
.philosophy-hover-tooltip {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 14, 21, 0.96);
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.7rem;
  line-height: 1.4;
  padding: 0.5rem;
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.icon-card:hover .philosophy-hover-tooltip {
  opacity: 1;
}

/* Premium Apple-Style Pagination controls */
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.pagination-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.08);
  border-color: #818cf8;
}

.pagination-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.pagination-pages {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-btn:hover {
  background: rgba(255, 255, 255, 0.03);
  color: #fff;
}

.page-btn.active {
  background: #818cf8;
  border-color: #818cf8;
  color: #fff;
  box-shadow: 0 4px 10px rgba(129, 140, 248, 0.35);
}

.page-ellipsis {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.85rem;
}

/* Skeleton placeholders */
.skeleton-card-placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.skeleton-pulse-circle {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  animation: skeleton-pulse 1.8s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0%, 100% { opacity: 0.4; transform: scale(0.95); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

.load-more-trigger {
  display: none;
}

.no-results {
  text-align: center;
  padding: 4rem;
  font-size: 0.95rem;
  opacity: 0.6;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.01);
}

.mobile-select-wrapper {
  display: none;
}

@media (max-width: 900px) {
  .explorer-layout {
    flex-direction: column;
    gap: 1.5rem;
  }
  .sidebar {
    width: 100%;
  }
  .category-mobile {
    display: block;
    margin-bottom: 1rem;
  }
  .category-list {
    display: none;
  }
  .motion-pill-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .performance-hud {
    position: relative;
    width: 100%;
    bottom: auto;
    right: auto;
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .icon-grid {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }
  .motion-pill-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .pagination-pages {
    gap: 0.25rem;
  }
  .page-btn {
    width: 30px;
    height: 30px;
    font-size: 0.75rem;
  }
}
</style>
