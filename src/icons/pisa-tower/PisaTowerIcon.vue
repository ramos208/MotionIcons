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
      <path d="M2 21H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.4591 16.4179L17.7484 11.3959M16.4591 16.4179L17.4214 16.6871M16.4591 16.4179L15.2828 21M16.4591 16.4179L7.79815 13.9957M17.7484 11.3959L19.0377 6.3738M17.7484 11.3959L18.7107 11.665M17.7484 11.3959L9.08743 8.97368M19.0377 6.3738L17.113 5.83554M19.0377 6.3738L20 6.64294M7.79815 13.9957L9.08743 8.97368M7.79815 13.9957L6.83582 13.7266M7.79815 13.9957L6 21M9.08743 8.97368L10.3767 3.95162M9.08743 8.97368L8.1251 8.70455M10.3767 3.95162L9.41437 3.68249M10.3767 3.95162L12.3014 4.48988M12.3014 4.48988L17.113 5.83554M12.3014 4.48988L12.7458 2.75811C12.8862 2.21105 13.4418 1.88632 13.9799 2.03682L16.8635 2.84327C17.3901 2.99054 17.7025 3.53846 17.5651 4.07382L17.113 5.83554" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 21L11.06 19M14 8.5L13.5218 10.208M12.1121 15.2424L12.5655 13.6232" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pisa-tower
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pisa-tower (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pisa-tower {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pisa-tower {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pisa-tower 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pisa-tower 3s ease-in-out infinite alternate;
}
</style>