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
      <path d="M16.99 12.167c0-4.808 1.779-7.84 3.903-8.16C18.769 1.397 15.221 0 11.999 0 8.451 0 5.265 1.54 3.07 3.985c2.094.416 2.806 2.174 2.806 4.892H3.314c0-1.605-.334-2.436-1.284-2.436-.427 0-.758.217-.954.587-.027.06-.057.122-.084.184a2.115 2.115 0 0 0-.114.71c0 3.324 5.46 3.159 5.46 8.27 0 1.995-1.53 3.855-3.252 3.855C5.35 22.52 8.441 24 12 24c3.46 0 6.577-1.464 8.766-3.808-2.018-.509-3.776-3.413-3.776-8.025zm-1.142 7.921h-2.746V13.26h-2.967v6.83H7.384V4.327h2.746v6.348h2.972V4.327h2.746v15.761zM2.372 17.58c-1.32 0-2.399-2.32-2.372-5.8 1.905 1.72 3.681 2.11 3.681 4.145 0 .981-.543 1.655-1.309 1.655zM24 12.002c0 2.844-.896 5.409-2.1 5.409-1.445 0-2.181-2.703-2.181-5.498 0-2.654.771-5.308 2.181-5.308 1.676 0 2.1 4.102 2.1 5.397z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: showtime
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for showtime (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-showtime {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-showtime {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-showtime 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-showtime 3s ease-in-out infinite alternate;
}
</style>