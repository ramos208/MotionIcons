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
      <path d="M1.393 9.736a2.691 2.691 0 0 1 1.145-.274h.001c1.391 0 2.538 1.153 2.483 2.525a2.51 2.51 0 0 1-2.51 2.524c-.438 0-.847-.11-1.202-.302A2.519 2.519 0 0 1 0 11.987c0-.988.572-1.84 1.393-2.25zm12.14-8.562 9.77 9.193h.001c.928.907.928 2.387 0 3.266l-9.74 9.193c-.875.795-2.211.795-3.058 0l-6.167-5.79c1.638-.577 2.894-1.949 3.358-3.65h3.682v1.782c0 .411.326.768.764.768h2.1c.41 0 .764-.329.764-.768v-1.783h.955c.41 0 .764-.328.764-.768v-1.263a.764.764 0 0 0-.764-.767H7.667a5.444 5.444 0 0 0-3.33-3.623l6.14-5.79c.874-.795 2.21-.795 3.057 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: passbolt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for passbolt (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-passbolt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-passbolt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-passbolt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-passbolt 3s ease-in-out infinite alternate;
}
</style>