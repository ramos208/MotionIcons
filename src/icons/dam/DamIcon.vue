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
      <path d="M7.81459 17.5873L6.10679 4.84407C6.03723 4.32498 6.00244 4.06544 5.90718 3.85727C5.73457 3.48004 5.41807 3.19444 5.0338 3.06915C4.82173 3 4.56889 3 4.0632 3C3.48991 3 3.20326 3 2.97265 3.08298C2.55422 3.23354 2.22534 3.57437 2.08007 4.00802C2 4.24701 2 4.54408 2 5.13823V18C2 19.4142 2 20.1213 2.42393 20.5607C2.84785 21 3.53831 21 4.91924 21C6.48545 21 7.26855 21 7.70123 20.485C8.13391 19.97 8.02747 19.1758 7.81459 17.5873Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 12C21.4 11.5 20.8 11 19.5 11C17 11 17 13 14.5 13C11.9 13 12.1 11 9.5 11C8.57595 11 7.99344 11.2732 7.5 11.6177" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 18C21.4 17.5 20.8 17 19.5 17C17 17 17 19 14.5 19C11.9 19 12.1 17 9.5 17C8.86664 17 8.39374 17.1284 8 17.3201" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dam
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dam (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dam {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dam {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dam 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dam 3s ease-in-out infinite alternate;
}
</style>