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
      <path d="M14 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 7.5V16.497C5 16.9617 5 17.194 5.03843 17.3872C5.19624 18.1806 5.81644 18.8008 6.60982 18.9586C6.80302 18.997 7.03534 18.997 7.5 18.997C7.96466 18.997 8.19698 18.997 8.39018 18.9586C9.18356 18.8008 9.80376 18.1806 9.96157 17.3872C10 17.194 10 16.9617 10 16.497V7.5C10 7.03534 10 6.80302 9.96157 6.60982C9.80376 5.81644 9.18356 5.19624 8.39018 5.03843C8.19698 5 7.96466 5 7.5 5C7.03534 5 6.80302 5 6.60982 5.03843C5.81644 5.19624 5.19624 5.81644 5.03843 6.60982C5 6.80302 5 7.03534 5 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 10.5V13.497C14 13.9617 14 14.194 14.0384 14.3872C14.1962 15.1806 14.8164 15.8008 15.6098 15.9586C15.803 15.997 16.0353 15.997 16.5 15.997C16.9647 15.997 17.197 15.997 17.3902 15.9586C18.1836 15.8008 18.8038 15.1806 18.9616 14.3872C19 14.194 19 13.9617 19 13.497V10.5C19 10.0353 19 9.80302 18.9616 9.60982C18.8038 8.81644 18.1836 8.19624 17.3902 8.03843C17.197 8 16.9647 8 16.5 8C16.0353 8 15.803 8 15.6098 8.03843C14.8164 8.19624 14.1962 8.81644 14.0384 9.60982C14 9.80302 14 10.0353 14 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: align-horizontal-distribute-start
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for align-horizontal-distribute-start (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-align-horizontal-distribute-start {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-align-horizontal-distribute-start {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-align-horizontal-distribute-start 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-align-horizontal-distribute-start 3s ease-in-out infinite alternate;
}
</style>