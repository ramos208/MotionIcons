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
      <path d="M8 17C7.72386 17 7.5 16.7761 7.5 16.5C7.5 16.2239 7.72386 16 8 16C8.27614 16 8.5 16.2239 8.5 16.5C8.5 16.7761 8.27614 17 8 17Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17C11.7239 17 11.5 16.7761 11.5 16.5C11.5 16.2239 11.7239 16 12 16C12.2761 16 12.5 16.2239 12.5 16.5C12.5 16.7761 12.2761 17 12 17Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 17C15.7239 17 15.5 16.7761 15.5 16.5C15.5 16.2239 15.7239 16 16 16C16.2761 16 16.5 16.2239 16.5 16.5C16.5 16.7761 16.2761 17 16 17Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21H3C2.44772 21 2 20.5523 2 20L2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17.5L4 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 17.5L20 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mac-dock
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mac-dock (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mac-dock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mac-dock {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mac-dock 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mac-dock 3s ease-in-out infinite alternate;
}
</style>