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
      <path d="M6.353 0v2.824H4.94v2.823H3.53v2.824H2.118v2.823H.706v2.824h8.47v2.823H7.765v2.824H6.353v2.823h1.412v-1.412h1.411v-1.411h1.412v-1.412H12V16.94h1.412v-1.41h1.412v-1.411h1.411v-1.412h1.412v-1.412h1.412V9.882h1.412V8.471h1.411V7.059h-4.235V5.647h1.412V4.235h1.412V2.824h1.411V1.412h1.412V0zm0 22.588H4.94V24h1.412zM7.765 2.824h9.882v1.411h-1.412v1.412h-1.411V7.06h-1.412v1.41H12v1.411h1.412v1.412H12V9.882h-1.412v1.412H9.176V9.882H7.765v1.412H6.353V9.882H4.94V8.471h1.412V5.647h1.412zM6.353 8.47v1.411h1.412v-1.41zm2.823 1.411h1.412v-1.41H9.176zm5.648 0h1.411v1.412h-1.411Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gamejolt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gamejolt (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gamejolt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gamejolt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gamejolt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gamejolt 3s ease-in-out infinite alternate;
}
</style>