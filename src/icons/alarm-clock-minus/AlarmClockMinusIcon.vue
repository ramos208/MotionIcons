<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-pendulum']"
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
      class="icon-geometry anim-null"
    >
      <circle cx="12" cy="13" r="8"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/><path d="M9 13h6"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: alarm-clock-minus
// Category: notification
// Physics Presets: The motion profile is designed to mimic a pendulum movement for the icon 'alarm-clock-minus' from the Lucide library, emphasizing its notification category by adding subtle particle effects and a vibrant shader that reflects the theme of alertness and urgency.

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

.anim-null {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-alarm-clock-minus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(0px, -3px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, -2px) skew(0deg); }
}

@keyframes motion-ai-idle-alarm-clock-minus {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-alarm-clock-minus 5000s linear forwards;
}

.anim-null {
  animation: motion-ai-idle-alarm-clock-minus 5000s linear infinite alternate;
}
</style>