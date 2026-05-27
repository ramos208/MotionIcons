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
      <path d="M12 0C5.333 0 0 5.333 0 12s5.333 12 12 12 12-5.333 12-12S18.667 0 12 0m-1.599 6.401h.531c1.6 0 3.067.8 3.867 2.133C15.2 8.4 15.6 8.4 16 8.4c.533 0 1.066 0 1.599.133.933.267 1.867.667 2.667 1.2a7.8 7.8 0 0 0-2.532-.4c-1.6 0-2.933.533-3.867 1.867a6.9 6.9 0 0 0-1.466 4.265c0 2-.534 3.868-1.734 5.602-.4.533-.668.933-1.068 1.333-4-.933-7.067-4-8-8l4.667-3.068v-.4C6.266 8.532 8 6.667 10.4 6.4m2.266 1.466a.667.667 0 0 0-.667.667.667.667 0 0 0 .667.667.667.667 0 0 0 .666-.667.667.667 0 0 0-.666-.667"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cinny
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cinny (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cinny {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cinny {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cinny 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cinny 3s ease-in-out infinite alternate;
}
</style>