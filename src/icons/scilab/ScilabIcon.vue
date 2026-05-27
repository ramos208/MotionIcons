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
      <path d="M3.813 1.803c-1.103 0-1.99.888-1.99 1.99v16.414c0 1.102.887 1.99 1.99 1.99h16.375c1.102 0 1.99-.888 1.99-1.99V3.793c0-1.102-.888-1.99-1.99-1.99zm8.82 1.234a1.802 1.825 0 0 1 1.803 1.824 1.802 1.825 0 0 1-1.803 1.827A1.802 1.825 0 0 1 10.83 4.86a1.802 1.825 0 0 1 1.803-1.824Zm2.986 3.496a1.802 1.825 0 0 1 1.803 1.826 1.802 1.825 0 0 1-1.803 1.825 1.802 1.825 0 0 1-1.803-1.825 1.802 1.825 0 0 1 1.803-1.826Zm-7.346.26a1.802 1.825 0 0 1 1.803 1.824 1.802 1.825 0 0 1-1.803 1.826 1.802 1.825 0 0 1-1.802-1.826 1.802 1.825 0 0 1 1.802-1.824Zm3.98 2.633a1.802 1.825 0 0 1 1.804 1.826 1.802 1.825 0 0 1-1.803 1.824 1.802 1.825 0 0 1-1.803-1.824 1.802 1.825 0 0 1 1.803-1.826zm7.044.053a1.802 1.825 0 0 1 1.803 1.826 1.802 1.825 0 0 1-1.803 1.824 1.802 1.825 0 0 1-1.8-1.824 1.802 1.825 0 0 1 1.8-1.826zm-3.402 2.535a1.802 1.825 0 0 1 1.802 1.826 1.802 1.825 0 0 1-1.802 1.824 1.802 1.825 0 0 1-1.803-1.824 1.802 1.825 0 0 1 1.803-1.826zm-11.614.953a1.802 1.825 0 0 1 1.803 1.826 1.802 1.825 0 0 1-1.803 1.824 1.802 1.825 0 0 1-1.802-1.824 1.802 1.825 0 0 1 1.802-1.826Zm15.518.93a1.802 1.825 0 0 1 1.803 1.824 1.802 1.825 0 0 1-1.803 1.826 1.802 1.825 0 0 1-1.803-1.826 1.802 1.825 0 0 1 1.803-1.825zM7.81 15.665a1.802 1.825 0 0 1 1.802 1.824 1.802 1.825 0 0 1-1.802 1.826 1.802 1.825 0 0 1-1.803-1.826 1.802 1.825 0 0 1 1.803-1.824ZM3.564 0A3.556 3.556 0 0 0 0 3.564v16.872A3.556 3.556 0 0 0 3.564 24h16.872A3.556 3.556 0 0 0 24 20.436V3.564A3.556 3.556 0 0 0 20.436 0Zm-.002 1.021h16.875a2.536 2.536 0 0 1 2.542 2.542v16.875a2.536 2.536 0 0 1-2.542 2.54H3.563a2.536 2.536 0 0 1-2.54-2.54V3.563a2.536 2.536 0 0 1 2.54-2.542z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scilab
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scilab (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scilab {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scilab {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scilab 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scilab 3s ease-in-out infinite alternate;
}
</style>