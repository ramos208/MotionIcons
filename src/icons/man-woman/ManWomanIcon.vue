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
      <path d="M19.4995 20V16.5C20.5856 16.5 21.1991 16.5 21.4186 16.0257C21.6381 15.5515 21.3953 14.9028 20.9095 13.6056L19.6676 10.2889C19.2571 9.19253 18.4179 8.5 17.5 8.5C16.5821 8.5 15.7429 9.19253 15.3324 10.2889L14.0905 13.6056C13.6047 14.9028 13.3619 15.5515 13.5814 16.0257C13.8009 16.5 14.4133 16.5 15.4995 16.5V20C15.4995 20.9428 15.4995 21.4142 15.7924 21.7071C16.0853 22 16.5567 22 17.4995 22C18.4423 22 18.9137 22 19.2066 21.7071C19.4995 21.4142 19.4995 20.9428 19.4995 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8.5 4C8.5 5.10457 7.60457 6 6.5 6C5.39543 6 4.5 5.10457 4.5 4C4.5 2.89543 5.39543 2 6.5 2C7.60457 2 8.5 2.89543 8.5 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19.5 4C19.5 5.10457 18.6046 6 17.5 6C16.3954 6 15.5 5.10457 15.5 4C15.5 2.89543 16.3954 2 17.5 2C18.6046 2 19.5 2.89543 19.5 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 12.5C10.5 10.6144 10.5 9.67157 9.91421 9.08579C9.32843 8.5 8.38562 8.5 6.5 8.5C4.61438 8.5 3.67157 8.5 3.08579 9.08579C2.5 9.67157 2.5 10.6144 2.5 12.5V14.5C2.5 15.4428 2.5 15.9142 2.79289 16.2071C3.08579 16.5 3.55719 16.5 4.5 16.5V20C4.5 20.9428 4.5 21.4142 4.79289 21.7071C5.08579 22 5.55719 22 6.5 22C7.44281 22 7.91421 22 8.20711 21.7071C8.5 21.4142 8.5 20.9428 8.5 20V16.5C9.44281 16.5 9.91421 16.5 10.2071 16.2071C10.5 15.9142 10.5 15.4428 10.5 14.5V12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: man-woman
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for man-woman (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-man-woman {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-man-woman {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-man-woman 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-man-woman 3s ease-in-out infinite alternate;
}
</style>