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
      <path d="M18 20C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 6.84771V17.1523C4 18.7454 4 19.542 4.4645 20.0976C4.92899 20.6531 5.71415 20.7956 7.28446 21.0806L10.2845 21.6251C12.4701 22.0217 13.563 22.2201 14.2815 21.6215C15 21.023 15 19.9142 15 17.6968V6.30325C15 4.08578 15 2.97704 14.2815 2.37849C13.563 1.77994 12.4701 1.97827 10.2845 2.37495L7.28446 2.91941C5.71415 3.2044 4.92899 3.34689 4.4645 3.90244C4 4.45799 4 5.25457 4 6.84771Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11.625 12H11.5M11.75 12C11.75 12.1381 11.6381 12.25 11.5 12.25C11.3619 12.25 11.25 12.1381 11.25 12C11.25 11.8619 11.3619 11.75 11.5 11.75C11.6381 11.75 11.75 11.8619 11.75 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: door01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for door01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-door01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-door01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-door01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-door01 3s ease-in-out infinite alternate;
}
</style>