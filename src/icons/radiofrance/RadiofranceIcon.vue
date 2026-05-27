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
      <path d="M12 24C6.144 24 1.397 19.497 1.397 13.94a9.6 9.6 0 0 1 .208-1.991h5.99a4.4 4.4 0 0 0-.474 1.991c0 2.557 2.184 4.63 4.88 4.63.6 0 1.175-.104 1.706-.292v5.592Q12.872 24 12 24m10.355-7.888H16.31a4.4 4.4 0 0 0 .57-2.172c0-2.557-2.184-4.63-4.879-4.63-.504 0-.99.073-1.448.208V0h5.25v4.546c3.978 1.45 6.802 5.109 6.802 9.394a9.6 9.6 0 0 1-.249 2.172"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: radiofrance
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for radiofrance (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-radiofrance {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-radiofrance {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-radiofrance 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-radiofrance 3s ease-in-out infinite alternate;
}
</style>