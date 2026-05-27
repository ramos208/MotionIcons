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
      class="icon-geometry anim-bar-chart-horizontal-big-idle"
    >
      <path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="7" y="13" width="9" height="4" rx="1"/><rect x="7" y="5" width="12" height="4" rx="1"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bar-chart-horizontal-big
// Category: generic
// Physics Presets: The motion design for this bar chart icon emphasizes a smooth yet dynamic interaction, with the bars pulsing and swaying slightly during hover to simulate data movement within the chart. Upon click, there is a subtle vibration effect and a gentle ripple around the icon to enhance interactivity without overwhelming the user.

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

.anim-bar-chart-horizontal-big-idle {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-bar-chart-horizontal-big {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.1880000000000002) rotate(0deg) translate(0px, -7.5px) skew(0deg); }
  100% { transform: scale(1.1) rotate(0deg) translate(0px, -5px) skew(0deg); }
}

@keyframes motion-ai-idle-bar-chart-horizontal-big {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.05) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bar-chart-horizontal-big 0.2s easeInOutQuad forwards;
}

.anim-bar-chart-horizontal-big-idle {
  animation: motion-ai-idle-bar-chart-horizontal-big 0.3s easeOutQuad infinite alternate;
}
</style>