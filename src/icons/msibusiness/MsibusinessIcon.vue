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
      <path d="m15.215 10.794 3.78 2.416h-2.663l-3.78-2.416h2.663zM5.656 8.518l-.438 1.626-.175.65-.652 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H5.656zm6.06 5.342-.437 1.622h4.947l2.543-1.622h-7.053zm3.556-5.342-2.548 1.626h7.086l.438-1.626h-4.976zm6.86 0-.438 1.626-.175.65-.651 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65L24 8.518h-1.868zm-20.255 0-.438 1.626-.175.65-.651 2.416-.175.65L0 15.482h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H1.877zm7.536 0-.438 1.626-.175.65-.651 2.416-.175.65-.437 1.622h1.869l.437-1.622.175-.65.651-2.416.175-.65.438-1.626H9.413z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: msibusiness
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for msibusiness (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-msibusiness {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-msibusiness {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-msibusiness 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-msibusiness 3s ease-in-out infinite alternate;
}
</style>