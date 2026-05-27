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
      <path d="M3 22H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 19L16 15M8 15L7 19M12 16V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 7C12.4955 7 12.9562 6.8015 13.8775 6.40451L14.5423 6.11803C16.1808 5.41202 17 5.05902 17 4.5C17 3.94098 16.1808 3.58798 14.5423 2.88197L13.8775 2.59549C12.9562 2.1985 12.4955 2 12 2C11.5045 2 11.0438 2.1985 10.1225 2.59549L9.45768 2.88197C7.81923 3.58798 7 3.94098 7 4.5C7 5.05902 7.81923 5.41202 9.45768 6.11803L10.1225 6.40451C11.0438 6.8015 11.5045 7 12 7ZM12 7V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 4.5V10.5C17 11.059 16.1808 11.412 14.5423 12.118L13.8775 12.4045C12.9562 12.8015 12.4955 13 12 13C11.5045 13 11.0438 12.8015 10.1225 12.4045L9.45768 12.118C7.81923 11.412 7 11.059 7 10.5V4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hologram
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hologram (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hologram {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hologram {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hologram 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hologram 3s ease-in-out infinite alternate;
}
</style>