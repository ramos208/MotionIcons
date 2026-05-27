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
      <path d="M12 15C12.3229 15 12.6069 15.2004 13.1749 15.6011L16.9191 18.2431C19.1042 19.7849 20.1967 20.5558 19.9708 21.2779M12 15C11.6771 15 11.3931 15.2004 10.8251 15.6011L7.08088 18.2431C4.89585 19.7849 3.80333 20.5558 4.02915 21.2779M12 15V11.5M19.9708 21.2779C19.745 22 18.4114 22 15.7443 22H8.25573C5.58856 22 4.25498 22 4.02915 21.2779M19.9708 21.2779V8M4.02915 21.2779V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 2C12.3229 2 12.6069 2.20038 13.1749 2.60114L16.9191 5.24311C19.1042 6.78487 20.1967 7.55575 19.9708 8.27788C19.745 9 18.4114 9 15.7443 9H8.25573C5.58856 9 4.25498 9 4.02915 8.27788C3.80333 7.55575 4.89585 6.78487 7.08088 5.24311L10.8251 2.60114C11.3931 2.20038 11.6771 2 12 2ZM12 2V6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: prism
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for prism (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-prism {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-prism {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-prism 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-prism 3s ease-in-out infinite alternate;
}
</style>