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
      <path d="M23.808 11.808v8.281a3.542 3.542 0 0 1-3.542 3.527h-.46a3.543 3.543 0 0 1-3.083-3.513v-7.282l3.543-1.013-3.66-1.045a4.724 4.724 0 0 0-9.33 1.045v2.362a2.362 2.362 0 0 0 2.362 2.362 3.543 3.543 0 0 1 3.543 3.542V24a3.539 3.539 0 0 0-3.542-3.542 3.537 3.537 0 0 0-3.063 1.76 3.54 3.54 0 0 1-2.382 1.398h-.46A3.542 3.542 0 0 1 .192 20.09V3.543a3.542 3.542 0 0 1 6.323-2.194A11.756 11.756 0 0 1 12 0c6.521 0 11.808 5.287 11.808 11.808zm-9.446 0A2.359 2.359 0 0 1 12 14.17a2.362 2.362 0 1 1 2.362-2.362z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nobaralinux
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nobaralinux (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nobaralinux {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nobaralinux {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nobaralinux 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nobaralinux 3s ease-in-out infinite alternate;
}
</style>