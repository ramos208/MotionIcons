<template>
  <div class="explorer-layout">
    <aside class="sidebar">
      <div class="sidebar-section">
        <h3 class="sidebar-title">CATEGORIES</h3>

        <!-- Mobile Select -->
        <div class="mobile-select-wrapper category-mobile">
          <select v-model="selectedCategory" class="mobile-select">
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }} ({{ getCategoryCount(cat) }})
            </option>
          </select>
        </div>

        <ul class="category-list">
          <template v-for="cat in categories" :key="cat">
            <li 
              :class="{ active: selectedCategory === cat && !selectedSubCategory }"
              @click="toggleCategory(cat)"
            >
              <div class="cat-content">
                <span>{{ cat }}</span>
                <span class="cat-count">{{ getCategoryCount(cat) }}</span>
              </div>
            </li>
            
            <ul 
              v-if="expandedCategory === cat && getSubCategoriesFor(cat).length > 0" 
              class="sub-category-list"
            >
              <li 
                v-for="sub in getSubCategoriesFor(cat)" 
                :key="sub"
                :class="{ active: selectedSubCategory === sub }"
                @click="selectSubCategory(cat, sub)"
              >
                <div class="cat-content">
                  <span>{{ sub }}</span>
                  <span class="cat-count">{{ getSubCategoryCount(cat, sub) }}</span>
                </div>
              </li>
            </ul>
          </template>
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
        
        <!-- Mobile Select -->
        <div class="mobile-select-wrapper library-mobile">
          <select v-model="selectedLibrary" class="mobile-select">
            <option value="All">All ({{ allIcons.length.toLocaleString() }})</option>
            <option value="Lucide">Lucide ({{ lucideCount.toLocaleString() }})</option>
            <option value="Iconoir">Iconoir ({{ iconoirCount.toLocaleString() }})</option>
            <option value="Heroicons">Heroicons ({{ heroCount.toLocaleString() }})</option>
            <option value="Tabler">Tabler ({{ tablerCount.toLocaleString() }})</option>
            <option value="Phosphor">Phosphor ({{ phosphorCount.toLocaleString() }})</option>
            <option value="HugeIcons">HugeIcons ({{ hugeCount.toLocaleString() }})</option>
            <option value="FontAwesome">FontAwesome ({{ faCount.toLocaleString() }})</option>
            <option value="SimpleIcons">Brand Logos ({{ simpleCount.toLocaleString() }})</option>
          </select>
        </div>

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
        
        <div class="animation-search-selector">
          <div class="selector-trigger" @click.stop="isAnimDropdownOpen = !isAnimDropdownOpen">
            <span class="trigger-label">Motion:</span>
            <span class="trigger-value">{{ getAnimationLabel(selectedAnimation) }}</span>
            <svg class="trigger-arrow" :class="{ open: isAnimDropdownOpen }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
          
          <div v-show="isAnimDropdownOpen" class="selector-dropdown">
            <input 
              ref="animSearchInput"
              v-model="animSearchQuery"
              type="text"
              class="anim-search-input"
              placeholder="Filter motions..."
              @click.stop
            />
            <div class="anim-options-list">
              <button
                v-for="anim in filteredAnimations"
                :key="anim.value"
                class="anim-option"
                :class="{ active: selectedAnimation === anim.value }"
                @click.stop="selectAnimation(anim.value)"
              >
                {{ anim.label }}
              </button>
              <div v-if="filteredAnimations.length === 0" class="no-anim-results">
                No motions match
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="icon-grid">
        <div 
          v-for="item in paginatedIcons" 
          :key="item.library + '-' + item.name" 
          class="icon-card clickable-card"
          @click="openIconModal(item)"
          title="Click to view details and export options"
        >
          <MotionIconsProvider 
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

    <!-- Beautiful Glassmorphic Dialog Modal for Exporting -->
    <div v-if="isModalOpen && activeIcon" class="modal-overlay" @click.self="closeIconModal" aria-modal="true" role="dialog">
      <div class="modal-container">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">{{ activeIcon.name }}</h3>
            <span class="modal-subtitle">{{ activeIcon.library }} &middot; {{ activeIcon.category }}</span>
          </div>
          <button class="modal-close-btn" @click="closeIconModal" title="Close details">✕</button>
        </div>

        <div class="modal-body-grid">
          <!-- Left side: Gorgeous interactive preview stage -->
          <div class="modal-preview-stage" :style="{ color: selectedColor === 'currentColor' ? (activeIcon.hex || '') : selectedColor }">
            <div class="stage-bg-grid"></div>
            
            <!-- 2D / 3D Segmented Control Tab -->
            <div class="preview-mode-tabs">
              <button 
                class="mode-tab-btn" 
                :class="{ active: previewMode === '2d' }"
                @click="previewMode = '2d'; activeModalTab = (activeModalTab === '3d' ? 'vue' : activeModalTab)"
              >
                2D Hover Motion
              </button>
              <button 
                class="mode-tab-btn" 
                :class="{ active: previewMode === '3d' }"
                @click="previewMode = '3d'; activeModalTab = '3d'"
              >
                3D Volumetric Shape
              </button>
            </div>

            <!-- 2D View Stage -->
            <div v-show="previewMode === '2d'" ref="svgSourceContainer" class="preview-stage-icon">
              <MotionIconsProvider 
                :icon="activeIcon.icon" 
                :animation="selectedAnimation" 
                :size="120" 
                :color="selectedColor === 'currentColor' ? (activeIcon.hex || '') : selectedColor"
                :glow="isDark" 
                :library="activeIcon.library" 
              />
            </div>

            <!-- 3D View Stage -->
            <div v-if="previewMode === '3d'" class="preview-stage-3d">
              <ThreeSvgIcon 
                ref="threeSvgIconRef"
                :svgString="rawSvgString" 
                :color="selectedColor === 'currentColor' ? (activeIcon.hex || '#818CF8') : selectedColor"
                :animation="selectedAnimation"
              />
            </div>

            <div class="alias-copy-container" style="text-align: center; margin-top: 1.5rem; margin-bottom: -0.5rem; z-index: 10;">
              <span 
                class="icon-alias-badge" 
                :style="{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '6px 12px', background: isAliasCopied ? 'rgba(16, 185, 129, 0.15)' : '', color: isAliasCopied ? '#10B981' : '' }"
                @click="copyAlias((aliasMap[activeIcon.library] || 'l') + '.' + activeIcon.exportKey)"
                title="Click to copy alias"
              >
                <svg v-if="!isAliasCopied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                <span>{{ aliasMap[activeIcon.library] || 'l' }}.{{ activeIcon.exportKey }}</span>
              </span>
            </div>

            <span class="preview-caption">
              <template v-if="previewMode === '2d'">
                Hover to play the custom <code>{{ selectedAnimation }}</code> motion
              </template>
              <template v-else>
                Left-click & drag to rotate shape &middot; Scroll to zoom
              </template>
            </span>
          </div>

          <!-- Right side: Tabbed export and installation commands -->
          <div class="modal-export-center">
            <div class="modal-tabs">
              <button 
                :class="{ active: activeModalTab === 'vue' }" 
                @click="activeModalTab = 'vue'; previewMode = '2d'"
              >
                Vue Component
              </button>
              <button 
                :class="{ active: activeModalTab === '3d' }" 
                @click="activeModalTab = '3d'; previewMode = '3d'"
              >
                3D Volumetric
              </button>

              <button 
                :class="{ active: activeModalTab === 'svg' }" 
                @click="activeModalTab = 'svg'"
              >
                Export & Download
              </button>
            </div>

            <!-- Tab 1: Vue Component usage details -->
            <div v-show="activeModalTab === 'vue'" class="tab-pane">
              <div class="code-section">
                <span class="code-label">1. Install Package</span>
                <div class="code-wrapper">
                  <code>npm install motion-icons</code>
                  <button @click="copyText('npm install motion-icons')" class="copy-btn" title="Copy install command">Copy</button>
                </div>
              </div>

              <div class="code-section">
                <span class="code-label">2. Global Setup (Optional)</span>
                <p class="tab-description" style="margin-top:-5px; margin-bottom: 8px;">Register the plugin once to use global aliases without importing.</p>
                <div class="code-wrapper">
                  <code>import MotionIcons from 'motion-icons'<br/>app.use(MotionIcons)</code>
                  <button @click="copyText(`import MotionIcons from 'motion-icons'\napp.use(MotionIcons)`)" class="copy-btn" title="Copy plugin setup">Copy</button>
                </div>
              </div>

              <div class="code-section">
                <span class="code-label">OR Local Component Import</span>
                <div class="code-wrapper">
                  <code>{{ formattedImportCode }}</code>
                  <button @click="copyText(formattedImportCode)" class="copy-btn" title="Copy import snippet">Copy</button>
                </div>
              </div>

              <div class="code-section">
                <span class="code-label">3. Template Usage</span>
                <div class="code-wrapper">
                  <code>{{ formattedUsageCode }}</code>
                  <button @click="copyText(formattedUsageCode)" class="copy-btn" title="Copy template snippet">Copy</button>
                </div>
              </div>
            </div>

            <!-- Tab 2: Export & Download options -->
            <div v-show="activeModalTab === 'svg'" class="tab-pane">
              <span class="code-label">Animated SVG</span>
              <p class="tab-description">
                Copying or downloading the SVG embeds all relevant keyframes and CSS triggers directly inside the file so it animates natively on hover wherever you mount it!
              </p>

              <div class="action-row">
                <button @click="copySvgCode" class="action-btn copy-svg-action-btn" title="Copy SVG code with keyframes">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  Copy Animated SVG Code
                </button>
                <button @click="downloadSvgFile" class="action-btn download-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Download .svg
                </button>
              </div>

              <div class="export-divider"></div>

              <span class="code-label">3D Object</span>
              <p class="tab-description">
                Download the extruded 3D volumetric shape as a .glb file you can import into Blender, Unity, Unreal Engine, or any 3D tool.
              </p>

              <div class="action-row">
                <button @click="download3dObject" class="action-btn download-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                  Download 3D Object (.glb)
                </button>
              </div>
            </div>

            <!-- Tab 3: 3D Volumetric usage details -->
            <div v-show="activeModalTab === '3d'" class="tab-pane">
              <p class="tab-description">
                Render this icon as an extruded 3D volumetric shape with real-time lighting, orbit controls, and GPU-accelerated materials using Three.js.
              </p>

              <div class="code-section">
                <span class="code-label">1. Install Package</span>
                <div class="code-wrapper">
                  <code>npm install motion-icons</code>
                  <button @click="copyText('npm install motion-icons')" class="copy-btn" title="Copy install command">Copy</button>
                </div>
              </div>

              <div class="code-section">
                <span class="code-label">2. Global Setup (Optional)</span>
                <p class="tab-description" style="margin-top:-5px; margin-bottom: 8px;">Register the plugin once to use global aliases without importing.</p>
                <div class="code-wrapper">
                  <code>import MotionIcons from 'motion-icons'<br/>app.use(MotionIcons)</code>
                  <button @click="copyText(`import MotionIcons from 'motion-icons'\napp.use(MotionIcons)`)" class="copy-btn" title="Copy plugin setup">Copy</button>
                </div>
              </div>

              <div class="code-section">
                <span class="code-label">OR Local Component Import</span>
                <div class="code-wrapper">
                  <code>{{ formatted3dImportCode }}</code>
                  <button @click="copyText(formatted3dImportCode)" class="copy-btn" title="Copy 3D import snippet">Copy</button>
                </div>
              </div>

              <div class="code-section">
                <span class="code-label">3. Template Usage</span>
                <div class="code-wrapper">
                  <code>{{ formatted3dUsageCode }}</code>
                  <button @click="copyText(formatted3dUsageCode)" class="copy-btn" title="Copy 3D template snippet">Copy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, computed, markRaw, watch, h, nextTick, onMounted, onUnmounted } from 'vue';
import { icons as LucideIconsMap } from 'lucide-vue-next';
import * as HeroIcons from '@heroicons/vue/24/outline';
import * as IconoirIcons from '@iconoir/vue';
import * as PhosphorIcons from '@phosphor-icons/vue';
import * as TablerIcons from '@tabler/icons-vue';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as HugeIcons from 'hugeicons-vue';
import * as SimpleIcons from 'simple-icons';
import MotionIconsProvider from './MotionIconsProvider.vue';
import ThreeSvgIcon from './ThreeSvgIcon.vue';

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
  if (/(menu|grid|list|layout|window|maximize|minimize|settings|gear|sliders|panel|sidebar|tab|toggle|filter|sort|search|zoom|home|expand|shrink|more)/.test(lower)) return 'Interface';
  if (/(sun|moon|cloud|rain|snow|lightning|weather|wind|storm|thermometer|umbrella|zap)/.test(lower)) return 'Weather';
  
  if (/(battery|power|charge|socket)/.test(lower)) return 'Power';
  if (/(bed|chair|sofa|table|desk|door|window|bath|shower|home|house|building)/.test(lower)) return 'Household';
  if (/(book|read|study|school|student|test|exam|library)/.test(lower)) return 'Education';
  if (/(hammer|wrench|drill|tool|gear|axe|anvil)/.test(lower)) return 'Tools';
  if (/(smile|frown|laugh|sad|angry|wink|face|ghost|baby|alien|monster)/.test(lower)) return 'Emotions';
  if (/(shirt|hat|shoe|pants|glasses|tie|crown|ring|gem|diamond)/.test(lower)) return 'Clothing';
  if (/(bluetooth|wifi|signal|radio|broadcast)/.test(lower)) return 'Connectivity';

  const match = name.match(/^[A-Z][a-z]+/);
  if (match) {
    if (match[0] === 'Brand') return 'Brand Logos';
    return match[0]; 
  }
  
  return 'Objects';
};

const getSubCategory = (name: string, category: string) => {
  const lower = name.toLowerCase();
  
  if (category === 'Arrows') {
    if (/(big|bold|thick)/.test(lower)) return 'Thick / Emphasis Arrows';
    if (/(dot|point|target)/.test(lower)) return 'Dotted / Point Arrows';
    if (/(line)/.test(lower)) return 'Line Anchored Arrows';
    if (/(dash)/.test(lower)) return 'Dash / Transition Arrows';
    if (/(wide)/.test(lower)) return 'Wide / Menu Flow Arrows';
    if (/(a-z|z-a|0-1|1-0|az|za|01|10|sort|order)/.test(lower)) return 'Alphabet / Sorting Arrows';
    if (/(left-right|right-left|up-down|down-up|turn|redirect|reply|forward)/.test(lower)) return 'Turn / Redirect Arrows';
    if (/(trail|flow|momentum|elastic)/.test(lower)) return 'Animated Motion Arrows';
    if (/(up|down|left|right)/.test(lower)) return 'Directional Arrows';
    return 'Other Arrows';
  }

  if (category === 'Communication') {
    if (/(mail|email|inbox|send|letter)/.test(lower)) return 'Mail & Messages';
    if (/(chat|message|comment|speech)/.test(lower)) return 'Chat & Forums';
    if (/(phone|call|contact)/.test(lower)) return 'Phone & Contacts';
    if (/(mic|volume|speak|sound|audio)/.test(lower)) return 'Voice & Audio';
    return 'Other Communication';
  }

  if (category === 'Commerce') {
    if (/(coin|dollar|euro|bitcoin|money|bank|cash|currency)/.test(lower)) return 'Money & Currency';
    if (/(shop|cart|bag|store|basket)/.test(lower)) return 'Shopping';
    if (/(credit|card|receipt|tag|price|wallet|pay)/.test(lower)) return 'Transactions & Cards';
    return 'Other Commerce';
  }

  if (category === 'Devices') {
    if (/(computer|laptop|desktop|mac)/.test(lower)) return 'Computers';
    if (/(phone|mobile|tablet|pad)/.test(lower)) return 'Mobile & Tablets';
    if (/(keyboard|mouse|printer|router|speaker|tv|monitor|watch|cast)/.test(lower)) return 'Peripherals & Displays';
    return 'Other Devices';
  }

  if (category === 'Interface') {
    if (/(menu|sidebar|tab|grid|list|layout)/.test(lower)) return 'Menus & Layouts';
    if (/(settings|gear|slider|panel|toggle|filter|sort|control)/.test(lower)) return 'Settings & Controls';
    if (/(window|maximize|minimize|expand|shrink)/.test(lower)) return 'Window & States';
    if (/(search|zoom|magnify)/.test(lower)) return 'Search & Zoom';
    return 'Other Interface';
  }

  if (category === 'Files') {
    if (/(folder|directory|archive|zip)/.test(lower)) return 'Folders & Archives';
    if (/(document|page|paper)/.test(lower)) return 'Documents';
    if (/(note|clipboard|diary|book)/.test(lower)) return 'Notes & Boards';
    return 'Other Files';
  }

  if (category === 'Weather') {
    if (/(sun|clear|day)/.test(lower)) return 'Sun & Clear';
    if (/(cloud|overcast)/.test(lower)) return 'Clouds';
    if (/(rain|storm|lightning|zap|thunder)/.test(lower)) return 'Rain & Storms';
    if (/(snow|cold|thermometer|ice)/.test(lower)) return 'Snow & Cold';
    if (/(moon|night)/.test(lower)) return 'Moon & Night';
    return 'Other Weather';
  }

  if (category === 'People') {
    if (/(group|people|team|users)/.test(lower)) return 'Groups & Teams';
    if (/(face|smile|frown|laugh|sad)/.test(lower)) return 'Faces & Emotion';
    if (/(user|person|profile|avatar)/.test(lower)) return 'Single Person';
    return 'Other People';
  }

  if (category === 'Media') {
    if (/(video|camera|film|movie)/.test(lower)) return 'Video & Camera';
    if (/(music|audio|speaker)/.test(lower)) return 'Music & Audio';
    if (/(image|picture|photo|gallery)/.test(lower)) return 'Images & Photos';
    if (/(play|pause|stop|record|next|prev)/.test(lower)) return 'Playback Controls';
    return 'Other Media';
  }

  if (category === 'Editing') {
    if (/(pen|pencil|draw|brush|paint)/.test(lower)) return 'Drawing & Painting';
    if (/(cut|copy|paste|scissors|crop)/.test(lower)) return 'Clipboard & Crop';
    if (/(eraser|wand|magic)/.test(lower)) return 'Tools & FX';
    return 'Other Editing';
  }

  if (category === 'Data') {
    if (/(chart|graph|analytics|stat)/.test(lower)) return 'Charts & Graphs';
    if (/(database|server|network)/.test(lower)) return 'Servers & Databases';
    if (/(table)/.test(lower)) return 'Tables & Grids';
    return `Other ${category}`;
  }

  if (category === 'Development') {
    if (/(code|terminal|command|regex|brac)/.test(lower)) return 'Code & Terminal';
    if (/(git|commit|branch|merge|pull|push)/.test(lower)) return 'Git & Version Control';
    if (/(bug|webhook|bot)/.test(lower)) return 'Debugging & Automation';
    return `Other ${category}`;
  }

  if (category === 'Nature') {
    if (/(tree|leaf|plant|flower)/.test(lower)) return 'Plants & Trees';
    if (/(animal|pet|dog|cat|bird|fish|bug|paw|feather)/.test(lower)) return 'Animals';
    if (/(mountain|water|fire|drop|flame)/.test(lower)) return 'Elements & Landscapes';
    return `Other ${category}`;
  }

  if (category === 'Navigation') {
    if (/(map|globe|radar)/.test(lower)) return 'Maps & Globe';
    if (/(pin|location|gps|waypoint)/.test(lower)) return 'Pins & Locations';
    if (/(compass|route)/.test(lower)) return 'Routes & Compass';
    return `Other ${category}`;
  }

  if (category === 'Objects') {
    if (/(math|number|digit|plus|minus|divide|multiply|calc|fraction|sum|equal)/.test(lower)) return 'Math & Numbers';
    if (/(letter|alpha|character|abc|text|font|type)/.test(lower)) return 'Letters & Typography';
    if (/(art|paint|color|palette|brush|draw)/.test(lower)) return 'Art & Design';
    if (/(building|house|home|castle|city|town|village|store|shop|arch)/.test(lower)) return 'Buildings & Architecture';
    if (/(music|sound|note|audio|mic|piano|guitar|drum)/.test(lower)) return 'Music & Instruments';
    if (/(science|chem|bio|atom|flask|lab|microscope)/.test(lower)) return 'Science & Laboratory';
    if (/(space|star|planet|moon|sun|galaxy|rocket|meteor|astronaut)/.test(lower)) return 'Space & Astronomy';
    if (/(tool|gear|wrench|hammer|drill|fix|build|spanner)/.test(lower)) return 'Tools & Hardware';
    if (/(sign|symbol|mark|logo)/.test(lower)) return 'Signs & Symbols';
    if (/(box|cube|package|container|bottle|jar|can)/.test(lower)) return 'Containers & Packages';
    if (/(bed|chair|desk|table|sofa|furniture)/.test(lower)) return 'Furniture & Home';
    if (/(shirt|hat|shoe|pants|glasses|tie|coat|dress|sock|crown|ring|gem|diamond)/.test(lower)) return 'Clothes & Accessories';
    if (/(food|apple|fork|plate|knife|cup|drink|coffee|meal|burger|pizza|beer|wine|chef|bowl)/.test(lower)) return 'Food & Kitchen';
    if (/(smile|laugh|sad|face|emotion|ghost|wink|angry|alien|monster)/.test(lower)) return 'Emotions & Faces';
    if (/(health|hospital|pill|doctor|brain|cross|syringe|pulse|dna|ambulance|activity)/.test(lower)) return 'Medical & Health';
    if (/(dog|cat|bird|pet|bug|fish|animal|paw|feather)/.test(lower)) return 'Animals & Pets';
    if (/(tree|leaf|plant|mountain|water|fire|cloud|weather|sun|moon|rain|snow|storm|lightning|zap|flame|drop)/.test(lower)) return 'Nature & Environment';
    if (/(car|bus|plane|ship|boat|train|ticket|vehicle|bike|motorcycle)/.test(lower)) return 'Vehicles & Transport';
    if (/(tv|phone|battery|computer|device|cable|laptop|mobile|tablet|keyboard|mouse|printer|router|speaker|desktop|socket)/.test(lower)) return 'Electronics & Devices';
    if (/(play|pause|media|video|camera|photo|record|film|gallery)/.test(lower)) return 'Media & Playback';
    if (/(lock|key|shield|safe|auth|privacy|secure|password|finger)/.test(lower)) return 'Security & Locks';
    if (/(user|person|man|woman|crowd|baby|group|people|profile|avatar|account|team)/.test(lower)) return 'People & Users';
    if (/(bell|gift|ticket|trophy|sword|flag|anchor|lightbulb|plug|magnet|glass|umbrella)/.test(lower)) return 'Misc Objects';
    return `Other ${category}`;
  }

  if (category === 'Security') {
    if (/(shield|safe)/.test(lower)) return 'Shields & Safes';
    if (/(lock|unlock|key)/.test(lower)) return 'Locks & Keys';
    if (/(auth|privacy|secure|password|fingerprint)/.test(lower)) return 'Authentication';
    return `Other ${category}`;
  }

  if (category === 'Shapes') {
    if (/(circle|oval)/.test(lower)) return 'Circles';
    if (/(square|rectangle)/.test(lower)) return 'Squares & Rectangles';
    if (/(triangle|hexagon|octagon|polygon|star|dash)/.test(lower)) return 'Polygons & Lines';
    return `Other ${category}`;
  }

  if (category === 'Sports') {
    if (/(ball)/.test(lower)) return 'Balls';
    if (/(medal|trophy|goal|target)/.test(lower)) return 'Awards & Goals';
    if (/(game|dumbbell|run|swim|bike|tennis)/.test(lower)) return 'Activities';
    return `Other ${category}`;
  }

  if (category === 'Status') {
    if (/(check|success)/.test(lower)) return 'Success & Checks';
    if (/(x|fail|error|warning|alert|ban|slash)/.test(lower)) return 'Errors & Warnings';
    if (/(info|bell|badge)/.test(lower)) return 'Info & Badges';
    if (/(minus|plus)/.test(lower)) return 'Add & Remove';
    return `Other ${category}`;
  }

  if (category === 'Text') {
    if (/(align|indent|format)/.test(lower)) return 'Alignment & Formatting';
    if (/(bold|italic|underline)/.test(lower)) return 'Styles';
    if (/(list|paragraph|font|heading|letter|type|case)/.test(lower)) return 'Structure & Typography';
    return `Other ${category}`;
  }

  if (category === 'Time') {
    if (/(clock|watch|timer|hour|minute)/.test(lower)) return 'Clocks & Timers';
    if (/(calendar|date|history)/.test(lower)) return 'Calendars & Dates';
    return `Other ${category}`;
  }

  if (category === 'Transport') {
    if (/(car|truck|vehicle)/.test(lower)) return 'Cars & Trucks';
    if (/(bus|train)/.test(lower)) return 'Public Transit';
    if (/(plane)/.test(lower)) return 'Aviation';
    if (/(ship|boat)/.test(lower)) return 'Maritime';
    if (/(bike|motorcycle)/.test(lower)) return 'Bikes';
    return `Other ${category}`;
  }

  if (category === 'Power') {
    if (/(battery)/.test(lower)) return 'Batteries';
    if (/(power|charge|socket)/.test(lower)) return 'Plugs & Outlets';
    return `Other ${category}`;
  }

  if (category === 'Household') {
    if (/(bed|chair|sofa|table|desk)/.test(lower)) return 'Furniture';
    if (/(door|window)/.test(lower)) return 'Doors & Windows';
    if (/(bath|shower)/.test(lower)) return 'Bathroom';
    if (/(home|house|building)/.test(lower)) return 'Buildings';
    return `Other ${category}`;
  }

  if (category === 'Education') {
    if (/(book|read|library)/.test(lower)) return 'Books & Reading';
    if (/(study|school|student|test|exam)/.test(lower)) return 'School & Exams';
    return `Other ${category}`;
  }

  if (category === 'Tools') {
    if (/(hammer|wrench|drill|axe|anvil)/.test(lower)) return 'Hardware Tools';
    if (/(gear)/.test(lower)) return 'Gears';
    return `Other ${category}`;
  }

  if (category === 'Emotions') {
    if (/(smile|laugh)/.test(lower)) return 'Happy';
    if (/(frown|sad|angry)/.test(lower)) return 'Sad & Angry';
    if (/(wink|face|ghost|baby|alien|monster)/.test(lower)) return 'Other Faces';
    return `Other ${category}`;
  }

  if (category === 'Clothing') {
    if (/(shirt|hat|shoe|pants|glasses|tie)/.test(lower)) return 'Apparel';
    if (/(crown|ring|gem|diamond)/.test(lower)) return 'Jewelry & Accessories';
    return `Other ${category}`;
  }

  if (category === 'Connectivity') {
    if (/(wifi|signal|radio|broadcast)/.test(lower)) return 'Signals';
    if (/(bluetooth)/.test(lower)) return 'Bluetooth';
    return `Other ${category}`;
  }
  
  if (category === 'Food & Drink') {
    if (/(drink|cup|coffee|beer|wine)/.test(lower)) return 'Drinks';
    if (/(food|burger|pizza|apple)/.test(lower)) return 'Food';
    if (/(fork|knife|spoon|plate|bowl)/.test(lower)) return 'Cutlery & Dishes';
    if (/(chef)/.test(lower)) return 'Cooking';
    return `Other ${category}`;
  }
  
  if (category === 'Medical') {
    if (/(health|cross|hospital|ambulance)/.test(lower)) return 'Hospitals & Health';
    if (/(pill|syringe|stethoscope)/.test(lower)) return 'Medical Tools';
    if (/(heart|pulse|activity|brain|dna)/.test(lower)) return 'Biology & Vitals';
    return `Other ${category}`;
  }

  if (category === 'Brand Logos' || category === 'Brand') {
    if (/(react|vue|angular|svelte|next|nuxt|tailwind|bootstrap|jquery|ember|vite|webpack|babel|eslint|nodejs|deno)/.test(lower)) return 'Web Frameworks & Tools';
    if (/(javascript|typescript|python|golang|rust|java|php|ruby|swift|kotlin|cplusplus|csharp|html5|css3|sass|less)/.test(lower)) return 'Programming Languages';
    if (/(aws|azure|google cloud|vercel|netlify|digitalocean|heroku|cloudflare|docker|kubernetes|linux|ubuntu|debian|centos|nginx|apache)/.test(lower)) return 'Cloud & Infrastructure';
    if (/(github|gitlab|bitbucket|jira|trello|asana|notion|slack|discord|zoom|microsoft|teams)/.test(lower)) return 'Productivity & Collab';
    if (/(figma|adobe|photoshop|illustrator|sketch|framer|invision|canva|blender|maya)/.test(lower)) return 'Design & Creativity';
    if (/(facebook|twitter|instagram|youtube|tiktok|linkedin|snapchat|pinterest|whatsapp|telegram|wechat|reddit|tumblr)/.test(lower)) return 'Social Media & Chat';
    if (/(stripe|paypal|visa|mastercard|apple|amazon|shopify|woocommerce|magento|alipay)/.test(lower)) return 'Commerce & Payments';
    if (/(bitcoin|ethereum|coinbase|binance|dogecoin|tether|solana|cardano)/.test(lower)) return 'Crypto & Web3';
    if (/(steam|playstation|xbox|nintendo|twitch|epic|ea|ubisoft|blizzard|riot)/.test(lower)) return 'Gaming & Esports';
    if (/(netflix|spotify|hulu|disney|soundcloud|vimeo|hbo)/.test(lower)) return 'Entertainment & Media';
    if (/(apple|google|microsoft|samsung|sony|intel|amd|nvidia|hp|dell|lenovo|asus)/.test(lower)) return 'Tech & Hardware';
    if (/(tesla|ford|toyota|bmw|mercedes|audi|honda|nissan|porsche)/.test(lower)) return 'Automotive';
    if (/(mcdonalds|starbucks|coca-cola|pepsi|burger king|kfc)/.test(lower)) return 'Food & Beverage';
    if (/(nike|adidas|puma|under armour|gucci|louis vuitton|zara)/.test(lower)) return 'Fashion & Apparel';
    return `Other Brands`;
  }

  return `Other ${category}`;
};

// Map libraries correctly
const lucideEntries = Object.entries(LucideIconsMap || {})
  .filter(([key, val]) => /^[A-Z]/.test(key) && val)
  .map(([key, val]) => {
    const cat = getCategory(key);
    return { name: key, exportKey: key, icon: markRaw(val as object), library: 'Lucide', category: cat, subCategory: getSubCategory(key, cat) };
  });

const heroEntries = Object.entries(HeroIcons)
  .filter(([key, val]) => key.endsWith('Icon') && val)
  .map(([key, val]) => {
    const name = key.replace('Icon', '');
    const cat = getCategory(name);
    return { name, exportKey: key, icon: markRaw(val as object), library: 'Heroicons', category: cat, subCategory: getSubCategory(name, cat) };
  });

const iconoirEntries = Object.entries(IconoirIcons)
  .filter(([key, val]) => /^[A-Z]/.test(key) && key !== 'IconoirProvider' && val)
  .map(([key, val]) => {
    const cat = getCategory(key);
    return { name: key, exportKey: key, icon: markRaw(val as object), library: 'Iconoir', category: cat, subCategory: getSubCategory(key, cat) };
  });

const tablerEntries = Object.entries(TablerIcons)
  .filter(([key, val]) => key.startsWith('Icon') && val)
  .map(([key, val]) => {
    const name = key.replace('Icon', '');
    const cat = getCategory(name);
    return { name, exportKey: key, icon: markRaw(val as object), library: 'Tabler', category: cat, subCategory: getSubCategory(name, cat) };
  });

const phosphorEntries = Object.entries(PhosphorIcons)
  .filter(([key, val]) => /^[A-Z]/.test(key) && val && typeof val === 'object')
  .map(([key, val]) => {
    const name = key.replace(/^Ph/, '');
    const cat = getCategory(name);
    return { name, exportKey: key, icon: markRaw(val as object), library: 'Phosphor', category: cat, subCategory: getSubCategory(name, cat) };
  });

const hugeEntries = Object.entries(HugeIcons)
  .filter(([key, val]) => key.endsWith('Icon') && val)
  .map(([key, val]) => {
    const name = key.replace('Icon', '');
    const cat = getCategory(name);
    return { name, exportKey: key, icon: markRaw(val as object), library: 'HugeIcons', category: cat, subCategory: getSubCategory(name, cat) };
  });

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
    
    const name = key.replace(/^fa/, '');
    const cat = getCategory(name);
    return { name, exportKey: key, icon: faComponent, library: 'FontAwesome', category: cat, subCategory: getSubCategory(name, cat) };
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
    
    const name = val.title;
    const cat = getCategory(name);
    return { name, exportKey: key, icon: simpleComponent, library: 'SimpleIcons', category: 'Brand Logos', subCategory: getSubCategory(name, 'Brand Logos'), hex: '#' + val.hex };
  });

const allIcons = shallowRef([
  ...lucideEntries, ...iconoirEntries, ...heroEntries, 
  ...tablerEntries, ...phosphorEntries, ...hugeEntries, ...faEntries, ...simpleEntries
]);

const generateCategories = () => {
  const counts = new Map<string, number>();
  allIcons.value.forEach(i => {
    counts.set(i.category, (counts.get(i.category) || 0) + 1);
  });

  // Get the top 28 most populated categories (to leave room for 'All' and 'Miscellaneous' = 30 total)
  const sortedByCount = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);
    
  const topCategories = new Set(sortedByCount.slice(0, 29));
  if (!topCategories.has('Objects')) {
    topCategories.delete(sortedByCount[28]); // Make room
    topCategories.add('Objects');
  }

  allIcons.value.forEach(i => {
    if (!topCategories.has(i.category)) {
      i.category = 'Objects';
      i.subCategory = getSubCategory(i.name, 'Objects');
    }
  });

  counts.clear();
  allIcons.value.forEach(i => {
    counts.set(i.category, (counts.get(i.category) || 0) + 1);
  });

  const dynamicCategories = Array.from(counts.keys());
  dynamicCategories.sort((a, b) => {
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
const selectedSubCategory = ref<string | null>(null);
const expandedCategory = ref<string | null>(null);
const selectedColor = ref('currentColor');

const toggleCategory = (cat: string) => {
  selectedCategory.value = cat;
  selectedSubCategory.value = null; // Clear subcategory when clicking parent
  
  if (expandedCategory.value === cat) {
    expandedCategory.value = null; // Collapse if already expanded
  } else {
    expandedCategory.value = cat; // Expand
  }
};

const selectSubCategory = (cat: string, sub: string) => {
  selectedCategory.value = cat;
  selectedSubCategory.value = sub;
};

// Export Modal States
const isModalOpen = ref(false);
const activeIcon = ref<any | null>(null);
const activeModalTab = ref<'vue' | 'svg' | '3d'>('vue');
const svgSourceContainer = ref<HTMLElement | null>(null);
const animatedSvgCodeString = ref('');

// 3D Shape Preview Mode states
const previewMode = ref<'2d' | '3d'>('2d');
const rawSvgString = ref('');
const threeSvgIconRef = ref<any>(null);
const liveCameraPos = ref<number[]>([0, 0, 7]);

const openIconModal = (item: any) => {
  activeIcon.value = item;
  isModalOpen.value = true;
  activeModalTab.value = 'vue';
  previewMode.value = '2d'; // default to 2D
  
  // Re-generate the animated SVG code block in nextTick once container renders
  nextTick(() => {
    updateSvgString();
    // Capture un-animated or base SVG element string for ThreeJS SVGLoader
    const svgEl = svgSourceContainer.value?.querySelector('svg');
    if (svgEl) {
      rawSvgString.value = svgEl.outerHTML;
    }
  });
};

const closeIconModal = () => {
  isModalOpen.value = false;
  isAliasCopied.value = false;
};

// Alias copying logic
const isAliasCopied = ref(false);
const copyAlias = (txt: string) => {
  navigator.clipboard.writeText(txt);
  isAliasCopied.value = true;
  setTimeout(() => {
    isAliasCopied.value = false;
  }, 1500);
};

// Formatted vue codes
const formattedImportCode = computed(() => {
  if (!activeIcon.value) return '';
  const aliasToLibMap: Record<string, string> = {
    'Lucide': 'Lucide',
    'Heroicons': 'Heroicons',
    'Iconoir': 'Iconoir',
    'Tabler': 'Tabler',
    'Phosphor': 'Phosphor',
    'HugeIcons': 'HugeIcons',
    'FontAwesome': 'f',
    'SimpleIcons': 'b'
  };
  const exportLib = aliasToLibMap[activeIcon.value.library] || 'Lucide';
  if (exportLib === 'f' || exportLib === 'b') {
    return `import { MotionIconsProvider } from 'motion-icons';\n// Note: FontAwesome/SimpleIcons require global setup (app.use) for aliases`;
  }
  return `import { MotionIconsProvider, ${exportLib} } from 'motion-icons';`;
});

const aliasMap: Record<string, string> = {
  'Lucide': 'l',
  'Heroicons': 'h',
  'Iconoir': 'i',
  'Tabler': 't',
  'Phosphor': 'p',
  'HugeIcons': 'hg',
  'FontAwesome': 'f',
  'SimpleIcons': 'b'
};

const formattedUsageCode = computed(() => {
  if (!activeIcon.value) return '';
  const alias = aliasMap[activeIcon.value.library] || 'l';
  const iconVar = `${alias}.${activeIcon.value.exportKey}`;
  const colorVal = selectedColor.value === 'currentColor' ? (activeIcon.value.hex || '#818CF8') : selectedColor.value;
  return `<MotionIconsProvider :icon="${iconVar}" animation="${selectedAnimation.value}" :size="32" color="${colorVal}" />`;
});

// Formatted 3D codes
const formatted3dImportCode = computed(() => {
  if (!activeIcon.value) return '';
  const aliasToLibMap: Record<string, string> = {
    'Lucide': 'Lucide',
    'Heroicons': 'Heroicons',
    'Iconoir': 'Iconoir',
    'Tabler': 'Tabler',
    'Phosphor': 'Phosphor',
    'HugeIcons': 'HugeIcons',
    'FontAwesome': 'f',
    'SimpleIcons': 'b'
  };
  const exportLib = aliasToLibMap[activeIcon.value.library] || 'Lucide';
  if (exportLib === 'f' || exportLib === 'b') {
    return `import { MotionIconsProvider } from 'motion-icons';\n// Note: FontAwesome/SimpleIcons require global setup (app.use) for aliases`;
  }
  return `import { MotionIconsProvider, ${exportLib} } from 'motion-icons';`;
});

const formatted3dUsageCode = computed(() => {
  if (!activeIcon.value) return '';
  const alias = aliasMap[activeIcon.value.library] || 'l';
  const iconVar = `${alias}.${activeIcon.value.exportKey}`;
  const colorVal = selectedColor.value === 'currentColor' ? (activeIcon.value.hex || '#818CF8') : selectedColor.value;
  const pos = liveCameraPos.value;
  return `<MotionIconsProvider
  :icon="${iconVar}"
  color="${colorVal}"
  animation="${selectedAnimation.value}"
  :cameraPosition="[${pos[0]}, ${pos[1]}, ${pos[2]}]"
  :is3d="true"
/>`;  
});

// Searchable custom animations dropdown state
const isAnimDropdownOpen = ref(false);
const animSearchQuery = ref('');
const animSearchInput = ref<HTMLInputElement | null>(null);

const allAnimations = [
  { value: 'aurora', label: 'Aurora' },
  { value: 'blink', label: 'Blink' },
  { value: 'blob', label: 'Blob' },
  { value: 'blur-in', label: 'Blur In' },
  { value: 'blur-out', label: 'Blur Out' },
  { value: 'boomerang', label: 'Boomerang' },
  { value: 'bounce', label: 'Bounce' },
  { value: 'bounce-wave', label: 'Bounce Wave' },
  { value: 'breathing', label: 'Breathing' },
  { value: 'bubble', label: 'Bubble' },
  { value: 'cartoon-shake', label: 'Cartoon Shake' },
  { value: 'charge', label: 'Charge' },
  { value: 'cinematic-zoom', label: 'Cinematic Zoom' },
  { value: 'combo-bounce', label: 'Combo Bounce' },
  { value: 'compress', label: 'Compress' },
  { value: 'cyber-pulse', label: 'Cyber Pulse' },
  { value: 'dash', label: 'Dash' },
  { value: 'distort', label: 'Distort' },
  { value: 'drift', label: 'Drift' },
  { value: 'drift-float', label: 'Drift Float' },
  { value: 'drift-spin', label: 'Drift Spin' },
  { value: 'elastic', label: 'Elastic' },
  { value: 'elegant-swing', label: 'Elegant Swing' },
  { value: 'energy-burst', label: 'Energy Burst' },
  { value: 'explosion-pop', label: 'Explosion Pop' },
  { value: 'fade-drift', label: 'Fade Drift' },
  { value: 'flash', label: 'Flash' },
  { value: 'flicker', label: 'Flicker' },
  { value: 'flip', label: 'Flip' },
  { value: 'float', label: 'Float' },
  { value: 'flutter', label: 'Flutter' },
  { value: 'frost', label: 'Frost' },
  { value: 'glass-shine', label: 'Glass Shine' },
  { value: 'glitch', label: 'Glitch' },
  { value: 'glow-pulse', label: 'Glow Pulse' },
  { value: 'gooey', label: 'Gooey' },
  { value: 'heartbeat', label: 'Heartbeat' },
  { value: 'hologram', label: 'Hologram' },
  { value: 'hop', label: 'Hop' },
  { value: 'hover-lift', label: 'Hover Lift' },
  { value: 'impact', label: 'Impact' },
  { value: 'jelly', label: 'Jelly' },
  { value: 'jiggle', label: 'Jiggle' },
  { value: 'light-sweep', label: 'Light Sweep' },
  { value: 'liquid', label: 'Liquid' },
  { value: 'magnetic', label: 'Magnetic' },
  { value: 'matrix', label: 'Matrix' },
  { value: 'morph', label: 'Morph' },
  { value: 'neon-flicker', label: 'Neon Flicker' },
  { value: 'orbit', label: 'Orbit' },
  { value: 'peek', label: 'Peek' },
  { value: 'pendulum', label: 'Pendulum' },
  { value: 'pixelate', label: 'Pixelate' },
  { value: 'pop', label: 'Pop' },
  { value: 'power-up', label: 'Power Up' },
  { value: 'pulse', label: 'Pulse' },
  { value: 'recoil', label: 'Recoil' },
  { value: 'rgb-split', label: 'RGB Split' },
  { value: 'ripple', label: 'Ripple' },
  { value: 'roll', label: 'Roll' },
  { value: 'rotate-3d', label: 'Rotate 3D' },
  { value: 'rubber-band', label: 'Rubber Band' },
  { value: 'scanline', label: 'Scanline' },
  { value: 'shake', label: 'Shake' },
  { value: 'shockwave', label: 'Shockwave' },
  { value: 'slam', label: 'Slam' },
  { value: 'slide-down', label: 'Slide Down' },
  { value: 'slide-left', label: 'Slide Left' },
  { value: 'slide-right', label: 'Slide Right' },
  { value: 'slide-up', label: 'Slide Up' },
  { value: 'smooth-orbit', label: 'Smooth Orbit' },
  { value: 'snap', label: 'Snap' },
  { value: 'soft-pulse', label: 'Soft Pulse' },
  { value: 'spin', label: 'Spin' },
  { value: 'spin-pulse', label: 'Spin Pulse' },
  { value: 'spiral', label: 'Spiral' },
  { value: 'squish', label: 'Squish' },
  { value: 'static-noise', label: 'Static Noise' },
  { value: 'stretch', label: 'Stretch' },
  { value: 'swing', label: 'Swing' },
  { value: 'swing-3d', label: 'Swing 3D' },
  { value: 'tada', label: 'Tada (Pop)' },
  { value: 'tilt', label: 'Tilt' },
  { value: 'turbo-spin', label: 'Turbo Spin' },
  { value: 'vhs', label: 'VHS' },
  { value: 'warp', label: 'Warp' },
  { value: 'wave', label: 'Wave' },
  { value: 'wiggle', label: 'Wiggle' },
  { value: 'wobble', label: 'Wobble' },
  { value: 'zoom-in', label: 'Zoom In' },
  { value: 'zoom-out', label: 'Zoom Out' },
];

const filteredAnimations = computed(() => {
  const q = animSearchQuery.value.trim().toLowerCase();
  if (!q) return allAnimations;
  return allAnimations.filter(a => a.label.toLowerCase().includes(q));
});

const getAnimationLabel = (val: string) => {
  return allAnimations.find(a => a.value === val)?.label || val;
};

const selectAnimation = (val: string) => {
  selectedAnimation.value = val;
  isAnimDropdownOpen.value = false;
  animSearchQuery.value = '';
};

// Global click handler to close searchable dropdown when clicking outside
const onGlobalClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (!target.closest('.animation-search-selector')) {
    isAnimDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', onGlobalClick);
});

// Poll camera position from 3D preview when active
let cameraPollId: ReturnType<typeof setInterval> | null = null;

watch(previewMode, (mode) => {
  if (mode === '3d') {
    cameraPollId = setInterval(() => {
      if (threeSvgIconRef.value?.getCurrentCameraPosition) {
        liveCameraPos.value = threeSvgIconRef.value.getCurrentCameraPosition();
      }
    }, 500);
  } else {
    if (cameraPollId) { clearInterval(cameraPollId); cameraPollId = null; }
  }
});

watch(isModalOpen, (open) => {
  if (!open && cameraPollId) { clearInterval(cameraPollId); cameraPollId = null; }
});

onUnmounted(() => {
  window.removeEventListener('click', onGlobalClick);
  if (cameraPollId) { clearInterval(cameraPollId); cameraPollId = null; }
});

// Compile and map keyframes dynamically for SVG injection
const animationMetadata: Record<string, { trigger: string; keyframes: string }> = {
  pulse: {
    keyframes: '@keyframes provider-pulse { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-pulse 0.6s ease-in-out infinite alternate; }'
  },
  bounce: {
    keyframes: '@keyframes provider-bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-5px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-bounce 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate; }'
  },
  spin: {
    keyframes: '@keyframes provider-spin { 100% { transform: rotate(360deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-spin 1.5s linear infinite; }'
  },
  shake: {
    keyframes: '@keyframes provider-shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-3px) rotate(-3deg); } 75% { transform: translateX(3px) rotate(3deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-shake 0.4s ease-in-out infinite; }'
  },
  jiggle: {
    keyframes: '@keyframes provider-jiggle { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-jiggle 0.4s ease-in-out infinite; }'
  },
  flip: {
    keyframes: '@keyframes provider-flip { 0% { transform: perspective(400px) rotateY(0); } 100% { transform: perspective(400px) rotateY(180deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-flip 1s ease-in-out infinite alternate; }'
  },
  float: {
    keyframes: '@keyframes provider-float { 0% { transform: translateY(0px); } 100% { transform: translateY(-8px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-float 2s ease-in-out infinite alternate; }'
  },
  heartbeat: {
    keyframes: '@keyframes provider-heartbeat { 0%, 100% { transform: scale(1); } 14% { transform: scale(1.2); } 28% { transform: scale(1); } 42% { transform: scale(1.2); } 70% { transform: scale(1); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-heartbeat 1.2s ease-in-out infinite; }'
  },
  swing: {
    keyframes: '@keyframes provider-swing { 0% { transform: rotate(15deg); } 100% { transform: rotate(-15deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: top center; } svg:hover { animation: provider-swing 1.5s ease-in-out infinite alternate; }'
  },
  wobble: {
    keyframes: '@keyframes provider-wobble { 0%, 100% { transform: translateX(0%) rotate(0deg); } 15% { transform: translateX(-15%) rotate(-5deg); } 30% { transform: translateX(10%) rotate(3deg); } 45% { transform: translateX(-10%) rotate(-3deg); } 60% { transform: translateX(5%) rotate(2deg); } 75% { transform: translateX(-2%) rotate(-1deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-wobble 0.8s ease-in-out infinite; }'
  },
  tada: {
    keyframes: '@keyframes provider-tada { 0% { transform: scale(1); } 10%, 20% { transform: scale(0.9) rotate(-3deg); } 30%, 50%, 70%, 90% { transform: scale(1.2) rotate(3deg); } 40%, 60%, 80% { transform: scale(1.2) rotate(-3deg); } 100% { transform: scale(1); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-tada 1s ease-in-out infinite; }'
  },
  'zoom-in': {
    keyframes: '',
    trigger: 'svg { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); transform-origin: center; } svg:hover { transform: scale(1.2); }'
  },
  'zoom-out': {
    keyframes: '',
    trigger: 'svg { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); transform-origin: center; } svg:hover { transform: scale(0.8); }'
  },
  'rubber-band': {
    keyframes: '@keyframes provider-rubber-band { 0%, 100% { transform: scale(1, 1); } 30% { transform: scale(1.25, 0.75); } 40% { transform: scale(0.75, 1.25); } 50% { transform: scale(1.15, 0.85); } 65% { transform: scale(0.95, 1.05); } 75% { transform: scale(1.05, 0.95); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-rubber-band 1s ease-in-out infinite; }'
  },
  'spin-pulse': {
    keyframes: '@keyframes provider-spin { 100% { transform: rotate(360deg); } } @keyframes provider-pulse { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-spin 1.5s linear infinite, provider-pulse 0.6s ease-in-out infinite alternate; }'
  },
  glitch: {
    keyframes: '@keyframes provider-glitch { 0% { transform: translate(0, 0) skew(0deg); } 20% { transform: translate(-2px, 1px) skew(-5deg); } 40% { transform: translate(2px, -1px) skew(5deg); } 60% { transform: translate(-1px, 2px) skew(-2deg); } 80% { transform: translate(1px, -2px) skew(2deg); } 100% { transform: translate(0, 0) skew(0deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-glitch 0.3s linear infinite; }'
  },
  drift: {
    keyframes: '@keyframes provider-drift { 0% { transform: translateX(-4px); } 100% { transform: translateX(4px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-drift 1.2s ease-in-out infinite alternate; }'
  },
  flicker: {
    keyframes: '@keyframes provider-flicker { 0%, 100% { opacity: 1; } 25% { opacity: 0.35; } 50% { opacity: 0.85; } 75% { opacity: 0.2; } }',
    trigger: 'svg { transition: opacity 0.2s ease; } svg:hover { animation: provider-flicker 0.4s linear infinite; }'
  },
  blink: {
    keyframes: '@keyframes provider-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }',
    trigger: 'svg { transition: opacity 0.2s ease; } svg:hover { animation: provider-blink 0.8s ease-in-out infinite; }'
  },
  pop: {
    keyframes: '@keyframes provider-pop { 0% { transform: scale(0.92); } 100% { transform: scale(1.1); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite alternate; }'
  },
  snap: {
    keyframes: '@keyframes provider-snap { 0%, 100% { transform: rotate(0deg); } 20% { transform: rotate(-8deg) scale(0.95); } 40% { transform: rotate(8deg) scale(1.05); } 60% { transform: rotate(-4deg); } 80% { transform: rotate(4deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-snap 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite; }'
  },
  flash: {
    keyframes: '@keyframes provider-flash { 0%, 100% { filter: brightness(1); } 50% { filter: brightness(1.8) drop-shadow(0 0 10px currentColor); } }',
    trigger: 'svg { transition: filter 0.3s ease; } svg:hover { animation: provider-flash 0.8s ease-in-out infinite alternate; }'
  },
  ripple: {
    keyframes: '@keyframes provider-ripple { 0% { transform: scale(0.95); opacity: 1; } 50% { transform: scale(1.08); opacity: 0.85; } 100% { transform: scale(1); opacity: 1; } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-ripple 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }'
  },
  'glow-pulse': {
    keyframes: '@keyframes provider-glow-pulse { 0% { filter: drop-shadow(0 0 2px currentColor); } 100% { filter: drop-shadow(0 0 12px currentColor); } }',
    trigger: 'svg { transition: filter 0.3s ease; } svg:hover { animation: provider-glow-pulse 1.2s ease-in-out infinite alternate; }'
  },
  'neon-flicker': {
    keyframes: '@keyframes provider-neon-flicker { 0%, 100% { filter: drop-shadow(0 0 10px currentColor); opacity: 1; } 45% { opacity: 0.3; filter: none; } 50% { opacity: 0.95; } 85% { opacity: 0.25; } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-neon-flicker 0.8s linear infinite; }'
  },
  breathing: {
    keyframes: '@keyframes provider-pulse { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-pulse 2s ease-in-out infinite alternate; }'
  },
  magnetic: {
    keyframes: '@keyframes provider-magnetic { 0% { transform: translate(0, 0); } 100% { transform: translate(4px, -3px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-magnetic 0.5s ease-out infinite alternate; }'
  },
  'hover-lift': {
    keyframes: '',
    trigger: 'svg { transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); } svg:hover { transform: translateY(-6px); }'
  },
  tilt: {
    keyframes: '',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { transform: rotate(-8deg) scale(1.05); }'
  },
  elastic: {
    keyframes: '@keyframes provider-elastic { 0% { transform: scale(1); } 30% { transform: scale(1.25, 0.75); } 55% { transform: scale(0.85, 1.15); } 75% { transform: scale(1.05, 0.95); } 100% { transform: scale(1); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-elastic 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }'
  },
  warp: {
    keyframes: '@keyframes provider-warp { 0% { transform: skewX(-6deg) skewY(-3deg); } 100% { transform: skewX(6deg) skewY(3deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-warp 1.2s ease-in-out infinite alternate; }'
  },
  stretch: {
    keyframes: '@keyframes provider-stretch { 0% { transform: scaleX(0.8); } 100% { transform: scaleX(1.25); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-stretch 0.6s ease-in-out infinite alternate; }'
  },
  compress: {
    keyframes: '@keyframes provider-compress { 0% { transform: scaleY(0.8); } 100% { transform: scaleY(1.25); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-compress 0.6s ease-in-out infinite alternate; }'
  },
  'slide-left': {
    keyframes: '@keyframes provider-slide-left { 0% { transform: translateX(0); } 100% { transform: translateX(-8px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-slide-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }'
  },
  'slide-right': {
    keyframes: '@keyframes provider-slide-right { 0% { transform: translateX(0); } 100% { transform: translateX(8px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-slide-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }'
  },
  'slide-up': {
    keyframes: '@keyframes provider-slide-up { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }'
  },
  'slide-down': {
    keyframes: '@keyframes provider-slide-down { 0% { transform: translateY(0); } 100% { transform: translateY(8px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-slide-down 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }'
  },
  'drift-float': {
    keyframes: '@keyframes provider-drift-float { 0% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-6px) translateX(4px); } 100% { transform: translateY(0) translateX(0); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-drift-float 2.5s ease-in-out infinite; }'
  },
  orbit: {
    keyframes: '@keyframes provider-orbit { 0% { transform: rotate(0deg) translateX(5px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(5px) rotate(-360deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-orbit 2.5s ease-in-out infinite; }'
  },
  'rotate-3d': {
    keyframes: '@keyframes provider-rotate-3d { 0% { transform: rotateY(0deg) rotateX(0deg); } 100% { transform: rotateY(360deg) rotateX(360deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-rotate-3d 2s linear infinite; }'
  },
  spiral: {
    keyframes: '@keyframes provider-spiral { 0% { transform: rotate(0deg) scale(0.8); } 50% { transform: rotate(180deg) scale(1.15); } 100% { transform: rotate(360deg) scale(0.8); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-spiral 2s ease-in-out infinite; }'
  },
  wave: {
    keyframes: '@keyframes provider-wave { 0% { transform: rotate(-5deg) translateY(-2px); } 100% { transform: rotate(5deg) translateY(2px); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-wave 1s ease-in-out infinite alternate; }'
  },
  pendulum: {
    keyframes: '@keyframes provider-pendulum { 0%, 100% { transform: rotate(-12deg); } 50% { transform: rotate(12deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: top center; } svg:hover { animation: provider-pendulum 1.5s ease-in-out infinite; }'
  },
  roll: {
    keyframes: '@keyframes provider-roll { 0% { transform: translateX(-10px) rotate(-120deg); } 50% { transform: translateX(10px) rotate(120deg); } 100% { transform: translateX(-10px) rotate(-120deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-roll 1.5s ease-in-out infinite; }'
  },
  'swing-3d': {
    keyframes: '@keyframes provider-swing-3d { 0%, 100% { transform: perspective(100px) rotateX(-15deg); } 50% { transform: perspective(100px) rotateX(15deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-swing-3d 1.8s ease-in-out infinite; }'
  },
  boomerang: {
    keyframes: '@keyframes provider-boomerang { 0%, 100% { transform: translate(0, 0) scale(1); } 40% { transform: translate(12px, -8px) scale(0.8) rotate(45deg); } 60% { transform: translate(6px, -4px) scale(0.9); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-boomerang 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }'
  },
  'drift-spin': {
    keyframes: '@keyframes provider-drift { 0% { transform: translateX(-4px); } 100% { transform: translateX(4px); } } @keyframes provider-spin { 100% { transform: rotate(360deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-drift 1.5s ease-in-out infinite alternate, provider-spin 3s linear infinite; }'
  },
  liquid: {
    keyframes: '@keyframes provider-liquid { 0%, 100% { transform: scale(1); } 33% { transform: scale(1.15, 0.85) skewX(-3deg); } 66% { transform: scale(0.85, 1.15) skewY(3deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-liquid 1.2s ease-in-out infinite; }'
  },
  morph: {
    keyframes: '@keyframes provider-morph { 0%, 100% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.1) rotate(180deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-morph 2s ease-in-out infinite; }'
  },
  gooey: {
    keyframes: '@keyframes provider-gooey { 0%, 100% { filter: blur(0px); transform: scale(1); } 50% { filter: blur(1px); transform: scale(1.08) skewY(2deg); } }',
    trigger: 'svg { transition: all 0.3s ease; transform-origin: center; } svg:hover { animation: provider-gooey 1.5s ease-in-out infinite; }'
  },
  'blur-in': {
    keyframes: '@keyframes provider-blur-in { 0% { filter: blur(5px); opacity: 0.3; } 100% { filter: blur(0px); opacity: 1; } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-blur-in 0.6s ease-out forwards; }'
  },
  'blur-out': {
    keyframes: '@keyframes provider-blur-out { 0% { filter: blur(0px); opacity: 1; } 100% { filter: blur(5px); opacity: 0.3; } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-blur-out 0.6s ease-in forwards; }'
  },
  frost: {
    keyframes: '@keyframes provider-frost { 0% { opacity: 0.9; } 100% { opacity: 1; filter: drop-shadow(0 0 5px rgba(255,255,255,0.3)); } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-frost 1s ease-in-out infinite alternate; }'
  },
  hologram: {
    keyframes: '@keyframes provider-hologram { 0%, 100% { opacity: 0.9; filter: hue-rotate(0deg) saturate(1.5); } 30% { opacity: 0.55; } 70% { opacity: 0.85; filter: hue-rotate(90deg) saturate(2); } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-hologram 1.5s linear infinite; }'
  },
  matrix: {
    keyframes: '@keyframes provider-matrix { 0% { filter: drop-shadow(0 0 2px #10B981); opacity: 0.9; } 100% { filter: drop-shadow(0 0 10px #10B981); opacity: 1; } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-matrix 1.2s ease-in-out infinite alternate; }'
  },
  'cyber-pulse': {
    keyframes: '@keyframes provider-cyber-pulse { 0%, 100% { filter: drop-shadow(0 0 1px #8B5CF6); } 50% { filter: drop-shadow(0 0 10px #EC4899); } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-cyber-pulse 1.2s ease-in-out infinite; }'
  },
  vhs: {
    keyframes: '@keyframes provider-vhs { 0% { transform: translate(1px, -1px) skew(-2deg); filter: hue-rotate(0deg); } 50% { transform: translate(-1px, 1px) skew(2deg); filter: hue-rotate(180deg); } 100% { transform: translate(1px, -1px); } }',
    trigger: 'svg { transition: all 0.3s ease; transform-origin: center; } svg:hover { animation: provider-vhs 0.5s steps(2) infinite; }'
  },
  'rgb-split': {
    keyframes: '@keyframes provider-rgb-split { 0% { filter: drop-shadow(-1.5px 0 0 rgba(239,68,68,0.8)) drop-shadow(1.5px 0 0 rgba(59,130,246,0.8)); } 100% { filter: drop-shadow(1.5px -0.5px 0 rgba(239,68,68,0.8)) drop-shadow(-1.5px 0.5px 0 rgba(59,130,246,0.8)); } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-rgb-split 0.4s ease-out infinite alternate; }'
  },
  'static-noise': {
    keyframes: '@keyframes provider-static-noise { 0% { transform: scale(0.98) translate(-1px, 1px); opacity: 0.95; } 50% { transform: scale(1.02) translate(1px, -1px); opacity: 1; } 100% { transform: scale(1); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-static-noise 0.2s steps(2) infinite; }'
  },
  scanline: {
    keyframes: '@keyframes provider-scanline { 0% { filter: drop-shadow(0 -8px 2px currentColor); } 50% { filter: drop-shadow(0 0px 4px currentColor); } 100% { filter: drop-shadow(0 8px 2px currentColor); } }',
    trigger: 'svg { transition: filter 0.3s ease; } svg:hover { animation: provider-scanline 2s linear infinite; }'
  },
  pixelate: {
    keyframes: '@keyframes provider-pixelate { 0% { transform: scale(1); filter: contrast(1); } 50% { transform: scale(1.1) skewX(2deg); filter: contrast(1.5); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-pixelate 1s steps(4) infinite alternate; }'
  },
  distort: {
    keyframes: '@keyframes provider-distort { 0% { transform: scaleY(0.9) skewX(-4deg); } 100% { transform: scaleY(1.1) skewX(4deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-distort 0.6s ease-in-out infinite alternate; }'
  },
  'power-up': {
    keyframes: '@keyframes provider-power-up { 0% { transform: translateY(0) scale(0.9); opacity: 0.8; } 50% { transform: translateY(-4px) scale(1.12); opacity: 1; } 100% { transform: translateY(-8px) scale(1); opacity: 0; } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-power-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }'
  },
  'energy-burst': {
    keyframes: '@keyframes provider-energy-burst { 0% { transform: scale(0.9); filter: brightness(1); } 30% { transform: scale(1.2); filter: brightness(1.8) drop-shadow(0 0 10px currentColor); } 100% { transform: scale(1); filter: brightness(1); } }',
    trigger: 'svg { transition: all 0.3s ease; transform-origin: center; } svg:hover { animation: provider-energy-burst 0.8s cubic-bezier(0.19, 1, 0.22, 1) infinite; }'
  },
  charge: {
    keyframes: '@keyframes provider-charge { 0%, 100% { transform: translate(0,0) scale(1); } 10%, 30%, 50%, 70%, 90% { transform: translate(-1.5px, 1px) scale(1.02); } 20%, 40%, 60%, 80% { transform: translate(1.5px, -1px) scale(1.02); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-charge 1s ease-in-out infinite; }'
  },
  'explosion-pop': {
    keyframes: '@keyframes provider-explosion-pop { 0% { transform: scale(0.8); } 40% { transform: scale(1.22); filter: drop-shadow(0 0 8px currentColor); } 100% { transform: scale(1); } }',
    trigger: 'svg { transition: all 0.3s ease; transform-origin: center; } svg:hover { animation: provider-explosion-pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.5) infinite alternate; }'
  },
  shockwave: {
    keyframes: '@keyframes provider-shockwave { 0% { transform: scale(0.95); filter: drop-shadow(0 0 0 rgba(129, 140, 248, 0.7)); } 50% { filter: drop-shadow(0 0 12px rgba(129, 140, 248, 0)); } 100% { transform: scale(1); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-shockwave 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite; }'
  },
  'turbo-spin': {
    keyframes: '@keyframes provider-spin { 100% { transform: rotate(360deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-spin 0.4s linear infinite; }'
  },
  'combo-bounce': {
    keyframes: '@keyframes provider-bounce { 0% { transform: translateY(0); } 100% { transform: translateY(-5px); } } @keyframes provider-pulse { 0% { transform: scale(1); } 100% { transform: scale(1.15); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-bounce 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) infinite alternate, provider-pulse 0.4s ease-in-out infinite alternate; }'
  },
  dash: {
    keyframes: '@keyframes provider-dash { 0% { transform: translateX(0); } 30% { transform: translateX(-12px) skewX(10deg); } 70% { transform: translateX(12px) skewX(-10deg); } 100% { transform: translateX(0); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-dash 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }'
  },
  impact: {
    keyframes: '@keyframes provider-impact { 0% { transform: scale(1) translateY(-6px); } 40% { transform: scale(1.15, 0.85) translateY(2px); } 100% { transform: scale(1) translateY(0); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-impact 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }'
  },
  slam: {
    keyframes: '@keyframes provider-slam { 0% { transform: translateY(-10px) scale(1); } 50% { transform: translateY(3px) scale(1.15, 0.85); } 100% { transform: translateY(0); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-slam 0.8s cubic-bezier(0.23, 1, 0.32, 1) infinite; }'
  },
  recoil: {
    keyframes: '@keyframes provider-recoil { 0% { transform: translateY(0); } 30% { transform: translateY(4px) scale(1.05, 0.95); } 100% { transform: translateY(-8px) scale(0.95, 1.05); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-recoil 0.8s ease-in-out infinite; }'
  },
  jelly: {
    keyframes: '@keyframes provider-jelly { 0%, 100% { transform: scale(1, 1); } 25% { transform: scale(1.2, 0.8); } 50% { transform: scale(0.85, 1.15); } 75% { transform: scale(1.1, 0.9); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-jelly 0.8s cubic-bezier(0.28, 0.84, 0.42, 1) infinite; }'
  },
  squish: {
    keyframes: '@keyframes provider-squish { 0% { transform: scale(1.2, 0.8); } 100% { transform: scale(0.8, 1.2); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-squish 0.6s ease-in-out infinite alternate; }'
  },
  blob: {
    keyframes: '@keyframes provider-blob { 0%, 100% { transform: scale(1) rotate(0deg); } 33% { transform: scale(1.1, 0.9) skewX(2deg); } 66% { transform: scale(0.9, 1.1) skewY(-2deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-blob 1.5s ease-in-out infinite; }'
  },
  wiggle: {
    keyframes: '@keyframes provider-wiggle { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-wiggle 0.3s ease-in-out infinite; }'
  },
  peek: {
    keyframes: '@keyframes provider-peek { 0% { transform: translateY(8px); } 100% { transform: translateY(0); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-peek 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate; }'
  },
  hop: {
    keyframes: '@keyframes provider-hop { 0%, 100% { transform: translateY(0) scale(1); } 40% { transform: translateY(-6px) scale(1.05, 0.95); } 60% { transform: translateY(-8px); } 80% { transform: translateY(2px) scale(1.1, 0.9); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-hop 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }'
  },
  flutter: {
    keyframes: '@keyframes provider-flutter { 0%, 100% { transform: rotateX(0deg) scale(1); } 50% { transform: rotateX(30deg) scale(0.95); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-flutter 0.4s ease-in-out infinite; }'
  },
  bubble: {
    keyframes: '@keyframes provider-bubble { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-6px) scale(1.06); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-bubble 2s ease-in-out infinite; }'
  },
  'bounce-wave': {
    keyframes: '@keyframes provider-bounce-wave { 0%, 100% { transform: translateY(0); } 25% { transform: translateY(-4px); } 75% { transform: translateY(4px); } }',
    trigger: 'svg { transition: transform 0.3s ease; } svg:hover { animation: provider-bounce-wave 1s ease-in-out infinite; }'
  },
  'cartoon-shake': {
    keyframes: '@keyframes provider-cartoon-shake { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 20% { transform: translate(-2px, 2px) rotate(-4deg); } 40% { transform: translate(2px, -2px) rotate(4deg); } 60% { transform: translate(-2px, -2px) rotate(-2deg); } 80% { transform: translate(2px, 2px) rotate(2deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-cartoon-shake 0.3s ease-in-out infinite; }'
  },
  aurora: {
    keyframes: '@keyframes provider-aurora { 0% { filter: drop-shadow(0 0 3px #3B82F6); } 33% { filter: drop-shadow(0 0 6px #EC4899); } 66% { filter: drop-shadow(0 0 6px #10B981); } 100% { filter: drop-shadow(0 0 3px #3B82F6); } }',
    trigger: 'svg { transition: filter 0.3s ease; } svg:hover { animation: provider-aurora 2.5s linear infinite; }'
  },

  'glass-shine': {
    keyframes: '@keyframes provider-glass-shine { 0% { opacity: 0.85; filter: brightness(1) drop-shadow(0 0 0 currentColor); } 50% { opacity: 1; filter: brightness(1.5) drop-shadow(0 0 8px currentColor); transform: scale(1.05); } 100% { opacity: 0.85; filter: brightness(1) drop-shadow(0 0 0 currentColor); } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-glass-shine 1.5s ease-in-out infinite; }'
  },
  'light-sweep': {
    keyframes: '@keyframes provider-light-sweep { 0% { filter: brightness(1); transform: skewX(0deg); } 50% { filter: brightness(1.6) drop-shadow(0 0 6px currentColor); transform: skewX(-6deg); } 100% { filter: brightness(1); transform: skewX(0deg); } }',
    trigger: 'svg { transition: filter 0.3s ease; } svg:hover { animation: provider-light-sweep 1.8s ease-in-out infinite; }'
  },
  'smooth-orbit': {
    keyframes: '@keyframes provider-smooth-orbit { 0% { transform: rotate(0deg) translate(4px) rotate(0deg); } 100% { transform: rotate(360deg) translate(4px) rotate(-360deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-smooth-orbit 3s linear infinite; }'
  },
  'fade-drift': {
    keyframes: '@keyframes provider-fade-drift { 0% { transform: translateX(-4px); opacity: 0.5; } 100% { transform: translateX(4px); opacity: 1; } }',
    trigger: 'svg { transition: all 0.3s ease; } svg:hover { animation: provider-fade-drift 1.5s ease-in-out infinite; }'
  },
  'soft-pulse': {
    keyframes: '@keyframes provider-soft-pulse { 0% { transform: scale(0.97); } 100% { transform: scale(1.05); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-soft-pulse 1.5s ease-in-out infinite alternate; }'
  },
  'cinematic-zoom': {
    keyframes: '@keyframes provider-cinematic-zoom { 0% { transform: scale(0.96); } 100% { transform: scale(1.08); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: center; } svg:hover { animation: provider-cinematic-zoom 2.5s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate; }'
  },
  'elegant-swing': {
    keyframes: '@keyframes provider-elegant-swing { 0% { transform: rotate(8deg); } 100% { transform: rotate(-8deg); } }',
    trigger: 'svg { transition: transform 0.3s ease; transform-origin: top center; } svg:hover { animation: provider-elegant-swing 2s ease-in-out infinite alternate; }'
  },
};

// Dynamic SVG compiler with injected CSS Keyframes inside style blocks
const getAnimatedSvgString = () => {
  const svgEl = svgSourceContainer.value?.querySelector('svg');
  if (!svgEl) return '';
  
  const clonedSvg = svgEl.cloneNode(true) as SVGElement;
  clonedSvg.setAttribute('width', '100%');
  clonedSvg.setAttribute('height', '100%');
  
  const styleEl = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  const animName = selectedAnimation.value;
  
  let keyframes = '';
  let triggerStyle = '';
  
  const meta = animationMetadata[animName];
  if (meta) {
    keyframes = meta.keyframes;
    triggerStyle = meta.trigger;
  }
  
  styleEl.textContent = `\n    ${triggerStyle}\n    ${keyframes}\n  `;
  clonedSvg.insertBefore(styleEl, clonedSvg.firstChild);
  
  const serializer = new XMLSerializer();
  return serializer.serializeToString(clonedSvg);
};

const updateSvgString = () => {
  animatedSvgCodeString.value = getAnimatedSvgString();
  const svgEl = svgSourceContainer.value?.querySelector('svg');
  if (svgEl) {
    rawSvgString.value = svgEl.outerHTML;
  }
};

const copySvgCode = () => {
  const code = getAnimatedSvgString();
  navigator.clipboard.writeText(code);
  alert('Copied raw animated SVG code block to clipboard successfully!');
};

const downloadSvgFile = () => {
  const code = getAnimatedSvgString();
  const blob = new Blob([code], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${activeIcon.value.name.toLowerCase()}-${selectedAnimation.value}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const download3dObject = async () => {
  if (!activeIcon.value) return;
  
  // Ensure rawSvgString is populated - extract from the 2D preview container
  if (!rawSvgString.value) {
    const svgEl = svgSourceContainer.value?.querySelector('svg');
    if (svgEl) {
      rawSvgString.value = svgEl.outerHTML;
    }
  }
  
  // If still empty, try to get SVG from any visible icon
  if (!rawSvgString.value) {
    await nextTick();
    const anySvg = document.querySelector('.preview-stage-icon svg') || document.querySelector('.ai-motion-icon-wrapper svg');
    if (anySvg) {
      rawSvgString.value = anySvg.outerHTML;
    }
    
    if (!rawSvgString.value) {
      alert('Could not extract SVG data. Please switch to 2D preview first, then try again.');
      return;
    }
  }
  
  try {
    const { SVGLoader } = await import('three/examples/jsm/loaders/SVGLoader.js');
    const { GLTFExporter } = await import('three/examples/jsm/exporters/GLTFExporter.js');
    const THREE = await import('three');
    
    const loader = new SVGLoader();
    const data = loader.parse(rawSvgString.value);
    const scene = new THREE.Scene();
    const group = new THREE.Group();
    
    const colorVal = selectedColor.value === 'currentColor' ? (activeIcon.value.hex || '#818CF8') : selectedColor.value;
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colorVal),
      roughness: 0.2,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    
    const extrudeSettings = { depth: 4, bevelEnabled: true, bevelSegments: 5, steps: 1, bevelSize: 0.6, bevelThickness: 0.6 };
    
    // Mirror the exact same logic as ThreeSvgIcon.vue parseSvg()
    data.paths.forEach((path: any) => {
      const isFill = path.userData?.style?.fill && path.userData.style.fill !== 'none';
      const isStroke = path.userData?.style?.stroke && path.userData.style.stroke !== 'none';
      
      // 1. Process filled geometries as extruded shapes
      if (isFill) {
        const pathShapes = path.toShapes(true);
        pathShapes.forEach((shape: any) => {
          const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        });
      }
      
      // 2. Process stroke paths as thick volumetric 3D tubes (exactly like the preview)
      if (isStroke || (!isFill && path.subPaths.length > 0)) {
        path.subPaths.forEach((subPath: any) => {
          const points2d = subPath.getPoints();
          if (points2d.length >= 2) {
            const points3d = points2d.map((p: any) => new THREE.Vector3(p.x, p.y, 0));
            
            let curve: any;
            if (points3d.length === 2) {
              curve = new THREE.LineCurve3(points3d[0], points3d[1]);
            } else {
              const start = points3d[0];
              const end = points3d[points3d.length - 1];
              const isClosed = start.distanceTo(end) < 0.1;
              curve = new THREE.CatmullRomCurve3(points3d, isClosed);
            }
            
            const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.7, 8, false);
            const tubeMesh = new THREE.Mesh(tubeGeometry, material);
            group.add(tubeMesh);
          }
        });
      }
    });
    
    // Flip and center (match ThreeSvgIcon rotation)
    group.rotation.x = Math.PI;
    const box = new THREE.Box3().setFromObject(group);
    const center = new THREE.Vector3();
    box.getCenter(center);
    group.position.sub(center);
    
    // Normalize scale to standard size
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scale = 5.2 / maxDim;
      group.scale.set(scale, scale, scale);
    }
    
    scene.add(group);
    
    const exporter = new GLTFExporter();
    const glb = await exporter.parseAsync(scene, { binary: true });
    const blob = new Blob([glb as ArrayBuffer], { type: 'model/gltf-binary' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeIcon.value.name.toLowerCase()}-3d.glb`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Error exporting 3D object:', err);
    alert('Failed to export 3D object. Check the console for details.');
  }
};

const copyText = (txt: string) => {
  navigator.clipboard.writeText(txt);
  alert('Copied code block successfully!');
};

watch(selectedAnimation, () => {
  if (isModalOpen.value) {
    nextTick(() => {
      updateSvgString();
    });
  }
});

watch(selectedColor, () => {
  if (isModalOpen.value) {
    nextTick(() => {
      updateSvgString();
    });
  }
});

const getCategoryCount = (cat: string) => {
  let list = allIcons.value;
  if (selectedLibrary.value !== 'All') {
    list = list.filter(i => i.library === selectedLibrary.value);
  }
  if (cat === 'All') return list.length;
  return list.filter(i => i.category === cat).length;
};

const getSubCategoriesFor = (cat: string) => {
  const subs = new Set<string>();
  allIcons.value.forEach(i => {
    if (i.category === cat && i.subCategory && !i.subCategory.startsWith('Other ')) {
      subs.add(i.subCategory);
    }
  });
  const subArr = Array.from(subs).sort();
  // Add 'Other XYZ' at the end if it exists
  const otherName = cat === 'Brand Logos' ? 'Other Brands' : `Other ${cat}`;
  const hasOther = allIcons.value.some(i => i.category === cat && i.subCategory === otherName);
  if (hasOther) {
    subArr.push(otherName);
  }
  
  if (subArr.length === 1 && subArr[0] === otherName) {
    return [];
  }
  
  return subArr;
};

const getSubCategoryCount = (cat: string, sub: string) => {
  let list = allIcons.value;
  if (selectedLibrary.value !== 'All') {
    list = list.filter(i => i.library === selectedLibrary.value);
  }
  return list.filter(i => i.category === cat && i.subCategory === sub).length;
};

const filteredSet = computed(() => {
  let result = allIcons.value;
  
  if (selectedLibrary.value !== 'All') {
    result = result.filter(i => i.library === selectedLibrary.value);
  }
  if (selectedCategory.value !== 'All') {
    result = result.filter(i => i.category === selectedCategory.value);
  }
  if (selectedSubCategory.value) {
    result = result.filter(i => i.subCategory === selectedSubCategory.value);
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

watch([searchQuery, selectedLibrary, selectedCategory, selectedSubCategory], () => {
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

.sub-category-list {
  list-style: none;
  padding: 0 0 0 1rem;
  margin: 0.2rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-left: 2px solid rgba(129, 140, 248, 0.2);
}

.sub-category-list li {
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  opacity: 0.6;
}

.sub-category-list li:hover {
  background: rgba(129, 140, 248, 0.1);
  opacity: 1;
}

.sub-category-list li.active {
  background: rgba(129, 140, 248, 0.2);
  color: var(--text-color);
  opacity: 1;
  font-weight: 600;
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
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
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
  color: #4f46e5;
}

:root[data-theme="dark"] .library-tabs button.active {
  color: #a5b4fc;
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

.animation-search-selector {
  position: relative;
  width: 260px;
  text-align: left;
}

.selector-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-color);
  cursor: pointer;
  font-size: 1rem;
  user-select: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.selector-trigger:hover {
  border-color: #818cf8;
}

.trigger-label {
  opacity: 0.6;
  font-weight: 500;
  font-size: 0.9rem;
}

.trigger-value {
  font-weight: 600;
  flex-grow: 1;
}

.trigger-arrow {
  opacity: 0.7;
  transition: transform 0.2s ease;
}

.trigger-arrow.open {
  transform: rotate(180deg);
}

.selector-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 100;
  width: 100%;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  backdrop-filter: blur(16px);
}

.anim-search-input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 0.9rem;
  outline: none;
}

.anim-search-input:focus {
  border-color: #818cf8;
}

.anim-options-list {
  max-height: 250px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-right: 2px;
}

.anim-options-list::-webkit-scrollbar {
  width: 6px;
}

.anim-options-list::-webkit-scrollbar-track {
  background: transparent;
}

.anim-options-list::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.anim-option {
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.anim-option:hover {
  background: rgba(129, 140, 248, 0.1);
  color: #818cf8;
}

.anim-option.active {
  background: #818cf8;
  color: #ffffff;
}

.no-anim-results {
  padding: 1rem;
  text-align: center;
  color: var(--text-color);
  opacity: 0.5;
  font-size: 0.85rem;
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

.clickable-card {
  cursor: pointer;
}

.icon-card :deep(svg) {
  max-width: 100%;
  height: auto;
}

.icon-card:hover {
  border-color: #818CF8;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

.icon-alias-badge {
  font-size: 0.55rem;
  font-family: monospace;
  background: rgba(129, 140, 248, 0.15);
  color: #818CF8;
  padding: 2px 6px;
  border-radius: 4px;
  margin-top: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.icon-alias-badge:hover {
  background: rgba(129, 140, 248, 0.3);
  transform: scale(1.05);
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

/* Beautiful Glassmorphic Modal Layout Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.25s ease;
}

:root[data-theme="dark"] .modal-overlay {
  background: rgba(0, 0, 0, 0.85);
}

.modal-container {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  max-width: 1100px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
  padding: 2rem;
  animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: var(--text-color);
  backdrop-filter: blur(8px);
}

:root[data-theme="dark"] .modal-container {
  background: rgba(15, 17, 26, 0.95);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-color);
  margin: 0;
}

.modal-subtitle {
  font-size: 0.8rem;
  color: var(--text-color);
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
  display: inline-block;
}

.modal-close-btn {
  background: transparent;
  border: none;
  color: var(--text-color);
  opacity: 0.5;
  font-size: 1.25rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.modal-close-btn:hover {
  opacity: 1;
}

.modal-body-grid {
  display: grid;
  grid-template-columns: 480px 1fr;
  gap: 2rem;
}

/* Modal Stage Preview Area */
.modal-preview-stage {
  background: rgba(15, 23, 42, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 480px;
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
}

:root[data-theme="dark"] .modal-preview-stage {
  background: rgba(255, 255, 255, 0.02);
}

.stage-bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}

:root[data-theme="dark"] .stage-bg-grid {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
}

.preview-mode-tabs {
  display: flex;
  background: var(--bg-color);
  padding: 4px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  margin-bottom: 1.5rem;
  z-index: 10;
  width: 100%;
}

.mode-tab-btn {
  flex: 1;
  padding: 6px 12px;
  border-radius: 7px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  border: none;
  color: var(--text-color);
  opacity: 0.7;
  transition: all 0.2s ease;
}

.mode-tab-btn:hover {
  opacity: 1;
}

.mode-tab-btn.active {
  background: var(--card-bg);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  opacity: 1;
  color: #818cf8;
}

.preview-stage-icon {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: transform 0.2s ease;
}

.preview-stage-3d {
  width: 100%;
  flex-grow: 1;
  min-height: 340px;
  border-radius: 12px;
  overflow: hidden;
  z-index: 5;
  border: 1px solid var(--border-color);
}

.preview-caption {
  font-size: 0.7rem;
  color: var(--text-color);
  opacity: 0.5;
  margin-top: 1.5rem;
  z-index: 2;
}

.preview-caption code {
  color: #4f46e5;
  font-weight: 600;
}

:root[data-theme="dark"] .preview-caption code {
  color: #818cf8;
}

/* Modal Export Tabs and Forms */
.modal-export-center {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.modal-tabs {
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.modal-tabs button {
  background: transparent;
  border: none;
  color: var(--text-color);
  opacity: 0.5;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  padding-bottom: 0.5rem;
  position: relative;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}

.modal-tabs button:hover {
  opacity: 0.8;
}

.modal-tabs button.active {
  opacity: 1;
}

.modal-tabs button.active::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background: #818cf8;
}

.tab-pane {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tab-description {
  font-size: 0.8rem;
  opacity: 0.6;
  line-height: 1.5;
  margin: 0;
  color: var(--text-color);
}

.code-section {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.code-label {
  font-size: 0.75rem;
  font-weight: 700;
  opacity: 0.4;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-color);
}

.code-wrapper {
  background: rgba(15, 23, 42, 0.04);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.78rem;
  color: #4F46E5;
  word-break: break-all;
}

.code-wrapper code {
  flex: 1;
  min-width: 0;
}

:root[data-theme="dark"] .code-wrapper {
  background: rgba(0, 0, 0, 0.3);
  color: #a5b4fc;
}

.code-wrapper.pre-scrollable {
  flex-direction: column;
  align-items: stretch;
  gap: 0.5rem;
  max-height: 180px;
  overflow-y: auto;
  position: relative;
}

.code-wrapper.pre-scrollable pre {
  margin: 0;
  padding: 0;
  width: 100%;
}

.code-wrapper.pre-scrollable .copy-btn {
  position: sticky;
  bottom: 0;
  align-self: flex-end;
  margin-top: 0.5rem;
}

.copy-btn {
  background: rgba(129, 140, 248, 0.15);
  border: 1px solid rgba(129, 140, 248, 0.3);
  color: #818cf8;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: #818cf8;
  color: #fff;
}

.action-row {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.export-divider {
  height: 1px;
  background: var(--border-color);
  margin: 0.5rem 0;
  opacity: 0.6;
}

.action-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.9rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.copy-svg-action-btn {
  background: transparent;
  border: 1.5px solid #818cf8;
  color: #818cf8;
}

.copy-svg-action-btn:hover {
  background: rgba(129, 140, 248, 0.1);
}

.download-btn {
  background: #818cf8;
  border: 1.5px solid #818cf8;
  color: #fff;
}

.download-btn:hover {
  background: #6366f1;
  border-color: #6366f1;
}

.hidden-svg-source {
  display: none;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleUp {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Responsive modal rules — Tablet */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }
  .modal-container {
    max-width: 100%;
    padding: 1.5rem;
    max-height: 95vh;
    overflow-y: auto;
    border-radius: 16px;
  }
  .modal-body-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .modal-preview-stage {
    min-height: 280px;
  }
  .preview-stage-3d {
    min-height: 240px;
  }
  .modal-tabs {
    gap: 0.5rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .modal-tabs::-webkit-scrollbar {
    display: none;
  }
  .modal-tabs button {
    font-size: 0.8rem;
    flex-shrink: 0;
  }
  .code-wrapper {
    font-size: 0.7rem;
  }
  .code-wrapper code {
    overflow-x: auto;
    word-break: break-all;
  }
  .action-btn {
    font-size: 0.85rem;
    padding: 0.75rem;
  }
  .preview-mode-tabs {
    margin-bottom: 1rem;
  }
  .mode-tab-btn {
    font-size: 0.7rem;
    padding: 5px 8px;
  }
}

/* Responsive modal rules — Mobile Fullscreen */
@media (max-width: 600px) {
  .modal-overlay {
    padding: 0;
    align-items: stretch;
  }
  .modal-container {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    padding: 1rem;
    overflow-y: auto;
    animation: none;
  }
  .modal-header {
    padding-bottom: 0.75rem;
    position: sticky;
    top: 0;
    background: inherit;
    z-index: 10;
  }
  .modal-title {
    font-size: 1.15rem;
  }
  .modal-subtitle {
    font-size: 0.7rem;
  }
  .modal-body-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .modal-preview-stage {
    min-height: 220px;
    padding: 1rem;
    border-radius: 12px;
  }
  .preview-stage-3d {
    min-height: 200px;
    border-radius: 10px;
  }
  .preview-mode-tabs {
    margin-bottom: 0.75rem;
  }
  .mode-tab-btn {
    font-size: 0.65rem;
    padding: 5px 6px;
  }
  .modal-tabs {
    gap: 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    flex-wrap: nowrap;
  }
  .modal-tabs::-webkit-scrollbar {
    display: none;
  }
  .modal-tabs button {
    font-size: 0.75rem;
    padding-bottom: 0.4rem;
    flex-shrink: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .code-wrapper {
    font-size: 0.65rem;
    padding: 0.6rem 0.75rem;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
  .code-wrapper code {
    word-break: break-all;
    overflow-wrap: anywhere;
    line-height: 1.5;
  }
  .copy-btn {
    align-self: flex-end;
    flex-shrink: 0;
  }
  .code-label {
    font-size: 0.7rem;
  }
  .tab-description {
    font-size: 0.75rem;
  }
  .action-btn {
    font-size: 0.8rem;
    padding: 0.7rem;
    border-radius: 8px;
  }
  .preview-caption {
    font-size: 0.6rem;
    margin-top: 0.75rem;
  }
  .modal-export-center {
    gap: 1rem;
  }
  .export-divider {
    margin: 0.25rem 0;
  }
}

.mobile-select-wrapper {
  display: none;
}

.mobile-select {
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  font-size: 1rem;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  appearance: auto;
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
  
  .category-mobile {
    display: block;
    margin-bottom: 1rem;
  }
  .category-list {
    display: none;
  }

  .library-mobile {
    display: block;
    margin-bottom: 1rem;
  }
  .library-tabs {
    display: none;
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

