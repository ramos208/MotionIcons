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
      <path d="M16 3.5H8C5.17157 3.5 3.75736 3.5 2.87868 4.37868C2 5.25736 2 6.67157 2 9.5V12.5C2 15.3284 2 16.7426 2.87868 17.6213C3.75736 18.5 5.17157 18.5 8 18.5H16C18.8284 18.5 20.2426 18.5 21.1213 17.6213C22 16.7426 22 15.3284 22 12.5V9.5C22 6.67157 22 5.25736 21.1213 4.37868C20.2426 3.5 18.8284 3.5 16 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 6.5H8C6.58579 6.5 5.87868 6.5 5.43934 6.93934C5 7.37868 5 8.08579 5 9.5V12.5C5 13.9142 5 14.6213 5.43934 15.0607C5.87868 15.5 6.58579 15.5 8 15.5H13C14.4142 15.5 15.1213 15.5 15.5607 15.0607C16 14.6213 16 13.9142 16 12.5V9.5C16 8.08579 16 7.37868 15.5607 6.93934C15.1213 6.5 14.4142 6.5 13 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 18.5V20.5M19 18.5V20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.0504 7.50234H19.0004M19.1004 7.50234C19.1004 7.55757 19.0556 7.60234 19.0004 7.60234C18.9452 7.60234 18.9004 7.55757 18.9004 7.50234C18.9004 7.44712 18.9452 7.40234 19.0004 7.40234C19.0556 7.40234 19.1004 7.44712 19.1004 7.50234Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.0504 11.5023H19.0004M19.1004 11.5023C19.1004 11.5576 19.0556 11.6023 19.0004 11.6023C18.9452 11.6023 18.9004 11.5576 18.9004 11.5023C18.9004 11.4471 18.9452 11.4023 19.0004 11.4023C19.0556 11.4023 19.1004 11.4471 19.1004 11.5023Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: microwave
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for microwave (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-microwave {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-microwave {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-microwave 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-microwave 3s ease-in-out infinite alternate;
}
</style>