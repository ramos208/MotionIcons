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
      <path d="M176,104a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,104Zm-8,24H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm88-24v24a32,32,0,0,1-32,32h-5.19c-7.19,15.8-21.79,29.43-43.23,40.16a191.16,191.16,0,0,1-46.15,15.71,7.93,7.93,0,0,1-2.86,0,191.16,191.16,0,0,1-46.15-15.71C59,189.43,44.38,175.8,37.19,160H32A32,32,0,0,1,0,128V104A32,32,0,0,1,32,72h.85a16,16,0,0,1,9.68-10l80-29.09a16.06,16.06,0,0,1,10.94,0l80,29.09a16,16,0,0,1,9.68,10H224A32,32,0,0,1,256,104ZM32.55,144a58.74,58.74,0,0,1-.55-8V88a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16ZM208,136V77.09L128,48,48,77.09V136c0,45,69.09,61.52,80,63.84C138.89,197.52,208,181,208,136Zm32-32a16,16,0,0,0-16-16v48a58.74,58.74,0,0,1-.55,8H224a16,16,0,0,0,16-16Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: face-mask
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for face-mask (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-face-mask {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-face-mask {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-face-mask 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-face-mask 3s ease-in-out infinite alternate;
}
</style>