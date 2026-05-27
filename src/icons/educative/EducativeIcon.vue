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
      <path d="M20 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 3.998 4h16A4 4 0 0 0 24 20V4a4 4 0 0 0-4-4ZM5.397 19.576l-1.828-1.673a.316.316 0 0 1-.018-.445l4.004-4.376a.314.314 0 0 0 .009-.415L3.82 8.217a.315.315 0 0 1 .038-.443l1.893-1.595a.315.315 0 0 1 .443.038l5.495 6.537a.316.316 0 0 1-.008.417L5.84 19.559a.315.315 0 0 1-.442.018zm15.147-.102c0 .174-.141.315-.315.315H11.74a.315.315 0 0 1-.314-.315v-2.332c0-.174.14-.315.314-.315h8.488c.174 0 .315.14.315.315z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: educative
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for educative (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-educative {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-educative {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-educative 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-educative 3s ease-in-out infinite alternate;
}
</style>