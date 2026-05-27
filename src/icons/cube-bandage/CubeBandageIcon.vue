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
      <path d="M12 22L3.30863 17.1715C3.11815 17.0656 3.00001 16.8649 3.00001 16.647L2.99999 7.35304C2.99999 7.13514 3.11813 6.93437 3.30861 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8819 6.93437 21 7.13514 21 7.35304L21 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.52844 7.29363L11.7086 11.8382C11.8898 11.9388 12.1102 11.9388 12.2914 11.8382L20.5 7.27783" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12V17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.6569 17.2427L19.364 17.9498" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.2426 18.6567L17.9497 19.3638" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.6569 14.4144L14.4142 18.6571C13.6332 19.4381 13.6332 20.7045 14.4142 21.4855L15.1213 22.1926C15.9024 22.9737 17.1687 22.9737 17.9497 22.1926L22.1924 17.95C22.9734 17.1689 22.9734 15.9026 22.1924 15.1215L21.4853 14.4144C20.7042 13.6334 19.4379 13.6334 18.6569 14.4144Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cube-bandage
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cube-bandage (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cube-bandage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cube-bandage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cube-bandage 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cube-bandage 3s ease-in-out infinite alternate;
}
</style>