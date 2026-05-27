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
      <path d="M11.853 8.302c2.628-.05 4.698.656 6.303 2.05 1.166 1.01 2.14 2.43 2.895 4.305a7.584 7.584 0 0 0-1.818-.21c-1.345 0-2.552.31-3.558.987-1.127-.687-2.339-1.049-3.623-1.049-1.313 0-2.573.378-3.77 1.087-1.154-.726-2.456-1.087-3.875-1.087-.513 0-1.003.048-1.466.147.678-1.724 1.575-3.054 2.664-4.028 1.557-1.393 3.607-2.15 6.248-2.202zM1.842 17.616c.04-.037.078-.076.112-.119.48-.557 1.233-.91 2.453-.91 1.151 0 2.139.32 3.002.952l.035.025c.469.35 1.108.364 1.592.036 1.032-.698 2.032-1.014 3.017-1.014.967 0 1.906.304 2.836.965l.02.014a1.376 1.376 0 0 0 1.699-.078c.614-.53 1.455-.84 2.625-.84 1.232 0 2.186.344 2.94.98a1.092 1.092 0 0 0 .435.235 1.095 1.095 0 0 0 .806-.087 1.103 1.103 0 0 0 .547-1.267c-.873-3.383-2.3-6.03-4.363-7.82-2.084-1.808-4.712-2.646-7.787-2.588-3.063.06-5.653.955-7.673 2.762-2.003 1.793-3.344 4.39-4.104 7.67a1.1 1.1 0 0 0 1.807 1.083z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: umbrel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for umbrel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-umbrel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-umbrel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-umbrel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-umbrel 3s ease-in-out infinite alternate;
}
</style>