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
      class="icon-geometry anim-neural-pulse"
    >
      <circle cx="12" cy="13" r="8"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/><path d="M6.38 18.7 4 21"/><path d="M17.64 18.67 20 21"/><path d="m9 13 2 2 4-4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: alarm-clock-check
// Category: notification
// Physics Presets: This motion profile for the alarm-clock-check icon employs a pendulum-style motion, giving it a gentle and rhythmic sway that is both visually appealing and semantically fitting to its category of notification. The hover effect introduces subtle mechanical elements with gears syncing into place, emphasizing the alertness of the clock. Upon interaction, the click animation features vibrations and a sound ripple, mimicking the action of pressing or alerting.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-alarm-clock-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(216deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-alarm-clock-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-alarm-clock-check 0.5s quint-in-out forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-alarm-clock-check 2.5s cubic-out infinite alternate;
}
</style>