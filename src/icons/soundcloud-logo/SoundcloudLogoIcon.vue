<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M24,120v48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM48,88a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V96A8,8,0,0,0,48,88Zm32-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V88A8,8,0,0,0,80,80Zm32-32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V56A8,8,0,0,0,112,48Zm110.84,58.34A80,80,0,0,0,144,40a8,8,0,0,0,0,16,63.76,63.76,0,0,1,63.68,57.53,8,8,0,0,0,6.44,7A32,32,0,0,1,208,184H144a8,8,0,0,0,0,16h64a48,48,0,0,0,14.84-93.66Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: soundcloud-logo
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for soundcloud-logo (phosphor). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-soundcloud-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-soundcloud-logo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-soundcloud-logo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-soundcloud-logo 3s ease-in-out infinite alternate;
}
</style>