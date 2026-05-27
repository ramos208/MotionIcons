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
      <path d="M11 11L6.19145 8.93919C5.24455 8.53338 4.7711 8.33047 4.46382 7.96189C4.3681 7.84708 4.28556 7.7219 4.21773 7.58869C4 7.16107 4 6.64597 4 5.61577C4 4.10079 4 3.34331 4.38928 2.81443C4.50876 2.6521 4.6521 2.50876 4.81443 2.38928C5.34331 2 6.10079 2 7.61577 2H16.3842C17.8992 2 18.6567 2 19.1856 2.38928C19.3479 2.50876 19.4912 2.6521 19.6107 2.81443C20 3.34331 20 4.10079 20 5.61577C20 6.64597 20 7.16107 19.7823 7.58869C19.7144 7.7219 19.6319 7.84708 19.5362 7.96189C19.2289 8.33047 18.7555 8.53338 17.8085 8.93919L13 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 11V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: medal07
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for medal07 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-medal07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-medal07 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-medal07 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-medal07 3s ease-in-out infinite alternate;
}
</style>