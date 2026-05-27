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
      <!--Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)--><path d="M344 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM248 8C111 8 0 119 0 256c0 106.3 67 196.7 161 232-5.6-12.2-9-25.7-9-40v-45.5c-24.7-16.2-43.5-38.1-47.8-63.8-2-11.8 9.3-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.1 20.7 17.9-4.3 25.7-23.1 47.6-47.8 63.8V448c0 14.3-3.4 27.8-9 40 94-35.3 161-125.7 161-232C496 119 385 8 248 8zm-56 225l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L112 233c-8.5 7.4-21.6.3-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S208 197 212 222.2c1.6 11.1-11.6 18.2-20 10.8zm152 39c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-50.9 102.6c-14.4-6.5-31.1 2.2-34.6 17.6l-1.8 7.8c-2.1 9.2-15.2 9.2-17.3 0l-1.8-7.8c-3.5-15.4-20.2-24.1-34.6-17.6-.9.4.3-.2-18.9 9.4v63c0 35.2 28 64.5 63.1 64.9 35.7.5 64.9-28.4 64.9-64v-64c-19.5-9.6-18.2-8.9-19-9.3z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: grin-tongue-wink
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for grin-tongue-wink (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-grin-tongue-wink {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-grin-tongue-wink {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-grin-tongue-wink 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-grin-tongue-wink 3s ease-in-out infinite alternate;
}
</style>