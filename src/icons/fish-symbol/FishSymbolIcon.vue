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
      <path d="M3 16.0455C4.09676 16.2648 5.63538 16.5182 7.34198 16.658M7.34198 16.658C11.1422 16.9694 15.7753 16.7182 18.2175 14.276C20.6332 11.8603 21.0701 8.78509 20.9916 6.28838C20.9477 4.89219 20.9257 4.1941 20.3658 3.63419C19.8059 3.07429 19.1078 3.05233 17.7116 3.00841C15.2149 2.92988 12.1397 3.36684 9.72401 5.78251C7.28181 8.2247 7.03055 12.8578 7.34198 16.658ZM7.34198 16.658C7.48184 18.3646 7.73518 19.9032 7.95453 21M11.1396 5.07472C11.1677 6.82198 12.025 8.79129 13.6169 10.3831C15.2087 11.975 17.178 12.8323 18.9253 12.8604" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.5 6.5V6.375M15.75 6.5C15.75 6.63807 15.6381 6.75 15.5 6.75C15.3619 6.75 15.25 6.63807 15.25 6.5C15.25 6.36193 15.3619 6.25 15.5 6.25C15.6381 6.25 15.75 6.36193 15.75 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fish-symbol
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fish-symbol (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fish-symbol {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fish-symbol {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fish-symbol 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fish-symbol 3s ease-in-out infinite alternate;
}
</style>