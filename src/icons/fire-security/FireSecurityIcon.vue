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
      <path d="M10.945 22C6.55709 22 2.99998 18.4183 2.99998 14C2.99998 11.9162 3.95827 9.83244 5.20922 8C5.46594 9.5 6.57524 12.4 8.95876 12C6.33496 6.5 10.945 2 10.945 2C10.945 2 11.4416 5.5 15.9107 9C16.3245 9.32407 16.6857 9.65805 17 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.5354 16.2023C15.5354 15.5078 15.4277 14.5459 15.836 13.9207C16.7377 12.5397 18.6013 12.7799 19.2625 14.1008C19.5631 14.7612 19.4516 15.538 19.4669 16.1931M15.5354 16.2023C14.6863 16.2902 14.3202 16.8422 14.1768 17.2829C14.0325 17.8233 13.9123 19.1442 14.1046 20.5852C14.2729 21.4858 14.9066 21.9039 15.4724 21.9541C16.0134 22.0021 18.2978 21.9901 18.9591 21.9901C19.9839 21.9901 20.5851 21.7259 20.8857 20.6452C21.0299 19.8046 21.066 18.2436 20.8255 17.2829C20.5597 16.4813 19.9245 16.2483 19.4669 16.1931M15.5354 16.2023C16.8165 16.0696 18.1849 16.0385 19.4669 16.1931" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fire-security
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fire-security (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fire-security {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fire-security {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fire-security 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fire-security 3s ease-in-out infinite alternate;
}
</style>