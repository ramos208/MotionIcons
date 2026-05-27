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
      class="icon-geometry anim-wave-ripple"
    >
      <path d="m3 8 4-4 4 4"/><path d="M7 4v16"/><rect x="15" y="4" width="4" height="6" ry="2"/><path d="M17 20v-6h-2"/><path d="M15 20h4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-up-01
// Category: directional
// Physics Presets: This motion design aims to create a lively and engaging experience for the arrow-up icon, emphasizing its directional flow with subtle wave animations and a slight vibration upon hover and click interactions.

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

.anim-wave-ripple {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-arrow-up-01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.62) rotate(432deg) translate(0px, -7.5px) skew(0deg); }
  100% { transform: scale(1.8) rotate(720deg) translate(0px, -5px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-up-01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.5) rotate(360deg) translate(0px, -10px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-up-01 0.5s ease-in forwards;
}

.anim-wave-ripple {
  animation: motion-ai-idle-arrow-up-01 2s ease-in-out infinite alternate;
}
</style>