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
      <path d="M1.518 7.088 2.68 5.351c.107-.158.175-.162.293-.106 2.556 1.476 4.848 1.685 7.212.662 2.35-1.019 3.763-2.82 4.445-5.659.072-.256.166-.254.231-.245l2.03.44c.343.086.33.18.322.25-.45 3.328-2.755 6.251-6.019 7.632-3.317 1.426-6.92 1.112-9.64-.84-.056-.048-.182-.177-.032-.397h-.003Zm10.115 16.798 2.081.114c.35.006.36-.087.369-.156.45-3.328-.999-6.758-3.779-8.953-2.82-2.256-6.378-2.91-9.519-1.749-.065.033-.222.123-.136.373l.659 1.984c.063.18.125.202.254.179 2.855-.744 5.12-.339 7.128 1.275 1.996 1.606 2.88 3.716 2.784 6.644.003.258.093.281.158.29l.001-.001Zm1.335-13.868a2.04 2.04 0 0 0-.28-.02c-.422 0-.82.132-1.146.38a1.907 1.907 0 0 0-.725 1.28c-.07.508.06 1.01.362 1.411.305.407.759.67 1.277.74a1.915 1.915 0 0 0 2.15-1.64 1.892 1.892 0 0 0-1.64-2.152l.002.001ZM23.36 6.525l-.966-1.85c-.137-.304-.247-.274-.36-.236-3.089 1.332-5.22 4.26-5.703 7.838-.483 3.58.797 6.973 3.426 9.075.059.052.117.07.182.065a.3.3 0 0 0 .2-.109l1.358-1.628c.125-.157.071-.238.006-.306-2.13-2.096-2.926-4.18-2.58-6.748.349-2.583 1.71-4.433 4.286-5.827.204-.123.17-.228.151-.276v.002Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: launchpad
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for launchpad (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-launchpad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-launchpad {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-launchpad 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-launchpad 3s ease-in-out infinite alternate;
}
</style>