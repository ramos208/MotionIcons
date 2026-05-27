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
      <path d="M3.11 3.245A3.117 3.117 0 0 0 0 6.355V13.7a1.87 1.87 0 0 0 1.878 1.878h2.588V5.124c0-.73.313-1.399.814-1.879zm3.944 0a1.87 1.87 0 0 0-1.879 1.879V7.71h16.947v.021c.73 0 1.398.313 1.878.814v-2.19a3.117 3.117 0 0 0-3.11-3.11zm12.48 5.176v10.455c0 .73-.313 1.399-.814 1.879h2.17a3.117 3.117 0 0 0 3.11-3.11V10.3a1.87 1.87 0 0 0-1.878-1.878zM0 15.475v2.17a3.117 3.117 0 0 0 3.11 3.11h13.836a1.87 1.87 0 0 0 1.878-1.879V16.29H1.878c-.73 0-1.398-.314-1.878-.814"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googletv
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googletv (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googletv {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googletv {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googletv 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googletv 3s ease-in-out infinite alternate;
}
</style>