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
      <path d="M18.7088 3.49534C16.8164 2.55382 14.5008 2 11.9999 2C9.49904 2 7.18344 2.55382 5.2911 3.49534C4.36312 3.95706 3.89913 4.18792 3.44954 4.91378C2.99994 5.63965 2.99994 6.34248 2.99994 7.74814V11.2371C2.99994 16.9205 7.54229 20.0804 10.173 21.4338C10.9066 21.8113 11.2734 22 11.9999 22C12.7264 22 13.0932 21.8113 13.8269 21.4338C16.4576 20.0804 20.9999 16.9205 20.9999 11.2371L20.9999 7.74814C20.9999 6.34249 20.9999 5.63966 20.5503 4.91378C20.1007 4.18791 19.6367 3.95706 18.7088 3.49534Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 7.89543 13.1045 7 11.9999 7C10.8954 7 9.99994 7.89543 9.99994 9C9.99994 10.1046 10.8954 11 11.9999 11ZM11.9999 11V13.5M13.9999 16H12.9999C12.4477 16 11.9999 15.5523 11.9999 15V13.5M11.9999 13.5H13.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shield-key
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shield-key (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shield-key {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shield-key {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shield-key 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shield-key 3s ease-in-out infinite alternate;
}
</style>