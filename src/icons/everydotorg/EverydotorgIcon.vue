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
      <path d="M18.151 9.36c0-4.467-3.728-7.855-8.517-7.855C4.278 1.505 0 6.028 0 11.63c0 6.038 4.808 10.864 11.28 10.864 6.474 0 12.266-5.13 12.72-11.848h-2.953c-.549 5.034-4.807 8.896-9.766 8.896-4.77 0-8.31-3.502-8.31-7.912 0-3.975 2.953-7.174 6.663-7.174 3.104 0 5.546 2.12 5.546 4.903 0 2.309-1.666 4.24-3.88 4.24v2.952c3.918 0 6.851-3.274 6.851-7.192"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: everydotorg
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for everydotorg (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-everydotorg {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-everydotorg {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-everydotorg 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-everydotorg 3s ease-in-out infinite alternate;
}
</style>