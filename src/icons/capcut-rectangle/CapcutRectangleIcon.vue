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
      <path d="M10.8 11.9999L6 14.4999C6 15.6784 6 15.7676 6.35155 16.1338C6.7031 16.4999 7.2689 16.4999 8.40052 16.4999H13.2016C14.3332 16.4999 14.899 16.4999 15.2505 16.1338C15.6021 15.7676 15.6021 15.6784 15.6021 14.4999M10.8 11.9999L18 8.24988M10.8 11.9999L6 9.49988C6 8.32137 6 8.23211 6.35155 7.86599C6.7031 7.49988 7.2689 7.49988 8.40052 7.49988H13.2016C14.3332 7.49988 14.899 7.49988 15.2505 7.86599C15.6021 8.23211 15.6021 8.32137 15.6021 9.49988M10.8 11.9999L18 15.7499" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.4978 11.9999C2.4978 7.52154 2.4978 5.28236 3.88905 3.89112C5.28029 2.49988 7.51946 2.49988 11.9978 2.49988C16.4761 2.49988 18.7153 2.49988 20.1066 3.89112C21.4978 5.28236 21.4978 7.52154 21.4978 11.9999C21.4978 16.4782 21.4978 18.7174 20.1066 20.1086C18.7153 21.4999 16.4761 21.4999 11.9978 21.4999C7.51946 21.4999 5.28029 21.4999 3.88905 20.1086C2.4978 18.7174 2.4978 16.4782 2.4978 11.9999Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: capcut-rectangle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for capcut-rectangle (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-capcut-rectangle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-capcut-rectangle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-capcut-rectangle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-capcut-rectangle 3s ease-in-out infinite alternate;
}
</style>