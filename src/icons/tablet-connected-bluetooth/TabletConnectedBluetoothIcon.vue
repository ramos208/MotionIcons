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
      <path d="M17.3559 12.0514L20.1247 13.9617C20.7073 14.3635 20.9986 14.5645 21 14.8311C21.0014 15.0977 20.7123 15.3009 20.1341 15.7072L19.5576 16.1123C18.6051 16.7815 18.1289 17.1162 17.7424 16.9635C17.3559 16.8109 17.3559 16.2882 17.3559 15.2427V12.0514ZM17.3559 12.0514L17.2813 12M17.3559 12.0514V11.9486M17.2813 12L14 9.73627M17.2813 12L17.3559 11.9486M17.2813 12L14 14.2637M17.3559 11.9486L20.1247 10.0383C20.7073 9.63646 20.9986 9.43551 21 9.16889C21.0014 8.90227 20.7123 8.69912 20.1341 8.29281L19.5576 7.88774C18.6051 7.21847 18.1289 6.88383 17.7424 7.03647C17.3559 7.18911 17.3559 7.71182 17.3559 8.75726V11.9486Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 19.682C19.6595 21 17.5021 21 13.1873 21H11.1532C6.83834 21 4.68091 21 3.34046 19.682C2 18.364 2 16.2426 2 12C2 7.75736 2 5.63604 3.34046 4.31802C4.68091 3 6.83834 3 11.1532 3H13.1873C17.5021 3 19.6595 3 21 4.31802" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.5 3.5V20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tablet-connected-bluetooth
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tablet-connected-bluetooth (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tablet-connected-bluetooth {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tablet-connected-bluetooth {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tablet-connected-bluetooth 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tablet-connected-bluetooth 3s ease-in-out infinite alternate;
}
</style>