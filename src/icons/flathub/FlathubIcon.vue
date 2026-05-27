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
      <path d="M6.068 0a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 5.998-6 6 6 0 0 0-5.998-6Zm9.15.08a1.656 1.656 0 0 0-1.654 1.656v8.15a1.656 1.656 0 0 0 2.483 1.434l7.058-4.074a1.656 1.656 0 0 0 0-2.869l-1.044-.604-6.014-3.47a1.656 1.656 0 0 0-.828-.223Zm3.575 13.135a.815.815 0 0 0-.816.818v2.453h-2.454a.817.817 0 1 0 0 1.635h2.454v2.453a.817.817 0 1 0 1.635 0v-2.453h2.452a.817.817 0 1 0 0-1.635h-2.453v-2.453a.817.817 0 0 0-.818-.818zM2.865 13.5a2.794 2.794 0 0 0-2.799 2.8v4.9c0 1.55 1.248 2.8 2.8 2.8h4.9c1.55 0 2.8-1.25 2.8-2.8v-4.9c0-1.55-1.25-2.8-2.8-2.8Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: flathub
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for flathub (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-flathub {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-flathub {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-flathub 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-flathub 3s ease-in-out infinite alternate;
}
</style>