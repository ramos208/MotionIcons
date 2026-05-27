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
      <path d="M8 6C11.3137 6 14 5.10457 14 4C14 2.89543 11.3137 2 8 2C4.68629 2 2 2.89543 2 4C2 5.10457 4.68629 6 8 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.5 9C11.9102 9 9 11.9101 9 15.5C9 19.0898 11.9102 22 15.5 22C19.0898 22 22 19.0899 22 15.5C22 11.9101 19.0898 9 15.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.5 19C15.6047 19 15.702 18.9505 15.8967 18.8516L17.4614 18.0564C18.1538 17.7045 18.5 17.5286 18.5 17.25V13.75M15.5 19C15.3953 19 15.298 18.9505 15.1033 18.8516L13.5386 18.0564C12.8462 17.7045 12.5 17.5286 12.5 17.25V13.75M15.5 19V15.5M18.5 13.75C18.5 13.4714 18.1538 13.2955 17.4614 12.9436L15.8967 12.1484C15.702 12.0495 15.6047 12 15.5 12C15.3953 12 15.298 12.0495 15.1033 12.1484L13.5386 12.9436C12.8462 13.2955 12.5 13.4714 12.5 13.75M18.5 13.75C18.5 14.0286 18.1538 14.2045 17.4614 14.5564L15.8967 15.3516C15.702 15.4505 15.6047 15.5 15.5 15.5M12.5 13.75C12.5 14.0286 12.8462 14.2045 13.5386 14.5564L15.1033 15.3516C15.298 15.4505 15.3953 15.5 15.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 4V8.02171V12.0434C2 12.7473 3.17834 13.6328 6.12981 14M2.10726 8.54768C3.31161 9.60965 5.45881 10.0602 7.75359 10.0602M13.9884 4.12134V6.13597" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stake
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stake (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stake {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stake {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stake 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stake 3s ease-in-out infinite alternate;
}
</style>