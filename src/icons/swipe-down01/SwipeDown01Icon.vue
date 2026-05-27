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
      <path d="M18.5 8V2M18.5 8C17.7998 8 16.4915 6.0057 16 5.5M18.5 8C19.2002 8 20.5085 6.0057 21 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.8348 22L7.8348 21.0513C7.8348 20.4058 7.6261 19.7775 7.23964 19.2595L3.58206 14.3566C3.16022 13.7911 2.8233 13.0896 3.1018 12.4419C3.55264 11.3935 4.82458 10.7124 6.38144 12.2843L7.97865 13.9937L7.97865 3.57057C8.03487 1.52742 11.3229 1.42614 11.4635 3.57057L11.4635 9.5106C12.9435 9.31946 19.9155 10.3629 18.8993 14.7831C18.851 14.9931 18.8028 15.2063 18.7557 15.4165C18.5501 16.3353 17.9422 17.9727 17.2719 18.93C16.5741 19.9266 16.8203 20.9192 16.8203 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: swipe-down01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for swipe-down01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-swipe-down01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, 6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, 4px) skew(0deg); }
}

@keyframes motion-ai-idle-swipe-down01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-swipe-down01 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-swipe-down01 3s ease-in-out infinite alternate;
}
</style>