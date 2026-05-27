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
      <path d="M5 9H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.4889 16.4889C15.9102 16.8144 15.2423 17 14.531 17C12.3219 17 10.531 15.2091 10.531 13C10.531 12.2887 10.7167 11.6208 11.0421 11.0421M13.2199 9.21983C13.6306 9.07739 14.0718 9 14.531 9C16.7401 9 18.531 10.7909 18.531 13C18.531 13.4592 18.4536 13.9004 18.3112 14.3111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.5 20.4983H8C5.17157 20.4983 3.75736 20.4983 2.87868 19.6196C2 18.7409 2 17.3267 2 14.4983V11.9983C2 9.16987 2 7.75566 2.87868 6.87698C3.51998 6.23568 4.44655 6.06243 6 6.01562" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 18V8.02617C22 6.90715 21.0929 6 19.9738 6C19.3583 6 18.7762 5.72021 18.3917 5.23957L17.8 4.5C17.6049 4.25611 17.5073 4.13416 17.3979 4.03281C17.1031 3.75969 16.7328 3.58172 16.3354 3.52212C16.1879 3.5 16.0317 3.5 15.7194 3.5H13.9225C12.9779 3.5 12.5056 3.5 12.0949 3.69739C11.6842 3.89479 11.3891 4.2636 10.799 5.00122L10 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: camera-off02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for camera-off02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-camera-off02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-camera-off02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-camera-off02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-camera-off02 3s ease-in-out infinite alternate;
}
</style>