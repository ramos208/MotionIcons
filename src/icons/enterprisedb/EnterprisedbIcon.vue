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
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM6.44 7.75c.072 0 .148.004.222.012l1.815.18a.384.384 0 0 1 .345.369v6.636c0 .186-.154.32-.345.301l-1.815-.18C5.47 14.95 4.5 13.918 4.5 12.762c0-.62.279-1.15.72-1.49-.441-.428-.72-1.011-.72-1.631 0-1.084.85-1.892 1.94-1.89zm11.12 0c1.09 0 1.94.807 1.94 1.89 0 .62-.278 1.204-.72 1.631.442.34.72.87.72 1.49 0 1.157-.967 2.19-2.16 2.307l-1.817.18c-.191.02-.345-.116-.345-.3V8.31c0-.185.154-.35.345-.369l1.817-.18c.074-.007.148-.011.22-.011zm-7.374 2H12c1.194 0 2.16.93 2.16 2.074v3.09c0 1.145-.972 2.086-2.166 2.086H10.18a.343.343 0 0 1-.34-.344v-.092c0-.34.187-.331.27-.34l.136-.011c1.216-.13 1.735-.404 1.754-.766h-1.82c-.202 0-.34-.195-.34-.388v-4.977c0-.184.154-.332.346-.332z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: enterprisedb
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for enterprisedb (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-enterprisedb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-enterprisedb {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-enterprisedb 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-enterprisedb 3s ease-in-out infinite alternate;
}
</style>