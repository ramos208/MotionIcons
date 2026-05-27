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
      <path d="M19.646 6.117C19.538 1.763 17.883 0 13.636 0H7.34v4.066h4.57c1.799 0 2.807 0 2.807 1.655v2.375c-.828 0-2.88-.036-4.426-.036-4.246 0-5.83 1.727-5.937 6.117v3.742c.108 4.102 1.51 5.865 5.253 6.081l3.85-4.066c-.397.036-.864.036-1.44.036-1.798 0-2.806 0-2.806-1.655v-4.57c0-1.655 1.007-1.655 2.806-1.655 1.908 0 2.807 0 2.807 1.655v10.22h4.821z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: appian
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for appian (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-appian {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-appian {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-appian 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-appian 3s ease-in-out infinite alternate;
}
</style>