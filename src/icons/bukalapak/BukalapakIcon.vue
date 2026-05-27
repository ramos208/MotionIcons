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
      <path d="M10.976 23.845a3.158 3.158 0 1 1-1.95-6.008 3.158 3.158 0 0 1 1.95 6.008Zm6.554-2.883c4.047-1.315 7.315-5.981 5.689-10.984-1.626-5.003-7.012-6.856-11.058-5.541a1.89 1.89 0 0 0-1.252 2.249l.414 1.682a1.892 1.892 0 0 0 2.42 1.348l.162-.053c1.861-.606 3.592.504 4.071 2.019.505 1.507-.244 3.422-2.106 4.027l-.162.054a1.891 1.891 0 0 0-1.166 2.512l.653 1.604a1.89 1.89 0 0 0 2.335 1.083Zm-6.962-7.982L7.841 1.752A2.3 2.3 0 0 0 4.897.113l-2.952.959A2.3 2.3 0 0 0 .526 4.128L4.92 14.815a2.3 2.3 0 0 0 2.841 1.318l1.285-.417a2.298 2.298 0 0 0 1.522-2.736Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bukalapak
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bukalapak (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bukalapak {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bukalapak {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bukalapak 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bukalapak 3s ease-in-out infinite alternate;
}
</style>