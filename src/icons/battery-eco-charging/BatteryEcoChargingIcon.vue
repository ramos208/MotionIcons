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
      <path d="M8 19H13C15.8284 19 17.2426 19 18.1213 18.1213C19 17.2426 19 15.8284 19 13C19 11.1366 19 9.887 18.7488 8.99997M5.5 7.0383C4.24209 7.10888 3.44798 7.30933 2.87868 7.87863C2 8.75731 2 10.1715 2 13C2 15.2437 2 16.5975 2.43866 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 10.5L20.0272 10.6712C20.7085 10.7847 21.0491 10.8415 21.3076 11.0066C21.5618 11.169 21.7612 11.4044 21.8796 11.6818C22 11.9639 22 12.3093 22 13C22 13.6906 22 14.036 21.8796 14.3181C21.7612 14.5955 21.5618 14.8309 21.3076 14.9933C21.0491 15.1584 20.7085 15.2152 20.0272 15.3287L19 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.03319 20C4.54502 14.6 9.00032 13.5 11.0002 11M11.0339 15.8353C13.5787 15.1243 15.2108 13.4224 15.8162 10.8483C16.502 7.93305 15.2725 3.96327 12.1026 4.00026C12.1026 4.00026 12.4253 5.25961 12.143 5.8764C11.1022 8.15057 7.50025 7.99259 6.3325 10.8769C5.63711 12.4908 6.05765 14.2938 7.36616 15.3279C8.18838 15.9778 9.81192 16.1767 11.0339 15.8353Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: battery-eco-charging
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for battery-eco-charging (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-battery-eco-charging {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-battery-eco-charging {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-battery-eco-charging 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-battery-eco-charging 3s ease-in-out infinite alternate;
}
</style>