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
      <path d="M 8.784 8.39 C 8.581 8.391 8.382 8.458 8.22 8.582 L 0.118 14.772 C -0.04 14.897 -0.04 15.138 0.118 15.262 L 0.457 15.515 C 0.61 15.635 0.825 15.635 0.98 15.515 L 4.998 12.454 C 5.22 12.286 5.526 12.286 5.748 12.454 L 8.407 14.487 C 8.628 14.655 8.934 14.655 9.156 14.487 L 12.671 11.804 C 12.902 11.636 12.902 11.291 12.671 11.122 L 9.349 8.582 C 9.187 8.458 8.988 8.39 8.784 8.39 Z M 18.082 8.39 C 17.878 8.39 17.68 8.458 17.519 8.582 L 9.417 14.778 C 9.255 14.901 9.255 15.144 9.417 15.267 L 9.752 15.522 C 9.908 15.638 10.124 15.638 10.279 15.522 L 14.914 11.989 C 15.136 11.823 15.442 11.823 15.662 11.989 L 20.189 15.441 C 20.41 15.61 20.718 15.61 20.939 15.441 L 23.828 13.228 C 24.057 13.056 24.057 12.712 23.828 12.54 L 18.647 8.582 C 18.485 8.458 18.286 8.39 18.082 8.39 Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dovecot
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dovecot (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dovecot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dovecot {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dovecot 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dovecot 3s ease-in-out infinite alternate;
}
</style>