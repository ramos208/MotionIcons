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
      <path d="M19.0007 17.5C20.4235 17.5 21.0617 17.5 21.5137 17.0126C21.5331 16.9917 21.552 16.9702 21.5705 16.9482C21.9999 16.435 21.9999 15.6275 21.9999 14.0125C21.9999 12.7875 21.9999 12.175 21.7599 11.6578C21.5092 11.1178 21.0576 10.7814 20.1077 10.0931C19.1643 9.40947 18.4935 8.64105 17.8544 7.58239C16.9428 6.07263 16.487 5.31775 15.8035 4.90888C15.12 4.5 14.3138 4.5 12.7015 4.5H12.0027M12.0027 4.5L13.1207 7.97979C13.6686 9.68471 13.9425 10.5372 14.5138 11.0186C15.085 11.5 15.8226 11.5 17.2977 11.5H21M12.0027 4.5L12.0026 17.5M9.00354 17.5H15.0019M22.0001 14.5H21.0001M12.0026 11.5H3.00514C3.00514 11.5 2.68366 11.5044 2.4053 11.5C1.94373 11.4928 2.00542 11.48 2.00542 11.54L2.00542 12.5C2.00542 12.5 1.98542 15.8 2.02141 16.1932C2.02141 16.4519 2.22535 16.6634 2.58525 16.88C2.82065 17.0365 3.19063 17.2856 3.485 17.4044C3.8449 17.54 5.00457 17.5 5.00457 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.0013 19.5C18.1055 19.5 19.0007 18.6046 19.0007 17.5C19.0007 16.3954 18.1055 15.5 17.0013 15.5C15.897 15.5 15.0018 16.3954 15.0018 17.5C15.0018 18.6046 15.897 19.5 17.0013 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.0042 19.5C8.10846 19.5 9.00364 18.6046 9.00364 17.5C9.00364 16.3954 8.10846 15.5 7.0042 15.5C5.89994 15.5 5.00476 16.3954 5.00476 17.5C5.00476 18.6046 5.89994 19.5 7.0042 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pickup01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pickup01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pickup01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-pickup01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pickup01 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pickup01 3s ease-in-out infinite alternate;
}
</style>