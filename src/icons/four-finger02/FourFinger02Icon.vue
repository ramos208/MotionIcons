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
      <path d="M7.84051 13.4813V4.98823C7.84051 4.1585 8.50582 3.48586 9.32652 3.48586C10.1472 3.48586 10.8125 4.15828 10.8125 4.98802M10.8125 9.97422V3.50238C10.8125 2.67264 11.4778 2 12.2986 2C13.1193 2 13.7846 2.67264 13.7846 3.50238V11.0057M13.7846 5.47656C13.7846 4.64306 14.4836 3.9678 15.308 3.9678C16.1324 3.9678 16.8008 4.64348 16.8008 5.47699V11.9989M16.8008 7.51562C16.8008 6.69224 17.461 6.02157 18.2754 6.02157C19.0898 6.02157 19.75 6.68905 19.75 7.51243V16.1246C19.75 17.1574 19.3743 18.3101 18.2322 19.6845C17.9015 20.0825 17.6958 20.5766 17.6958 21.0964V22M7.84051 8.85627C7.00785 9.63725 4.99016 11.6991 4.43639 12.8432C3.88262 13.9873 4.7059 15.3388 5.05201 15.8682L7.84008 19.5755C8.10344 19.9257 8.24603 20.3535 8.24603 20.7935V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: four-finger02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for four-finger02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-four-finger02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-four-finger02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-four-finger02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-four-finger02 3s ease-in-out infinite alternate;
}
</style>