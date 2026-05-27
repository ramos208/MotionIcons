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
      <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 0 0 9.764 11.791c.048-1.003.052-2.55.047-9.967 0-5.484.003-9.995.013-10.023.028-.08 2.26-.042 2.678.047a4.903 4.903 0 0 1 3.078 2.08 4.834 4.834 0 0 1-.7 6.164c-.924.878-2.041 1.334-3.29 1.334-.225 0-.29.012-.305.068-.01.043-.02 2.418-.014 5.287v5.196A12 12 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm-.691 4.31c-.013.004-.017.023-.02.063-.018.245-.023 8.358-.004 8.39.01.02.075-.014.145-.07 2.673-1.952 3.467-2.792 3.738-3.939.14-.746-.174-1.466-1.01-2.3-.699-.72-1.692-1.358-2.779-2.099-.038-.033-.058-.047-.07-.044z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: purgecss
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for purgecss (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-purgecss {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-purgecss {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-purgecss 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-purgecss 3s ease-in-out infinite alternate;
}
</style>