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
      <path d="M23.268 10.541C23.268 4.715 18.544 0 12.728 0c-1.614 0-3.191.317-4.663.952a11.952 11.952 0 00-3.817 2.574 11.915 11.915 0 00-3.516 8.478 11.924 11.924 0 003.516 8.48 12.05 12.05 0 003.817 2.573c1.472.626 3.05.943 4.671.943 1.56 0 3.05-.3 4.416-.837l-.908-2.292a9.448 9.448 0 01-3.508.67 9.481 9.481 0 01-6.743-2.794A9.481 9.481 0 013.2 12.004c0-2.547.996-4.944 2.794-6.742a9.496 9.496 0 016.743-2.794 8.072 8.072 0 016.734 12.524l-2.098-5.165c-.308-.758-.679-1.895-2.071-1.895-1.393 0-1.763 1.146-2.063 1.895l-1.93 4.769-2.591-6.54H5.993l3.226 7.95c.326.802.688 1.895 2.09 1.895 1.4 0 1.753-1.093 2.08-1.895l1.912-4.724 1.921 4.724c.388.978.802 1.895 2.08 1.895.908 0 1.481-.582 1.798-.96a10.493 10.493 0 002.168-6.4Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: workplace
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for workplace (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-workplace {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-workplace {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-workplace 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-workplace 3s ease-in-out infinite alternate;
}
</style>