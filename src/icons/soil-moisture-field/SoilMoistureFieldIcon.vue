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
      <path d="M2 3C3.86377 3 4.79565 3 5.53073 3.30448C6.51085 3.71046 7.28954 4.48915 7.69552 5.46927C8 6.20435 8 7.13623 8 9C6.13623 9 5.20435 9 4.46927 8.69552C3.48915 8.28954 2.71046 7.51085 2.30448 6.53073C2 5.79565 2 4.86377 2 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 5C10.7575 5 10.1362 5 9.64618 5.20299C8.99277 5.47364 8.47364 5.99277 8.20299 6.64618C8 7.13623 8 7.75749 8 9C9.24251 9 9.86377 9 10.3538 8.79701C11.0072 8.52636 11.5264 8.00723 11.797 7.35382C12 6.86377 12 6.24251 12 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M8 9V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 14L2 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 17L2 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 20L2 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16 18.5034C16 17.2482 17.0532 16.0077 17.7924 15.2917C18.1939 14.9028 18.8061 14.9028 19.2076 15.2917C19.9468 16.0077 21 17.2482 21 18.5034C21 19.7341 20.0533 21 18.5 21C16.9467 21 16 19.7341 16 18.5034Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: soil-moisture-field
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for soil-moisture-field (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-soil-moisture-field {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-soil-moisture-field {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-soil-moisture-field 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-soil-moisture-field 3s ease-in-out infinite alternate;
}
</style>