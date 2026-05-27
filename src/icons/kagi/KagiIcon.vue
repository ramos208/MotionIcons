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
      <path d="M14.4829 18.392h-5.109c-1.3827 0-1.6231-1.5076-1.3827-2.1106.1203-.3015.4208-.7236.6612-1.0251.9618.5427 2.1039.8442 3.306.8442 3.847 0 6.9126-3.1357 6.9126-6.9347 0-2.0502-.9016-3.8593-2.2843-5.186l.1805-.1808c.3605-.3618.9016-.603 1.4426-.5427l.8414.0603V0h-1.4425c-1.683 0-3.0656 1.0251-3.6667 2.4724-.6011-.181-1.2622-.3016-1.9234-.3016-3.847 0-6.9126 3.1357-6.9126 6.9347 0 1.5076.481 2.9548 1.3225 4.1005-.1203.1206-.3005.2412-.4208.3015l-.1803.181c-1.3826 1.3266-2.0436 3.015-1.6832 4.9448.1805 1.025 1.0821 2.1105 1.9838 2.7134.601.4222 1.3824.6031 2.1637.6031l5.7706-.2413c.6612 0 1.2623.3015 1.6228.9046L16.4065 24l3.5464-1.206-.6011-1.3268c-.9016-1.8692-2.765-3.0752-4.869-3.0752M12.0186 5.8493c1.8033 0 3.306 1.5075 3.306 3.3165s-1.5027 3.3166-3.306 3.3166-3.306-1.5075-3.306-3.3166c0-1.8693 1.4426-3.3166 3.306-3.3166"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: kagi
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for kagi (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-kagi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-kagi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-kagi 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-kagi 3s ease-in-out infinite alternate;
}
</style>