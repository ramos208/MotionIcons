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
      <path d="M15.59 17.7405C14.9612 18.1617 13.3126 19.0218 14.3167 20.098C14.8072 20.6237 15.3536 20.9997 16.0404 20.9997H18H19.9596C20.6464 20.9997 21.1928 20.6237 21.6833 20.098C22.6874 19.0218 21.0388 18.1617 20.41 17.7405C18.9355 16.7528 17.0645 16.7528 15.59 17.7405Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M20 12.4998C20 13.6044 19.1046 14.4998 18 14.4998C16.8954 14.4998 16 13.6044 16 12.4998C16 11.3952 16.8954 10.4998 18 10.4998C19.1046 10.4998 20 11.3952 20 12.4998Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 5.99976H15M10 2.99976H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 9.49976V13.9998C7 14.9426 7 15.414 6.70711 15.7069C6.41421 15.9998 5.94281 15.9998 5 15.9998H4C3.05719 15.9998 2.58579 15.9998 2.29289 15.7069C2 15.414 2 14.9426 2 13.9998V11.4998C2 10.557 2 10.0856 2.29289 9.79265C2.58579 9.49976 3.05719 9.49976 4 9.49976H7ZM7 9.49976H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.5 4.99976C6.5 6.10433 5.60457 6.99976 4.5 6.99976C3.39543 6.99976 2.5 6.10433 2.5 4.99976C2.5 3.89519 3.39543 2.99976 4.5 2.99976C5.60457 2.99976 6.5 3.89519 6.5 4.99976Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mentor
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mentor (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mentor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mentor {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mentor 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mentor 3s ease-in-out infinite alternate;
}
</style>