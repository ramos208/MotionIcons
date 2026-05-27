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
      <path d="M12.31 12.347s-.008.73-.008 1.068c0 .34.339.544.777.544v.486h-2.988v-.486c.408 0 .79-.204.79-.544v-2.673c0-.545-.52-.557-.79-.595v-.466h2.55c1.042 0 2.403-.125 2.403 1.228 0 1.403-1.233 1.441-2.304 1.441zm-.017-2.212v1.559h.494c.35 0 .777-.063.777-.772 0-.749-.318-.795-.907-.795-.254 0-.364.008-.364.008zM12 4.551l12 7.45-12 7.448L0 12zm-8.645 7.45c2.764 1.713 7.373 4.575 8.645 5.364L20.644 12A7141.71 7141.71 0 0 0 12 6.636c-1.272.787-5.881 3.649-8.645 5.365Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: powers
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for powers (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-powers {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-powers {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-powers 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-powers 3s ease-in-out infinite alternate;
}
</style>