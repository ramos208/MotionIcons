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
      <path d="M12 0A11.999 11.999 0 0 0 1.607 18c.001 0 .143.279.545.861.456.661.725.939.725.939L14.194.2s-.468-.09-1.17-.158C12.56-.002 12 0 12 0m4.184.755L4.35 21.248a12 12 0 0 0 1.652 1.144c5.734 3.312 13.078 1.342 16.39-4.394 3.31-5.735 1.342-13.08-4.394-16.39 0 0-.42-.236-.926-.479-.403-.193-.891-.373-.891-.373m-5.38 1.317L2.806 15.926A9.98 9.98 0 0 1 3.34 7a9.99 9.99 0 0 1 7.463-4.928M17 3.34c4.78 2.759 6.42 8.88 3.66 13.66-2.758 4.779-8.881 6.42-13.66 3.66z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: odin
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for odin (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-odin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-odin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-odin 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-odin 3s ease-in-out infinite alternate;
}
</style>