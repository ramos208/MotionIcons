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
      <path d="M20.919 13.176c.048-.384.084-.768.084-1.176s-.036-.792-.084-1.176l2.532-1.98a.605.605 0 0 0 .144-.768l-2.4-4.152a.603.603 0 0 0-.732-.264l-2.988 1.2a8.767 8.767 0 0 0-2.028-1.176l-.456-3.18A.585.585 0 0 0 14.403 0h-4.8c-.3 0-.552.216-.588.504l-.456 3.18A9.22 9.22 0 0 0 6.531 4.86l-2.988-1.2a.585.585 0 0 0-.732.264l-2.4 4.152a.592.592 0 0 0 .144.768l2.532 1.98c-.048.384-.084.78-.084 1.176s.036.792.084 1.176l-2.532 1.98a.605.605 0 0 0-.144.768l2.4 4.152c.144.264.468.36.732.264l2.988-1.2c.624.48 1.296.876 2.028 1.176l.456 3.18a.585.585 0 0 0 .588.504h4.8c.3 0 .552-.216.588-.504l.456-3.18a9.22 9.22 0 0 0 2.028-1.176l2.988 1.2c.276.108.588 0 .732-.264l2.4-4.152a.605.605 0 0 0-.144-.768l-2.532-1.98zM9.603 15.6V8.4l6 3.6-6 3.6z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: youtubestudio
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for youtubestudio (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-youtubestudio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-youtubestudio {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-youtubestudio 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-youtubestudio 3s ease-in-out infinite alternate;
}
</style>