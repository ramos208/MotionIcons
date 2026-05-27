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
      <path d="M17.091 10.9999V11.9999M17.091 10.9999C17.091 9.89537 16.2227 8.99994 15.1516 8.99994C14.6161 8.99994 14.182 9.44765 14.182 9.99993L14.1816 10.9999V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99998M17.091 10.9999C17.091 10.4765 17.5468 10.0783 18.0475 10.1643L18.3795 10.2214C19.3146 10.3821 20 11.2165 20 12.1942L19.9996 13.6667C19.9996 15.84 19.9996 16.9267 19.6786 17.7919C19.4924 18.2937 19.0011 18.9337 18.6083 19.3962C18.2685 19.7963 18.0603 20.3037 18.0603 20.8354V22M11.2727 4.99998C11.2727 4.17155 10.6215 3.49999 9.81824 3.49999C9.01493 3.49999 8.36373 4.17155 8.36373 4.99998L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L7.81767 18.647C8.4855 19.5267 8.84836 20.8827 8.84836 22M11.2727 4.99998V9.99993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: two-finger01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for two-finger01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-two-finger01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-two-finger01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-two-finger01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-two-finger01 3s ease-in-out infinite alternate;
}
</style>