<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-radar']"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      :stroke-width="strokeWidth" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-geometry anim-ambient-floating"
    >
      <path d="M21.474 0H2.526C1.131 0 0 1.18 0 2.637v18.726C0 22.819 1.131 24 2.526 24h18.948C22.869 24 24 22.82 24 21.363V2.637C24 1.181 22.869 0 21.474 0zm-11.01 5.388c.397-.405.888-.607 1.474-.607.57 0 1.052.202 1.448.607.397.404.595.896.595 1.476s-.198 1.072-.595 1.476c-.396.405-.879.607-1.448.607-.586 0-1.077-.202-1.474-.607-.396-.404-.594-.896-.594-1.476s.198-1.072.594-1.476zm3.13 11.49a4.887 4.887 0 0 1-2.018 2.136c-.483.281-.879.273-1.19-.026-.292-.281-.206-.615.26-1.002.258-.193.473-.44.646-.738.172-.299.284-.607.336-.923.017-.14-.043-.21-.181-.21-.345-.018-.698-.212-1.06-.581-.362-.37-.543-.826-.543-1.37 0-.58.198-1.073.594-1.477a2.024 2.024 0 0 1 1.5-.633c.552 0 1.034.21 1.448.633.414.404.655.86.724 1.37.138.95-.034 1.89-.517 2.822z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tldraw
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tldraw (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

defineProps({
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
});
</script>

<style scoped>
.ai-motion-icon-wrapper {
  position: relative;
  display: inline-flex;
  cursor: pointer;
}

.anim-ambient-floating {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-tldraw {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tldraw {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tldraw 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tldraw 3s ease-in-out infinite alternate;
}
</style>