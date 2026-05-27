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
      <path d="M20.0002 15C20.0002 16.8638 20.0002 17.7956 19.6957 18.5307C19.2897 19.5108 18.511 20.2895 17.5309 20.6955C16.7958 21 15.8639 21 14.0002 21H11.0002C7.22898 21 5.34334 21 4.17177 19.8284C3.00019 18.6568 3.00021 16.7712 3.00024 12.9999L3.0003 6.99983C3.00032 4.79078 4.79112 3 7.00017 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.0002 8.5L10.4339 12.4689C10.4753 12.8007 10.6792 13.0899 10.9864 13.2219C11.6724 13.5165 12.9572 14 14.0002 14C15.0433 14 16.3281 13.5165 17.0141 13.2219C17.3213 13.0899 17.5252 12.8007 17.5666 12.4689L18.0002 8.5M20.5002 7.5V11.2692M14.0002 4L7.00024 7L14.0002 10L21.0002 7L14.0002 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: course
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for course (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-course {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-course {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-course 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-course 3s ease-in-out infinite alternate;
}
</style>