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
      <path d="M6 0C2.689 0 0 2.689 0 6v12c0 3.311 2.689 6 6 6h12c3.311 0 6-2.689 6-6V6c0-3.311-2.689-6-6-6H6zm.227 1.871h11.546A3.98 3.98 0 0 1 21.75 5.85v11.545a3.978 3.978 0 0 1-3.977 3.976H6.227a3.978 3.978 0 0 1-3.977-3.976V5.85a3.98 3.98 0 0 1 3.977-3.98zm-.223 2.31V6.01H4.633V7.7h1.37v1.903h-1.37v1.689h1.37v1.828h1.4v-1.828h1.695v1.828h1.398v-1.828h1.371v-1.69h-1.37v-1.9h1.37V6.01h-1.37V4.182h-1.4V6.01H7.403V4.182H6.004zm1.398 3.52h1.696v1.903H7.402V7.7z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stackedit
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stackedit (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stackedit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stackedit {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stackedit 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stackedit 3s ease-in-out infinite alternate;
}
</style>