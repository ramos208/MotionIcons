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
      <path d="M20 7.77961V15.5763C20 15.7783 19.8983 15.9668 19.7295 16.0778L13.1137 20.4253C13.0388 20.4745 12.954 20.5063 12.8652 20.5184L2.68109 21.9071C2.32083 21.9563 2.00002 21.6762 2.00002 21.3126L2 9.01164C2 8.79805 2.11354 8.60057 2.29813 8.49311L13.087 2.21229C13.3057 2.08493 13.5809 2.10857 13.7747 2.27137L19.7859 7.32017C19.9216 7.43417 20 7.60236 20 7.77961Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 9L12.727 11.922C12.8998 11.9714 13.0857 11.9407 13.2334 11.8384L19.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 20.5L13 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 14.01L16.51 13.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 17.01L22.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: face-3d-draft
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for face-3d-draft (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-face-3d-draft {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-face-3d-draft {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-face-3d-draft 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-face-3d-draft 3s ease-in-out infinite alternate;
}
</style>