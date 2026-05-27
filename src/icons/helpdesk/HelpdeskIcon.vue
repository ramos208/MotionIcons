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
      <path d="M12 10.71l6.12-5.31H12c-2.16 0-4.32.06-6.36.21-.84.06-1.5.69-1.56 1.53-.12 1.26-.18 2.85-.18 4.41v.87c0 1.59.06 3.15.18 4.41.09.81.75 1.47 1.56 1.5a90 90 0 0012.72 0c.81-.03 1.5-.69 1.56-1.5.09-1.2.15-2.67.18-4.17L24 9.3V12.66c0 1.59-.06 3.18-.18 4.47a5.57 5.57 0 01-5.19 5.1c-2.13.18-4.38.27-6.63.27s-4.5-.09-6.63-.24a5.57 5.57 0 01-5.19-5.1C.06 15.81 0 14.13 0 12.45v-.87C0 9.9.06 8.22.18 6.84a5.57 5.57 0 015.19-5.1C7.5 1.59 9.75 1.5 12 1.5h12v3.9L12 15.81l-5.61-4.86L9.33 8.4z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: helpdesk
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for helpdesk (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-helpdesk {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-helpdesk {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-helpdesk 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-helpdesk 3s ease-in-out infinite alternate;
}
</style>