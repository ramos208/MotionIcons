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
      <path d="M174.9 272c10.7 0 20.7 5.3 26.6 14.2l11.8 17.8 26.7 0c26.5 0 48 21.5 48 48l0 112c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 352c0-26.5 21.5-48 48-48l26.7 0 11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2l61.7 0zm278.6-12c5.6-4.9 13.9-5.3 19.9-.9s8.3 12.4 5.3 19.3L440.3 368 496 368c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.3-12.4-5.3-19.3l38.5-89.7-55.8 0c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112zM144 360a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM483.8 .4c6.5-1.1 13.1 .4 18.5 4.4 6.1 4.5 9.7 11.7 9.7 19.2l0 152-.3 4.9c-3.3 24.2-30.5 43.1-63.7 43.1-35.3 0-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .6 16 1.6l0-49.3-112 33.6 0 110.2-.3 4.9c-3.3 24.2-30.5 43.1-63.7 43.1-35.3 0-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .6 16 1.6L304 72c0-10.6 7-20 17.1-23l160-48 2.7-.6zM188.9 0C226 0 256 30 256 67.1l0 6.1c0 56.1-75.2 112.1-110.3 135.3-10.8 7.1-24.6 7.1-35.4 0-35.1-23.1-110.3-79.2-110.3-135.3l0-6.1C0 30 30 0 67.1 0 88.2 0 108 9.9 120.7 26.8l7.3 9.8 7.3-9.8C148 9.9 167.8 0 188.9 0z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: icons
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for icons (fontawesome). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-icons {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-icons {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-icons 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-icons 3s ease-in-out infinite alternate;
}
</style>