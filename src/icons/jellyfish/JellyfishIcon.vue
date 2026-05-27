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
      <path d="M12 2C16.9706 2 21 6.10406 21 11.1667C21 11.235 20.9993 11.3031 20.9978 11.3711C20.9773 12.3247 20.1331 13 19.1792 13H4.82077C3.8669 13 3.02268 12.3247 3.00219 11.3711C3.00073 11.3031 3 11.235 3 11.1667C3 6.10406 7.02944 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 13L7 14.125C7.5703 14.7666 7.5703 15.7334 7 16.375V16.375C6.4297 17.0166 6.4297 17.9834 7 18.625V18.625C7.5703 19.2666 7.5703 20.2334 7 20.875L6 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 13L12 14.125C12.5703 14.7666 12.5703 15.7334 12 16.375V16.375C11.4297 17.0166 11.4297 17.9834 12 18.625V18.625C12.5703 19.2666 12.5703 20.2334 12 20.875L11 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 13L17 14.125C17.5703 14.7666 17.5703 15.7334 17 16.375V16.375C16.4297 17.0166 16.4297 17.9834 17 18.625V18.625C17.5703 19.2666 17.5703 20.2334 17 20.875L16 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: jellyfish
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for jellyfish (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-jellyfish {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-jellyfish {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-jellyfish 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-jellyfish 3s ease-in-out infinite alternate;
}
</style>