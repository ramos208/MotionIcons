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
      <path d="M11.999 0h-.012c-2.21 0-4.3.863-5.888 2.432-.15.148-.428.458-.428.458-.096.11-.188.22-.276.334l-.036.047a8.683 8.683 0 0 0-1.836 5.016v15.41a.32.32 0 0 0 .05.17.304.304 0 0 0 .254.133h2.881a.303.303 0 0 0 .305-.304v-7.843c0-.054.037-.08.053-.087a.1.1 0 0 1 .104.008 8.293 8.293 0 0 0 4.815 1.525c1.32 0 2.547-.305 3.68-.86 2.847-1.392 4.812-4.356 4.812-7.793 0-4.78-3.796-8.645-8.478-8.645zm-.013 13.994c-2.841 0-5.152-2.396-5.152-5.34 0-2.946 2.31-5.342 5.152-5.342 2.841 0 5.152 2.396 5.152 5.341 0 2.945-2.31 5.341-5.152 5.341z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: picsart
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for picsart (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-picsart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-picsart {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-picsart 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-picsart 3s ease-in-out infinite alternate;
}
</style>