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
      <path d="M21 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 7.5V16.497C17 16.9617 17 17.194 16.9616 17.3872C16.8038 18.1806 16.1836 18.8008 15.3902 18.9586C15.197 18.997 14.9647 18.997 14.5 18.997C14.0353 18.997 13.803 18.997 13.6098 18.9586C12.8164 18.8008 12.1962 18.1806 12.0384 17.3872C12 17.194 12 16.9617 12 16.497V7.5C12 7.03534 12 6.80302 12.0384 6.60982C12.1962 5.81644 12.8164 5.19624 13.6098 5.03843C13.803 5 14.0353 5 14.5 5C14.9647 5 15.197 5 15.3902 5.03843C16.1836 5.19624 16.8038 5.81644 16.9616 6.60982C17 6.80302 17 7.03534 17 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 10.5V13.497C8 13.9617 8 14.194 7.96157 14.3872C7.80376 15.1806 7.18356 15.8008 6.39018 15.9586C6.19698 15.997 5.96466 15.997 5.5 15.997C5.03534 15.997 4.80302 15.997 4.60982 15.9586C3.81644 15.8008 3.19624 15.1806 3.03843 14.3872C3 14.194 3 13.9617 3 13.497V10.5C3 10.0353 3 9.80302 3.03843 9.60982C3.19624 8.81644 3.81644 8.19624 4.60982 8.03843C4.80302 8 5.03534 8 5.5 8C5.96466 8 6.19698 8 6.39018 8.03843C7.18356 8.19624 7.80376 8.81644 7.96157 9.60982C8 9.80302 8 10.0353 8 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-horizontal-justify-end
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for align-horizontal-justify-end (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-align-horizontal-justify-end {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-align-horizontal-justify-end {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-horizontal-justify-end 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-align-horizontal-justify-end 3s ease-in-out infinite alternate;
}
</style>