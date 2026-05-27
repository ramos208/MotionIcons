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
      <path d="M3 12.4896V15C3 18.2998 3 19.9497 4.02513 20.9749C5.05025 22 6.70017 22 10 22H14C17.2998 22 18.9497 22 19.9749 20.9749C21 19.9497 21 18.2998 21 15V12.4896C21 10.8083 21 9.96773 20.6441 9.24005C20.2882 8.51237 19.6247 7.99628 18.2976 6.96411L16.2976 5.40855C14.2331 3.80285 13.2009 3 12 3C10.7991 3 9.76689 3.80285 7.70242 5.40855L5.70241 6.96411C4.37533 7.99628 3.71179 8.51237 3.3559 9.24005C3 9.96773 3 10.8083 3 12.4896Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 14.8647C10.2106 14.2981 11.0929 13.9904 12.0018 13.9922C12.9106 13.994 13.7917 14.3053 14.5 14.8747M12 18H12.01M7 11.755C8.4189 10.619 10.1824 10 12 10C13.8176 10 15.5811 10.619 17 11.755" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: home-wifi
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for home-wifi (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-home-wifi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-home-wifi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-home-wifi 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-home-wifi 3s ease-in-out infinite alternate;
}
</style>