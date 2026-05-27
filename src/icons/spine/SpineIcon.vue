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
      <path d="M7.157 2.207c.066 2.004 1.454 3.117 4.221 3.55 2.345.368 4.46.181 5.151-1.829C17.874.01 14.681.985 11.915.55S7.051-1.013 7.157 2.207m.831 8.23c.257 1.497 1.652 2.355 3.786 2.297 2.135-.059 3.728-.892 3.949-2.507.409-2.988-1.946-1.832-4.08-1.774-2.136.059-4.161-.952-3.655 1.984m2.778 6.852c.424 1.117 1.587 1.589 3.159 1.253 1.569-.335 2.656-.856 2.568-2.129-.159-2.357-1.713-1.616-3.283-1.279-1.571.333-3.272-.039-2.444 2.155m1.348 5.221c.123.943.939 1.5 2.215 1.49 1.279-.011 2.248-.515 2.412-1.525.308-1.871-1.123-1.175-2.4-1.165-1.28.01-2.47-.65-2.227 1.2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: spine
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for spine (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-spine {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-spine {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-spine 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-spine 3s ease-in-out infinite alternate;
}
</style>