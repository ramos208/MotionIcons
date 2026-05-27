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
      <path d="M14.201.028a.505.505 0 0 1 .643.313c.04.11.043.23.006.341l-2.258 6.356a.512.512 0 0 1-.319.302L1 11.168l2.665-7.33a.513.513 0 0 1 .319-.302L14.2.028h.001ZM1 11.757l2.776 4.05a.55.55 0 0 0 .622.227l5.12-1.892a.483.483 0 0 0 .29-.653l-.03-.063L7.412 9.62 1 11.756Zm8.799 12.215a.505.505 0 0 1-.643-.312.517.517 0 0 1-.006-.342l2.235-6.365a.513.513 0 0 1 .319-.3L23 12.832l-2.665 7.33a.51.51 0 0 1-.318.3l-10.218 3.51v-.001ZM20.437 8.079a.55.55 0 0 0-.622-.226l-5.12 1.893a.483.483 0 0 0-.29.65l.03.064 2.336 3.85 6.215-2.12-2.55-4.11h.001Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: servbay
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for servbay (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-servbay {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-servbay {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-servbay 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-servbay 3s ease-in-out infinite alternate;
}
</style>