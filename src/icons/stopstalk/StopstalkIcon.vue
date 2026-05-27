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
      <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm-.049 2.953a9.046 9.046 0 01.049 0 9.046 9.046 0 013.46.688L13.57 6.42l2.72.047 1.14-1.703A9.046 9.046 0 0121.047 12 9.046 9.046 0 0112 21.047a9.046 9.046 0 01-2.916-.483l1.937-2.828-2.72-.047-1.258 1.88A9.046 9.046 0 012.953 12a9.046 9.046 0 018.998-9.047zm1.713 4.072a.55.55 0 00-.42.172c-.17.156-.266.248-.297.264-.653-.28-1.196-.42-1.662-.42-.653 0-1.213.219-1.664.639-.45.435-.684.994-.684 1.724 0 .638.204 1.26.577 1.866.388.606 1.024 1.429 1.957 2.455.373.42.7.808.965 1.166.264.342.404.638.404.902 0 .14-.063.264-.188.357a.756.756 0 01-.466.14c-.513 0-1.025-.483-1.538-1.462-.14-.28-.248-.45-.326-.527-.077-.078-.328-.11-.732-.11-.311 0-.465.063-.465.172 0 .016.03.156.092.42l.435 2.004c.016.14.048.217.11.248.046.031.14.047.279.047.358 0 .59-.077.684-.232.046-.078.11-.125.187-.125a.88.88 0 01.358.109 3.19 3.19 0 001.212.248c.653 0 1.243-.217 1.772-.621.528-.42.809-1.01.809-1.787 0-.669-.156-1.259-.467-1.787-.311-.529-.965-1.384-1.975-2.58-.87-1.026-1.305-1.711-1.305-2.069 0-.28.14-.42.436-.42.404 0 .87.405 1.383 1.213.248.389.42.606.498.653.093.062.279.078.574.078.264 0 .42 0 .482-.032.063-.03.094-.076.094-.154 0-.015-.016-.079-.031-.187l-.467-2.051c-.03-.14-.078-.22-.14-.266a9.706 9.706 0 00-.48-.047Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: stopstalk
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for stopstalk (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-stopstalk {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-stopstalk {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-stopstalk 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-stopstalk 3s ease-in-out infinite alternate;
}
</style>