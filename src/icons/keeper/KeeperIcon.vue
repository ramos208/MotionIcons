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
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.365 1.788 1.854.472v2.597l2.073-1.704 1.537 1.135-3.949 3.247-1.515-.008zm-9.067 15.54L2.445 15.75V8.7L4.298 7zm3.631 2.22L6.076 21.16V3l1.853 1.614zm9.363 1.555-2.073-1.705v2.597l-1.854.473v-5.74l1.515-.007 3.95 3.246zm2.733-2.473-4.604-3.674h-3.826v7.512H9.742v-9.365h6.329l5.11 4.078zm2.62-8.329-2.059 1.7 2.059 1.698-1.181 1.431L17.67 12l3.793-3.13zm-6.574.6H9.742V1.534h1.853v7.512h3.826l4.604-3.674 1.156 1.449z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: keeper
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for keeper (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-keeper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-keeper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-keeper 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-keeper 3s ease-in-out infinite alternate;
}
</style>