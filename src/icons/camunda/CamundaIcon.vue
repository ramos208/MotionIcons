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
      <path d="M3.327 0A3.327 3.327 0 0 0 0 3.326v17.348A3.327 3.327 0 0 0 3.327 24h17.347A3.326 3.326 0 0 0 24 20.674V3.326A3.326 3.326 0 0 0 20.674 0H3.327Zm8.687 3.307c1.875 0 2.84 1.105 2.84 3.049v1.175H13.05V6.23c0-.867-.392-1.203-.994-1.203-.615-.014-.993.322-.993 1.189v6.56c0 .867.392 1.175.993 1.175.616 0 .994-.308.994-1.175v-1.734h1.804v1.608c-.014 1.945-.979 3.049-2.854 3.049-1.874 0-2.839-1.119-2.839-3.035V6.356c.014-1.944.979-3.049 2.853-3.049ZM9.161 17.476h5.693v3.217H9.161v-3.217Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: camunda
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for camunda (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-camunda {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-camunda {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-camunda 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-camunda 3s ease-in-out infinite alternate;
}
</style>