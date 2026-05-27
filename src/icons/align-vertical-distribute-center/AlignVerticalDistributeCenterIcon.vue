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
      <path d="M22 7.5L16 7.5M8 7.5L2 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 16.5L19 16.5M5 16.5L2 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.5 19L16.497 19C16.9617 19 17.194 19 17.3872 18.9616C18.1806 18.8038 18.8008 18.1836 18.9586 17.3902C18.997 17.197 18.997 16.9647 18.997 16.5C18.997 16.0353 18.997 15.803 18.9586 15.6098C18.8008 14.8164 18.1806 14.1962 17.3872 14.0384C17.194 14 16.9617 14 16.497 14L7.5 14C7.03534 14 6.80302 14 6.60982 14.0384C5.81644 14.1962 5.19624 14.8164 5.03843 15.6098C5 15.803 5 16.0353 5 16.5C5 16.9647 5 17.197 5.03843 17.3902C5.19624 18.1836 5.81644 18.8038 6.60982 18.9616C6.80302 19 7.03534 19 7.5 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5 10H13.497C13.9617 10 14.194 10 14.3872 9.96157C15.1806 9.80376 15.8008 9.18356 15.9586 8.39018C15.997 8.19698 15.997 7.96466 15.997 7.5C15.997 7.03534 15.997 6.80302 15.9586 6.60982C15.8008 5.81644 15.1806 5.19624 14.3872 5.03843C14.194 5 13.9617 5 13.497 5L10.5 5C10.0353 5 9.80302 5 9.60982 5.03843C8.81644 5.19624 8.19624 5.81644 8.03843 6.60982C8 6.80302 8 7.03535 8 7.5C8 7.96466 8 8.19698 8.03843 8.39018C8.19624 9.18356 8.81644 9.80376 9.60982 9.96157C9.80302 10 10.0353 10 10.5 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-vertical-distribute-center
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for align-vertical-distribute-center (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-align-vertical-distribute-center {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-align-vertical-distribute-center {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-vertical-distribute-center 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-align-vertical-distribute-center 3s ease-in-out infinite alternate;
}
</style>