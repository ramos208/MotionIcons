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
      <path d="M6.98752 6.02772C6.92162 5.10717 7.48861 3.28606 9.04448 2.5246C9.68606 2.13485 11.4471 1.5314 13.1314 2.60667C14.7913 3.66635 14.9033 5.22874 15.0078 6.01736" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.165 22.0019C17.1197 20.3659 17.2229 20.2038 17.3425 19.8398C17.4621 19.4759 18.2988 18.1634 18.5948 17.2257C19.5525 14.1918 18.6599 13.5465 17.4698 12.6861C16.1501 11.732 13.7755 11.2582 12.5409 11.3628V6.52393C12.5409 5.7005 11.7516 5.02722 10.9089 5.02722C10.0661 5.02722 9.29135 5.7005 9.29135 6.52393V14.8358L7.57205 13.3449C7.01247 12.7519 6.1132 12.6918 5.49945 13.2312C4.91784 13.7424 4.83296 14.6033 5.30401 15.2135L6.43462 16.6783M9.24414 22.0019V21.1487C9.28171 20.0958 8.49784 19.4088 7.47551 18.0353C7.40185 17.9363 7.33017 17.8407 7.26038 17.7481M7.26038 17.7481C6.95063 17.3373 6.67809 16.9872 6.43462 16.6783M7.26038 17.7481L8.28346 19.0736M7.26038 17.7481L6.43462 16.6783M6.43462 16.6783C5.93475 16.044 5.55741 15.5831 5.23211 15.1251" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tap01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tap01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tap01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tap01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tap01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tap01 3s ease-in-out infinite alternate;
}
</style>