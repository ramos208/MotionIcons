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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3l18 18"/><path d="M8.469 8.46a5 5 0 0 0 7.058 7.084"/><path d="M16.913 12.936a5 5 0 0 0 -5.826 -5.853"/><path d="M12 7v-4"/><path d="M11 3h2"/><path d="M15.536 8.464l2.828 -2.828"/><path d="M17.657 4.929l1.414 1.414"/><path d="M17 12h4"/><path d="M21 11v2"/><path d="M18.364 18.363l-.707 .707"/><path d="M12 17v4"/><path d="M13 21h-2"/><path d="M8.465 15.536l-2.829 2.828"/><path d="M6.343 19.071l-1.413 -1.414"/><path d="M7 12h-4"/><path d="M3 13v-2"/><path d="M5.636 5.637l-.707 .707"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: virus-off
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for virus-off (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-virus-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-virus-off {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-virus-off 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-virus-off 3s ease-in-out infinite alternate;
}
</style>