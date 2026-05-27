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
      <path d="M9.622.21c.235-.126 1.12-.432 1.38.06.26.492-.483 1.061-.736 1.196-.252.136-.664.122-.898-.321A.675.675 0 0 1 9.622.21zm2.634 4.822c.236-.126 1.12-.431 1.38.06.26.492-.482 1.061-.735 1.196-.253.136-.664.123-.899-.32a.675.675 0 0 1 .254-.936ZM12 24a11.403 11.403 0 0 1-8.08-3.345 11.38 11.38 0 0 1-3.35-8.077 11.378 11.378 0 0 1 3.35-8.077 11.392 11.392 0 0 1 3.632-2.446 2.835 2.835 0 0 1 3.719 1.508 2.84 2.84 0 0 1-1.508 3.716c-.684.289-1.3.704-1.83 1.233a5.71 5.71 0 0 0-1.684 4.067 5.705 5.705 0 0 0 1.684 4.065A5.727 5.727 0 0 0 12 18.327a5.727 5.727 0 0 0 4.068-1.683 5.712 5.712 0 0 0 1.685-4.065 2.84 2.84 0 0 1 2.838-2.837 2.84 2.84 0 0 1 2.838 2.836 11.34 11.34 0 0 1-.9 4.447 11.367 11.367 0 0 1-2.447 3.63A11.422 11.422 0 0 1 12 24Zm.426-21.111c.263-.14 1.346-.533 1.635.016.29.549-.633 1.235-.915 1.386-.282.15-.742.136-1.003-.359a.754.754 0 0 1 .283-1.043Zm-1.004-1.806c.263-.14 1.32-.518 1.61.03.29.55-.608 1.221-.89 1.372-.282.151-.741.136-1.003-.358a.754.754 0 0 1 .283-1.044Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: macpaw
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for macpaw (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-macpaw {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-macpaw {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-macpaw 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-macpaw 3s ease-in-out infinite alternate;
}
</style>