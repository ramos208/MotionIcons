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
      <path d="M2 21.9684C2.94975 21.9684 3.88858 22.0553 4.67843 21.4396C5.45232 20.8365 6.68304 20.8564 7.42654 21.4842C8.2373 22.1688 9.76776 22.1494 10.5969 21.5032C11.4013 20.8763 12.6209 20.804 13.4265 21.4842C14.3106 22.2306 15.8003 22.1241 16.6784 21.4396C17.4523 20.8365 18.683 20.8564 19.4265 21.4842C20.1427 22.0889 21.1197 21.9684 22 21.9684" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 17.9684C2.94975 17.9684 3.88858 18.0553 4.67843 17.4396C5.45232 16.8365 6.68304 16.8564 7.42654 17.4842C8.2373 18.1688 9.76776 18.1494 10.5969 17.5032C11.4013 16.8763 12.6209 16.804 13.4265 17.4842C14.3106 18.2306 15.8003 18.1241 16.6784 17.4396C17.4523 16.8365 18.683 16.8564 19.4265 17.4842C20.1427 18.0889 21.1197 17.9684 22 17.9684" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 14H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 14V3M6 3C5.75 3.66667 4.8 5.5 3 5.5M6 3C6.25 3.66667 7.2 5.5 9 5.5M3 8.5C4.8 8.5 5.75 6.66667 6 6C6.25 6.66667 7.2 8.5 9 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lake
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lake (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lake {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lake {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lake 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lake 3s ease-in-out infinite alternate;
}
</style>