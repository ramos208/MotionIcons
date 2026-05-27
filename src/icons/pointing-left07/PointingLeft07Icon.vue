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
      <path d="M12 22L14.6667 22C16.84 22 17.9267 22 18.7918 21.6689C20.1148 21.1627 21.1601 20.1207 21.6679 18.8019C22 17.9395 22 16.8562 22 14.6897C22 13.5534 22 12.9853 21.8834 12.4566C21.7056 11.6499 21.3294 10.9 20.7888 10.2742C20.4344 9.86398 19.9785 9.52311 19.0667 8.84137L15.0487 5.83738C14.4314 5.3758 13.5789 5.38907 12.9763 5.86965C12.1888 6.49772 12.1237 7.66877 12.8369 8.3797L14.4623 10L4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13L8 13M8 13L8 14C8 15.1046 8.89543 16 10 16M8 13L11 13M10 16L11 16M10 16L9 16L9 17C9 18.1046 9.89543 19 11 19M11 19L12 19M11 19L10 19L10.2215 20.3288C10.3822 21.2932 11.2166 22 12.1943 22L13 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pointing-left07
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pointing-left07 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pointing-left07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pointing-left07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pointing-left07 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pointing-left07 3s ease-in-out infinite alternate;
}
</style>