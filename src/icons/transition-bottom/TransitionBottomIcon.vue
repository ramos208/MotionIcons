<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M18 1.99994C19.4001 1.99994 20.1002 1.99994 20.635 2.27242C21.1054 2.51211 21.4878 2.89456 21.7275 3.36496C22 3.89974 22 4.59981 22 5.99994C22 7.40007 22 8.10014 21.7275 8.63492C21.4878 9.10532 21.1054 9.48777 20.635 9.72746C20.1002 9.99994 19.4001 9.99994 18 9.99994L6 9.99994C4.59987 9.99994 3.8998 9.99994 3.36502 9.72746C2.89462 9.48777 2.51217 9.10532 2.27248 8.63492C2 8.10014 2 7.40007 2 5.99994C2 4.59981 2 3.89974 2.27248 3.36496C2.51217 2.89456 2.89462 2.51211 3.36502 2.27242C3.8998 1.99994 4.59987 1.99994 6 1.99994L18 1.99994Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 17.9999L12 9.99994M12 17.9999C11.2998 17.9999 9.99153 16.0056 9.5 15.4999M12 17.9999C12.7002 17.9999 14.0085 16.0056 14.5 15.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 15.9999C2 18.3388 2 19.5083 2.53646 20.3621C2.81621 20.8073 3.19267 21.1837 3.63789 21.4635C4.49167 21.9999 5.66111 21.9999 8 21.9999L16 21.9999C18.3389 21.9999 19.5083 21.9999 20.3621 21.4635C20.8073 21.1837 21.1838 20.8073 21.4635 20.3621C22 19.5083 22 18.3388 22 15.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: transition-bottom
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for transition-bottom (hugeicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-transition-bottom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-transition-bottom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-transition-bottom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-transition-bottom 2s ease-in-out infinite alternate;
}
</style>