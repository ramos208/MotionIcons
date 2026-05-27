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
      <path d="M13 3.5H14C14.93 3.5 15.395 3.5 15.7765 3.60222C16.8117 3.87962 17.6204 4.68827 17.8978 5.72354C18 6.10504 18 6.57003 18 7.5H5C3.89543 7.5 3 6.60457 3 5.5C3 4.39543 3.89543 3.5 5 3.5H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 5.5V15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213C21 19.7426 21 18.3284 21 15.5V13.5C21 10.6716 21 9.25736 20.1213 8.37868C19.2426 7.5 17.8284 7.5 15 7.5H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 12.5H19C18.535 12.5 18.3025 12.5 18.1118 12.5511C17.5941 12.6898 17.1898 13.0941 17.0511 13.6118C17 13.8025 17 14.035 17 14.5C17 14.965 17 15.1975 17.0511 15.3882C17.1898 15.9059 17.5941 16.3102 18.1118 16.4489C18.3025 16.5 18.535 16.5 19 16.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 2.5C12.433 2.5 14 4.067 14 6C14 6.5368 13.8792 7.04537 13.6632 7.5H7.33682C7.12085 7.04537 7 6.5368 7 6C7 4.067 8.567 2.5 10.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wallet02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wallet02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wallet02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wallet02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wallet02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wallet02 3s ease-in-out infinite alternate;
}
</style>