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
      <path d="M20.485 3.515C15.799-1.17 8.2-1.17 3.515 3.515c-4.687 4.686-4.687 12.285 0 16.97 4.685 4.686 12.284 4.686 16.97 0 4.687-4.685 4.687-12.284 0-16.97zm-5.81 14.433c-.252.252-1.25.562-1.25-.012 0-.573-.157-3.089-2.028-4.958-1.88-1.88-4.55-2.192-5.056-2.192-.506 0-.331-1-.078-1.252.253-.253.558-.15 1.064-.15 0 0 3.445.464 5.326 2.345 1.868 1.869 2.173 5.153 2.173 5.153 0 .463.102.813-.15 1.066zm4.022-.509c-.36.36-1.786.803-1.786-.015 0-.82-.224-4.41-2.893-7.079C11.335 7.662 7.524 7.217 6.8 7.217c-.723 0-.473-1.426-.113-1.787.361-.36.799-.214 1.52-.214 0 0 4.918.663 7.603 3.348 2.666 2.667 3.1 7.356 3.1 7.356 0 .658.147 1.158-.214 1.52z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hearthisdotat
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hearthisdotat (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hearthisdotat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hearthisdotat {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hearthisdotat 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hearthisdotat 3s ease-in-out infinite alternate;
}
</style>