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
      <path d="M388.7 4.7c6.2-6.2 16.4-6.2 22.6 0l16 16c6.2 6.2 6.2 16.4 0 22.6l-16 16c-6.2 6.2-16.4 6.2-22.6 0l-16-16c-6.2-6.2-6.2-16.4 0-22.6l16-16zM176 160c-10.8 0-20.8 3.6-28.8 9.6-14.1 10.6-34.2 7.8-44.8-6.4s-7.8-34.2 6.4-44.8c18.7-14.1 42-22.4 67.2-22.4 61.9 0 112 50.1 112 112 0 17.2-3.9 33.5-10.8 48l49.7 0c12.7 0 24.9-5 33.9-14.1l20.7-20.7c18.7-18.7 44.1-29.3 70.6-29.3 55.2 0 99.9 44.7 99.9 99.9l0 96.1c0 55.2-44.8 100-100 100S352 443.2 352 388l0-4c0-17.7 14.3-32 32-32s32 14.3 32 32l0 4c0 19.9 16.1 36 36 36s36-16.1 36-36l0-96.1c0-19.8-16.1-35.9-35.9-35.9-9.5 0-18.6 3.8-25.4 10.5l-20.7 20.7c-21 21-49.4 32.8-79.1 32.8l-26.8 0c12.6 19.6 19.9 42.8 19.9 68 0 75.2-65 132-140 132S40 463.2 40 388c0-17.7 14.3-32 32-32s32 14.3 32 32c0 35.3 31.7 68 76 68s76-32.7 76-68-31.7-68-76-68l-20 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0c26.5 0 48-21.5 48-48s-21.5-48-48-48zM337.1 60.1c-11-13.8-31.1-16.2-45-5.2s-16.2 31.1-5.2 45C312.6 132.2 354.4 152 400 152s87.4-19.8 113.1-52.1c11-13.8 8.7-34-5.2-45s-34-8.7-45 5.2C450.3 76 427.5 88 400 88s-50.3-12-62.9-27.9z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: om
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for om (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-om {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-om {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-om 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-om 3s ease-in-out infinite alternate;
}
</style>