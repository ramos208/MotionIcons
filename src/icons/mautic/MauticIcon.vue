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
      <path d="M12 0C5.394 0 0 5.374 0 12s5.394 12 12 12c6.626 0 12-5.394 12-11.98a11.88 11.88 0 0 0-.727-4.12.815.815 0 0 0-1.05-.486.815.815 0 0 0-.486 1.05c.425 1.132.627 2.324.627 3.556 0 5.717-4.647 10.364-10.364 10.364-5.717 0-10.363-4.647-10.363-10.364C1.637 6.303 6.283 1.657 12 1.657c1.374 0 2.707.262 3.98.787A.843.843 0 0 0 17.05 2a.843.843 0 0 0-.444-1.07A11.588 11.588 0 0 0 12 0zm8.08 4.323-3.595.707.646.647L12 11.111 7.616 6.606 5.091 17.051h2.343l1.394-5.799L12 14.707l6.788-7.394.646.667zm-2.828 6.445-1.858 1.94 1.03 4.343h2.344z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mautic
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mautic (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mautic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mautic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mautic 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mautic 3s ease-in-out infinite alternate;
}
</style>