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
      <path d="M4 14.0695C5.0145 14.0695 6.43122 13.7685 7.31944 14.4193L9.08188 15.7108C9.73667 16.1906 10.4458 16.0325 11.1765 15.9178C12.1389 15.7667 13 16.5875 13 17.6562C13 17.9482 10.9272 18.6905 10.6276 18.8316C10.0391 19.1088 9.36297 19.0406 8.83021 18.6502L6.84211 17.1934" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 17L17.091 15.1096C17.8244 14.854 18.6331 15.0535 19.1797 15.625L19.8505 16.3262C20.0902 16.5768 20.0338 16.9976 19.7375 17.1697L11.8829 21.7315C11.4097 22.0063 10.8514 22.0734 10.3309 21.9179L4 20.0269" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0019 12C12.0019 12 14.1019 9.76142 14.1019 7C14.1019 4.23858 12.0019 2 12.0019 2C12.0019 2 9.9019 4.23858 9.9019 7C9.9019 9.76142 12.0019 12 12.0019 12ZM12.0019 12C12.0019 12 15.0689 11.9316 17.0019 9.95918C18.9349 7.98674 19.0019 4.85714 19.0019 4.85714C19.0019 4.85714 17.7324 4.88544 16.3122 5.43087M12.0019 12C12.0019 12 8.9349 11.9316 7.0019 9.95918C5.0689 7.98674 5.0019 4.85714 5.0019 4.85714C5.0019 4.85714 6.27135 4.88544 7.69157 5.43087" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wellness
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wellness (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wellness {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wellness {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wellness 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wellness 3s ease-in-out infinite alternate;
}
</style>