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
      <path d="M20.074 3.126C22.486 5.321 24 8.485 24 12c0 6.623-5.377 12-12 12S0 18.623 0 12c0-3.515 1.514-6.679 3.926-8.874l2.265 2.265C4.358 7.005 3.2 9.368 3.2 12c0 4.857 3.943 8.8 8.8 8.8s8.8-3.943 8.8-8.8c0-2.632-1.158-4.995-2.991-6.609zm-3.399 3.399C18.22 7.846 19.2 9.81 19.2 12c0 3.703-2.802 6.757-6.4 7.156V10.4zM11.2 19.156C7.602 18.757 4.8 15.703 4.8 12c0-2.19.98-4.154 2.525-5.475L11.2 10.4zM12 0c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wikimediafoundation
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wikimediafoundation (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wikimediafoundation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wikimediafoundation {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wikimediafoundation 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wikimediafoundation 3s ease-in-out infinite alternate;
}
</style>