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
      <path d="M12.367 2.453a.822.822 0 0 0-.576.238L.241 14.213a.822.822 0 0 0-.241.584v.066c0-.323.209-.608.516-.709l7.275-2.318a2.437 2.437 0 0 0 1.584-1.592l2.318-7.267a.757.757 0 0 1 .719-.524zM0 14.863v5.047c0 .904.733 1.637 1.637 1.637h20.726c.904 0 1.637-.733 1.637-1.637V4.09c0-.904-.733-1.637-1.637-1.637h-9.951v.5l.088 9.861c.01 1.175-.962 2.14-2.137 2.14L0 14.862zM12 3.66l-2.148 6.735v.001a2.94 2.94 0 0 1-1.909 1.916l-6.716 2.141h9.136c.905 0 1.638-.734 1.637-1.639zm-10.363.975c-.905 0-1.638.734-1.637 1.638v7.473l9.135-9.111Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: files
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for files (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-files {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-files {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-files 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-files 3s ease-in-out infinite alternate;
}
</style>