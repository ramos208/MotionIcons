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
      <path d="M8.72123 5.60945C8.1621 4.61908 7.88253 4.1239 8.04661 3.67371C8.21068 3.22353 8.73892 3.0364 9.7954 2.66213L10.695 2.34346C11.3413 2.11449 11.6645 2 12 2C12.3355 2 12.6587 2.11449 13.305 2.34346L14.2046 2.66213C15.2611 3.0364 15.7893 3.22353 15.9534 3.67371C16.1175 4.1239 15.8379 4.61908 15.2788 5.60945L14.7626 6.52365C14.4979 6.99256 14.3655 7.22701 14.1339 7.41087C13.9022 7.59473 13.6875 7.65614 13.2581 7.77895C12.8467 7.89659 12.3777 8 12 8C11.6223 8 11.1533 7.89659 10.7419 7.77895C10.3125 7.65614 10.0978 7.59473 9.86612 7.41087C9.63445 7.22701 9.50209 6.99256 9.23735 6.52365L8.72123 5.60945Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.0793 8L8.42064 15.1438C8.06093 16.6931 7.88108 17.4677 8.08657 18.1961C8.09058 18.2103 8.09469 18.2245 8.09891 18.2386C8.31533 18.9638 8.88063 19.5172 10.0112 20.6238C10.9439 21.5368 11.4103 21.9933 11.9837 21.9999C11.9946 22 12.0054 22 12.0163 21.9999C12.5897 21.9933 13.0561 21.5368 13.9888 20.6238C15.1194 19.5172 15.6847 18.9638 15.9011 18.2386C15.9053 18.2245 15.9094 18.2103 15.9134 18.1961C16.1189 17.4677 15.9391 16.6931 15.5794 15.1438L13.9207 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tie
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tie (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tie {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tie {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tie 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tie 3s ease-in-out infinite alternate;
}
</style>