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
      <path d="M5 20H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.99998 12C6.89541 12 5.99998 11.1046 5.99998 10C5.99998 9.78893 6.03267 9.5855 6.09328 9.39449L3.53967 7.22321C3.17186 6.91046 2.61752 6.9284 2.27193 7.26423C2.02704 7.5022 1.93883 7.85285 2.04312 8.17377L4.54281 15.6353C4.81592 16.4505 5.57947 17 6.43922 17H17.5608C18.4205 17 19.1841 16.4505 19.4572 15.6353L21.9569 8.17377C22.0612 7.85285 21.973 7.5022 21.7281 7.26423C21.3825 6.9284 20.8281 6.91046 20.4603 7.22321L17.9067 9.39452C17.9673 9.58552 18 9.78894 18 10C18 11.1046 17.1045 12 16 12C14.8954 12 14 11.1046 14 10C14 9.36285 14.2979 8.79529 14.7621 8.42904L12.6923 3.46154C12.5758 3.18205 12.3028 3 12 3C11.6972 3 11.4241 3.18205 11.3077 3.46154L9.23788 8.42904C9.70204 8.79529 9.99998 9.36285 9.99998 10C9.99998 11.1046 9.10455 12 7.99998 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crown02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for crown02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crown02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crown02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crown02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-crown02 3s ease-in-out infinite alternate;
}
</style>