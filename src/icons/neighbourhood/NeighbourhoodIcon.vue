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
      <path d="M11 21H4C2.89543 21 2 20.1046 2 19V14.4599C2 13.7605 2.36531 13.1119 2.9634 12.7495L6.4634 10.6282C7.10053 10.2421 7.89947 10.2421 8.5366 10.6282L12.0366 12.7495C12.6347 13.1119 13 13.7605 13 14.4599V19C13 20.1046 12.1046 21 11 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 10V6.45985C6.5 5.76049 6.86531 5.11193 7.4634 4.74946L10.9634 2.62824C11.6005 2.24211 12.3995 2.24211 13.0366 2.62824L16.5366 4.74946C17.1347 5.11194 17.5 5.76049 17.5 6.45985V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 21H20C21.1046 21 22 20.1046 22 19V14.4599C22 13.7605 21.6347 13.1119 21.0366 12.7495L17.5314 10.6251C16.897 10.2406 16.1019 10.2389 15.4658 10.6205L14.8334 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 21V17.6C9 17.2686 8.73137 17 8.4 17L6.6 17C6.26863 17 6 17.2686 6 17.6V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 21V17.6C18 17.2686 17.7314 17 17.4 17L16 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: neighbourhood
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for neighbourhood (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-neighbourhood {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-neighbourhood {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-neighbourhood 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-neighbourhood 3s ease-in-out infinite alternate;
}
</style>