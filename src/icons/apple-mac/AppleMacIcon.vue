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
      <path d="M16 2C16.3632 4.17921 14.0879 5.83084 12.8158 6.57142C12.4406 6.78988 12.0172 6.5117 12.0819 6.08234C12.2993 4.63878 13.0941 2.00008 16 2Z" stroke="currentColor"/><path d="M9 6.5C9.89676 6.5 10.6905 6.69941 11.2945 6.92013C12.0563 7.19855 12.9437 7.19854 13.7055 6.92012C14.3094 6.6994 15.1032 6.5 15.9999 6.5C17.0852 6.5 18.4649 7.08889 19.4999 8.26666C16 11 17 15.5 20.269 16.6916C19.2253 19.5592 17.2413 21.5 15.4999 21.5C13.9999 21.5 14 20.8 12.5 20.8C11 20.8 11 21.5 9.5 21.5C7 21.5 4 17.5 4 12.5C4 8.5 7 6.5 9 6.5Z" stroke="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: apple-mac
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for apple-mac (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-apple-mac {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-apple-mac {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-apple-mac 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-apple-mac 3s ease-in-out infinite alternate;
}
</style>