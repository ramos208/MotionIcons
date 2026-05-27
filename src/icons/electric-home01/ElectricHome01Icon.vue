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
      <path d="M20 8.58505V13.5005C20 17.2717 20 19.1574 18.8284 20.3289C18.0203 21.1371 16.8723 21.3878 15 21.4655M4 8.58505V13.5005C4 17.2717 4 19.1574 5.17157 20.3289C6.23465 21.392 7.88563 21.4905 10.9998 21.4996C11.5521 21.5012 12 21.0528 12 20.5005V17.5005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 10.5003L17.6569 6.33582C14.9902 3.77883 13.6569 2.50034 12 2.50034C10.3431 2.50034 9.00981 3.77883 6.34315 6.33582L2 10.5003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.001 9.00034V11.5003M10.001 11.5003V9.00034M8.50553 12.3803C8.46629 11.9054 8.87602 11.5003 9.39552 11.5003H14.6104C15.1299 11.5003 15.5396 11.9054 15.5004 12.3803L15.3931 13.6777C15.316 14.6104 14.9786 15.5093 14.4133 16.2879L14.0628 16.7706C13.7319 17.2264 13.1741 17.5003 12.5768 17.5003H11.4291C10.8318 17.5003 10.2741 17.2264 9.94308 16.7706L9.59262 16.2879C9.02726 15.5093 8.68984 14.6104 8.61276 13.6777L8.50553 12.3803Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: electric-home01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for electric-home01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-electric-home01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-electric-home01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-electric-home01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-electric-home01 3s ease-in-out infinite alternate;
}
</style>