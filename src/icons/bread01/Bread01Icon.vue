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
      <path d="M3.19405 14.077C1.94563 15.3082 1.84437 17.6176 2.13655 19.7508C2.40166 21.6864 4.57937 22.5986 6.21199 21.5763C9.1986 19.7061 12.3179 17.2421 15.3067 14.2947C18.3772 11.2666 20.0596 8.96143 21.5435 6.36753C22.4433 4.79463 22.0218 2.69734 20.1997 2.23223C18.2048 1.72304 15.6191 1.93195 13.3375 4.0775M3.19405 14.077C2.36031 10.337 5.29027 5.93188 12.1656 9.7943M3.19405 14.077C3.81736 14.0897 5.21758 14.3717 6.5544 15.3245M6.84592 8.19547C6.90898 6.25487 8.82259 3.00486 13.3375 4.0775M13.3375 4.0775C14.304 4.30712 15.3897 4.73482 16.602 5.41585" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bread01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bread01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bread01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bread01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bread01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bread01 3s ease-in-out infinite alternate;
}
</style>