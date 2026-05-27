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
      <path d="M0 .002v23.997h24V.002H0Zm10.962 5.592c2.36 0 4.443.416 3.799 2.423-.434 1.365-2.017 1.918-3.114 2.109l-2.757.489c-.655.114-1.039.277-1.3.549h6.012l-.818 2.529 3.446-2.529h3.755l-4.091 2.772 2.07 4.402h-3.766l-1.082-2.754-1.197.826-.619 1.928H8.471l1.718-5.374h-6.25C4.874 10.2 6.891 9.36 8.731 8.989l2.264-.457c.387-.07.64-.259.736-.557.136-.416-.32-.581-.994-.581-.784 0-1.604.074-1.984 1.005H5.646c1.009-2.474 3.483-2.805 5.316-2.805Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: 2k
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for 2k (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-2k {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-2k {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-2k 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-2k 3s ease-in-out infinite alternate;
}
</style>