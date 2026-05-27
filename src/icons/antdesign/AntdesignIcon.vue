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
      <path d="M17.4511 6.6808c.5091-.5064.5091-1.3316 0-1.838l-1.8729-1.873.0027.0027c-.4957-.4957-1.3478-1.3478-2.5535-2.5508-.568-.5547-1.487-.5493-2.0498.0134L.426 10.9787a1.4426 1.4426 0 0 0 0 2.047l10.549 10.541a1.4506 1.4506 0 0 0 2.0497 0l4.4238-4.4211c.509-.5064.509-1.3317 0-1.8381a1.3049 1.3049 0 0 0-1.8408 0l-3.3493 3.3546c-.1393.1394-.3564.1394-.4957 0l-8.4268-8.4188c-.1394-.1393-.1394-.3563 0-.4956L11.76 3.3289c.0107-.0108.0241-.0188.0349-.0295.1393-.1099.3322-.0992.4608.0295l3.3547 3.352c.509.509 1.3343.509 1.8407 0zm-8.2446 5.375a2.8482 2.8456 0 1 0 5.6965 0 2.8482 2.8456 0 1 0-5.6965 0zm14.3672-1.0343l-3.293-3.277c-.5092-.5063-1.3344-.5063-1.8408.0028a1.2968 1.2968 0 0 0 0 1.838l2.2239 2.2213c.1393.1393.1393.3564 0 .4957l-2.1918 2.189a1.2968 1.2968 0 0 0 0 1.8382 1.3049 1.3049 0 0 0 1.8408 0l3.2635-3.2609a1.445 1.445 0 0 0-.0026-2.047Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: antdesign
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for antdesign (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-antdesign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-antdesign {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-antdesign 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-antdesign 3s ease-in-out infinite alternate;
}
</style>