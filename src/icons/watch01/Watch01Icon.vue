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
      <path d="M16 6L15.7276 4.91043C15.3931 3.5724 15.2258 2.90339 14.7499 2.49004C14.6973 2.44433 14.6423 2.40141 14.5852 2.36145C14.0688 2 13.3792 2 12 2C10.6208 2 9.93119 2 9.41476 2.36145C9.35765 2.40141 9.30268 2.44433 9.25006 2.49004C8.77415 2.90339 8.6069 3.5724 8.27239 4.91043L8 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 18L8.27239 19.0896C8.6069 20.4276 8.77415 21.0966 9.25006 21.51C9.30268 21.5557 9.35765 21.5986 9.41476 21.6386C9.93119 22 10.6208 22 12 22C13.3792 22 14.0688 22 14.5852 21.6386C14.6423 21.5986 14.6973 21.5557 14.7499 21.51C15.2258 21.0966 15.3931 20.4276 15.7276 19.0896L16 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 10V12.005L13 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: watch01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for watch01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-watch01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-watch01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-watch01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-watch01 3s ease-in-out infinite alternate;
}
</style>