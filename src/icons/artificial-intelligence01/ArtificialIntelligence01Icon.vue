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
      <path d="M16 21.9995V21.4995C16 20.395 16.9321 19.5 17.9223 19.0106C18.8846 18.5349 19.6943 17.7507 19.7965 16.8308L20 14.9995L22 13.9995L19.5 10.2495C19.5 5.94601 16.2049 2.41209 12 2.03317M6.5 16.9957V21.9995M6.5 16.9957C5.46656 16.2668 4.60808 15.3063 4 14.1898M6.5 16.9957C7.25065 17.5253 8.09362 17.9326 9 18.189" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 4H6C5.05719 4 4.58579 4 4.29289 4.29289C4 4.58579 4 5.05719 4 6V8C4 8.94281 4 9.41421 4.29289 9.70711C4.58579 10 5.05719 10 6 10H8C8.94281 10 9.41421 10 9.70711 9.70711C10 9.41421 10 8.94281 10 8V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.5 9.99997V12M8.5 9.99997V12M5.5 1.99997V3.99997M8.5 1.99997V3.99997M4 5.49997H2M4 8.49997H2M12 5.49997H10M12 8.49997H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: artificial-intelligence01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for artificial-intelligence01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-artificial-intelligence01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-artificial-intelligence01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-artificial-intelligence01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-artificial-intelligence01 3s ease-in-out infinite alternate;
}
</style>