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
      <path d="M3.813 0s-2.326 2.052-2.51 6.367c-.205 4.716 2.324 9.47 10.654 10.076.026.005.055.005.08.008C7.806 11.534 4.955 5.241 3.812 0zm8.224 16.451a30.654 30.654 0 0 0 2.2 2.303H5.282c.12.278.53.472 1.463.527 5.59.332 6.38 4.719 14.381 4.719.702 0 1.14-.042 1.582-.125-3.16-.972-6-2.8-8.47-5.121h2.21c.917 0 1.325.076 1.58.191-.392-1.218-1.631-2.168-5.992-2.494z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: avianca
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for avianca (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-avianca {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-avianca {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-avianca 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-avianca 3s ease-in-out infinite alternate;
}
</style>