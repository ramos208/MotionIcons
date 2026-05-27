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
      <path d="M92.7 58.8l78.4 78.4c18.2-25 28.9-55.9 28.9-89.2 0-14.1-1.9-27.7-5.5-40.6-38 9.4-72.6 27.2-101.8 51.4zM58.8 92.7c-24.2 29.2-42 63.8-51.4 101.8 12.9 3.6 26.5 5.5 40.6 5.5 33.3 0 64.1-10.7 89.2-28.9L58.8 92.7zM256 0c-4.6 0-9.2 .1-13.7 .4 3.7 15.3 5.7 31.2 5.7 47.6 0 46.6-15.9 89.4-42.6 123.4L256 222.1 419.3 58.8C374.9 22.1 318.1 0 256 0zM48 248c-16.4 0-32.4-2-47.6-5.7-.2 4.5-.4 9.1-.4 13.7 0 62.1 22.1 118.9 58.8 163.3L222.1 256 171.4 205.4C137.4 232.1 94.6 248 48 248zm463.6 21.7c.2-4.5 .4-9.1 .4-13.7 0-62.1-22.1-118.9-58.8-163.3L289.9 256 340.6 306.6c34-26.7 76.9-42.6 123.4-42.6 16.4 0 32.4 2 47.6 5.7zm-7.1 47.8c-12.9-3.6-26.5-5.5-40.6-5.5-33.3 0-64.1 10.7-89.2 28.9l78.4 78.4c24.2-29.2 42-63.8 51.4-101.8zM340.9 374.8c-18.2 25-28.9 55.9-28.9 89.2 0 14.1 1.9 27.7 5.5 40.6 38-9.4 72.6-27.2 101.8-51.4l-78.4-78.4zm-34.3-34.3L256 289.9 92.7 453.2c44.3 36.7 101.2 58.8 163.3 58.8 4.6 0 9.2-.1 13.7-.4-3.7-15.3-5.7-31.2-5.7-47.6 0-46.6 15.9-89.4 42.6-123.4z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: basketball
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for basketball (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-basketball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-basketball {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-basketball 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-basketball 3s ease-in-out infinite alternate;
}
</style>