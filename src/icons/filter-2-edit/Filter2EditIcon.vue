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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16"/><path d="M6 12h11"/><path d="M9 18h2"/><path d="M18.42 15.61c.195 -.195 .426 -.35 .681 -.455c.255 -.106 .528 -.16 .804 -.16c.276 0 .549 .054 .804 .16c.255 .106 .486 .26 .681 .455c.195 .195 .35 .427 .455 .681c.106 .255 .16 .528 .16 .804c0 .276 -.054 .549 -.16 .804c-.105 .255 -.26 .486 -.455 .681l-3.39 3.42h-3v-3l3.42 -3.39"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: filter-2-edit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for filter-2-edit (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-filter-2-edit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-filter-2-edit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-filter-2-edit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-filter-2-edit 3s ease-in-out infinite alternate;
}
</style>