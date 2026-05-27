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
      <path d="M20.9289 12.4256C19.0837 14.2708 15.4938 13.6725 12.9106 11.0893C10.3273 8.50608 9.729 4.91622 11.5742 3.07109M20.9289 12.4256C22.7741 10.5805 22.1757 6.99064 19.5925 4.40745C17.0093 1.82427 13.4193 1.22596 11.5742 3.07109M20.9289 12.4256C17.2538 16.1006 10.2378 17.7707 8.2332 15.7662C6.22862 13.7616 7.8991 6.74609 11.5742 3.07109M7.23091 14.7646L5.22633 16.7692C4.48826 16.0311 3.29162 16.0311 2.55355 16.7692C1.81548 17.5072 1.81548 18.7039 2.55355 19.4419C2.95334 19.8417 3.48753 20.0227 4.01066 19.9894C3.97734 20.5125 4.15835 21.0467 4.55813 21.4465C5.2962 22.1845 6.49284 22.1845 7.23091 21.4465C7.96898 20.7084 7.96898 19.5118 7.23091 18.7737L9.2355 16.7692M16 7.5L16.5 8M16.9197 8.41764C16.7352 8.60215 16.2865 8.45257 15.9174 8.08355C15.5484 7.71452 15.3988 7.26579 15.5833 7.08128C15.7679 6.89676 16.2166 7.04634 16.5856 7.41537C16.9547 7.78439 17.1042 8.23312 16.9197 8.41764Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ham
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ham (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ham {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ham {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ham 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ham 3s ease-in-out infinite alternate;
}
</style>