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
      <path d="M23.457 8.42h-2.311a9.79 9.79 0 0 1 .676 3.58c0 5.425-4.397 9.822-9.822 9.822a9.767 9.767 0 0 1-4.98-1.357 9.12 9.12 0 0 0 5.625-6.457l.817-3.529a6.918 6.918 0 0 1 2.488-3.903 6.221 6.221 0 0 1 1.52-.87 7.616 7.616 0 0 1 2.765-.51l1.642-.003C19.711 2.063 16.094 0 12 0 5.372 0 0 5.373 0 12c0 1.247.19 2.448.543 3.579h2.31A9.79 9.79 0 0 1 2.179 12c0-5.424 4.398-9.822 9.822-9.822 1.819 0 3.52.495 4.98 1.357a9.118 9.118 0 0 0-5.625 6.457l-.816 3.53a6.917 6.917 0 0 1-2.488 3.903 6.22 6.22 0 0 1-1.52.869c-.737.295-1.655.51-2.887.51l-1.522.002C4.288 21.936 7.906 24 12 24c6.628 0 12-5.373 12-12a12 12 0 0 0-.543-3.58Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: onestream
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for onestream (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-onestream {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-onestream {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-onestream 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-onestream 3s ease-in-out infinite alternate;
}
</style>