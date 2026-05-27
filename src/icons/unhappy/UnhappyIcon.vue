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
      <path d="M9 16.9998C9.83563 16.372 10.8744 16 12 16C13.1256 16 14.1644 16.372 15 16.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 8.01067C7 8.01067 8.40944 7.88341 9.19588 8.50798M9.19588 8.50798L8.93275 9.34267C8.82896 9.67191 9.10031 10 9.4764 10C9.87165 10 10.1327 9.64338 9.92918 9.33476C9.74877 9.06118 9.50309 8.75196 9.19588 8.50798ZM14 8.01067C14 8.01067 15.4094 7.88341 16.1959 8.50798M16.1959 8.50798L15.9328 9.34267C15.829 9.67191 16.1003 10 16.4764 10C16.8717 10 17.1327 9.64338 16.9292 9.33476C16.7488 9.06118 16.5031 8.75196 16.1959 8.50798Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: unhappy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for unhappy (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-unhappy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-unhappy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-unhappy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-unhappy 3s ease-in-out infinite alternate;
}
</style>