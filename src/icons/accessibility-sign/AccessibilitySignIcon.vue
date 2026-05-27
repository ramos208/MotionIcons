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
      <path d="M11.5 12.5L18.5 12L17 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5 12.5L16 7.5L12.5 5L10 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 6.5C17.3954 6.5 16.5 5.60457 16.5 4.5C16.5 3.39543 17.3954 2.5 18.5 2.5C19.6046 2.5 20.5 3.39543 20.5 4.5C20.5 5.60457 19.6046 6.5 18.5 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.49951 12.5C6.33526 11.8721 7.37418 11.5 8.5 11.5C11.2614 11.5 13.5 13.7386 13.5 16.5C13.5 17.2111 13.3516 17.8875 13.084 18.5M3.7289 15C3.58018 15.4735 3.5 15.9774 3.5 16.5C3.5 19.2614 5.73858 21.5 8.5 21.5C9.41072 21.5 10.2646 21.2565 11 20.8311" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: accessibility-sign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for accessibility-sign (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-accessibility-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-accessibility-sign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-accessibility-sign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-accessibility-sign 3s ease-in-out infinite alternate;
}
</style>