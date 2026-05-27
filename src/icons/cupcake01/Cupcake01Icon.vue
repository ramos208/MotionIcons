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
      <path d="M6 13.5789L7.06237 18.0148C7.42652 19.5353 7.6086 20.2956 8.03895 20.8437C8.3231 21.2057 8.68075 21.4972 9.08605 21.6971C9.69988 22 10.4506 22 11.9521 22C13.5228 22 14.3081 22 14.9399 21.6754C15.3567 21.4613 15.7206 21.1498 16.0035 20.7652C16.4323 20.1822 16.5863 19.3783 16.8944 17.7706L18 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 10C8.04103 10.4949 6 9.5 6.48618 7.54383M6.48618 7.54383C5.07413 7.78754 4 9.51833 4 11C4 12.6569 5 14 7 14C9 14 16 13 16 13C18.5 12.5 20 11 20 9.5C20 7.29086 18.2091 6 16 6C16 3.79086 14.2091 2 12 2C13 3 11.5 4.25 10 5C9 5.5 6.97235 5.58766 6.48618 7.54383Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cupcake01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cupcake01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cupcake01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-cupcake01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cupcake01 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cupcake01 3s ease-in-out infinite alternate;
}
</style>