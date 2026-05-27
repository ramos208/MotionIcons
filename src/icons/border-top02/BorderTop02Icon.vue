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
      <path d="M2.75313 17.6664C2.94642 18.7148 3.28828 19.4863 3.89295 20.0963C4.49762 20.7063 5.26247 21.0511 6.30171 21.2461M2.50666 9.99976C2.50171 10.5893 2.50171 11.2265 2.50171 11.9164C2.50171 12.6063 2.50171 13.2436 2.50666 13.8331M10.1017 21.4948C10.6861 21.4998 11.3178 21.4998 12.0017 21.4998C12.6856 21.4998 13.3173 21.4998 13.9018 21.4948M17.7017 21.2461C18.7409 21.0511 19.5058 20.7063 20.1105 20.0963C20.7151 19.4863 21.057 18.7148 21.2503 17.6664M21.4968 9.99976C21.5017 10.5891 21.5017 11.2268 21.5017 11.9164C21.5017 12.6063 21.5017 13.2434 21.4968 13.8329" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.49976 6.49988C2.69829 5.40594 3.04945 4.60084 3.67056 3.96434C5.09962 2.49988 7.39967 2.49988 11.9998 2.49988C16.5998 2.49988 18.8999 2.49988 20.329 3.96435C20.9501 4.60084 21.3012 5.40594 21.4998 6.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: border-top02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for border-top02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-border-top02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-border-top02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-border-top02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-border-top02 3s ease-in-out infinite alternate;
}
</style>