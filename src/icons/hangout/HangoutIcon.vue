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
      <path d="M12 22C16 22 21 16 21 11C21 6 16.9706 2 12 2C7.02944 2 3 6 3 11C3 16 7.02944 20 12 20V22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 11.5V10C10.5 9.05719 10.5 8.58579 10.2071 8.29289C9.91421 8 9.44281 8 8.5 8C7.55719 8 7.08579 8 6.79289 8.29289C6.5 8.58579 6.5 9.05719 6.5 10V10.5C6.5 10.9659 6.5 11.1989 6.57612 11.3827C6.67761 11.6277 6.87229 11.8224 7.11732 11.9239C7.30109 12 7.8312 12 8.29714 12C8.51058 12.9056 8 14 8 14C9.38071 14 10.5 12.8807 10.5 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5 11.5V10C17.5 9.05719 17.5 8.58579 17.2071 8.29289C16.9142 8 16.4428 8 15.5 8C14.5572 8 14.0858 8 13.7929 8.29289C13.5 8.58579 13.5 9.05719 13.5 10V10.5C13.5 10.9659 13.5 11.1989 13.5761 11.3827C13.6776 11.6277 13.8723 11.8224 14.1173 11.9239C14.3011 12 14.8312 12 15.2971 12C15.5106 12.9056 15 14 15 14C16.3807 14 17.5 12.8807 17.5 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hangout
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hangout (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hangout {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hangout {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hangout 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hangout 3s ease-in-out infinite alternate;
}
</style>