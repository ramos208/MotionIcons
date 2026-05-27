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
      <path d="M3.04261 4.41495C2.7122 8.99913 4.26712 17.1284 8.97309 21.0871C10.406 22.2925 11.9014 22.3165 13.3266 21.0857C15.6727 19.0596 17.3041 15.9398 18.2214 14.2938C18.2214 14.2938 19.3849 14.6873 20.3522 14.7846C20.931 14.8427 21.4613 11.7387 20.3517 11.7315C17.4157 11.7122 14.1381 11.4181 13.6775 8.14692C13.1726 4.56122 17.2116 5.07346 16.7068 8.19571C17.7165 9.17141 19.7361 9.17141 19.7361 9.17141C20.7458 6.09795 18.7263 2 15.697 2C11.6579 2 10.1433 4.95167 10.1433 7.12244C10.1433 12.7571 14.6872 13.7816 14.6872 13.7816C13.9496 15.6526 12.6725 16.9898 11.8409 17.7649C11.2705 18.2965 11.0258 18.3051 10.5066 17.7152C7.16109 13.9145 6.21504 7.99135 6.55256 4.51754C6.62801 3.74099 3.10939 3.48846 3.04261 4.41495Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vine
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vine (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vine {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vine {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vine 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vine 3s ease-in-out infinite alternate;
}
</style>