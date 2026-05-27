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
      <path d="M20.999 4.586 13.956.511A3.94 3.94 0 0 0 12 0c-.713 0-1.378.183-1.946.511L2.982 4.586a4.013 4.013 0 0 0-1.917 3.42v7.997a3.99 3.99 0 0 0 1.927 3.421l7.014 4.046c.587.337 1.262.53 1.994.53.723 0 1.407-.193 1.994-.53l6.937-4.008a4.008 4.008 0 0 0 2.004-3.468V7.997a4.003 4.003 0 0 0-1.936-3.411Zm.298 7.534h-.038c-5.039.02-9.143 4.143-9.143 9.182a.117.117 0 0 1-.116.116.118.118 0 0 1-.116-.116v-.038c-.019-5.039-4.143-9.144-9.181-9.144a.116.116 0 0 1-.116-.115c0-.068.058-.116.116-.116h.038c5.039-.019 9.143-4.143 9.143-9.182 0-.067.058-.115.116-.115.067 0 .116.058.116.115 0 5.059 4.114 9.182 9.181 9.182.068 0 .116.058.116.116.01.067-.048.115-.116.115Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: andela
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for andela (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-andela {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-andela {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-andela 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-andela 3s ease-in-out infinite alternate;
}
</style>