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
      <path d="M10.3483 10H13.6517C15.6822 10 16.6974 10 16.9501 9.39139C17.2028 8.78277 16.4849 8.06648 15.0491 6.63391L13.3974 4.9859L13.3974 4.9859C12.7387 4.32863 12.4093 4 12 4C11.5907 4 11.2613 4.32864 10.6026 4.9859L8.95091 6.63391L8.95091 6.63391C7.51513 8.06649 6.79724 8.78277 7.0499 9.39139C7.30256 10 8.31781 10 10.3483 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.3483 14H13.6517C15.6822 14 16.6974 14 16.9501 14.6086C17.2028 15.2172 16.4849 15.9335 15.0491 17.3661L13.3974 19.0141C12.7387 19.6714 12.4093 20 12 20C11.5907 20 11.2613 19.6714 10.6026 19.0141L8.95091 17.3661C7.51513 15.9335 6.79724 15.2172 7.0499 14.6086C7.30256 14 8.31781 14 10.3483 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: unfold-more-up
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for unfold-more-up (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-unfold-more-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-unfold-more-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-unfold-more-up 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-unfold-more-up 3s ease-in-out infinite alternate;
}
</style>