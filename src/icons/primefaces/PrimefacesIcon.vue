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
      <path d="M6.43 0 3.875 2.564l3.833.367L8.988 0Zm3.104 0L8.081 3.465 1.5 2.931l1.094 4.58 7.853 2.931h1.095V0Zm2.74 0v10.442h1.278l7.853-2.93 1.095-4.58-6.756.547L14.283 0Zm2.556 0 1.28 2.931 3.834-.367L17.387 0ZM2.778 8.244v6.229l4.383 3.663v-5.68l1.278-1.83-1.643.366-2.009-2.016zm18.261 0-2.009.732-2.009 2.016-1.643-.367 1.278 1.832v5.68l4.383-3.664zM9.17 10.625l-1.462 2.199v8.243l1.097 1.65L10.083 24h3.652l1.278-1.284 1.096-1.649v-8.243l-1.46-2.199-.914.55h-3.652zm-4.383 6.23v2.38l2.374 2.382V18.87zm14.243 0-2.374 2.015v2.747l2.374-2.381z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: primefaces
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for primefaces (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-primefaces {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-primefaces {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-primefaces 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-primefaces 3s ease-in-out infinite alternate;
}
</style>