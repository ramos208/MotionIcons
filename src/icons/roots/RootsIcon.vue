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
      <path d="M8.513 12.27L2.6 18.177a.244.244 0 0 1-.174.072l-.02-.001a.248.248 0 0 1-.178-.102 11.973 11.973 0 0 1-.889-1.452.247.247 0 0 1 .045-.287l5.638-5.628a9.403 9.403 0 0 0 2.776-6.694.245.245 0 0 1 .49 0v3.911a6 6 0 0 1-1.774 4.274zM18 .842a.242.242 0 0 0-.245 0 .246.246 0 0 0-.122.212v10.855a6 6 0 0 0 1.773 4.273l1.997 1.995a.246.246 0 0 0 .173.072l.021-.001a.256.256 0 0 0 .18-.102A11.902 11.902 0 0 0 24 11.21c0-4.255-2.298-8.228-6-10.367zM6.367 4.085V1.054A.244.244 0 0 0 6 .842C2.3 2.982 0 6.954 0 11.21c0 .34.018.705.056 1.115.01.094.072.174.161.208a.294.294 0 0 0 .084.014.245.245 0 0 0 .172-.071l4.123-4.118a5.999 5.999 0 0 0 1.771-4.273zm10.614 14.52a9.402 9.402 0 0 1-2.778-6.696V7.996a.245.245 0 1 0-.489 0 9.401 9.401 0 0 1-2.776 6.696l-5.915 5.905a.244.244 0 0 0-.071.193.243.243 0 0 0 .102.18A11.929 11.929 0 0 0 12 23.192a11.93 11.93 0 0 0 6.947-2.222.237.237 0 0 0 .1-.18.239.239 0 0 0-.068-.193l-1.998-1.992Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: roots
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for roots (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-roots {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-roots {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-roots 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-roots 3s ease-in-out infinite alternate;
}
</style>