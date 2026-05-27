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
      <path d="M22.0002 8.99998V15C22.0002 17.8284 22.0002 19.2426 21.1215 20.1213C20.2428 21 18.8286 21 16.0002 21H8.00018C5.17176 21 3.75754 21 2.87886 20.1213C2.00018 19.2426 2.00018 17.8284 2.00018 15V11.0537C2.00018 10.0736 2.00018 9.58356 2.1136 9.18288C2.39734 8.18054 3.18074 7.39714 4.18307 7.11341C4.58376 6.99998 5.07379 6.99998 6.05387 6.99998C6.41985 6.99998 6.60284 6.99998 6.77329 6.97027C7.19563 6.89665 7.58313 6.68926 7.87867 6.37869C7.99794 6.25335 8.29718 5.8045 8.50018 5.49998C8.89656 4.90543 9.09474 4.60815 9.36568 4.40365C9.53113 4.27877 9.71499 4.18038 9.91067 4.11198C10.2311 3.99998 10.5884 3.99998 11.303 3.99998H13.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.0002 13.5C16.0002 15.7091 14.2093 17.5 12.0002 17.5C9.79104 17.5 8.00018 15.7091 8.00018 13.5C8.00018 11.2908 9.79104 9.49998 12.0002 9.49998C14.2093 9.49998 16.0002 11.2908 16.0002 13.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.0002 5.49998H21.0002M18.5002 7.99998V2.99998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: camera-add01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for camera-add01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-camera-add01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-camera-add01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-camera-add01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-camera-add01 3s ease-in-out infinite alternate;
}
</style>