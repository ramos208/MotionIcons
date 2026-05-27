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
      <path d="M9 6C9.04665 4.90658 9.18531 4.20985 9.59747 3.67376C9.7574 3.46574 9.94396 3.27954 10.1524 3.11992C10.9619 2.5 12.137 2.5 14.4872 2.5H14.9882C17.8222 2.5 19.2391 2.5 20.1196 3.37867C21 4.25734 21 5.67157 21 8.49997L21 15.5C21 18.3284 21 19.7426 20.1196 20.6213C19.2392 21.5 17.8222 21.5 14.9882 21.5H14.4872C12.137 21.5 10.9619 21.5 10.1524 20.8801C9.94398 20.7205 9.75744 20.5343 9.59752 20.3263C9.1853 19.7901 9.04664 19.0933 9 17.9996" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 12H3M12.5 15.5001C12.5 15.5001 16 12.9224 16 12.0001C16 11.0778 12.5 8.50011 12.5 8.50011" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: login-square01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for login-square01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-login-square01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-login-square01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-login-square01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-login-square01 3s ease-in-out infinite alternate;
}
</style>