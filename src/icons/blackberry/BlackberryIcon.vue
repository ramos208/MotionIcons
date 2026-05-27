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
      <path d="M2.05 3.54L1.17 7.7H4.45C6.97 7.7 7.73 6.47 7.73 5.36C7.73 4.54 7.26 3.54 5.21 3.54H2.05M10.54 3.54L9.66 7.7H12.94C15.5 7.7 16.22 6.47 16.22 5.36C16.22 4.54 15.75 3.54 13.7 3.54H10.54M18.32 7.23L17.39 11.39H20.67C23.24 11.39 24 10.22 24 9.05C24 8.23 23.53 7.23 21.5 7.23H18.32M.88 9.8L0 13.96H3.28C5.85 13.96 6.56 12.73 6.56 11.62C6.56 10.8 6.09 9.8 4.04 9.8H.88M9.43 9.8L8.5 13.96H11.77C14.34 13.96 15.11 12.73 15.11 11.62C15.11 10.8 14.64 9.8 12.59 9.8H9.42M17.09 13.73L16.22 17.88H19.5C22 17.88 22.77 16.71 22.77 15.54C22.77 14.72 22.3 13.73 20.26 13.73H17.09M8.2 16.3L7.32 20.46H10.6C13.11 20.46 13.87 19.23 13.87 18.12C13.87 17.3 13.41 16.3 11.36 16.3H8.2Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: blackberry
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for blackberry (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-blackberry {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-blackberry {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-blackberry 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-blackberry 3s ease-in-out infinite alternate;
}
</style>