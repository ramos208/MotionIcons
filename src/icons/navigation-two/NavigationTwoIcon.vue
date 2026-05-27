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
      <path d="M9.15858 7.1499L5.88425 14.6171C4.33136 18.1585 3.55491 19.9292 4.2651 20.64C4.35565 20.7306 4.45769 20.8098 4.5688 20.8756C5.44023 21.3918 7.05803 20.2738 10.2936 18.0379C11.0739 17.4987 11.464 17.2291 11.9067 17.2031C11.9689 17.1995 12.0313 17.1995 12.0935 17.2031C12.5362 17.2291 12.9263 17.4987 13.7066 18.0379C16.9421 20.2738 18.5598 21.3917 19.4312 20.8755C19.5424 20.8097 19.6444 20.7305 19.735 20.6399C20.4451 19.9291 19.6687 18.1584 18.1158 14.6172L14.8415 7.14995C13.6283 4.38332 13.0217 3.00001 12 3C10.9783 2.99999 10.3717 4.38329 9.15858 7.1499Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: navigation-two
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for navigation-two (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-navigation-two {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-navigation-two {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-navigation-two 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-navigation-two 3s ease-in-out infinite alternate;
}
</style>