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
      <path d="M23.955 11.956a.84.84 0 0 0-.837-.796H17.37V1.9c0-.019 0-.037-.002-.055a.84.84 0 0 0-.494-.806A11.89 11.89 0 0 0 12 0a11.89 11.89 0 0 0-8.454 3.515A11.983 11.983 0 0 0 .043 12c0 1.62.316 3.192.94 4.672a11.928 11.928 0 0 0 2.563 3.813 11.96 11.96 0 0 0 3.799 2.572C8.82 23.683 10.386 24 12 24c1.614 0 3.18-.317 4.655-.943a11.905 11.905 0 0 0 3.799-2.572A11.983 11.983 0 0 0 23.957 12c0-.014 0-.03-.002-.044Zm-4.685 7.343a10.24 10.24 0 0 1-7.272 3.022 10.228 10.228 0 0 1-7.273-3.022A10.305 10.305 0 0 1 1.714 12a10.312 10.312 0 0 1 6.281-9.511 10.212 10.212 0 0 1 4.003-.809 10.197 10.197 0 0 1 3.694.688v8.792h-3.765a.84.84 0 0 0 0 1.68h3.729a3.78 3.78 0 0 1-1.205 2.012 3.75 3.75 0 0 1-2.458.92A3.77 3.77 0 0 1 8.235 12a3.768 3.768 0 0 1 3.758-3.772.84.84 0 0 0 0-1.68 5.385 5.385 0 0 0-3.841 1.597A5.429 5.429 0 0 0 6.559 12c0 1.457.564 2.825 1.591 3.855a5.384 5.384 0 0 0 3.841 1.597 5.431 5.431 0 0 0 3.555-1.329 5.46 5.46 0 0 0 1.813-3.281h4.89a10.292 10.292 0 0 1-2.979 6.457Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gamedeveloper
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gamedeveloper (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gamedeveloper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gamedeveloper {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gamedeveloper 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gamedeveloper 3s ease-in-out infinite alternate;
}
</style>