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
      <path d="M2.783 0h18.434c1.352 0 2.478.963 2.73 2.24a17.127 17.127 0 0 1-3.2 4.42 16.918 16.918 0 0 1-8.399 4.605V3.304h-.696V11.4c-.976.169-1.965.253-2.956.252v.696c1.011 0 1.998.086 2.956.252v8.096h.696v-7.961a16.918 16.918 0 0 1 8.399 4.605 17.127 17.127 0 0 1 3.2 4.42 2.783 2.783 0 0 1-2.73 2.24H2.783A2.783 2.783 0 0 1 0 21.217V2.783A2.783 2.783 0 0 1 2.783 0Zm18.456 7.152A17.712 17.712 0 0 0 24 3.572v16.856a17.712 17.712 0 0 0-2.761-3.58 17.802 17.802 0 0 0-8.891-4.815v-.066a17.802 17.802 0 0 0 8.891-4.815Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kaniko
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kaniko (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kaniko {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kaniko {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kaniko 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kaniko 3s ease-in-out infinite alternate;
}
</style>