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
      <path d="M1.9485 16.5624C3.1842 17.7981 4.8 18.4159 6.416 18.4159c1.6158 0 3.2317-.6179 4.4673-1.8535l5.798-5.798-1.4257-1.4258-5.798 5.7505c-1.6634 1.6634-4.3723 1.6634-6.0832 0l-.095-.095c-1.6635-1.6634-1.6635-4.3723 0-6.0832l.095-.095c1.6633-1.6635 4.3723-1.6635 6.0832 0l.4752.5227 1.4258-1.4258-.4753-.5227c-2.4713-2.4713-6.5109-2.4713-8.9822 0l-.0475.1425c-2.4713 2.4713-2.4713 6.511 0 8.9823zm20.0556-9.1248c-1.2357-1.2357-2.8515-1.8535-4.4674-1.8535-1.6158 0-3.2317.6179-4.4673 1.8535l-5.798 5.798 1.4257 1.4258 5.798-5.7505c1.6634-1.6634 4.3723-1.6634 6.0832 0l.095.095c1.6634 1.6634 1.6634 4.3723 0 6.0832l-.095.095c-1.6633 1.6635-4.3723 1.6635-6.0832 0l-.4752-.4752-1.4258 1.4258.4753.4752c2.4713 2.4713 6.5109 2.4713 8.9822 0l.095-.095c2.4713-2.4713 2.4713-6.511 0-8.9823-.0475 0-.1425-.095-.1425-.095z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: crayon
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for crayon (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-crayon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-crayon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-crayon 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-crayon 3s ease-in-out infinite alternate;
}
</style>