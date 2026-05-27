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
      <path d="M8.37689 10H7.62311C6.1232 10 5.37325 10 4.83073 9.57641C4.28821 9.15282 4.10632 8.42526 3.74254 6.97014L3.05317 4.21268C3.01786 4.07143 3 3.92638 3 3.78078C3 2.79728 3.79728 2 4.78078 2H11.2192C12.2027 2 13 2.79728 13 3.78078C13 3.92638 12.9821 4.07143 12.9468 4.21268L12.2575 6.97014C11.8937 8.42526 11.7118 9.15282 11.1693 9.57641C10.6267 10 9.8768 10 8.37689 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 6H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 10V19.5858C6 19.9945 6 20.1989 6.07612 20.3827C6.15224 20.5665 6.29676 20.711 6.58579 21C7.25245 21.6667 7.58579 22 8 22C8.41421 22 8.74755 21.6667 9.41421 21C9.70324 20.711 9.84776 20.5665 9.92388 20.3827C10 20.1989 10 19.9945 10 19.5858V19L8.5 17.5L10 16V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 5C14.8692 5 15.8038 5 16.5 5.40192C16.9561 5.66523 17.3348 6.04394 17.5981 6.5C18 7.19615 18 8.13077 18 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M21 19V13C21 11.7824 21 11.1736 20.7025 10.7393C20.5838 10.566 20.434 10.4162 20.2607 10.2975C19.8264 10 19.2176 10 18 10C16.7824 10 16.1736 10 15.7393 10.2975C15.566 10.4162 15.4162 10.566 15.2975 10.7393C15 11.1736 15 11.7824 15 13V19C15 20.2176 15 20.8264 15.2975 21.2607C15.4162 21.434 15.566 21.5838 15.7393 21.7025C16.1736 22 16.7824 22 18 22C19.2176 22 19.8264 22 20.2607 21.7025C20.434 21.5838 20.5838 21.434 20.7025 21.2607C21 20.8264 21 20.2176 21 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 16H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: key-generator-fob
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for key-generator-fob (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-key-generator-fob {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-key-generator-fob {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-key-generator-fob 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-key-generator-fob 3s ease-in-out infinite alternate;
}
</style>