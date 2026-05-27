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
      <path d="M12 0 .784 3.984l1.711 14.772L12 24l9.506-5.244 1.71-14.772ZM8.354 4.212h1.674L9.19 6.124l-2.51-.24Zm2.032 0h1.315v6.812h-.717L5.843 9.112l-.717-2.988 4.308.35Zm1.794 0h1.314l.953 2.261 4.427-.349-.717 2.988-5.14 1.912h-.837Zm1.673 0h1.674L17.2 5.885l-2.51.239zM5.963 9.59l1.315.478 1.315 1.315 1.076-.24-.837 1.196v3.704l-2.87-2.39zm11.955 0v4.063l-2.87 2.39v-3.704l-.837-1.195 1.077.239 1.314-1.315zm-7.786 1.536.596.36h2.384l.597-.36.953 1.437v5.388l-.715 1.078-.835.838h-2.384l-.834-.838-.715-1.078v-5.388zm-2.854 4.08 1.554 1.315v1.793L7.278 16.76Zm9.324 0v1.554l-1.553 1.554V16.52z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: primeng
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for primeng (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-primeng {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-primeng {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-primeng 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-primeng 3s ease-in-out infinite alternate;
}
</style>