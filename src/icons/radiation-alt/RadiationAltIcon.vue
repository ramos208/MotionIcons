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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M312 256h79.1c9.2 0 16.9-7.7 16-16.8-4.6-43.6-27-81.8-59.5-107.8-7.6-6.1-18.8-4.5-24 3.8L281.9 202c18 11.2 30.1 31.2 30.1 54zm-97.8 54.1L172.4 377c-4.9 7.8-2.4 18.4 5.8 22.5 21.1 10.4 44.7 16.5 69.8 16.5s48.7-6.1 69.9-16.5c8.2-4.1 10.6-14.7 5.8-22.5l-41.8-66.9c-9.8 6.2-21.4 9.9-33.8 9.9s-24.1-3.7-33.9-9.9zM104.9 256H184c0-22.8 12.1-42.8 30.2-54.1l-41.7-66.8c-5.2-8.3-16.4-9.9-24-3.8-32.6 26-54.9 64.2-59.5 107.8-1.1 9.2 6.7 16.9 15.9 16.9zM248 504c137 0 248-111 248-248S385 8 248 8 0 119 0 256s111 248 248 248zm0-432c101.5 0 184 82.5 184 184s-82.5 184-184 184S64 357.5 64 256 146.5 72 248 72zm0 216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: radiation-alt
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for radiation-alt (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-radiation-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-radiation-alt {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-radiation-alt 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-radiation-alt 3s ease-in-out infinite alternate;
}
</style>