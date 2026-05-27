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
      <path d="M10.537 18.084c0 1.28.578 2.176 1.926 2.176 1.025 0 1.731-.767 2.117-1.856l3.594-10.369c.288-.862.738-1.342 1.636-1.342.675 0 1.253.48 1.253 1.342v11.778a.17.17 0 0 0 .195.195h2.544a.17.17 0 0 0 .196-.195V7.965c0-2.369-1.83-4.225-4.11-4.225-2.214 0-3.69 1.366-4.396 3.456l-1.7 4.991c-.065.195-.097.258-.196.258a.117.117 0 0 1-.13-.129V7.965c0-2.369-1.829-4.225-4.109-4.225-2.215 0-3.69 1.366-4.396 3.456l-1.7 4.991c-.065.195-.097.258-.196.258a.118.118 0 0 1-.128-.129V4.187a.17.17 0 0 0-.195-.195H.198a.17.17 0 0 0-.196.195v13.89c0 1.28.587 2.175 1.926 2.175 1.027 0 1.733-.767 2.119-1.856L7.64 8.027c.288-.8.803-1.342 1.636-1.342.681 0 1.26.48 1.26 1.342z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mezmo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mezmo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mezmo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mezmo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mezmo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mezmo 3s ease-in-out infinite alternate;
}
</style>