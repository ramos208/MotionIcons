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
      <path d="M0 5.358a.854.854 0 0 1 1.235-.767L6.134 7.05v5.768c0 .81.456 1.553 1.179 1.915l4.42 2.218v1.692a.853.853 0 0 1-1.235.766L1.18 14.732A2.14 2.14 0 0 1 0 12.817zm6.134 0a.853.853 0 0 1 1.235-.766l4.898 2.458v5.768c0 .81.457 1.552 1.18 1.915l4.42 2.218v1.692a.853.853 0 0 1-1.235.765l-4.899-2.457v-5.769a2.14 2.14 0 0 0-1.179-1.914L6.134 7.05zm6.133 0a.853.853 0 0 1 1.235-.766l9.319 4.676A2.14 2.14 0 0 1 24 11.182v7.46a.853.853 0 0 1-1.235.766l-4.899-2.457v-5.769a2.14 2.14 0 0 0-1.179-1.914l-4.42-2.218z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: plane
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for plane (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-plane {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-plane {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-plane 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-plane 3s ease-in-out infinite alternate;
}
</style>