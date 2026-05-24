<template>
  <div class="explorer-layout">
    <aside class="sidebar">
      <div class="sidebar-section">
        <h3 class="sidebar-title">CATEGORIES</h3>
        <ul class="category-list">
          <li 
            v-for="cat in categories" 
            :key="cat"
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = cat"
          >
            <div class="cat-content">
              <span>{{ cat }}</span>
              <span class="cat-count">{{ getCategoryCount(cat) }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h3 class="sidebar-title">COLORS</h3>
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
          Custom color
          <input type="color" v-model="selectedColor" class="hidden-color-input" />
        </label>
      </div>
    </aside>

    <main class="main-content">
      <div class="tabs-header">
        <div class="library-tabs">
          <button 
            :class="{ active: selectedLibrary === 'All' }" 
            @click="selectedLibrary = 'All'"
          >
            All <span class="tab-count">{{ allIcons.length.toLocaleString() }}</span>
          </button>
          <button 
            :class="{ active: selectedLibrary === 'Lucide' }" 
            @click="selectedLibrary = 'Lucide'"
          >
            Lucide <span class="tab-count">{{ lucideCount.toLocaleString() }}</span>
          </button>
          <button 
            :class="{ active: selectedLibrary === 'Iconoir' }" 
            @click="selectedLibrary = 'Iconoir'"
          >
            Iconoir <span class="tab-count">{{ iconoirCount.toLocaleString() }}</span>
          </button>
          <button 
            :class="{ active: selectedLibrary === 'Heroicons' }" 
            @click="selectedLibrary = 'Heroicons'"
          >
            Heroicons <span class="tab-count">{{ heroCount.toLocaleString() }}</span>
          </button>
          <button :class="{ active: selectedLibrary === 'Tabler' }" @click="selectedLibrary = 'Tabler'">
            Tabler <span class="tab-count">{{ tablerCount.toLocaleString() }}</span>
          </button>
          <button :class="{ active: selectedLibrary === 'Phosphor' }" @click="selectedLibrary = 'Phosphor'">
            Phosphor <span class="tab-count">{{ phosphorCount.toLocaleString() }}</span>
          </button>
          <button :class="{ active: selectedLibrary === 'HugeIcons' }" @click="selectedLibrary = 'HugeIcons'">
            HugeIcons <span class="tab-count">{{ hugeCount.toLocaleString() }}</span>
          </button>
          <button :class="{ active: selectedLibrary === 'FontAwesome' }" @click="selectedLibrary = 'FontAwesome'">
            FontAwesome <span class="tab-count">{{ faCount.toLocaleString() }}</span>
          </button>
          <button :class="{ active: selectedLibrary === 'SimpleIcons' }" @click="selectedLibrary = 'SimpleIcons'">
            Brand Logos <span class="tab-count">{{ simpleCount.toLocaleString() }}</span>
          </button>
        </div>
      </div>

      <div class="explorer-header">
        <input 
          v-model="searchQuery" 
          type="text" 
          class="search-bar" 
          placeholder="Search icons (e.g. 'map', 'user', 'arrow')..." 
        />
        
        <div class="animation-selector">
          <select v-model="selectedAnimation">
            <option value="pulse">Pulse</option>
            <option value="bounce">Bounce</option>
            <option value="spin">Spin</option>
            <option value="shake">Shake</option>
            <option value="jiggle">Jiggle</option>
            <option value="flip">Flip</option>
            <option value="float">Float</option>
            <option value="heartbeat">Heartbeat</option>
            <option value="swing">Swing</option>
            <option value="wobble">Wobble</option>
            <option value="tada">Tada (Pop)</option>
            <option value="zoom-in">Zoom In</option>
            <option value="zoom-out">Zoom Out</option>
            <option value="rubber-band">Rubber Band</option>
            <option value="spin-pulse">Spin Pulse</option>
            <option value="glitch">Glitch</option>
          </select>
        </div>
      </div>

      <div class="icon-grid">
        <div 
          v-for="item in paginatedIcons" 
          :key="item.library + '-' + item.name" 
          class="icon-card"
        >
          <AnimatedIconProvider 
            :icon="item.icon" 
            :animation="selectedAnimation" 
            :size="48" 
            :color="selectedColor === 'currentColor' ? (item.hex || '') : selectedColor"
            :glow="isDark" 
            :library="item.library" 
          />
          <span class="icon-label" :title="item.name">{{ item.name }}</span>
        </div>
      </div>
      <div v-if="paginatedIcons.length === 0" class="no-results">
        No icons found matching your filters.
      </div>

      <div v-if="totalPages > 1" class="pagination-container">
        <button 
          class="page-nav-btn" 
          :disabled="currentPage === 1" 
          @click="currentPage--"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        
        <div class="page-numbers">
          <template v-for="(p, index) in visiblePages" :key="index">
            <span v-if="p === '...'" class="page-ellipsis">...</span>
            <button 
              v-else 
              class="page-num-btn" 
              :class="{ active: p === currentPage }"
              @click="currentPage = p as number"
            >
              {{ p }}
            </button>
          </template>
        </div>

        <button 
          class="page-nav-btn" 
          :disabled="currentPage === totalPages" 
          @click="currentPage++"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, markRaw, watch, h } from 'vue';
import { icons as LucideIconsMap } from 'lucide-vue-next';
import * as HeroIcons from '@heroicons/vue/24/outline';
import * as IconoirIcons from '@iconoir/vue';
import * as PhosphorIcons from '@phosphor-icons/vue';
import * as TablerIcons from '@tabler/icons-vue';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as HugeIcons from 'hugeicons-vue';
import * as SimpleIcons from 'simple-icons';
import AnimatedIconProvider from './AnimatedIconProvider.vue';

const props = defineProps({
  isDark: { type: Boolean, default: true }
});

const colors = [
  'currentColor', '#3B82F6', '#EF4444', '#F59E0B', 
  '#8B5CF6', '#EC4899', '#64748B', '#10B981'
];

const getCategory = (name: string) => {
  const lower = name.toLowerCase();
  
  if (/(arrow|chevron|caret|direction|up|down|left|right|forward|backward|reply|trending)/.test(lower)) return 'Arrows';
  if (/(mail|message|chat|phone|send|inbox|contact|speak|volume|mic|call|comment|at-sign)/.test(lower)) return 'Communication';
  if (/(shop|cart|wallet|money|coin|dollar|euro|bank|credit|price|tag|receipt|store|bag|percent|bitcoin)/.test(lower)) return 'Commerce';
  if (/(chart|graph|database|bar|pie|server|network|analytics|stat|table)/.test(lower)) return 'Data';
  if (/(code|terminal|git|bug|cpu|commit|branch|merge|pull|push|regex|command|brac|webhook|bot)/.test(lower)) return 'Development';
  if (/(computer|laptop|phone|mobile|tablet|tv|monitor|watch|keyboard|mouse|printer|router|speaker|device|desktop|cast)/.test(lower)) return 'Devices';
  if (/(edit|pen|pencil|scissors|cut|copy|paste|brush|eraser|crop|draw|paint|wand)/.test(lower)) return 'Editing';
  if (/(file|folder|document|archive|zip|paper|note|clipboard|book|page|diary)/.test(lower)) return 'Files';
  if (/(food|drink|cup|coffee|burger|pizza|apple|beer|wine|fork|knife|spoon|plate|chef|bowl)/.test(lower)) return 'Food & Drink';
  if (/(health|cross|hospital|pill|heart|pulse|syringe|doctor|ambulance|brain|dna|stethoscope|activity)/.test(lower)) return 'Medical';
  if (/(play|pause|stop|video|camera|image|music|audio|record|film|picture|photo|gallery|speaker|mic)/.test(lower)) return 'Media';
  if (/(tree|leaf|plant|flower|animal|pet|dog|cat|bug|mountain|water|fire|drop|flame|fish|bird|feather|paw)/.test(lower)) return 'Nature';
  if (/(map|pin|compass|location|gps|globe|route|navigation|radar|waypoint)/.test(lower)) return 'Navigation';
  if (/(box|cube|package|glass|umbrella|flag|anchor|lightbulb|plug|bell|gift|crown|magnet|ticket|trophy|sword)/.test(lower)) return 'Objects';
  if (/(user|person|group|people|profile|avatar|account|team|smile|frown|face|contact)/.test(lower)) return 'People';
  if (/(shield|lock|key|auth|safe|unlock|privacy|secure|password|finger|fingerprint)/.test(lower)) return 'Security';
  if (/(circle|square|triangle|hexagon|octagon|star|polygon|shape|rectangle|dash)/.test(lower)) return 'Shapes';
  if (/(sport|ball|game|dumbbell|run|swim|bike|medal|trophy|goal|target|tennis)/.test(lower)) return 'Sports';
  if (/(check|x|alert|warning|info|bell|error|success|fail|badge|slash|ban|minus|plus)/.test(lower)) return 'Status';
  if (/(align|bold|italic|underline|list|text|font|heading|paragraph|format|letter|type|case|indent)/.test(lower)) return 'Text';
  if (/(clock|time|watch|timer|calendar|date|hour|minute|history)/.test(lower)) return 'Time';
  if (/(car|bus|train|plane|ship|boat|bike|motorcycle|truck|vehicle|ticket)/.test(lower)) return 'Transport';
  if (/(menu|grid|list|layout|window|maximize|minimize|settings|gear|sliders|panel|sidebar|tab|toggle|filter|sort|search|zoom|home|expand|shrink|more)/.test(lower)) return 'UI';
  if (/(sun|moon|cloud|rain|snow|lightning|weather|wind|storm|thermometer|umbrella|zap)/.test(lower)) return 'Weather';
  
  if (/(battery|power|charge|socket)/.test(lower)) return 'Power';
  if (/(bed|chair|sofa|table|desk|door|window|bath|shower|home|house|building)/.test(lower)) return 'Household';
  if (/(book|read|study|school|student|test|exam|library)/.test(lower)) return 'Education';
  if (/(hammer|wrench|drill|tool|gear|axe|anvil)/.test(lower)) return 'Tools';
  if (/(smile|frown|laugh|sad|angry|wink|face|ghost|baby|alien|monster)/.test(lower)) return 'Emotions';
  if (/(shirt|hat|shoe|pants|glasses|tie|crown|ring|gem|diamond)/.test(lower)) return 'Clothing';
  if (/(bluetooth|wifi|signal|radio|broadcast)/.test(lower)) return 'Connectivity';

  // Dynamic fallback: Extract the first logical word of the icon name to dynamically create a new category
  const match = name.match(/^[A-Z][a-z]+/);
  if (match) {
    return match[0]; 
  }
  
  return 'Miscellaneous';
};

// Map libraries correctly
const lucideEntries = Object.entries(LucideIconsMap || {})
  .filter(([key, val]) => /^[A-Z]/.test(key) && val)
  .map(([key, val]) => ({ name: key, icon: markRaw(val as object), library: 'Lucide', category: getCategory(key) }));

const heroEntries = Object.entries(HeroIcons)
  .filter(([key, val]) => key.endsWith('Icon') && val)
  .map(([key, val]) => ({ name: key.replace('Icon', ''), icon: markRaw(val as object), library: 'Heroicons', category: getCategory(key) }));

const iconoirEntries = Object.entries(IconoirIcons)
  .filter(([key, val]) => /^[A-Z]/.test(key) && key !== 'IconoirProvider' && val)
  .map(([key, val]) => ({ name: key, icon: markRaw(val as object), library: 'Iconoir', category: getCategory(key) }));

const tablerEntries = Object.entries(TablerIcons)
  .filter(([key, val]) => key.startsWith('Icon') && val)
  .map(([key, val]) => ({ name: key.replace('Icon', ''), icon: markRaw(val as object), library: 'Tabler', category: getCategory(key) }));

const phosphorEntries = Object.entries(PhosphorIcons)
  .filter(([key, val]) => /^[A-Z]/.test(key) && val && typeof val === 'object')
  .map(([key, val]) => ({ name: key, icon: markRaw(val as object), library: 'Phosphor', category: getCategory(key) }));

const hugeEntries = Object.entries(HugeIcons)
  .filter(([key, val]) => key.endsWith('Icon') && val)
  .map(([key, val]) => ({ name: key.replace('Icon', ''), icon: markRaw(val as object), library: 'HugeIcons', category: getCategory(key) }));

const faEntries = Object.entries(fas)
  .filter(([key, val]) => key.startsWith('fa') && val && val.icon)
  .map(([key, val]) => {
    const [width, height, ligatures, unicode, path] = val.icon;
    const faComponent = markRaw((props: any) => h('svg', {
      viewBox: `0 0 ${width} ${height}`,
      fill: 'currentColor',
      width: props.size || 24,
      height: props.size || 24,
      ...props
    }, [h('path', { d: path })]));
    
    return { name: key.replace(/^fa/, ''), icon: faComponent, library: 'FontAwesome', category: getCategory(key) };
  });

const simpleEntries = Object.entries(SimpleIcons)
  .filter(([key, val]) => key.startsWith('si') && val && val.path)
  .map(([key, val]) => {
    const simpleComponent = markRaw((props: any) => h('svg', {
      viewBox: `0 0 24 24`,
      fill: 'currentColor',
      width: props.size || 24,
      height: props.size || 24,
      ...props
    }, [h('path', { d: val.path })]));
    
    return { name: val.title, icon: simpleComponent, library: 'SimpleIcons', category: 'Logos', hex: '#' + val.hex };
  });

const allIcons = shallowRef([
  ...lucideEntries, ...iconoirEntries, ...heroEntries, 
  ...tablerEntries, ...phosphorEntries, ...hugeEntries, ...faEntries, ...simpleEntries
]);

// Dynamically generate the Categories list by sorting and counting what is actually present
const generateCategories = () => {
  const counts = new Map<string, number>();
  allIcons.value.forEach(i => {
    counts.set(i.category, (counts.get(i.category) || 0) + 1);
  });

  const protectedCategories = new Set([
    'Arrows', 'Communication', 'Commerce', 'Data', 'Development', 'Devices', 
    'Editing', 'Files', 'Food & Drink', 'Medical', 'Media', 'Nature', 'Navigation', 
    'Objects', 'People', 'Security', 'Shapes', 'Sports', 'Status', 'Text', 'Time', 
    'Transport', 'UI', 'Weather', 'Power', 'Household', 'Education', 'Tools', 
    'Emotions', 'Clothing', 'Connectivity'
  ]);

  // Re-assign very small dynamic categories to 'Miscellaneous'
  allIcons.value.forEach(i => {
    if (!protectedCategories.has(i.category) && (counts.get(i.category) || 0) < 15) {
      i.category = 'Miscellaneous';
    }
  });

  // Recompute counts after merging into Miscellaneous
  counts.clear();
  allIcons.value.forEach(i => {
    counts.set(i.category, (counts.get(i.category) || 0) + 1);
  });

  // Extract all unique categories
  const dynamicCategories = Array.from(counts.keys());
  
  // Sort them alphabetically, but ensure 'Miscellaneous' is last
  dynamicCategories.sort((a, b) => {
    if (a === 'Miscellaneous') return 1;
    if (b === 'Miscellaneous') return -1;
    return a.localeCompare(b);
  });

  return ['All', ...dynamicCategories];
};

const categories = generateCategories();

const lucideCount = lucideEntries.length;
const iconoirCount = iconoirEntries.length;
const heroCount = heroEntries.length;
const tablerCount = tablerEntries.length;
const phosphorCount = phosphorEntries.length;
const hugeCount = hugeEntries.length;
const faCount = faEntries.length;
const simpleCount = simpleEntries.length;

const searchQuery = ref('');
const selectedAnimation = ref('bounce');
const selectedLibrary = ref('All');
const selectedCategory = ref('All');
const selectedColor = ref('currentColor');

const getCategoryCount = (cat: string) => {
  let list = allIcons.value;
  if (selectedLibrary.value !== 'All') {
    list = list.filter(i => i.library === selectedLibrary.value);
  }
  if (cat === 'All') return list.length;
  return list.filter(i => i.category === cat).length;
};

const filteredSet = computed(() => {
  let result = allIcons.value;
  
  if (selectedLibrary.value !== 'All') {
    result = result.filter(i => i.library === selectedLibrary.value);
  }
  if (selectedCategory.value !== 'All') {
    result = result.filter(i => i.category === selectedCategory.value);
  }
  
  const query = searchQuery.value.toLowerCase();
  if (query) {
    result = result.filter(i => i.name.toLowerCase().includes(query));
  }
  return result;
});

const totalFiltered = computed(() => filteredSet.value.length);

const currentPage = ref(1);
const itemsPerPage = ref(100);

watch([searchQuery, selectedLibrary, selectedCategory], () => {
  currentPage.value = 1;
});

const totalPages = computed(() => Math.ceil(totalFiltered.value / itemsPerPage.value));

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  
  if (current <= 3) {
    return [1, 2, 3, '...', total];
  }
  
  if (current >= total - 2) {
    return [1, '...', total - 2, total - 1, total];
  }
  
  return [1, '...', current - 1, current, current + 1, '...', total];
});

const paginatedIcons = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredSet.value.slice(start, start + itemsPerPage.value);
});
</script>

<style scoped>
.explorer-layout {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  background: var(--bg-color);
  border-top: 1px solid var(--border-color);
}

.sidebar {
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-right: 1px solid var(--border-color);
  padding-right: 1.5rem;
}

.sidebar-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-color);
  opacity: 0.5;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.category-list li {
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-color);
  opacity: 0.7;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.category-list li:hover {
  background: rgba(129, 140, 248, 0.1);
  opacity: 1;
}

.category-list li.active {
  background: var(--text-color);
  color: var(--bg-color);
  opacity: 1;
}

.cat-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cat-count {
  font-size: 0.8rem;
  opacity: 0.6;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.color-swatch {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.color-swatch:hover {
  transform: scale(1.1);
}

.color-swatch.active {
  border-color: #fff;
  outline: 2px solid #818CF8;
}

.custom-color-btn {
  display: block;
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  text-align: center;
  background: transparent;
  border: 1px dashed var(--border-color);
  color: var(--text-color);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  opacity: 0.7;
  transition: all 0.2s ease;
  position: relative;
}

.custom-color-btn:hover {
  opacity: 1;
  border-color: #818CF8;
}

.custom-color-btn.active {
  border: 1px solid #818CF8;
  color: #818CF8;
  opacity: 1;
}

.hidden-color-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tabs-header {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.library-tabs {
  display: flex;
  gap: 3rem;
  overflow-x: auto;
  padding-bottom: 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
  scrollbar-width: none; /* Firefox */
}

.library-tabs::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.library-tabs button {
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.05rem;
  font-weight: 600;
  opacity: 0.5;
  cursor: pointer;
  padding-bottom: 1rem;
  margin-bottom: -1px;
  position: relative;
  transition: opacity 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.library-tabs button:hover {
  opacity: 0.8;
}

.library-tabs button.active {
  opacity: 1;
  color: #fff;
}

.library-tabs button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #818CF8;
}

.tab-count {
  font-size: 0.75rem;
  opacity: 0.6;
  font-weight: 400;
  margin-left: 0;
}

.explorer-header {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.search-bar {
  flex-grow: 1;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-color);
  outline: none;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.search-bar:focus {
  border-color: #818CF8;
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);
}

.animation-selector select {
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-color);
  cursor: pointer;
  font-size: 1rem;
  outline: none;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem 1rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
  min-width: 0;
}

.icon-card :deep(svg) {
  max-width: 100%;
  height: auto;
}

.icon-card:hover {
  border-color: #818CF8;
}

.icon-label {
  font-size: 0.6rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
  opacity: 0.7;
  line-height: 1.2;
  word-break: break-all;
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  background: rgba(129, 140, 248, 0.1);
  color: #818CF8;
  border: 1px solid rgba(129, 140, 248, 0.2);
  padding: 0.75rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.btn:hover {
  background: rgba(129, 140, 248, 0.2);
}

.no-results {
  text-align: center;
  padding: 3rem;
  font-size: 1rem;
  opacity: 0.6;
}

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
}

.page-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-color);
  opacity: 0.4;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-nav-btn:hover:not(:disabled) {
  background: rgba(129, 140, 248, 0.1);
  opacity: 0.8;
}

.page-nav-btn:disabled {
  background: rgba(150, 150, 150, 0.1);
  opacity: 0.2;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.page-num-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 44px;
  padding: 0 0.5rem;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.1rem;
  opacity: 0.4;
  cursor: pointer;
  transition: all 0.2s ease;
}

.page-num-btn:hover:not(.active) {
  background: rgba(129, 140, 248, 0.1);
  opacity: 0.8;
}

.page-num-btn.active {
  background: #3B82F6;
  color: #fff;
  opacity: 1;
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
}

.page-ellipsis {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.3;
  letter-spacing: 2px;
  padding: 0 0.5rem;
}
}

@media (max-width: 900px) {
  .explorer-layout {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    padding-right: 0;
    padding-bottom: 2rem;
  }
  .category-list {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .color-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (max-width: 600px) {
  .explorer-header {
    flex-direction: column;
    align-items: stretch;
  }
  .library-tabs {
    gap: 1.5rem;
  }
  .color-grid {
    grid-template-columns: repeat(6, 1fr);
  }
  .icon-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  .pagination-container {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
