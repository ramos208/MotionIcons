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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M3 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M19 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M19 7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11 3a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M11 21a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12 21l-8 -4v-10l8 -4l8 4v10l-8 4"/><path d="M9.1 15a2.1 2.1 0 0 1 -.648 -4.098c.282 -1.648 1.319 -2.902 3.048 -2.902c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 0 1 .202 4.19l-.202 .01h-5.8"/><path d="M4 7l4.323 2.702"/><path d="M16.413 14.758l3.587 2.242"/><path d="M4 17l3.529 -2.206"/><path d="M14.609 10.37l5.391 -3.37"/><path d="M12 3v5"/><path d="M12 15v6"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-storj
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brand-storj (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-storj {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-storj {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-storj 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brand-storj 3s ease-in-out infinite alternate;
}
</style>