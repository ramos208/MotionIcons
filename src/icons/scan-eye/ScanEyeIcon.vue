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
      <path d="M12 16.9995C16.2266 16.9995 18.3342 13.5086 18.913 12.3606C19.0289 12.1308 19.0289 11.8682 18.913 11.6384C18.3342 10.4904 16.2266 6.99951 12 6.99951C7.77333 6.99951 5.6657 10.4904 5.08686 11.6384C4.97099 11.8682 4.97099 12.1308 5.08686 12.3606C5.6657 13.5086 7.77333 16.9995 12 16.9995Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21.5 7.50034C21.4085 5.6542 21.1348 4.50316 20.316 3.68435C19.4972 2.86555 18.3462 2.59184 16.5 2.50034M2.50002 7.49951C2.59151 5.65337 2.86522 4.50233 3.68403 3.68352C4.50284 2.86472 5.65387 2.59101 7.50002 2.49951M21.5 16.4998C21.4085 18.3459 21.1348 19.497 20.316 20.3158C19.4972 21.1346 18.3462 21.4083 16.5 21.4998M2.50002 16.5006C2.59151 18.3468 2.86522 19.4978 3.68403 20.3166C4.50284 21.1354 5.65387 21.4091 7.50002 21.5006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scan-eye
// Category: search
// Physics Presets: Dynamic kinetic adaptation for scan-eye (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scan-eye {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scan-eye {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scan-eye 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scan-eye 3s ease-in-out infinite alternate;
}
</style>