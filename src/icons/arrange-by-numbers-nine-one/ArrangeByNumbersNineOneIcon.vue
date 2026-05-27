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
      <path d="M6.99988 21.0003V14.9491C6.99988 14.3746 6.99988 14.0873 6.76947 14.0158C6.26294 13.8587 5.49988 15 5.49988 15M6.99988 21.0003H5.49988M6.99988 21.0003H8.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.99988 6.50098V4.75098C8.99988 3.92602 8.99988 3.51354 8.70698 3.25726C8.41409 3.00098 7.94269 3.00098 6.99988 3.00098C6.05707 3.00098 5.58566 3.00098 5.29277 3.25726C4.99988 3.51354 4.99988 3.92602 4.99988 4.75098C4.99988 5.57593 4.99988 5.98841 5.29277 6.2447C5.58566 6.50098 6.05707 6.50098 6.99988 6.50098H8.99988ZM8.99988 6.50098V7.37598C8.99988 8.61341 8.99988 9.23213 8.56054 9.61655C8.1212 10.001 7.41409 10.001 5.99988 10.001H4.99988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.4999 20V4M16.4999 20C15.7997 20 14.4915 18.0057 13.9999 17.5M16.4999 20C17.2002 20 18.5084 18.0057 18.9999 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrange-by-numbers-nine-one
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for arrange-by-numbers-nine-one (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-arrange-by-numbers-nine-one {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-arrange-by-numbers-nine-one {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrange-by-numbers-nine-one 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-arrange-by-numbers-nine-one 3s ease-in-out infinite alternate;
}
</style>