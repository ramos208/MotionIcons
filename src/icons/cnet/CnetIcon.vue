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
      <path d="M1.89 9.262C.664 9.262 0 9.8 0 10.865v2.268c0 1.066.664 1.604 1.891 1.604h3.583v-2.353h-.293c-.13 1.365-.731 1.941-1.914 1.941h-.74c-.576 0-.856-.287-.856-.854v-2.944c0-.567.28-.854.856-.854h.74c1.2 0 1.791.544 1.914 1.867h.293V9.262H1.89Zm7.522 0v.275c1.274.127 1.856.668 1.856 2.102v1.716L7.905 9.262H6.229v5.475H8.55v-.275c-1.307-.143-1.886-.678-1.886-2.121v-1.963l3.582 4.359h1.457V9.262H9.412Zm3.06 0v5.475h5.475v-2.352h-.293c-.13 1.369-.731 1.947-1.914 1.947h-1.647v-2.233h.558c.933 0 1.328.415 1.421 1.316h.298v-3.009h-.298c-.094.896-.49 1.314-1.421 1.314h-.558V9.667h1.646c1.201 0 1.791.545 1.915 1.873h.293V9.262h-5.475Zm6.053 0v2.278h.294c.126-1.253.65-1.835 1.633-1.941v3.85c0 .669-.236.937-1.099.993v.295h3.82v-.295c-.864-.056-1.1-.324-1.1-.993v-3.85c.983.106 1.507.688 1.634 1.941H24V9.262h-5.475Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: cnet
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for cnet (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-cnet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-cnet {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-cnet 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-cnet 3s ease-in-out infinite alternate;
}
</style>