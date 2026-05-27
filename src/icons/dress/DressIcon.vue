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
      <path d="M214.7,209.7a1.89,1.89,0,0,0-.11-.25l-45.48-96.86,20.5-32.18a1.74,1.74,0,0,0,.11-.18,16,16,0,0,0,0-16.46c-.09-.16-.2-.32-.3-.47L168,32.7V8a8,8,0,0,0-16,0V32.42L146.74,39a24,24,0,0,1-37.48,0L104,32.42V8A8,8,0,0,0,88,8V32.7L66.58,63.3c-.1.15-.21.31-.3.47a16,16,0,0,0,0,16.46,1.74,1.74,0,0,0,.11.18l20.5,32.18L41.41,209.45a1.89,1.89,0,0,0-.11.25A16,16,0,0,0,56,232H200a16,16,0,0,0,14.71-22.3ZM80,72,96.43,48.57l.33.42a40,40,0,0,0,62.48,0l.33-.42L176,72l-20.38,32H100.39ZM56,216l45.07-96h53.84L200,216Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dress
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dress (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dress {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dress {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dress 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dress 3s ease-in-out infinite alternate;
}
</style>