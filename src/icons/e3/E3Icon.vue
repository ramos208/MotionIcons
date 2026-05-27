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
      <path d="M11.0676 16.5185H4.7723v-2.6738h6.2615v-3.757H4.7723v-2.64h6.2615V3.691H0v16.6184h14.1476c0-.0339-2.7754-.7108-3.08-3.7908zm10.12-6.3969c1.8954 1.2862 2.8769 2.5385 2.8092 5.1108-.0677 2.6738-2.7754 5.043-5.72 5.043-2.0984 0-4.7723-.9477-5.7876-3.7569l3.4861-1.5569c.4738.88 1.1508 1.557 2.2 1.557 1.1507 0 1.9969-.88 2.0984-1.997.0339-.2708-.1353-2.2338-2.0984-2.3015l-2.2-.237 2.8092-4.5353h-6.3292v-3.757h11.5415z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: e3
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for e3 (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-e3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-e3 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-e3 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-e3 3s ease-in-out infinite alternate;
}
</style>