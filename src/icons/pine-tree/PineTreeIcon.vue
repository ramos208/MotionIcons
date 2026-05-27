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
      <path d="M9.00029 18H8.14381C6.28118 18 5.34987 18 5.06954 17.4356C4.78921 16.8713 5.37195 16.1695 6.53741 14.7659L8.3946 12.5293C7.21777 12.5293 6.62936 12.5293 6.34654 12.3092C6.07959 12.1015 5.93719 11.779 5.9667 11.449C5.99796 11.0995 6.40519 10.6892 7.21967 9.86865L9.51513 7.55599C8.56581 7.55599 8.09115 7.55599 7.84713 7.41507C7.45628 7.18937 7.26532 6.74247 7.37756 6.31617C7.44763 6.05 7.78408 5.72657 8.45699 5.07971L10.6296 2.99124C11.3177 2.32974 11.6618 1.99899 12.0883 2C12.5148 2.00101 12.8571 2.33339 13.5419 2.99813L15.6736 5.06754C16.3542 5.72818 16.6945 6.05851 16.7616 6.33134C16.8645 6.74982 16.6774 7.18482 16.2977 7.40951C16.0501 7.55599 15.5677 7.55599 14.6029 7.55599L16.5179 9.72481C17.3938 10.7168 17.8317 11.2128 17.7869 11.636C17.7636 11.8558 17.6651 12.0619 17.5071 12.2218C17.2029 12.5293 16.528 12.5293 15.1783 12.5293L17.1952 14.6725C18.5397 16.1011 19.2119 16.8155 18.9407 17.4077C18.6695 18 17.6701 18 15.6714 18H15.1783" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 14V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pine-tree
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pine-tree (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pine-tree {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pine-tree {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pine-tree 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pine-tree 3s ease-in-out infinite alternate;
}
</style>