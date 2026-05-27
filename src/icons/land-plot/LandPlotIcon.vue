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
      <path d="M15.4835 11.5L18.9129 13.4117C20.971 14.5591 22.0001 15.1327 22.0001 16.0001C22.0001 16.8675 20.971 17.4412 18.9129 18.5886L14.9668 20.7884C13.5176 21.5962 12.7931 22.0001 12.0001 22.0001C11.2071 22.0001 10.4825 21.5962 9.03335 20.7884L5.08727 18.5886C3.02913 17.4412 2.00006 16.8675 2.00006 16.0001C2.00006 15.1327 3.02913 14.5591 5.08727 13.4117L8.51657 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.25 12.75L6.75 19.25M6.75 12.75L17.25 19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0001 12V8.46038M12.0001 8.46038L12.0001 4.55707C12.0001 3.12848 12.0001 2.41418 12.4527 2.11609C12.9053 1.818 13.5312 2.12007 14.7831 2.7242L15.5367 3.08788C17.1789 3.88042 18.0001 4.27669 18.0001 4.92076C18.0001 5.56483 17.1789 5.9611 15.5367 6.75364L12.0001 8.46038Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: land-plot
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for land-plot (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-land-plot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-land-plot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-land-plot 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-land-plot 3s ease-in-out infinite alternate;
}
</style>