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
      <path d="M18 21C18 19.2468 17.6992 17.5639 17.1465 16M3 6C5.13331 6 7.16261 6.44534 9 7.24813" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 21C11 16.5817 7.41828 13 3 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.75 20.5H3.5M4 20.5C4 20.7761 3.77614 21 3.5 21C3.22386 21 3 20.7761 3 20.5C3 20.2239 3.22386 20 3.5 20C3.77614 20 4 20.2239 4 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 7V5C15 3.89543 15.8954 3 17 3C18.1046 3 19 3.89543 19 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.5 7H15.5C14.5654 7 14.0981 7 13.75 7.20096C13.522 7.33261 13.3326 7.52197 13.201 7.75C13 8.09808 13 8.56538 13 9.5C13 10.4346 13 10.9019 13.201 11.25C13.3326 11.478 13.522 11.6674 13.75 11.799C14.0981 12 14.5654 12 15.5 12H18.5C19.4346 12 19.9019 12 20.25 11.799C20.478 11.6674 20.6674 11.478 20.799 11.25C21 10.9019 21 10.4346 21 9.5C21 8.56538 21 8.09808 20.799 7.75C20.6674 7.52197 20.478 7.33261 20.25 7.20096C19.9019 7 19.4346 7 18.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rss-locked
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rss-locked (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rss-locked {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rss-locked {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rss-locked 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rss-locked 3s ease-in-out infinite alternate;
}
</style>