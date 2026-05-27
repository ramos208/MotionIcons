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
      <path d="m11.7473 23.8198-5.4987-5.4987v-5.5349l5.4987 5.4986v5.535zm-.1036-17.6412-.0001-.0001.1768-.1768L5.9986.1799.1768 6.0018l.0001.0001 5.8217 5.8271 5.6451-5.6504zM0 6.5323v5.5347l5.7486 5.7539v-5.5347l-.1035-.1035.0001-.0001L0 6.5323zm17.6478 5.6504-5.6505-5.6505-5.6452 5.6504 5.6452 5.6453 5.6505-5.6452zm.1036 5.8885v-5.2853l-5.5042 5.4991v5.5351l5.5042-5.4991v-.2498zM24 6.5323l-5.6451 5.6503.0001.0001-.1036.1035v5.5346L24 12.067V6.5323zm-.1769-.5304.0001-.0001L18.0014.18l-5.8273 5.822 5.8273 5.8272 5.8217-5.8273z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bazel
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bazel (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bazel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bazel {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bazel 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bazel 3s ease-in-out infinite alternate;
}
</style>