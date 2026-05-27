<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M8.276 20.482h4.717c3.641 0 5.462-1.2 5.462-3.517 0-2.275-1.945-3.517-5.752-3.517H8.276Zm0-16.965v6.538h4.138c3.103 0 4.717-1.159 4.717-3.269 0-2.152-1.655-3.269-4.759-3.269zM1.696 24v-3.518H4.47V3.517H1.697V0h11.089c5.09 0 8.193 2.358 8.193 6.455 0 2.69-1.572 4.345-3.558 5.131 2.855.787 4.882 2.814 4.882 5.586 0 4.386-3.393 6.828-8.938 6.828H1.697"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: braintree
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for braintree (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-braintree {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-braintree {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-braintree 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-braintree 3s ease-in-out infinite alternate;
}
</style>