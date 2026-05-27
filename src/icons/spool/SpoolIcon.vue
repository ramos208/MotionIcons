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
      <path d="M7 11L19.5951 6.95157C20.4323 6.68248 21 5.90369 21 5.02434C21 3.90633 20.0937 3 18.9757 3H5.02434C3.90633 3 3 3.90633 3 5.02434C3 5.90369 3.5677 6.68248 4.40487 6.95157L4.91803 7.11651C5.92218 7.43927 6.42426 7.60066 6.71213 7.99556C7 8.39046 7 8.91784 7 9.97259V11ZM7 11V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 13L4.40487 17.0484C3.5677 17.3175 3 18.0963 3 18.9757C3 20.0937 3.90633 21 5.02434 21H18.9757C20.0937 21 21 20.0937 21 18.9757C21 18.0963 20.4323 17.3175 19.5951 17.0484L19.082 16.8835C18.0778 16.5607 17.5757 16.3993 17.2879 16.0044C17 15.6095 17 15.0822 17 14.0274V13ZM17 13V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: spool
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for spool (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-spool {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-spool {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-spool 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-spool 3s ease-in-out infinite alternate;
}
</style>