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
      <path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.1761 6.17609L15.8353 4.29256C18.6104 3.17071 19.9979 2.60978 20.6941 3.30595C21.3902 4.00211 20.8293 5.38967 19.7074 8.16477L17.8239 12.8239M7.61575 7.61575C4.54977 8.85978 3.01572 9.54441 3.00021 10.459C2.99809 10.5846 3.01186 10.7098 3.04121 10.8319C3.2714 11.7893 5.1611 12.1042 8.94051 12.7341C9.85191 12.886 10.3076 12.962 10.6276 13.2454C10.6725 13.2852 10.715 13.3277 10.7548 13.3726C11.0382 13.6925 11.1141 14.1482 11.266 15.0597C11.8959 18.8389 12.2109 20.7286 13.1682 20.9588C13.2902 20.9881 13.4156 21.0019 13.5411 20.9998C14.4557 20.9843 15.1403 19.4502 16.3843 16.3843" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: navigation-off
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for navigation-off (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-navigation-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-navigation-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-navigation-off 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-navigation-off 3s ease-in-out infinite alternate;
}
</style>