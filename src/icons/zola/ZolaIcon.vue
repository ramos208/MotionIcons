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
      <path d="M21.379 18.017 21.083 24H2.824a.566.566 0 0 1-.565-.565V23.4c0-.313.081-.62.233-.895L12.99 3.79c.841-1.5.897-2.713-1.712-2.713s-5.386.909-6.442 5.077a.565.565 0 0 1-1.112-.17L4.019 0h16.894c-1.74.798-3.273 1.813-4.565 3.038-1.578 1.497-2.699 3.125-4.876 6.451a82 82 0 0 0-3.462 5.799 81 81 0 0 0-2.743 5.566c.764-1.08 2.02-2.507 3.96-3.425.958-.453 1.703-.602 2.083-.7a6.4 6.4 0 0 0 1.366-.534l-2.251 4.015c-.842 1.5.3 2.713 2.91 2.713 2.612 0 5.875-.909 6.93-5.077a.565.565 0 0 1 1.112.17zm-13.757-.482c.694-.67 1.83-1.239 3.377-1.693l.07-.021c3.007-.9 6.723-5.328 7.952-9.478l.12-.417c.328-1.172.824-2.941 2.265-4.796q.163-.209.335-.41c-1.749.814-3.294 1.852-4.609 3.097-1.047.992-1.997 2.293-3.72 4.657-1.352 1.855-2.385 3.437-3.22 4.713-.395.602-1.126 1.744-1.998 3.148-.265.427-.627 1.02-.97 1.594.124-.124.257-.258.398-.394"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: zola
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for zola (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-zola {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-zola {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-zola 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-zola 3s ease-in-out infinite alternate;
}
</style>