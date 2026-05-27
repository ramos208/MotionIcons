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
      <path d="M24 15.2372a20.744 20.744 0 0 0-9.86-7.5087 31.2657 31.2657 0 0 1 6.9097 1.0135l-1.5536-1.3192A29.1614 29.1614 0 0 0 9.0497 5.509a29.0797 29.0797 0 0 0-6.4051.7036L0 8.032c.335 0 .8376-.021 1.1747-.021a25.1537 25.1537 0 0 1 20.4571 10.48ZM9.1963 12.9758h3.3334l-.3329 1.183h-1.0532L9.9333 18.491H8.7692l1.206-4.3322H8.8655zm-3.771 0H6.468l.4376 2.9544.8229-2.9544h1.1977l-1.537 5.5152H6.221l-.4041-2.743-.7643 2.743H3.8841ZM0 18.491l2.8225-5.5131h1.181L3.769 18.491H2.5838l.0545-.7391H1.5264l-.3601.7391zm2.0206-1.8844h.6889l.2094-1.9474zm8.2122 1.8844 2.8288-5.5131h1.1768l-.2346 5.5131h-1.181l.0524-.7391h-1.1076l-.3644.7391zm2.0247-1.8844h.689l.2093-1.9474z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: anta
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for anta (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-anta {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-anta {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-anta 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-anta 3s ease-in-out infinite alternate;
}
</style>