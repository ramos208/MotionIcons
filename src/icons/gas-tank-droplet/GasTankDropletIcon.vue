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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7.56208C3 6.14754 4.14659 5.0002 5.56319 5.0002C6.34439 5.0002 6.9996 5.0002 6.9996 5.0002V3H12V5.0002H14.0016C17.8662 5.0002 21 8.13329 21 11.9977C21 14.2891 21 16.6925 21 18.4399C21 19.1184 20.73 19.7713 20.2494 20.2513C19.7688 20.7314 19.1172 21.0018 18.4368 21.0018C15.015 21.0018 8.98499 21.0018 5.56319 21.0018C4.88279 21.0018 4.23121 20.7314 3.75061 20.2513C3.27001 19.7713 3 19.1184 3 18.4399C3 15.454 3 10.548 3 7.56208Z" stroke="currentColor" stroke-width="1.49348" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9991 9C11.9991 9 14.9991 11.9934 14.9994 13.8865C14.9997 15.5422 13.6552 16.8865 11.9997 16.8865C10.3442 16.8865 9.012 15.5422 9 13.8865C9.00979 11.9924 11.9991 9 11.9991 9Z" stroke="currentColor" stroke-width="1.49993" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gas-tank-droplet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gas-tank-droplet (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gas-tank-droplet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gas-tank-droplet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gas-tank-droplet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gas-tank-droplet 3s ease-in-out infinite alternate;
}
</style>