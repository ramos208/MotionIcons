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
      <path d="M16.6168 1C16.8637 1.76959 17 2.6141 17 3.5C17 7.08985 14.7614 10 12 10C9.23858 10 7 7.08985 7 3.5C7 2.6141 7.13633 1.76959 7.3832 1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.5002 17C19.4331 17 21 15.4315 21 13.4966C21 12.2213 20.2104 11.4762 19.6921 10.4128C18.6981 8.37328 19.6776 5.84899 20.2997 3.71716C20.4253 3.28669 20.2309 2.8325 19.8419 2.61L17.2549 1.13018C17.0883 1.03491 16.898 0.988697 16.7067 1.00235C15.0599 1.11988 13.1608 1.53312 12 2.98622C10.8392 1.53312 8.94012 1.11988 7.29334 1.00235C7.102 0.988697 6.91166 1.03491 6.7451 1.13018L4.15808 2.61C3.76911 2.8325 3.57474 3.28669 3.70035 3.71716C4.32241 5.84899 5.30191 8.37328 4.30792 10.4128C3.78962 11.4762 3 12.2213 3 13.4966C3 15.4315 4.56694 17 6.49985 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14 16.25C12.5235 15.632 11.661 15.5364 10 16.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M5 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M19 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 3C15.2742 3.45112 14 5.03024 14 6.90903C14 7.67442 14.2115 8.39008 14.5788 9M7 3C8.72577 3.45112 10 5.03024 10 6.90903C10 7.67442 9.78852 8.39008 9.4212 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tank-top
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tank-top (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tank-top {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tank-top {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tank-top 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tank-top 3s ease-in-out infinite alternate;
}
</style>