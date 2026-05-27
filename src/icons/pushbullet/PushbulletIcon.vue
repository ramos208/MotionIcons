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
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 1.688A10.312 10.312 0 0 1 22.312 12 10.312 10.312 0 0 1 12 22.312 10.312 10.312 0 0 1 1.688 12 10.312 10.312 0 0 1 12 1.688zM7.258 6.92a.659.772 0 0 0-.659.772v8.643a.603.603 0 0 0 .603.603h1.733a.603.603 0 0 0 .603-.603V7.692a.659.772 0 0 0-.658-.772zm6.94.001c-.975.005-1.93.005-2.867.002-.28 0-.474.254-.534.499a1.7 1.7 0 0 0-.043.405c.004 2.854.007 5.677.007 8.47 0 .397.21.643.589.641 1.002-.004 1.967-.003 2.895 0 .058 0 .129.022.176.02.824-.018 1.552-.251 2.182-.698 2.02-1.43 2.554-4.264 1.662-6.47-.574-1.417-1.743-2.573-3.27-2.82a5.027 5.027 0 0 0-.797-.049z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pushbullet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pushbullet (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pushbullet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pushbullet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pushbullet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pushbullet 3s ease-in-out infinite alternate;
}
</style>