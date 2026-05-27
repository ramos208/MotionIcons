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
      <path d="M15.5212 14.8395L7.56291 16.438L9.16124 8.4792M18.8695 12.9044C16.3327 15.4414 12.5361 15.7578 10.3896 13.6111C8.24309 11.4644 8.55947 7.6676 11.0963 5.13063C13.6331 2.59366 17.4296 2.27726 19.5762 4.42392C21.7227 6.57059 21.4063 10.3674 18.8695 12.9044ZM7.03298 15.9067L8.09296 16.9668C8.2881 17.1619 8.2881 17.4783 8.09296 17.6735L4.913 20.8536C4.71786 21.0488 4.40148 21.0488 4.20634 20.8536L3.14635 19.7936C2.95122 19.5984 2.95122 19.282 3.14635 19.0869L6.32632 15.9067C6.52146 15.7115 6.83784 15.7115 7.03298 15.9067Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5071 7.48413L16.5 7.4912M13.5 10.5003L13.4929 10.5074M16.5 10.5003L16.4929 10.5074M13.5071 7.4924L13.5 7.49947" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tennis-racket
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tennis-racket (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tennis-racket {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tennis-racket {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tennis-racket 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tennis-racket 3s ease-in-out infinite alternate;
}
</style>