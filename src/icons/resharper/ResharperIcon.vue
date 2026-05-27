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
      <path d="M24 0H0v24h24V0ZM3.006 19.476h9v1.5h-9v-1.5Zm9.824-9.392h-.98V8.432h1.264l.324-1.908h-1.136V4.872h1.416l.324-1.864h1.704l-.332 1.864h1.88l.324-1.864h1.7l-.304 1.864h.98v1.652h-1.28l-.324 1.908h1.136v1.652h-1.42l-.336 1.936h-1.7l.332-1.936h-1.868l-.32 1.936h-1.72l.336-1.936ZM3.014 3.008H7.15c1.144 0 2.021.304 2.632.912.529.553.808 1.3.772 2.064v.028a2.802 2.802 0 0 1-.536 1.784 3.065 3.065 0 0 1-1.404.992l2.204 3.224h-2.32L6.63 9.24H5.014v2.772h-2V3.008Zm13.672 5.424.328-1.908h-1.876l-.32 1.908h1.868ZM7.014 7.408c.415.014.821-.129 1.136-.4a1.2 1.2 0 0 0 .4-.928v-.028a1.156 1.156 0 0 0-.4-.968 1.836 1.836 0 0 0-1.148-.32H5.014v2.592l2 .052Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: resharper
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for resharper (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-resharper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-resharper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-resharper 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-resharper 3s ease-in-out infinite alternate;
}
</style>