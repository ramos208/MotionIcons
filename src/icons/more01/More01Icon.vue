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
      <path d="M6.00449 6.5V6M7.00449 6.5C7.00449 5.94772 6.55677 5.5 6.00449 5.5C5.4522 5.5 5.00449 5.94772 5.00449 6.5C5.00449 7.05228 5.4522 7.5 6.00449 7.5C6.55677 7.5 7.00449 7.05228 7.00449 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.00449 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.00449 18.5V18M7.00449 18.5C7.00449 17.9477 6.55677 17.5 6.00449 17.5C5.4522 17.5 5.00449 17.9477 5.00449 18.5C5.00449 19.0523 5.4522 19.5 6.00449 19.5C6.55677 19.5 7.00449 19.0523 7.00449 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.0045 6.5V6M19.0045 6.5C19.0045 5.94772 18.5568 5.5 18.0045 5.5C17.4522 5.5 17.0045 5.94772 17.0045 6.5C17.0045 7.05228 17.4522 7.5 18.0045 7.5C18.5568 7.5 19.0045 7.05228 19.0045 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.0045 12.5V12M19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0045 12.5V12M13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0045 6.5V6M13.0045 6.5C13.0045 5.94772 12.5568 5.5 12.0045 5.5C11.4522 5.5 11.0045 5.94772 11.0045 6.5C11.0045 7.05228 11.4522 7.5 12.0045 7.5C12.5568 7.5 13.0045 7.05228 13.0045 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18.0045 18.5V18M19.0045 18.5C19.0045 17.9477 18.5568 17.5 18.0045 17.5C17.4522 17.5 17.0045 17.9477 17.0045 18.5C17.0045 19.0523 17.4522 19.5 18.0045 19.5C18.5568 19.5 19.0045 19.0523 19.0045 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0045 18.5V18M13.0045 18.5C13.0045 17.9477 12.5568 17.5 12.0045 17.5C11.4522 17.5 11.0045 17.9477 11.0045 18.5C11.0045 19.0523 11.4522 19.5 12.0045 19.5C12.5568 19.5 13.0045 19.0523 13.0045 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: more01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for more01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-more01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-more01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-more01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-more01 3s ease-in-out infinite alternate;
}
</style>