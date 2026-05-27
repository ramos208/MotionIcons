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
      <path d="M136.83,220.43a8,8,0,0,1-11.09,2.23A183.15,183.15,0,0,0,24,192a8,8,0,0,1,0-16,199.11,199.11,0,0,1,110.6,33.34A8,8,0,0,1,136.83,220.43ZM24,144a8,8,0,0,0,0,16,214.81,214.81,0,0,1,151.17,61.71,8,8,0,1,0,11.2-11.42A230.69,230.69,0,0,0,24,144Zm208,16a216.51,216.51,0,0,0-48.59,5.49q8.24,6.25,16,13.16A201.53,201.53,0,0,1,232,176a8,8,0,0,1,0,16c-6,0-11.93.29-17.85.86q8.32,8.67,15.94,18.14a8,8,0,1,1-12.48,10A247,247,0,0,0,24,128a8,8,0,0,1,0-16,266.33,266.33,0,0,1,48,4.37V80a8,8,0,0,1,3.2-6.4l64-48a8,8,0,0,1,9.6,0l64,48A8,8,0,0,1,216,80v32.49c5.31-.31,10.64-.49,16-.49a8,8,0,0,1,0,16,246.3,246.3,0,0,0-84.26,14.69q9.44,5,18.46,10.78A232.2,232.2,0,0,1,232,144a8,8,0,0,1,0,16ZM120,88h48a8,8,0,0,1,8,8v21.94q11.88-2.56,24-4V84L144,42,88,84v35.81q12.19,3,24,7.18V96A8,8,0,0,1,120,88Zm8.07,45.27A262.48,262.48,0,0,1,160,121.94V104H128v29.24Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: farm
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for farm (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-farm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-farm {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-farm 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-farm 3s ease-in-out infinite alternate;
}
</style>