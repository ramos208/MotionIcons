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
      <path d="M20.9998 16H4.89113C4.40355 16 4.0423 16.1723 3.75757 16.4515C3.28913 16.9108 3.12083 17.5901 3.04657 18.2429C2.96065 18.9982 2.99167 19.6886 3.20248 20.4377C3.43762 21.2734 4.02149 22 4.88667 22H20.9998M19.4061 22C17.8674 20.5885 17.2354 18.1421 19.4061 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.8176 6.5C11.8176 4 9.10929 3 9.10929 3M11.8176 6.92131C11.8176 6.92131 5.85938 3.85577 5.85938 8.90819C5.85938 13.9606 8.57044 16 9.65094 16C10.5128 16 11.0212 14.9913 11.8176 14.9913C12.6139 14.9913 12.9008 16 13.9841 16C15.0647 16 17.7757 13.9606 17.7757 8.90819C17.7757 3.85578 11.8176 6.92131 11.8176 6.92131ZM12.3593 6C12.3593 2.01035 14.3103 3 15.2858 2C16.2614 4.5 14.9556 5.00259 12.3593 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: knowledge01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for knowledge01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-knowledge01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-knowledge01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-knowledge01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-knowledge01 3s ease-in-out infinite alternate;
}
</style>