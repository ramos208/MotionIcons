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
      <path d="M10.5286 8H13.4714C14.0307 8 14.6182 8.00228 14.8682 8.61732C15.0439 9.04998 15.0439 9.95002 14.8682 10.3827C14.6182 10.9977 14.0307 11 13.4714 11H10.5286C9.96929 11 9.38175 10.9977 9.13185 10.3827C8.95605 9.95002 8.95605 9.04998 9.13185 8.61732C9.38175 8.00228 9.96929 8 10.5286 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5286 11H13.4714C14.0307 11 14.6182 11.0023 14.8682 11.6173C15.0439 12.05 15.0439 12.95 14.8682 13.3827C14.6182 13.9977 14.0307 14 13.4714 14H10.5286C9.96929 14 9.38175 13.9977 9.13185 13.3827C8.95605 12.95 8.95605 12.05 9.13185 11.6173C9.38175 11.0023 9.96929 11 10.5286 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.5 19C7.54219 18.8734 7.56329 18.8101 7.58586 18.754C7.87405 18.0371 8.54939 17.5504 9.32061 17.5037C9.38101 17.5 9.44772 17.5 9.58114 17.5H14.4189C14.5523 17.5 14.619 17.5 14.6794 17.5037C15.4506 17.5504 16.126 18.0371 16.4141 18.754C16.4367 18.8101 16.4578 18.8734 16.5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 17.5V22M12 22H19M12 22H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 8.5L19.7959 7.09525C18.9123 6.06437 18.4705 5.54892 17.8738 5.27446C17.277 5 16.5981 5 15.2404 5H8.75961C7.40185 5 6.72297 5 6.12623 5.27446C5.5295 5.54892 5.08769 6.06437 4.20407 7.09525L3 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 8L12 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: equipment-weightlifting
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for equipment-weightlifting (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-equipment-weightlifting {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-equipment-weightlifting {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-equipment-weightlifting 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-equipment-weightlifting 3s ease-in-out infinite alternate;
}
</style>