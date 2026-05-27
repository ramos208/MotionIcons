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
      <path d="M12.9983 2.50022V3.00043C12.9983 5.83009 12.9983 7.24492 13.8772 8.12398C14.7561 9.00304 16.1707 9.00304 18.9998 9.00304H19.4999M4 8.00261C4.01954 5.69979 4.13999 4.41108 4.8825 3.48998C5.06155 3.26787 5.26383 3.06554 5.4859 2.88646C6.58513 2 8.20803 2 11.4538 2C12.1595 2 12.5124 2 12.8355 2.11406C12.9027 2.13778 12.9686 2.16508 13.0329 2.19583C13.342 2.3437 13.5915 2.59325 14.0905 3.09236L18.8282 7.83096C19.4063 8.40927 19.6954 8.69843 19.8477 9.06613C20 9.43383 20 9.84276 20 10.6606V14.0052C20 17.7781 20 19.6645 18.8281 20.8366C17.8848 21.7801 16.4787 21.9641 13.9986 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10 14C10 15.6569 8.65685 17 7 17C5.34315 17 4 15.6569 4 14C4 12.3431 5.34315 11 7 11C8.65685 11 10 12.3431 10 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4.99999 16.5L4.13292 21.2689C4.06371 21.6496 4.35617 22 4.7431 22C4.90759 22 5.06533 21.9347 5.18164 21.8184L6.99999 20L8.81834 21.8184C8.93465 21.9347 9.0924 22 9.25688 22C9.64382 22 9.93628 21.6496 9.86706 21.2689L8.99999 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: file-badge
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for file-badge (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-file-badge {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-file-badge {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-file-badge 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-file-badge 3s ease-in-out infinite alternate;
}
</style>