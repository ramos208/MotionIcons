<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M11.5 8.45596V9L17.5 9C18.4319 9 18.8978 9 19.2654 9.15224C19.7554 9.35523 20.1448 9.74458 20.3478 10.2346C20.5 10.6022 20.5 11.0681 20.5 12C20.5 12.9319 20.5 13.3978 20.3478 13.7654C20.1448 14.2554 19.7554 14.6448 19.2654 14.8478C18.8978 15 18.4319 15 17.5 15H11.5V15.544C11.5 17.6268 11.5 18.6681 10.8997 18.9422C10.2994 19.2163 9.58174 18.5026 8.14642 17.0751L4.58281 13.5311C3.86094 12.8132 3.5 12.4542 3.5 12C3.5 11.5458 3.86094 11.1868 4.58281 10.4689L8.14643 6.92487C9.58175 5.49743 10.2994 4.78372 10.8997 5.05779C11.5 5.33185 11.5 6.37322 11.5 8.45596Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: arrow-left-big
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for arrow-left-big (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-arrow-left-big {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-arrow-left-big {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-arrow-left-big 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-arrow-left-big 3s ease-in-out infinite alternate;
}
</style>