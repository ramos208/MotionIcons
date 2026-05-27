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
      <path d="M18 20.5H6C4.11438 20.5 3.17157 20.5 2.58579 19.9142C2 19.3284 2 18.3856 2 16.5C2 14.6144 2 13.6716 2.58579 13.0858C3.17157 12.5 4.11438 12.5 6 12.5H18C19.8856 12.5 20.8284 12.5 21.4142 13.0858C22 13.6716 22 14.6144 22 16.5C22 18.3856 22 19.3284 21.4142 19.9142C20.8284 20.5 19.8856 20.5 18 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 12.5V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 16.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 7.3647C10.2106 6.7981 11.0929 6.49038 12.0018 6.4922C12.9106 6.49401 13.7917 6.80527 14.5 7.3747M7 4.255C8.4189 3.11897 10.1824 2.5 12 2.5C13.8176 2.5 15.5811 3.11897 17 4.255" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.125 16.5H18M18.25 16.5C18.25 16.6381 18.1381 16.75 18 16.75C17.8619 16.75 17.75 16.6381 17.75 16.5C17.75 16.3619 17.8619 16.25 18 16.25C18.1381 16.25 18.25 16.3619 18.25 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.125 16.5H14M14.25 16.5C14.25 16.6381 14.1381 16.75 14 16.75C13.8619 16.75 13.75 16.6381 13.75 16.5C13.75 16.3619 13.8619 16.25 14 16.25C14.1381 16.25 14.25 16.3619 14.25 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: router01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for router01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-router01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-router01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-router01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-router01 3s ease-in-out infinite alternate;
}
</style>