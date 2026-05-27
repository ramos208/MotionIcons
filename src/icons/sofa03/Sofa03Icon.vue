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
      <path d="M7 16V19M17 16V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20.9996 9.26828C20.043 8.716 18.8198 9.04375 18.2675 10.0003L17.2581 12.3892C17.0078 12.9815 16.9799 13 16.3369 13H7.66304C7.02008 13 6.99218 12.9815 6.74191 12.3893L5.73238 10.0003C5.1801 9.04375 3.95692 8.716 3.00033 9.26828C2.04375 9.82057 1.716 11.0437 2.26828 12.0003C2.69932 12.7469 3.89493 12.6838 4.08847 13.2646C4.5284 14.5848 4.74836 15.2449 5.27216 15.6224C5.79596 16 6.49175 16 7.88331 16H16.1166C17.5082 16 18.204 16 18.7278 15.6224C19.2516 15.2448 19.4716 14.5847 19.9115 13.2645C20.105 12.6838 21.3007 12.7468 21.7316 12.0003C22.2839 11.0437 21.9562 9.82057 20.9996 9.26828Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.5 9L4.54003 8.89326C5.24623 7.01005 5.59933 6.06845 6.37022 5.53422C7.1411 5 8.14674 5 10.158 5H13.842C15.8533 5 16.8589 5 17.6298 5.53422C18.4007 6.06845 18.7538 7.01005 19.46 8.89326L19.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: sofa03
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for sofa03 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-sofa03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-sofa03 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-sofa03 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-sofa03 3s ease-in-out infinite alternate;
}
</style>