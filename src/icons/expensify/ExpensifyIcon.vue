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
      <path d="M8.16 17.52h7.68v-2.28h-4.872v-2.136h4.152v-2.328h-4.152v-2.04h4.872V6.48H8.16v11.04z M21.6 12a9.608 9.608 0 01-2.16 6.072l1.704 1.704A11.958 11.958 0 0024 12c0-2.928-1.056-5.616-2.784-7.68l-1.704 1.704A9.61 9.61 0 0121.6 12z M18.072 19.44a9.608 9.608 0 01-12.048.072L4.32 21.216A11.913 11.913 0 0012 24c2.976 0 5.688-1.08 7.776-2.856l-1.704-1.704z M4.632 18.168A9.613 9.613 0 012.4 12c0-5.304 4.296-9.6 9.6-9.6 2.352 0 4.488.84 6.168 2.232l1.704-1.704A12.02 12.02 0 0012 0C5.376 0 0 5.376 0 12c0 3 1.104 5.76 2.928 7.872l1.704-1.704z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: expensify
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for expensify (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-expensify {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-expensify {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-expensify 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-expensify 3s ease-in-out infinite alternate;
}
</style>