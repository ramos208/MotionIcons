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
      <path d="M11.995.005c-.58 0-1.158.228-1.615.685L.685 10.385c-.913.913-.913 2.318 0 3.231l.842.843 8.01-8.15a3.435 3.435 0 0 1 4.847 0l8.079 8.08.842-.843c.914-.843.915-2.248.072-3.161L13.612.69a2.279 2.279 0 0 0-1.617-.685zm0 6.463c-.58 0-1.158.228-1.615.684L.685 16.848c-.913.913-.913 2.318 0 3.23l3.231 3.232c.914.913 2.318.913 3.232 0l4.847-4.846 4.848 4.846c.913.913 2.318.913 3.231 0l3.231-3.231c.914-.843.915-2.318.072-3.231l-9.765-9.696a2.279 2.279 0 0 0-1.617-.684z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: paloaltosoftware
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for paloaltosoftware (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-paloaltosoftware {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-paloaltosoftware {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-paloaltosoftware 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-paloaltosoftware 3s ease-in-out infinite alternate;
}
</style>