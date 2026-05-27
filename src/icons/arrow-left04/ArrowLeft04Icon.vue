<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M10 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.41418 13.6026L6.38061 14.3639C7.94641 15.5974 8.72931 16.2141 9.36467 15.9328C10 15.6515 10 14.6881 10 12.7613V11.2387C10 9.31191 10 8.34853 9.36467 8.06721C8.72931 7.7859 7.94641 8.40264 6.38062 9.63612L5.41418 10.3974C4.47141 11.1401 4.00003 11.5115 4.00003 12C4.00003 12.4885 4.47141 12.8599 5.41418 13.6026Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-left04
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for arrow-left04 (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-arrow-left04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-left04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-left04 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-arrow-left04 3s ease-in-out infinite alternate;
}
</style>