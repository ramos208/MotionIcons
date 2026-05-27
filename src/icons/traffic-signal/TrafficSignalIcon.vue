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
      <path d="M128,56a32,32,0,1,0,32,32A32,32,0,0,0,128,56Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm0,32a32,32,0,1,0,32,32A32,32,0,0,0,128,136Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,184Zm88-40H200V80h16a8,8,0,0,0,0-16H200V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V64H40a8,8,0,0,0,0,16H56v64H40a8,8,0,0,0,0,16H56v56a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,72H72V40H184V216Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: traffic-signal
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for traffic-signal (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-traffic-signal {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-traffic-signal {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-traffic-signal 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-traffic-signal 3s ease-in-out infinite alternate;
}
</style>