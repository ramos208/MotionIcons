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
      <path d="M12 22V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.00195 18.002C7.3451 18.002 6.00195 16.6234 6.00195 14.9665C4.30581 14.7239 3.00195 13.2652 3.00195 11.502C3.00195 10.0052 3.94147 8.7279 5.26293 8.22759C5.09522 7.85339 5.00195 7.43856 5.00195 7.00195C5.00195 5.3451 6.3451 4.00195 8.00195 4.00195C8.3922 4.00195 8.76505 4.07647 9.10703 4.21204C9.45374 2.93842 10.6185 2.00195 12.002 2.00195C13.3854 2.00195 14.5502 2.93842 14.8969 4.21204C15.2389 4.07647 15.6117 4.00195 16.002 4.00195C17.6588 4.00195 19.002 5.3451 19.002 7.00195C19.002 7.43856 18.9087 7.85339 18.741 8.22759C20.0624 8.7279 21.002 10.0052 21.002 11.502C21.002 13.2653 19.698 14.724 18.0017 14.9665C18.0017 16.6234 16.6588 18.002 15.002 18.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 15L14.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 13L9.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 22H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tree06
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tree06 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tree06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tree06 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tree06 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tree06 3s ease-in-out infinite alternate;
}
</style>