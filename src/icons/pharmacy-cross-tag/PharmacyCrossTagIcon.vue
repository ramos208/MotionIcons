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
      <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.9 18H10.1C9.76863 18 9.5 17.7314 9.5 17.4V15.1C9.5 14.7686 9.23137 14.5 8.9 14.5H6.6C6.26863 14.5 6 14.2314 6 13.9V10.1C6 9.76863 6.26863 9.5 6.6 9.5H8.9C9.23137 9.5 9.5 9.23137 9.5 8.9V6.6C9.5 6.26863 9.76863 6 10.1 6H13.9C14.2314 6 14.5 6.26863 14.5 6.6V8.9C14.5 9.23137 14.7686 9.5 15.1 9.5H17.4C17.7314 9.5 18 9.76863 18 10.1V13.9C18 14.2314 17.7314 14.5 17.4 14.5H15.1C14.7686 14.5 14.5 14.7686 14.5 15.1V17.4C14.5 17.7314 14.2314 18 13.9 18Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pharmacy-cross-tag
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pharmacy-cross-tag (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pharmacy-cross-tag {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pharmacy-cross-tag {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pharmacy-cross-tag 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pharmacy-cross-tag 3s ease-in-out infinite alternate;
}
</style>