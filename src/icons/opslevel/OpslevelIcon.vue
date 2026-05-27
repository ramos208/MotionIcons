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
      <path d="M21.246 4.86 13.527.411a3.074 3.074 0 0 0-3.071 0l-2.34 1.344v6.209l3.104-1.793a1.515 1.515 0 0 1 1.544 0l3.884 2.241c.482.282.764.78.764 1.328v4.482a1.54 1.54 0 0 1-.764 1.328l-3.884 2.241V24l8.482-4.897a3.082 3.082 0 0 0 1.544-2.656V7.532a3.054 3.054 0 0 0-1.544-2.672ZM6.588 14.222V2.652L2.754 4.876A3.082 3.082 0 0 0 1.21 7.532v8.915c0 1.095.581 2.108 1.544 2.656L11.236 24v-6.209L7.352 15.55a1.525 1.525 0 0 1-.764-1.328Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: opslevel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for opslevel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-opslevel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-opslevel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-opslevel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-opslevel 3s ease-in-out infinite alternate;
}
</style>