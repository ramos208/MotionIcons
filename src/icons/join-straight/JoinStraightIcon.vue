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
      <path d="M8.00018 22.0002H18.0002C19.8858 22.0002 20.8286 22.0002 21.4144 21.4145C22.0002 20.8287 22.0002 19.8859 22.0002 18.0002V17.0002C22.0002 15.1146 22.0002 14.1718 21.4144 13.586C20.8286 13.0002 19.8858 13.0002 18.0002 13.0002L15.0002 13.0002C13.1146 13.0002 12.1718 13.0002 11.586 12.4145C11.0002 11.8287 11.0002 10.8859 11.0002 9.00024V6.00024C11.0002 4.11463 11.0002 3.17182 10.4144 2.58603C9.82861 2.00024 8.8858 2.00024 7.00018 2.00024L6.00018 2.00024C4.11456 2.00024 3.17176 2.00024 2.58597 2.58603C2.00018 3.17182 2.00018 4.11463 2.00018 6.00024L2.00018 16.0002C2.00018 18.8287 2.00018 20.2429 2.87886 21.1216C3.75754 22.0002 5.17176 22.0002 8.00018 22.0002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: join-straight
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for join-straight (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-join-straight {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-join-straight {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-join-straight 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-join-straight 2s ease-in-out infinite alternate;
}
</style>