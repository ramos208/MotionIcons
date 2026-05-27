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
      <path d="m7.386 14.957 2.279-1.316-.576-.333A1.48 1.48 0 0 1 8.334 12c0-.262.073-.915.755-1.308l10.31-5.953a1.49 1.49 0 0 1 1.51 0c.228.13.755.52.755 1.308v11.906c0 .788-.527 1.178-.754 1.308s-.828.393-1.51 0l-2.732-1.577-2.334 1.348 3.899 2.251a3.81 3.81 0 0 0 3.845 0A3.81 3.81 0 0 0 24 17.953V6.047a3.81 3.81 0 0 0-1.922-3.33 3.83 3.83 0 0 0-1.923-.52c-.66 0-1.32.173-1.922.52L7.923 8.67A3.81 3.81 0 0 0 6 12c0 1.17.51 2.234 1.386 2.956zm9.228-5.913-2.279 1.316.576.333c.682.393.755 1.046.755 1.308 0 .263-.073.915-.755 1.308l-10.31 5.954a1.49 1.49 0 0 1-1.51 0 1.48 1.48 0 0 1-.755-1.308V6.047c0-.788.527-1.178.754-1.308s.828-.393 1.51 0l2.732 1.577 2.334-1.348-3.899-2.251a3.81 3.81 0 0 0-3.845 0A3.81 3.81 0 0 0 0 6.047v11.906c0 1.39.72 2.635 1.922 3.33a3.83 3.83 0 0 0 1.923.52c.66 0 1.32-.173 1.922-.52l10.31-5.953A3.81 3.81 0 0 0 18 12c0-1.17-.51-2.234-1.386-2.956"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: perforce
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for perforce (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-perforce {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-perforce {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-perforce 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-perforce 3s ease-in-out infinite alternate;
}
</style>