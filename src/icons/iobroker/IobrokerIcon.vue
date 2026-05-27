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
      <path d="M12 0c-.61 0-1.201.044-1.787.133v3.285a8.943 8.943 0 013.574.004V.139A11.83 11.83 0 0012 0zM9.38.295C4.084 1.5.13 6.283.13 12 .129 18.628 5.44 24 12 24s11.871-5.372 11.871-12c0-5.717-3.953-10.499-9.246-11.705v3.34c3.575 1.113 6.18 4.44 6.18 8.365 0 4.83-3.949 8.76-8.8 8.76-4.85 0-8.804-3.93-8.804-8.76 0-3.924 2.605-7.247 6.18-8.365V.295zM12 4.137c-.616 0-1.212.068-1.783.2V19.53A7.887 7.887 0 0012 19.73c.616 0 1.211-.068 1.787-.2V4.343A7.65 7.65 0 0012 4.137Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: iobroker
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for iobroker (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-iobroker {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-iobroker {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-iobroker 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-iobroker 3s ease-in-out infinite alternate;
}
</style>