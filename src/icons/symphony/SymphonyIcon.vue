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
      <path d="M20.471 8.118v-4.22c0-.864-.468-1.677-1.22-2.12C18.124 1.113 15.684 0 12 0S5.876 1.113 4.75 1.777a2.476 2.476 0 0 0-1.22 2.12v6.338l13.412 3.882v2.824c0 .382-.24.65-.648.849L12 19.941l-4.315-2.162c-.386-.188-.626-.456-.626-.838v-2.118L3.53 13.764v3.177c0 1.744 1 3.228 2.588 4.001L12 24l5.86-3.047c1.61-.784 2.61-2.268 2.61-4.011v-5.294L7.059 7.765V4.542C8.017 4.08 9.651 3.529 12 3.529c2.349 0 3.983.55 4.941 1.013v2.517l3.53 1.059z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: symphony
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for symphony (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-symphony {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-symphony {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-symphony 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-symphony 3s ease-in-out infinite alternate;
}
</style>