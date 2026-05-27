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
      <path d="M10 21H5C3.89543 21 3 20.1046 3 19V10H21M15 4V2M15 4V6M15 4H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 10V6C3 4.89543 3.89543 4 5 4H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 10V6C21 4.89543 20.1046 4 19 4H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.6669 16.6667C21.0481 15.097 19.635 14 17.9906 14C16.2322 14 14.7382 15.2545 14.1973 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.9951 16.772H21.4001C21.7314 16.772 22.0001 16.5034 22.0001 16.172V14.5498" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.3341 19.3333C14.9529 20.903 16.366 22 18.0103 22C19.7687 22 21.2628 20.7455 21.8037 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.0049 19.228H14.5999C14.2686 19.228 13.9999 19.4966 13.9999 19.828V21.4502" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: calendar-rotate
// Category: loading
// Physics Presets: Dynamic kinetic adaptation for calendar-rotate (iconoir). Selected semantic motion: rotate with custom idle (gear-sync) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-calendar-rotate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-calendar-rotate {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(360deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-calendar-rotate 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-gear-sync {
  animation: motion-ai-idle-calendar-rotate 4s linear infinite alternate;
}
</style>