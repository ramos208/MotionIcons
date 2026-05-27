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
      <path d="M11 5.5V2M11 12V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5 2.31844C12.7694 2.11067 11.9399 2 11 2C5 2 3.5 6.50998 3.5 12C3.5 17.49 5 22 11 22C17.0001 22 18.5 17.49 18.5 12C18.5 11.4906 18.4871 10.9897 18.4589 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.5 7C12.5 6.53406 12.5 6.30109 12.4239 6.11732C12.3224 5.87229 12.1277 5.67761 11.8827 5.57612C11.6989 5.5 11.4659 5.5 11 5.5C10.5341 5.5 10.3011 5.5 10.1173 5.57612C9.87229 5.67761 9.67761 5.87229 9.57612 6.11732C9.5 6.30109 9.5 6.53406 9.5 7V7.5C9.5 7.96594 9.5 8.19891 9.57612 8.38268C9.67761 8.62771 9.87229 8.82239 10.1173 8.92388C10.3011 9 10.5341 9 11 9C11.4659 9 11.6989 9 11.8827 8.92388C12.1277 8.82239 12.3224 8.62771 12.4239 8.38268C12.5 8.19891 12.5 7.96594 12.5 7.5V7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 12H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mouse-right-click05
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mouse-right-click05 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mouse-right-click05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mouse-right-click05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mouse-right-click05 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mouse-right-click05 3s ease-in-out infinite alternate;
}
</style>