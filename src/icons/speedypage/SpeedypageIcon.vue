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
      <path d="M20.356 11.774a8.66 8.66 0 0 1-7.797 8.623C12.559 20.503 0 22.18 0 22.18l1.383-4.978 10.192-1.544v-.025a3.617 3.617 0 0 0 3.405-3.807 3.44 3.44 0 0 0-.212-1.01h5.534c.054.318.054.638.054.958zm-16.686.452c0-4.444 3.381-8.171 7.797-8.623C11.467 3.471 24 1.82 24 1.82l-1.41 4.978-10.19 1.57v.025a3.556 3.556 0 0 0-3.353 3.781c.026.346.08.664.214.984H3.724c-.026-.32-.054-.612-.054-.932z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: speedypage
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for speedypage (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-speedypage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-speedypage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-speedypage 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-speedypage 3s ease-in-out infinite alternate;
}
</style>