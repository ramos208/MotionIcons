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
      <path d="M17.708 18.099c-.202.152-.44.228-.714.228-.242 0-.471-.076-.688-.228-.218-.152-.327-.373-.327-.66V9.626h-.023l-2.984 6.057a1.453 1.453 0 0 1-.385.505c-.145.112-.337.168-.578.168-.24 0-.433-.056-.577-.168a1.442 1.442 0 0 1-.385-.505L8.063 9.627H8.04v7.811a.748.748 0 0 1-.339.66 1.23 1.23 0 0 1-.7.229c-.275 0-.508-.076-.702-.228-.193-.152-.29-.373-.29-.66V6.958c0-.304.096-.589.29-.853.192-.264.537-.396 1.036-.396.37 0 .655.084.856.252.2.169.38.421.542.757l3.277 6.754h.024l3.253-6.754c.16-.336.342-.588.543-.757.2-.168.485-.252.855-.252.498 0 .844.132 1.036.396.193.265.29.55.29.854v10.478c0 .288-.101.509-.302.66zm-5.732 4.156c5.658 0 10.279-4.64 10.279-10.327 0-5.62-4.603-10.183-10.279-10.183-5.674 0-10.23 4.536-10.23 10.183 0 5.59 4.715 10.327 10.23 10.327zm0 1.745C5.495 24 0 18.48 0 11.928 0 5.315 5.34 0 11.976 0 18.613 0 24 5.34 24 11.928 24 18.577 18.6 24 11.976 24Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: metrodeparis
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for metrodeparis (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-metrodeparis {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-metrodeparis {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-metrodeparis 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-metrodeparis 3s ease-in-out infinite alternate;
}
</style>