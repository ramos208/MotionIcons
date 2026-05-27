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
      <path d="M22.912 5.945a1.089 1.089 0 10-.002 2.178 1.089 1.089 0 00.002-2.178zm.012.242a.85.85 0 110 1.7.85.85 0 010-1.7zm-.332.375v.952h.18v-.352h.171l.184.352h.207l-.213-.385c.046-.017.19-.067.19-.28 0-.166-.12-.287-.323-.287h-.396zm.18.157h.167c.124 0 .184.057.184.144 0 .089-.065.143-.156.143h-.196v-.287zM0 7.039v11.016h3.684v-3.78h3.523v3.78h1.42l2.15-11.016H7.221v3.854H3.695V7.039H0zm12.127 0L9.988 18.055h3.545V14.2h3.524v3.854h3.697V7.039H17.07v3.78h-3.525v-3.78h-1.418Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hellyhansen
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hellyhansen (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hellyhansen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hellyhansen {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hellyhansen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hellyhansen 3s ease-in-out infinite alternate;
}
</style>