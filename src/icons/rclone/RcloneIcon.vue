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
      <path d="M11.842.6258C9.3647.6813 6.9754 1.9906 5.646 4.2933c-.7593 1.3144-1.0647 2.7662-.966 4.1745a7.99 7.99 0 0 1 2.6568-.4541l1.4705-.0013c-.0093-.5594.1245-1.1284.4245-1.6482.8827-1.5284 2.837-2.0522 4.3654-1.1695 1.5284.8824 2.0519 2.8366 1.1695 4.365l-1.4782 2.5647 1.1955 2.0714 2.3914-.0004 1.4775-2.5655c2.0262-3.5088.8239-7.9959-2.6853-10.0217C14.4614.9118 13.1396.5967 11.842.6258m-1.5451 8.073-2.9605.0029C3.2844 8.7017 0 11.9867 0 16.0383c0 4.052 3.2844 7.3367 7.3364 7.3367 1.5174 0 2.9267-.4609 4.0967-1.2497a8 8 0 0 1-1.72-2.0748l-.7368-1.273c-.4799.288-1.0392.4565-1.6395.4565-1.765 0-3.1958-1.4307-3.1958-3.1958 0-1.7647 1.4307-3.1954 3.1958-3.1954l2.96-.0022 1.1962-2.0708zm9.587.7475a7.99 7.99 0 0 1-.935 2.5278l-.7344 1.2745c.4892.2717.915.6719 1.2153 1.192.8823 1.528.3585 3.4826-1.1699 4.365-1.528.8823-3.4828.3588-4.3651-1.1696l-1.482-2.5628h-2.3915L8.8256 17.144l1.483 2.5626c2.0262 3.5091 6.513 4.7112 10.022 2.685 3.5089-2.0257 4.7112-6.5125 2.6853-10.0216-.7588-1.3144-1.863-2.3052-3.132-2.9237"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rclone
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rclone (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rclone {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rclone {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rclone 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rclone 3s ease-in-out infinite alternate;
}
</style>