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
      <path d="M22.2027 1.7925H4.2812c-1.3897 0-2.2795 1.4698-1.6293 2.6917l1.7927 3.3773H1.1947a1.2 1.2 0 0 0-.5873.1537 1.1924 1.1924 0 0 0-.4356.421 1.1847 1.1847 0 0 0-.0342 1.1683l5.766 10.858c.1017.191.2537.3507.4399.4622a1.1996 1.1996 0 0 0 1.2326 0 1.1913 1.1913 0 0 0 .4398-.4623l1.566-2.933 1.9647 3.7006c.6914 1.3016 2.5645 1.304 3.2584.0038L23.7878 4.416c.635-1.1895-.2314-2.6235-1.5851-2.6235ZM14.1524 8.978l-3.8733 7.2533a.7932.7932 0 0 1-.2927.3074.7986.7986 0 0 1-.82 0 .7933.7933 0 0 1-.2927-.3074L5.0378 9.0086a.7883.7883 0 0 1 .0208-.7776.7933.7933 0 0 1 .2891-.281.7985.7985 0 0 1 .3906-.1033h7.7307a.7769.7769 0 0 1 .381.0998.7717.7717 0 0 1 .2823.2736.7672.7672 0 0 1 .02.758z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: vtex
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for vtex (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-vtex {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-vtex {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-vtex 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-vtex 3s ease-in-out infinite alternate;
}
</style>