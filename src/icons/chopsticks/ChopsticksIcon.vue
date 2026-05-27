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
      <path d="M16.4548 9.76893L18.1572 11.4713M13.7311 8.04518L12.0287 6.34283M20.5523 7.05701L21.2095 7.71427C21.6057 8.11046 21.5952 8.75196 21.1865 9.12111L8.30613 20.7545C7.92529 21.0985 7.33645 21.0787 6.96729 20.7095L6.93352 20.6758C6.55091 20.2932 6.54562 19.6781 6.92169 19.3021L19.1786 7.04518C19.5546 6.6691 20.1697 6.6744 20.5523 7.05701ZM16.443 3.94772L15.7857 3.29045C15.3895 2.89426 14.748 2.90477 14.3789 3.3135L2.74549 16.1939C2.40152 16.5747 2.4213 17.1636 2.79046 17.5327L2.82423 17.5665C3.20683 17.9491 3.82186 17.9544 4.19793 17.5783L16.4548 5.32142C16.8309 4.94535 16.8256 4.33032 16.443 3.94772Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chopsticks
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for chopsticks (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chopsticks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chopsticks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chopsticks 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-chopsticks 3s ease-in-out infinite alternate;
}
</style>