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
      <path d="m6.503 23.914 13.61-9.399s.614-.351.614-.906c0-.739-.776-.979-.776-.979l-7.488-2.953c-.267-.104-.634.189-.29.56l2.479 2.471s.688.675.688 1.117-.423.836-.423.836l-9.02 8.684c-.32.31.113.87.606.569zM17.497.087 3.887 9.484s-.614.351-.614.906c0 .739.776.98.776.98l7.488 2.953c.267.103.636-.19.29-.559l-2.479-2.48s-.688-.673-.688-1.116c0-.444.423-.837.423-.837L18.097.654c.326-.31-.106-.87-.6-.567z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: slint
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for slint (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-slint {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-slint {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-slint 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-slint 3s ease-in-out infinite alternate;
}
</style>