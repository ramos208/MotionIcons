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
      <path d="M4.543 0A4.543 4.543 0 0 0 0 4.543v14.914A4.543 4.543 0 0 0 4.543 24h14.914A4.543 4.543 0 0 0 24 19.457V4.543A4.543 4.543 0 0 0 19.457 0H4.543zm10.715 2.572h3.086a3.326 3.326 0 0 1 .656.065 3.28 3.28 0 0 1 .898.326c.093.05.181.106.268.164.087.058.172.12.252.186a3.264 3.264 0 0 1 .789.96c.05.093.098.188.139.286a3.21 3.21 0 0 1 .187.61 3.276 3.276 0 0 1 .067.66v12.343a3.276 3.276 0 0 1-.146.97 3.21 3.21 0 0 1-.108.3 3.259 3.259 0 0 1-.301.552 3.28 3.28 0 0 1-.627.694c-.08.066-.165.127-.252.185a3.242 3.242 0 0 1-.553.3 3.222 3.222 0 0 1-1.27.255h-3.085a3.326 3.326 0 0 1-.658-.065 3.242 3.242 0 0 1-2.344-1.922 3.222 3.222 0 0 1-.256-1.27V5.829a3.324 3.324 0 0 1 .393-1.555 3.221 3.221 0 0 1 1.04-1.146 3.241 3.241 0 0 1 .553-.3 3.26 3.26 0 0 1 1.272-.255z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fig
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fig (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fig {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fig {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fig 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fig 3s ease-in-out infinite alternate;
}
</style>