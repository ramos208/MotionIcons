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
      <path d="M17.7749 9.6488L15.8493 7.72321C14.0338 5.90774 13.1261 5 11.9981 5C10.8701 5 9.96237 5.90774 8.1469 7.72321L6.2213 9.6488C4.40583 11.4643 3.49809 12.372 3.49809 13.5C3.49809 14.628 4.40583 15.5357 6.2213 17.3512L8.1469 19.2768C9.96237 21.0923 10.8701 22 11.9981 22C13.1261 22 14.0338 21.0923 15.8493 19.2768L17.7749 17.3512C19.5904 15.5357 20.4981 14.628 20.4981 13.5C20.4981 12.372 19.5904 11.4643 17.7749 9.6488Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.7481 8.75L11.9981 13.5M11.9981 13.5L7.24809 18.25M11.9981 13.5L7.24809 8.75M11.9981 13.5L16.7481 18.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 2C12.6 2.24 12 4.3 12 5C11.8333 4.4 11 3.2 9 3.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ketupat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ketupat (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ketupat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-ketupat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ketupat 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ketupat 3s ease-in-out infinite alternate;
}
</style>