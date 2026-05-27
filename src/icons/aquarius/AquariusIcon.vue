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
      <path d="M401.7 291.4c9-4.5 19.6-4.5 28.6 0l128 64c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L416 355.8 302.3 412.6c-9 4.5-19.6 4.5-28.6 0L160 355.8 46.3 412.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l128-64c9-4.5 19.6-4.5 28.6 0L288 348.2 401.7 291.4zm3.4-193.5c8.2-3 17.3-2.5 25.2 1.5l128 64c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L416 163.8 302.3 220.6c-9 4.5-19.6 4.5-28.6 0L160 163.8 46.3 220.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9l128-64 3.4-1.5c8.2-3 17.3-2.5 25.2 1.5l113.7 56.8 113.7-56.8 3.4-1.5z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: aquarius
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for aquarius (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-aquarius {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-aquarius {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-aquarius 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-aquarius 3s ease-in-out infinite alternate;
}
</style>