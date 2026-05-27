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
      <path d="M15 17.499C15 18.429 15 18.894 14.8978 19.2755C14.6204 20.3108 13.8117 21.1194 12.7765 21.3968C12.395 21.499 11.93 21.499 11 21.499H9C6.17157 21.499 4.75736 21.499 3.87868 20.6204C3 19.7417 3 18.3275 3 15.499V8.50113C3 5.67292 3 4.25882 3.87859 3.38015C4.75718 2.50149 6.17129 2.50137 8.9995 2.50113L11.0016 2.50097C11.9298 2.50089 12.394 2.50085 12.7748 2.60266C13.8113 2.87976 14.621 3.68933 14.8982 4.72584C15 5.10667 15 5.5708 15 6.49904" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 19.501C17.8284 19.501 19.2426 19.501 20.1213 18.6223C21 17.7436 21 16.3294 21 13.501V10.501C21 7.67253 21 6.25832 20.1213 5.37964C19.2426 4.50096 17.8284 4.50096 15 4.50096" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 12.001H9M14.5001 9.50096C14.5001 9.50096 17 11.3422 17 12.001C17 12.6598 14.5 14.501 14.5 14.501" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: logout04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for logout04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-logout04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-logout04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-logout04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-logout04 3s ease-in-out infinite alternate;
}
</style>