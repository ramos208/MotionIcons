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
      <path d="M5.03518 3.63328C5.01608 3.28936 5.28981 3 5.63426 3H18.3657C18.7102 3 18.9839 3.28936 18.9648 3.63328L18.0315 20.4333C18.0138 20.7512 17.7508 21 17.4324 21H14.5335C14.2293 21 13.9732 20.7723 13.9377 20.4701L12.5959 9.06507C12.5128 8.35854 11.4872 8.35854 11.4041 9.06507L10.0623 20.4701C10.0268 20.7723 9.7707 21 9.46645 21H6.56759C6.24915 21 5.98618 20.7512 5.96852 20.4333L5.03518 3.63328Z" stroke="currentColor" stroke-width="1.5"/><path d="M5 7.5H6.5C7.60457 7.5 8.5 6.60457 8.5 5.5V3" stroke="currentColor" stroke-width="1.5"/><path d="M18.5 7.5H17.5C16.3954 7.5 15.5 6.60457 15.5 5.5V3" stroke="currentColor" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pants-pockets
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pants-pockets (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pants-pockets {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pants-pockets {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pants-pockets 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pants-pockets 3s ease-in-out infinite alternate;
}
</style>