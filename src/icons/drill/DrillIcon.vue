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
      <path d="M10 11H6C5.07003 11 4.60504 11 4.22354 10.8978C3.18827 10.6204 2.37962 9.81173 2.10222 8.77646C2 8.39496 2 7.92997 2 7C2 6.07003 2 5.60504 2.10222 5.22354C2.37962 4.18827 3.18827 3.37962 4.22354 3.10222C4.60504 3 5.07003 3 6 3H10C11.8856 3 12.8284 3 13.4142 3.58579C14 4.17157 14 5.11438 14 7C14 8.88562 14 9.82843 13.4142 10.4142C12.8284 11 11.8856 11 10 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 20V19C2 18.4477 2.44772 18 3 18H9C10.1046 18 11 18.8954 11 20C11 20.5523 10.5523 21 10 21H3C2.44772 21 2 20.5523 2 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 11V12C11 13.1046 11.8954 14 13 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3 18L5 11H9L7 18H3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 7H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 9H16C16.465 9 16.6975 9 16.8882 8.94889C17.4059 8.81019 17.8102 8.40587 17.9489 7.88823C18 7.69748 18 7.46499 18 7C18 6.53501 18 6.30252 17.9489 6.11177C17.8102 5.59413 17.4059 5.18981 16.8882 5.05111C16.6975 5 16.465 5 16 5H14V9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: drill
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for drill (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-drill {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-drill {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-drill 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-drill 3s ease-in-out infinite alternate;
}
</style>