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
      <path d="M12.5 21H6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 6C16.5 5.37191 16.5 5.05787 16.4194 4.78267C16.2518 4.21026 15.8066 3.71716 15.2541 3.49226C14.9886 3.38413 14.6885 3.35347 14.0884 3.29216C12.6695 3.14718 10.8874 3 9.5 3C8.11262 3 6.33047 3.14718 4.91161 3.29216C4.3115 3.35347 4.01144 3.38413 3.74586 3.49226C3.19344 3.71716 2.74816 4.21026 2.58057 4.78267C2.5 5.05787 2.5 5.37191 2.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.5 3.34863L9.5 20.8486" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.5 21H19.5C19.0286 21 18.7929 21 18.6464 20.8566C18.5 20.7133 18.5 20.4825 18.5 20.021V19.0766C18.5 18.2812 18.676 18.1253 19.5004 18.1094C20.2769 18.0944 20.7401 18.0388 21.0607 17.8333C21.5 17.5516 21.5 17.0983 21.5 16.1916C21.5 14.4594 18.5 15.1262 18.5 15.1262" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: text-subscript
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for text-subscript (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-text-subscript {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-text-subscript {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-text-subscript 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-text-subscript 3s ease-in-out infinite alternate;
}
</style>