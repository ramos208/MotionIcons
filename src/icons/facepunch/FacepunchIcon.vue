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
      <path d="M12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.388 12-12S18.629 0 12 0zm0 21.314c-5.133 0-9.297-4.164-9.297-9.297S6.867 2.72 12 2.72s9.297 4.164 9.297 9.297-4.164 9.297-9.297 9.297zM10.028 12l1.48 1.479-1.922 1.92-1.478-1.478-1.428 1.444-1.92-1.92L6.203 12l-1.377-1.377 1.92-1.904 1.36 1.377 1.411-1.41 1.921 1.903L10.03 12zm9.162-1.462-1.411 1.411 1.479 1.479-1.92 1.904-1.48-1.48-1.444 1.446-1.904-1.921 1.445-1.428-1.377-1.377 1.904-1.92 1.376 1.376 1.411-1.41 1.92 1.92z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: facepunch
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for facepunch (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-facepunch {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-facepunch {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-facepunch 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-facepunch 3s ease-in-out infinite alternate;
}
</style>