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
      <path d="M16.028 15.798c-.212-.065-.228-.359.017-.457 4.216-1.993 3.938-6.519 3.938-6.519C19.967 4.232 16.6-.016 11.158 0 5.112.033 1.468 4.787 1.5 10.407 1.55 20.26 9.067 24.017 11.42 24l-.016-3.905c0-.62 0-1.11.375-1.11 0 0 2.42 2.434 5.116 2.417 4.183-.016 5.605-3.529 5.605-3.529zm-4.837-3.006a3.86 3.86 0 0 1-3.89-3.855 3.86 3.86 0 0 1 3.857-3.889 3.86 3.86 0 0 1 3.89 3.856c0 2.14-1.716 3.888-3.857 3.888z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rapid
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rapid (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rapid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rapid {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rapid 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rapid 3s ease-in-out infinite alternate;
}
</style>