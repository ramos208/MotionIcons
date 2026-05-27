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
      <path d="M2 19C2.02342 19.7767 2.11012 20.24 2.43105 20.5607C2.87077 21 3.57849 21 4.99393 21H7.965C8.74255 21 9.13132 21 9.17551 20.8603C9.2197 20.7206 8.88712 20.4868 8.22198 20.0192C5.86888 18.3648 3.99306 15.5091 3.99306 12.2636C3.99306 7.14744 7.57789 3 12 3C16.4221 3 20.0069 7.14744 20.0069 12.2636C20.0069 15.5091 18.1311 18.3648 15.778 20.0192C15.1129 20.4868 14.7803 20.7206 14.8245 20.8603C14.8687 21 15.2574 21 16.035 21H19.0061C20.4215 21 21.1292 21 21.5689 20.5607C21.8899 20.24 21.9766 19.7767 22 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: alphabet-greek
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for alphabet-greek (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-alphabet-greek {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-alphabet-greek {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-alphabet-greek 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-alphabet-greek 3s ease-in-out infinite alternate;
}
</style>