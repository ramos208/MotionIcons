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
      <path d="M13 3H11C6.75736 3 4.63604 3 3.31802 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.31802 19.682C4.63604 21 6.75736 21 11 21H13C17.2426 21 19.364 21 20.682 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.682 4.31802C19.364 3 17.2426 3 13 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 10L9.24536 13.9123C8.92013 14.6374 8.75751 15 8.5 15C8.24249 15 8.07987 14.6374 7.75464 13.9123L6 10M14 15V13M14 13V11C14 10.5286 14 10.2929 14.1464 10.1464C14.2929 10 14.5286 10 15 10H16.5C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13M14 13H16.5M16.5 13L17.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: virtual-reality-vr02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for virtual-reality-vr02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-virtual-reality-vr02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-virtual-reality-vr02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-virtual-reality-vr02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-virtual-reality-vr02 3s ease-in-out infinite alternate;
}
</style>