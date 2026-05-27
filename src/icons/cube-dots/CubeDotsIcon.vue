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
      <path d="M12.4961 19.7165L18.4961 16.2879C18.8077 16.1099 19 15.7785 19 15.4197V9.58032C19 9.22147 18.8077 8.89012 18.4961 8.71208L12.4961 5.28351C12.1887 5.10783 11.8113 5.10783 11.5039 5.28351L5.50386 8.71208C5.19229 8.89012 5 9.22147 5 9.58032V15.4197C5 15.7785 5.19229 16.1099 5.50386 16.2879L11.5039 19.7165C11.8113 19.8922 12.1887 19.8922 12.4961 19.7165Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 9.5L12 13M12 13L18.5 9.5M12 13V19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 3.01013L3.01 2.99902" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 21.0101L3.01 20.999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 3.01013L21.01 2.99902" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21.0101L21.01 20.999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cube-dots
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cube-dots (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cube-dots {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cube-dots {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cube-dots 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cube-dots 3s ease-in-out infinite alternate;
}
</style>