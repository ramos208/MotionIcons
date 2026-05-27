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
      <path d="M10.0469 3.44865L15.4101 5.54728L15.4101 5.54728C18.5034 6.75771 20.05 7.36293 19.9988 8.32296C19.9475 9.28299 18.3334 9.7232 15.1051 10.6036C14.1439 10.8658 13.6633 10.9969 13.3301 11.3301C12.9969 11.6633 12.8658 12.1439 12.6036 13.1051C11.7232 16.3334 11.283 17.9475 10.323 17.9988C9.36293 18.05 8.75771 16.5034 7.54728 13.4101L7.54728 13.4101L5.44865 8.0469C4.18138 4.80831 3.54774 3.18901 4.36837 2.36837C5.18901 1.54774 6.80831 2.18138 10.0469 3.44865Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 21.99V22M16 15.9976C16 14.8944 16.8954 14 18 14C19.1046 14 20 14.8944 20 15.9976C20 16.5747 19.755 17.0946 19.3632 17.4593C18.7572 18.0234 18 18.666 18 19.4935" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cursor-info02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cursor-info02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cursor-info02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cursor-info02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cursor-info02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cursor-info02 3s ease-in-out infinite alternate;
}
</style>