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
      <path d="M23.186 9.07 21.41 8.019a2.78 2.78 0 0 1-1.344-2.391V3.523c0-.431-.19-.837-.516-1.108A11.965 11.965 0 0 0 16.317.493a1.356 1.356 0 0 0-1.193.091L13.347 1.64a2.622 2.622 0 0 1-2.688 0L8.882.584a1.348 1.348 0 0 0-1.194-.09 11.93 11.93 0 0 0-3.231 1.918 1.44 1.44 0 0 0-.516 1.108v2.104c0 .986-.51 1.897-1.344 2.392L.823 9.068c-.363.215-.61.588-.675 1.013A12.24 12.24 0 0 0 0 12.001c0 .651.048 1.292.145 1.916.065.425.312.801.675 1.016l1.774 1.052a2.78 2.78 0 0 1 1.344 2.392v2.104c0 .431.191.837.516 1.108.965.8 2.054 1.452 3.231 1.919.393.155.831.124 1.194-.091l1.777-1.055a2.622 2.622 0 0 1 2.688 0l1.777 1.055c.363.215.804.246 1.193.091a11.973 11.973 0 0 0 3.232-1.92 1.44 1.44 0 0 0 .516-1.107v-2.104a2.78 2.78 0 0 1 1.344-2.392l1.774-1.052c.363-.215.61-.588.675-1.016.094-.624.145-1.265.145-1.916 0-.652-.048-1.293-.145-1.917a1.41 1.41 0 0 0-.67-1.013zM12.003 19.41c-3.981 0-7.21-3.317-7.21-7.407s3.229-7.406 7.21-7.406c3.98 0 7.21 3.316 7.21 7.406s-3.23 7.407-7.21 7.407z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: framework
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for framework (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-framework {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-framework {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-framework 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-framework 3s ease-in-out infinite alternate;
}
</style>