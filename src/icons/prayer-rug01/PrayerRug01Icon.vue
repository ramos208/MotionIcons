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
      <path d="M5 21L16 21C17.8856 21 18.8284 21 19.4142 20.4142C20 19.8284 20 18.8856 20 17L20 11C20 9.11438 20 8.17157 19.4142 7.58579C18.8284 7 17.8856 7 16 7L8 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 21H4C2.89543 21 2 20.1046 2 19M2 19C2 17.8954 2.89543 17 4 17C5.88562 17 6.82843 17 7.41421 16.4142C8 15.8284 8 14.8856 8 13V8C8 6.11438 8 5.17157 7.41421 4.58579C6.82843 4 5.88562 4 4 4C2.89543 4 2 4.89543 2 6V19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 16.3569H11.331C11.6209 16.3569 11.7658 16.3569 11.888 16.3856C12.0102 16.4144 12.2427 16.5307 12.7077 16.7634C14.3103 17.5655 15.3792 16.1625 16.3037 15.0273C16.7679 14.4572 17 14.1722 17 13.9999C17 13.8277 16.7679 13.5427 16.3036 12.9726C15.3792 11.8374 14.3103 10.4345 12.7077 11.2366C12.2427 11.4693 12.0102 11.5856 11.888 11.6144C11.7658 11.6431 11.6209 11.6431 11.331 11.6431L11 11.6431" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 16L22 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 20L22 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 12L22 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 8L22 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: prayer-rug01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for prayer-rug01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-prayer-rug01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-prayer-rug01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-prayer-rug01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-prayer-rug01 3s ease-in-out infinite alternate;
}
</style>