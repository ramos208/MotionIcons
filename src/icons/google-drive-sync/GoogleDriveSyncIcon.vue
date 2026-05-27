<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-rotate']"
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
      class="icon-geometry anim-gear-sync"
    >
      <path d="M9.14286 3.00375L14.8571 3M9.14286 3.00375L2 15.0038M9.14286 3.00375L14.0446 12.5M14.8571 3L5.575 21M14.8571 3L20.2126 12M5.575 21L2 15.0038M5.575 21H12.0036M2 15.0038H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.6663 17.6667C22.0476 16.097 20.6344 15 18.9901 15C17.2317 15 15.7376 16.2545 15.1967 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.9951 17.7722H22.4C22.7314 17.7722 23 17.5036 23 17.1722V15.55" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.3337 20.3333C15.9524 21.903 17.3656 23 19.0099 23C20.7683 23 22.2624 21.7455 22.8033 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.0049 20.2278H15.6C15.2686 20.2278 15 20.4964 15 20.8278V22.45" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: google-drive-sync
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for google-drive-sync (iconoir). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-gear-sync {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-google-drive-sync {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-google-drive-sync {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-google-drive-sync 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-google-drive-sync 4s linear infinite alternate;
}
</style>