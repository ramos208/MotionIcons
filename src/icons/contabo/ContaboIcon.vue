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
      <path d="M11.336 1.816a6.95 6.95 0 0 0-6.879 5.889 7.88 7.88 0 0 1 2.24-.412A4.855 4.855 0 0 1 11.33 3.92a4.853 4.853 0 0 1 3.45 1.44 4.793 4.793 0 0 1 1.197 2.01 7.633 7.633 0 0 1 .875-.067h.33a8.313 8.313 0 0 1 .976.076 6.95 6.95 0 0 0-6.822-5.564zM6.99 8.224A6.983 6.983 0 0 0 0 15.2a6.978 6.978 0 0 0 6.977 6.976 6.966 6.966 0 0 0 4.933-2.03 691.43 691.43 0 0 0 1.56-1.581l-1.488-1.488-1.55 1.582a4.86 4.86 0 0 1-3.452 1.436A4.881 4.881 0 0 1 2.104 15.2a4.877 4.877 0 0 1 4.876-4.871 4.855 4.855 0 0 1 2.819.904l.04-.043 1.466-1.465A6.969 6.969 0 0 0 6.99 8.224zm10.04 0a6.966 6.966 0 0 0-4.936 2.047l-1.59 1.574 1.488 1.489 1.58-1.584A4.88 4.88 0 0 1 21.9 15.2a4.881 4.881 0 0 1-4.877 4.882 4.858 4.858 0 0 1-2.83-.914l-.045.046s-1.078 1.096-1.437 1.467a6.95 6.95 0 0 0 4.312 1.504A6.983 6.983 0 0 0 24 15.205a6.95 6.95 0 0 0-2.04-4.933 6.962 6.962 0 0 0-4.93-2.047z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: contabo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for contabo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-contabo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-contabo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-contabo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-contabo 3s ease-in-out infinite alternate;
}
</style>