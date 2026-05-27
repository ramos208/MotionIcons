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
      <path d="M19.4999 10C19.4999 6.22876 19.4999 4.34315 18.3284 3.17157C17.1568 2 15.2712 2 11.4999 2H10.5C6.72883 2 4.84323 2 3.67166 3.17156C2.50008 4.34312 2.50007 6.22872 2.50004 9.99993L2.5 13.9999C2.49997 17.7712 2.49995 19.6568 3.67153 20.8284C4.8431 22 6.72873 22 10.5 22H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7 7H15M7 12H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15.8613 22H20.1387C21.0238 22 21.7723 21.3987 21.4039 20.753C20.8135 19.7186 19.5114 19 18 19C16.4886 19 15.1865 19.7186 14.5961 20.753C14.2277 21.3987 14.9762 22 15.8613 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.9969 16.5C18.9639 16.5 19.7477 15.7165 19.7477 14.75C19.7477 13.7835 18.9639 13 17.9969 13C17.03 13 16.2461 13.7835 16.2461 14.75C16.2461 15.7165 17.03 16.5 17.9969 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: license-third-party
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for license-third-party (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-license-third-party {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-license-third-party {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-license-third-party 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-license-third-party 3s ease-in-out infinite alternate;
}
</style>