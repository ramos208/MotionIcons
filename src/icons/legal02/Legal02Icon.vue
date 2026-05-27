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
      <path d="M14.0011 9.79802L4.39343 10.4919C3.10421 10.585 2.00109 9.66574 2.0011 8.49837C2.00111 7.331 3.10426 6.41176 4.39348 6.50485L14.0011 7.19851" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.001 13.9983L13.0011 13.9984M21.0011 2.99835L13.0012 2.99842M20.0012 2.99836L14.0013 2.99841C14.0013 2.99841 13.5012 5.95993 13.5012 8.49838C13.5012 11.0369 14.0011 13.9984 14.0011 13.9984L20.001 13.9983C20.001 13.9983 20.5011 11.0368 20.5011 8.49832C20.5011 5.95988 20.0012 2.99836 20.0012 2.99836Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.0011 21.0016H21.9989M13.2258 21.0016C13.7773 20.0142 14.1892 18.1245 16.1412 18.0186C16.7209 17.9872 17.3108 17.9872 17.8906 18.0186C19.8426 18.1245 20.2564 20.0142 20.8079 21.0016" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: legal02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for legal02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-legal02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-legal02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-legal02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-legal02 3s ease-in-out infinite alternate;
}
</style>