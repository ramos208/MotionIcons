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
      <path d="M20.045 18.818h3.546A.41.41 0 0 0 24 18.41v-3.545a.41.41 0 0 0-.41-.41h-3.545a.41.41 0 0 0-.409.41v3.545c0 .226.184.41.41.41zM13.8 12.11a.095.095 0 0 1-.163-.068V5.591a.41.41 0 0 0-.409-.41H10.59a.545.545 0 0 0-.385.16L.16 15.387a.545.545 0 0 0-.16.385v2.638c0 .226.183.41.41.41h2.637a.547.547 0 0 0 .385-.16l6.769-6.769a.096.096 0 0 1 .163.068v6.451c0 .226.183.41.409.41h2.638a.547.547 0 0 0 .385-.16L23.84 8.613A.545.545 0 0 0 24 8.23V5.59a.41.41 0 0 0-.41-.41h-2.637a.546.546 0 0 0-.386.16z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: meizu
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for meizu (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-meizu {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-meizu {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-meizu 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-meizu 3s ease-in-out infinite alternate;
}
</style>