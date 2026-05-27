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
      <path d="M22.47 10.47c0 2.831-1.123 5.4-2.948 7.284.659 1.65 1.139 3.287 2.179 6.246-2.687-1.972-4.4-2.744-5.883-3.546h.001c-1.008-.545-1.917-1.106-2.946-2.07-1.02-.954-2.193-2.225-2.787-3.393 1.45 3.263 4.86 5.53 4.86 5.53l.003-.001A10.5 10.5 0 0 1 12 20.94c-5.783 0-10.47-4.688-10.47-10.47S6.217 0 12 0s10.47 4.688 10.47 10.47M12 1.53a8.94 8.94 0 0 0-8.941 8.94 8.94 8.94 0 0 0 7.517 8.827 6.5 6.5 0 0 1-1.532-.748c-3.131-2.145-2.67-6.929-2.66-9.71.011-2.916 2.629-4.702 5.123-4.65 2.987.05 5.153 2.216 4.917 5.122a49 49 0 0 0-.143 2.49c.337.352.659.78.954 1.308a48 48 0 0 1 1.619 3.103A8.941 8.941 0 0 0 12 1.53m.39 10.224c4.065-.01 4.024-5.071 1.653-5.092-1.047-.02-1.54.934-1.54.934s-.41-1.19-1.848-1.18c-3.08.02-2.956 5.348 1.735 5.338m.164-2.207c1.109 0 .206 1.53-.061 2.145-.185-.862-1.047-2.145.061-2.145m-.626-.483c0 .585-.472 1.047-1.047 1.047a1.045 1.045 0 0 1-1.047-1.047c0-.585.472-1.047 1.047-1.047.585 0 1.047.472 1.047 1.047m2.987-.01c0 .585-.41 1.047-.903 1.047-.503 0-.903-.472-.903-1.047 0-.585.41-1.047.903-1.047.503 0 .903.472.903 1.047"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: prosemirror
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for prosemirror (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-prosemirror {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-prosemirror {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-prosemirror 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-prosemirror 3s ease-in-out infinite alternate;
}
</style>