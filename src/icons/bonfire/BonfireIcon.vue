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
      <path d="M9 14C9 15.6099 10.3771 16 12.0758 16C14.9661 16 15.9206 14.3333 13.9982 11C11.3069 14 10.9224 9.33333 11.3069 8C10.1534 10 9 11.8785 9 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 16C15.1559 16 17 13.9024 17 10.3125C17 6.72265 12 3 12 3C12 3 7 6.72265 7 10.3125C7 13.9024 8.84409 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.27258 21.0703L19.7274 16.9292" stroke="currentColor" stroke-linecap="round"/><path d="M4.27259 16.9292L12 18.9998" stroke="currentColor" stroke-linecap="round"/><path d="M19.7274 21.0703L15.8637 20.035" stroke="currentColor" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bonfire
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bonfire (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bonfire {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bonfire {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bonfire 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bonfire 3s ease-in-out infinite alternate;
}
</style>