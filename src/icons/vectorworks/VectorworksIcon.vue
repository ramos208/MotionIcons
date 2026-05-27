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
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.725c-5.925 0-10.725-4.8-10.725-10.725S6.075 1.275 12 1.275 22.725 6.075 22.725 12 17.925 22.725 12 22.725zM8.775 7.5h-2.25c-.15 0-.208.086-.15.225l4.425 10.65c.04.098.15.225.3.225h1.95c.15 0 .206-.086.15-.225l-4.35-10.8c-.028-.07-.035-.075-.075-.075zm8.7 0h-2.25c-.075 0-.13.023-.15.075L13.35 11.85a.6.6 0 0 0 0 .375l1.05 2.55c.075.15.225.15.3 0l2.925-7.05c.057-.139 0-.225-.15-.225z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vectorworks
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vectorworks (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vectorworks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vectorworks {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vectorworks 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vectorworks 3s ease-in-out infinite alternate;
}
</style>