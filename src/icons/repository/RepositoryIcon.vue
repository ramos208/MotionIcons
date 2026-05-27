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
      <path d="M6 19.6231C5.31093 19.4279 4.76772 19.1317 4.31802 18.682C3 17.364 3 15.2426 3 11C3 6.75736 3 4.63604 4.31802 3.31802C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.31802C21 4.63604 21 6.75736 21 11C21 15.2426 21 17.364 19.682 18.682C19.2323 19.1317 18.6891 19.4279 18 19.6231" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 20.1928C11.5858 20.1928 11.2525 20.5121 10.5858 21.1508C9.93941 21.77 9.61623 22.0796 9.34374 21.9824C9.31027 21.9705 9.27805 21.9548 9.24763 21.9355C9 21.7786 9 21.3111 9 20.3762L9 17.2512C9 15.7186 9 14.9523 9.43934 14.4761C9.87868 14 10.5858 14 12 14C13.4142 14 14.1213 14 14.5607 14.4761C15 14.9523 15 15.7186 15 17.2512V20.3762C15 21.3111 15 21.7786 14.7524 21.9355C14.7219 21.9548 14.6897 21.9705 14.6563 21.9824C14.3838 22.0796 14.0606 21.77 13.4142 21.1508C12.7475 20.5121 12.4142 20.1928 12 20.1928Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 10H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 6L12 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: repository
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for repository (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-repository {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-repository {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-repository 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-repository 3s ease-in-out infinite alternate;
}
</style>