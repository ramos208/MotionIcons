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
      <path d="M18.694 12.509h3.393c-.206-.846-.883-1.272-1.647-1.272-.883 0-1.5.48-1.746 1.272zm1.746 4.48c-2.238 0-3.679-1.57-3.679-3.648 0-2.024 1.501-3.662 3.693-3.662 2.211 0 3.546 1.532 3.546 3.569 0 .273-.027.626-.027.672h-5.346c.206.886.87 1.465 1.853 1.465.844 0 1.461-.366 1.853-.932l1.421.872c-.677 1.025-1.76 1.665-3.314 1.665m-6.179-3.634a1.89 1.89 0 00-1.906-1.884c-1.036 0-1.84.846-1.84 1.884 0 1.052.804 1.884 1.84 1.884 1.09 0 1.906-.832 1.906-1.884zm-.026 2.956c-.492.386-1.256.613-2.046.613a3.546 3.546 0 01-3.533-3.569c0-2.024 1.62-3.608 3.533-3.608.79 0 1.554.246 2.046.626v-2.91h1.892v9.368h-1.892v-.52M7.796 9.814H5.904v7.01h1.892v-7.01m-2.922 0v1.697H2.91v2.816c0 .626.285.872.93.872H4.88v1.625H3.706c-1.853 0-2.69-.832-2.69-2.404v-2.91H0V9.814a1.01 1.01 0 001.01-1.012V8.01h1.892v1.804h1.972m3.124-1.657c0 .632-.511 1.145-1.142 1.145-.63 0-1.142-.513-1.142-1.145 0-.633.511-1.145 1.142-1.145a1.135 1.135 0 011.142 1.145Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tide
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tide (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tide {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tide {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tide 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tide 3s ease-in-out infinite alternate;
}
</style>