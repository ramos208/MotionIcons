<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M11 11L6 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 7.5L7.5 5L4.5 3.5L3.5 4.5L5 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.9749 8.97487C20.9858 7.96391 21.2491 6.48836 20.7645 5.23548L19.3425 6.65748H17.3425V4.65748L18.7645 3.23548C17.5116 2.75095 16.0361 3.01416 15.0251 4.02513C14.0138 5.03647 13.7507 6.51274 14.236 7.76593L7.76593 14.236C6.51275 13.7507 5.03647 14.0138 4.02513 15.0251C3.01416 16.0361 2.75095 17.5116 3.23548 18.7645L4.65748 17.3425L6.65748 17.3425L6.65748 19.3425L5.23548 20.7645C6.48836 21.2491 7.96391 20.9858 8.97487 19.9749C9.98546 18.9643 10.2489 17.4895 9.76507 16.2369L16.2369 9.76507C17.4895 10.2489 18.9643 9.98546 19.9749 8.97487Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.797 14.5L17.401 20.1041C17.9288 20.6319 18.7846 20.6319 19.3124 20.1041L20.1041 19.3124C20.632 18.7845 20.632 17.9288 20.1041 17.401L14.5001 11.7969" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: repair
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for repair (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-repair {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-repair {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-repair 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-repair 2s ease-in-out infinite alternate;
}
</style>