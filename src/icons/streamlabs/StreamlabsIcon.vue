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
      <path d="M8.6878 1.3459a1.365 1.365 0 0 0-.2734.0058c-.528.066-1.0133.1616-1.4843.3086A10.0568 10.0568 0 0 0 .3208 8.2697c-.147.471-.2445.9583-.3105 1.4863-.091.734.431 1.4041 1.166 1.4961.734.091 1.404-.43 1.496-1.164.05-.406.119-.7316.209-1.0196A7.3736 7.3736 0 0 1 7.727 4.221c.288-.09.6145-.157 1.0195-.207.735-.092 1.255-.7631 1.164-1.4981a1.3394 1.3394 0 0 0-1.2226-1.17Zm4.0488 5.2226c-2.629 0-3.9432.0007-4.9472.5117A4.684 4.684 0 0 0 5.7406 9.131c-.512 1.004-.5117 2.3183-.5117 4.9473v4.289c0 1.502-.001 2.2542.291 2.8282.257.505.6679.9149 1.1719 1.1719.574.292 1.326.291 2.828.291h6.9706c2.628 0 3.9442.0012 4.9472-.5098a4.6883 4.6883 0 0 0 2.0507-2.0508c.512-1.004.5117-2.3182.5117-4.9472v-1.0723c0-2.629.0003-3.9433-.5117-4.9473a4.6883 4.6883 0 0 0-2.0507-2.0508c-1.003-.511-2.3193-.5117-4.9472-.5117zm.537 6.7051c.741 0 1.3399.5998 1.3399 1.3398v2.6836c0 .74-.5988 1.3399-1.3398 1.3399-.74 0-1.3418-.5999-1.3418-1.3399v-2.6836c0-.74.6018-1.3398 1.3418-1.3398zm5.3632 0c.74 0 1.3399.5998 1.3399 1.3398v2.6836c0 .74-.5999 1.3399-1.3399 1.3399-.741 0-1.3398-.5999-1.3398-1.3399v-2.6836c0-.74.5989-1.3398 1.3398-1.3398z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: streamlabs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for streamlabs (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-streamlabs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-streamlabs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-streamlabs 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-streamlabs 3s ease-in-out infinite alternate;
}
</style>