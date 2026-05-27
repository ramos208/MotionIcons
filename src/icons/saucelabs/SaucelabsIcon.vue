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
      <path d="M23.4337 7.344c-.5641-.7664-1.469-1.2197-2.4343-1.2197H13.999L11.9993 12h4.8377l-1.9998 5.8755H9.9995l-1.9997 5.8755h9.0001c1.2912 0 2.438-.8086 2.8466-2.0088L23.846 9.9922c.3049-.8957.1518-1.8807-.4123-2.647Zm-13.434 4.655H7.1618l1.9997-5.8756h4.8378l2.001-5.8743H7c-1.2912 0-2.438.8086-2.8466 2.0089L.154 14.0079c-.3049.8956-.1518 1.8807.4123 2.647.5641.7663 1.469 1.2196 2.4343 1.2196h7.0004l1.9998-5.8755H10.001z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: saucelabs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for saucelabs (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-saucelabs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-saucelabs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-saucelabs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-saucelabs 3s ease-in-out infinite alternate;
}
</style>