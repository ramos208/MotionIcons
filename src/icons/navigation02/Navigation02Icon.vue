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
      <path d="M2.00017 11.9496C1.96943 12.9853 6.03156 15.4206 6.41417 14.9373C7.15382 13.8962 7.21955 10.1078 6.45955 9.06478C6.10401 8.58035 2.03018 10.9389 2.00017 11.9496Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.9496 21.9997C12.9853 22.0304 15.4206 17.9683 14.9373 17.5857C13.8962 16.8461 10.1078 16.7803 9.06478 17.5403C8.58035 17.8959 10.9389 21.9697 11.9496 21.9997Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.9998 11.9496C22.0306 12.9853 17.9684 15.4207 17.5858 14.9373C16.8462 13.8962 16.7805 10.1079 17.5404 9.06484C17.896 8.58041 21.9698 10.9389 21.9998 11.9496Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.9496 2.00005C12.9853 1.96931 15.4206 6.03144 14.9373 6.41404C13.8962 7.1537 10.1078 7.21943 9.06478 6.45943C8.58035 6.10389 10.9389 2.03006 11.9496 2.00005Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: navigation02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for navigation02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-navigation02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-navigation02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-navigation02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-navigation02 3s ease-in-out infinite alternate;
}
</style>