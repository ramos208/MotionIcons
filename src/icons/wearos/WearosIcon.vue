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
      <path d="M8.416 21.1346c-.9687 0-1.8938-.56-2.3135-1.5015L.2193 6.4198C-.3488 5.1432.2248 3.6472 1.5014 3.079c1.2767-.5681 2.7727.0055 3.3408 1.2821l5.8832 13.2133c.5681 1.2767-.0055 2.7727-1.2821 3.3408a2.5254 2.5254 0 01-1.0273.2194zm7.1952.0368c-.891 0-1.7412-.515-2.1268-1.3816L7.39 6.1024C6.867 4.9279 7.3955 3.5532 8.5686 3.03c1.173-.5218 2.5492.0054 3.0724 1.1785l6.0943 13.6888c.5232 1.1745-.0054 2.5492-1.1785 3.0724a2.3111 2.3111 0 01-.9456.2017zM24 5.195a2.3271 2.3271 0 01-2.3271 2.327 2.3271 2.3271 0 01-2.3271-2.327 2.3271 2.3271 0 012.327-2.3271A2.3271 2.3271 0 0124 5.1949zm-2.6119 5.116a2.4892 2.4892 0 01-2.4892 2.4893 2.4892 2.4892 0 01-2.4893-2.4892 2.4892 2.4892 0 012.4893-2.4893 2.4892 2.4892 0 012.4892 2.4893Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: wearos
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for wearos (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-wearos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-wearos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-wearos 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-wearos 3s ease-in-out infinite alternate;
}
</style>