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
      <path d="M17.5 22C17.5 22 17 20 17 17C17 11.4 18.3333 4.66667 19 2C19.6667 5 21 12 21 16C21 17.2201 20.8139 18.6264 20.6688 19.5375C20.5717 20.147 20.1771 20.6614 19.6251 20.9375L17.5 22ZM17.5 22H5.06155C4.14382 22 3.35065 21.3726 3.22748 20.4631C3.11042 19.5988 3 18.4098 3 17C3 11 5 5 5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5.7808 2H19C18.9041 2.38357 18.7944 2.85129 18.6769 3.38767C18.4722 4.32192 17.6532 5 16.6968 5H4.3432C4.51032 4.14637 4.67316 3.38764 4.81813 2.75918C4.92127 2.31206 5.32193 2 5.7808 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.02139 18.0739C6.00778 17.7328 6 17.3742 6 17C6 15.3484 6.11597 13.5983 6.29662 11.8829C6.34969 11.379 6.77722 11 7.28398 11H13.27C13.8689 11 14.3328 11.5229 14.2722 12.1187C14.1056 13.7583 14 15.424 14 17C14 17.3197 14.0057 17.628 14.0158 17.9238C14.0358 18.5052 13.5784 19 12.9966 19H7.00227C6.47904 19 6.04226 18.5967 6.02139 18.0739Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: packaging
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for packaging (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-packaging {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-packaging {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-packaging 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-packaging 3s ease-in-out infinite alternate;
}
</style>