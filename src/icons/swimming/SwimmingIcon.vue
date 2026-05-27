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
      <path d="M10.7184 6.86177L15 16C12.8333 16 12.1739 14.8571 9.91304 13.7143C8.10435 12.8 5.57971 12.9524 4.82609 13.1429L7.85739 10.9998C8.16585 10.7817 8.32008 10.6727 8.36937 10.5067C8.41866 10.3407 8.34893 10.1651 8.20947 9.81406L7.78519 8.74593C7.62654 8.34653 7.54721 8.14683 7.40384 8.00197C7.35388 7.9515 7.2987 7.9065 7.23922 7.86772C7.06848 7.7564 6.8569 7.71887 6.43376 7.64379L3.18315 7.06706C2.4987 6.94562 2 6.35065 2 5.65551C2 4.78222 2.77418 4.11181 3.63851 4.23665L8.0343 4.87152C8.82604 4.98586 9.22191 5.04304 9.5521 5.23177C9.68974 5.31045 9.81754 5.40521 9.93281 5.51407C10.2093 5.7752 10.379 6.13739 10.7184 6.86177Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 18.0843C3.05556 14.5527 7.7685 16.1736 11.5 18.0843C15.2315 19.995 19 21.2108 21 18.0843" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: swimming
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for swimming (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-swimming {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-swimming {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-swimming 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-swimming 3s ease-in-out infinite alternate;
}
</style>