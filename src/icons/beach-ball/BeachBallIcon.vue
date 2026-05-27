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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm81.7,71.3a199.77,199.77,0,0,0-40.94-8.06A199.77,199.77,0,0,0,160.7,46.3,88.57,88.57,0,0,1,209.7,95.3ZM216,128a87.83,87.83,0,0,1-4.28,27.12,200.28,200.28,0,0,0-29.16-49.93,183.12,183.12,0,0,1,32.31,8.75A88.14,88.14,0,0,1,216,128ZM142.06,41.13a183.12,183.12,0,0,1,8.75,32.31,200.28,200.28,0,0,0-49.93-29.16,88.05,88.05,0,0,1,41.18-3.15ZM80.44,54a183.88,183.88,0,0,1,61.25,32.64A200.21,200.21,0,0,0,40.41,119.5,88.11,88.11,0,0,1,80.44,54ZM40.67,138.86a184.08,184.08,0,0,1,112.88-36.41,184.08,184.08,0,0,1-36.41,112.88A88.18,88.18,0,0,1,40.67,138.86Zm95.83,76.73a200.21,200.21,0,0,0,32.87-101.28A183.88,183.88,0,0,1,202,175.56,88.11,88.11,0,0,1,136.5,215.59Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: beach-ball
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for beach-ball (phosphor). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-beach-ball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-beach-ball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-beach-ball 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-beach-ball 3s ease-in-out infinite alternate;
}
</style>