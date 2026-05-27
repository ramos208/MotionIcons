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
      <path d="M4.62724 6C5.07128 4.27477 6.63738 3 8.50122 3C10.7104 3 12.5012 4.79086 12.5012 7C12.5012 8.19469 11.9775 9.26706 11.147 10H16.9785C18.3568 10 19.0012 8.88071 19.0012 7.5C22.5012 11 21.97 15 21.97 15C21.97 18.5 18.5012 21 13.0012 21H8.99195C5.9595 21 3.50122 18.5376 3.50122 15.5C3.50122 13.3105 4.77843 11.4198 6.62726 10.5348C5.96398 10.1824 5.41166 9.6488 5.03635 9M4.62724 6L2.00122 7C2.19131 8 3.06445 9 5.03635 9M4.62724 6L5.21437 6.85464C5.67231 7.52122 5.59789 8.41801 5.03635 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.0012 18H12.5012C14.7104 18 17.5012 15.2091 17.5012 13H11.0012C9.62051 13 8.50122 14.1193 8.50122 15.5C8.50122 16.8807 9.62051 18 11.0012 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.24927 6.25H8.37427M8.49927 6.25C8.49927 6.11193 8.38734 6 8.24927 6C8.1112 6 7.99927 6.11193 7.99927 6.25C7.99927 6.38807 8.1112 6.5 8.24927 6.5C8.38734 6.5 8.49927 6.38807 8.49927 6.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rubber-duck
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rubber-duck (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rubber-duck {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rubber-duck {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rubber-duck 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rubber-duck 3s ease-in-out infinite alternate;
}
</style>