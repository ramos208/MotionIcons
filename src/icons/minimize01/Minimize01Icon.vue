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
      <path d="M19.9264 22.2502V20.6912C19.9264 20.2886 20.0525 19.8976 20.2639 19.5545C21.7583 17.1282 22.2279 14.5259 21.9002 13.5123C20.857 11.3512 17.3758 10.5009 15.76 10.2983L16.7966 5.13851C16.9705 4.32028 16.3513 3.4966 15.4135 3.29877C14.4758 3.10095 13.5746 3.6039 13.4007 4.42213L11.3462 14.0882L8.77462 12.4508C8.77462 12.4508 7.47969 11.4154 6.44041 12.4508C5.40114 13.4861 6.44041 14.7762 6.44041 14.7762L10.3488 19.7787C10.6003 20.1005 10.7468 20.4912 10.7688 20.8984L10.8401 22.2164" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.95693 2.2382C6.95693 2.2382 6.7053 4.50936 6.95693 4.75695M6.95693 4.75695C7.28338 5.07806 9.55878 4.80775 9.55878 4.80775M6.95693 4.75695L10.001 1.74805M5.04502 9.24998C5.04502 9.24998 5.29665 6.97882 5.04502 6.73124M5.04502 6.73124C4.71857 6.41012 2.44317 6.68043 2.44317 6.68043M5.04502 6.73124L2.00098 9.74014" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: minimize01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for minimize01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-minimize01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-minimize01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-minimize01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-minimize01 3s ease-in-out infinite alternate;
}
</style>