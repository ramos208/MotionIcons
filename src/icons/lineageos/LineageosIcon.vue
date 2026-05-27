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
      <path d="M21.64526 12.05735a2.40391 2.40391 0 0 0-1.80293.7993l-.13823-.0541a17.80096 17.80096 0 0 0-2.86666-.8594 4.80782 4.80782 0 0 0-9.61565 0h-.13221a17.74687 17.74687 0 0 0-2.7645.83537l-.13822.05409a2.40391 2.40391 0 1 0 .5589 1.06974 16.599 16.599 0 0 1 2.5782-.77526 4.80782 4.80782 0 0 0 9.35722 0 16.55693 16.55693 0 0 1 2.5782.76925 2.40391 2.40391 0 1 0 2.38588-1.839zM2.41397 15.6632a1.20196 1.20196 0 1 1 1.20196-1.20195 1.20196 1.20196 0 0 1-1.20196 1.20195zm9.61565 0a3.60587 3.60587 0 1 1 3.60586-3.60586 3.60587 3.60587 0 0 1-3.60586 3.60586zm9.61564 0a1.20196 1.20196 0 1 1 1.20196-1.20195 1.20196 1.20196 0 0 1-1.20196 1.20195zm-7.81271-3.60586a1.80293 1.80293 0 1 1-1.80293-1.80294 1.80293 1.80293 0 0 1 1.80293 1.80294z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lineageos
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lineageos (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lineageos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lineageos {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lineageos 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lineageos 3s ease-in-out infinite alternate;
}
</style>