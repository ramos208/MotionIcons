<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M2.5 11.9999C2.5 7.52157 2.5 5.28239 3.89124 3.89115C5.28249 2.49991 7.52166 2.49991 12 2.49991C16.4783 2.49991 18.7175 2.49991 20.1088 3.89115C21.5 5.28239 21.5 7.52157 21.5 11.9999C21.5 16.4783 21.5 18.7174 20.1088 20.1087C18.7175 21.4999 16.4783 21.4999 12 21.4999C7.52166 21.4999 5.28249 21.4999 3.89124 20.1087C2.5 18.7174 2.5 16.4783 2.5 11.9999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.8008 15.8009L8.19915 8.19919M15.8008 15.8009C16.2444 15.3573 15.8098 13.2652 15.8008 12.6335M15.8008 15.8009C15.3573 16.2445 13.2652 15.8099 12.6335 15.8009M8.19915 8.19919C8.64273 7.75561 10.7348 8.19021 11.3665 8.19919M8.19915 8.19919C7.75558 8.64276 8.19018 10.7348 8.19915 11.3666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: square-arrow-diagonal02
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for square-arrow-diagonal02 (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-square-arrow-diagonal02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-square-arrow-diagonal02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-square-arrow-diagonal02 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-square-arrow-diagonal02 3s ease-in-out infinite alternate;
}
</style>