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
      <path d="M14.5 19.5H13.5C10.6716 19.5 9.25736 19.5 8.37868 18.6213C7.5 17.7426 7.5 16.3284 7.5 13.5V11.5M7.5 8V11.5M7.5 11.5H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 19.5C14.5 18.3215 14.5 17.7322 14.8515 17.3661C15.2029 17 15.7686 17 16.9 17H18.1C19.2314 17 19.7971 17 20.1485 17.3661C20.5 17.7322 20.5 18.3215 20.5 19.5C20.5 20.6785 20.5 21.2678 20.1485 21.6339C19.7971 22 19.2314 22 18.1 22H16.9C15.7686 22 15.2029 22 14.8515 21.6339C14.5 21.2678 14.5 20.6785 14.5 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.78571 2H9.21429C11.2888 2 11.5 3.10993 11.5 5C11.5 6.89007 11.2888 8 9.21429 8H5.78571C3.7112 8 3.5 6.89007 3.5 5C3.5 3.10993 3.7112 2 5.78571 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 9V14M20 11.5L15 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: subnode-add
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for subnode-add (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-subnode-add {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-subnode-add {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-subnode-add 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-subnode-add 3s ease-in-out infinite alternate;
}
</style>