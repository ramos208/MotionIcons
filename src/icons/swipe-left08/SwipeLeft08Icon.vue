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
      <path d="M15.0078 4.49698H20.9994M15.0078 4.49698C15.0078 3.7976 16.9993 2.49094 17.5043 2M15.0078 4.49698C15.0078 5.19637 16.9993 6.50303 17.5043 6.99397" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.53624 14.4462V9.97685M6.53624 9.97685V4.45468C6.53624 3.63404 7.22077 2.97266 8.04222 2.97266C8.86367 2.97266 9.51096 3.63404 9.51096 4.45468V8.45574M6.53624 9.97685C5.21914 11.1692 3.80181 12.6755 3.61094 13.0613C2.72287 14.4119 2.81595 15.0657 3.80565 16.7182C4.64626 18.1217 5.77675 19.6794 5.84275 19.7541C6.51441 20.5146 6.38087 20.5147 7.3544 21.2287C8.22374 21.8315 10.027 22.2515 14.2543 21.8315C17.6981 21.3001 18.5232 18.2969 18.5053 16.8617V13.3175C18.7198 10.3717 17.4873 10.2387 15.2494 9.94876M9.51096 8.45574V10.9825M9.51096 8.45574C10.0694 7.54589 12.0977 7.91358 12.4931 9.6317M12.5288 10.9785V9.97685C12.5288 9.89788 12.5249 9.81866 12.5137 9.74054M12.4931 9.6317C12.4947 9.63893 12.4964 9.64618 12.498 9.65346C12.5043 9.68229 12.5095 9.71134 12.5137 9.74054M12.4931 9.6317C12.4972 9.66671 12.504 9.70299 12.5137 9.74054M12.4931 9.6317C12.3527 8.43417 15.3901 8.72609 15.5138 10.8321V11.9768" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: swipe-left08
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for swipe-left08 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-swipe-left08 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-swipe-left08 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-swipe-left08 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-swipe-left08 3s ease-in-out infinite alternate;
}
</style>