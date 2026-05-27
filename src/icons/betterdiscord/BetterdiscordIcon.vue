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
      <path d="M14.393.861q.514.258.964.57a6.6 6.6 0 0 1 2.122 2.387c.513.987.792 2.133.828 3.409v9.556c-.035 1.275-.313 2.422-.828 3.408a6.6 6.6 0 0 1-2.122 2.387 8 8 0 0 1-.933.555h.933c4.46.024 8.643-2.205 8.643-7.315V8.352c.024-5.21-4.16-7.49-8.62-7.49zM0 .867v9.197l5.693 5.127V5.44h3.31c3.537 0 3.537 4.444 0 4.444H6.817v4.244h2.188c3.536 0 3.536 4.441 0 4.441H0v4.57h8.904c4.59 0 8.151-1.836 8.278-6.388 0-2.094-.574-3.66-1.584-4.748 1.01-1.087 1.584-2.652 1.584-4.746-.125-4.553-3.687-6.39-8.278-6.39z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: betterdiscord
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for betterdiscord (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-betterdiscord {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-betterdiscord {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-betterdiscord 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-betterdiscord 3s ease-in-out infinite alternate;
}
</style>