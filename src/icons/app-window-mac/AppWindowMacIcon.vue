<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-dynamic-pop']"
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
      class="icon-geometry anim-subtle-drift"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: app-window-mac
// Category: weather
// Physics Presets: This motion profile emphasizes a gentle yet dynamic appearance, ensuring the app window icon feels both fluid and responsive. The subtle drift in idle state maintains its natural resting position while the hover animation adds a spark of life with a twinkle effect. Upon click, there's a pop that creates an engaging interaction without overwhelming the user.

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

.anim-subtle-drift {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-app-window-mac {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1340000000000001) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.05) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-app-window-mac {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-app-window-mac 500s ease-in-out forwards;
}

.anim-subtle-drift {
  animation: motion-ai-idle-app-window-mac 2000s outElastic infinite alternate;
}
</style>