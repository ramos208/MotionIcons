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
      <path d="M3.5 9.99976V14.9998C3.5 17.8282 3.5 19.2424 4.37868 20.1211C5.25736 20.9998 6.67157 20.9998 9.5 20.9998H14.5C17.3284 20.9998 18.7426 20.9998 19.6213 20.1211C20.5 19.2424 20.5 17.8282 20.5 14.9998V9.99976" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 17.9998H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 7.50159C17 8.8823 15.8807 9.99973 14.5 9.99973C13.1193 9.99973 12 8.88044 12 7.49973C12 8.88044 10.8807 9.99973 9.5 9.99973C8.11929 9.99973 7 8.88044 7 7.49973C7 8.88044 5.82654 9.99973 4.379 9.99973C3.59983 9.99973 2.90007 9.67543 2.41999 9.16063C1.59461 8.27555 2.12559 6.97378 2.81446 5.98818L3.202 5.45827C4.08384 4.25246 4.52476 3.64956 5.16491 3.32469C5.80507 2.99983 6.552 2.99993 8.04586 3.00013L15.9551 3.00119C17.4485 3.00138 18.1952 3.00148 18.8351 3.32634C19.475 3.65119 19.9158 4.2539 20.7974 5.45933L21.1855 5.99004C21.8744 6.97565 22.4054 8.27742 21.58 9.16249C21.0999 9.67729 20.4001 10.0016 19.621 10.0016C18.1734 10.0016 17 8.8823 17 7.50159Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: store02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for store02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-store02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-store02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-store02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-store02 3s ease-in-out infinite alternate;
}
</style>