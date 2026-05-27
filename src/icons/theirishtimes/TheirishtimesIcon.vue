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
      <path d="M9.636 4.093V8.33h.42c.18-1.156.614-2.047 1.3-2.67.487-.448 1.27-.672 2.35-.672h1.197V17.22c0 .79-.043 1.28-.127 1.465-.116.263-.272.45-.473.557-.277.165-.642.246-1.096.246h-.518v.417h8.26v-.417h-.517c-.443 0-.793-.077-1.049-.228-.256-.15-.428-.327-.516-.528-.088-.203-.131-.706-.131-1.512V4.988h1.197c.743 0 1.264.07 1.56.208.532.254.95.595 1.256 1.023.305.427.584 1.13.834 2.11H24V4.093zM7.74 19.488c-.438 0-.787-.076-1.044-.227-.259-.15-.43-.328-.519-.529-.088-.202-.132-.705-.132-1.512V6.778c0-.79.041-1.278.127-1.464.114-.264.272-.45.472-.559.277-.162.641-.244 1.096-.244h.519v-.418H0v.418h.521c.441 0 .79.076 1.05.227.258.15.43.329.515.53.085.2.129.705.129 1.51v10.444c0 .79-.044 1.279-.128 1.465-.109.263-.264.45-.463.557-.28.164-.647.245-1.103.245H0v.418h8.26v-.418h-.52Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: theirishtimes
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for theirishtimes (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-theirishtimes {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-theirishtimes {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-theirishtimes 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-theirishtimes 3s ease-in-out infinite alternate;
}
</style>