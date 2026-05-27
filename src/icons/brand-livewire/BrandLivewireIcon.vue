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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.982 18.777c-.372 .548 -.652 1.223 -1.406 1.223c-1.269 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.269 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-.398 0 -.679 -.189 -.915 -.448a10.414 10.414 0 0 1 -1.43 -5.29c0 -5.669 4.477 -10.262 10 -10.262c5.524 0 10 4.594 10 10.261c0 1.62 -.366 3.152 -1.018 4.516"/><path d="M20.982 18.777c-.372 .548 -.652 1.223 -1.406 1.223c-1.269 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.269 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-.398 0 -.679 -.189 -.915 -.448a10.414 10.414 0 0 1 -1.43 -5.29c0 -5.669 4.477 -10.262 10 -10.262c5.524 0 10 4.594 10 10.261c0 1.62 -.366 3.152 -1.018 4.516"/><path d="M11.5 16c3.167 0 4.5 -1.748 4.5 -4.231c0 -2.484 -2.014 -4.769 -4.5 -4.769c-2.485 0 -4.5 2.286 -4.5 4.769s1.333 4.231 4.5 4.231"/><path d="M10 11a1 1 0 1 0 0 -2a1 1 0 0 0 0 2"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-livewire
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brand-livewire (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-livewire {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-livewire {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-livewire 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brand-livewire 3s ease-in-out infinite alternate;
}
</style>