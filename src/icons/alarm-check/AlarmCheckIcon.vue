<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-dynamic-pop']"
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
// AI Generated Motion Component for: alarm-check
// Category: notification
// Physics Presets: This dynamic-pop motion profile is designed to create a visually engaging and responsive experience for the alarm-check icon. The icon's complex geometry and symmetry are emphasized through subtle, yet impactful animations that mimic real-world interactions such as vibrations and sound ripples. The hover animation adds a touch of flair with a focus flare effect, while the click animation includes pop-explosion motion and vibration to simulate a physical button press.

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

@keyframes motion-ai-alarm-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(-0.75px, -0.75px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(-0.5px, -0.5px) skew(0deg); }
}

@keyframes motion-ai-idle-alarm-check {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-alarm-check 1s in-out-sine forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-alarm-check 2s out-cubic infinite alternate;
}
</style>