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
      <path d="M6 8H7C8.41421 8 9.12132 8 9.56066 7.56066C10 7.12132 10 6.41421 10 5C10 3.58579 10 2.87868 9.56066 2.43934C9.12132 2 8.41421 2 7 2H5C3.58579 2 2.87868 2 2.43934 2.43934C2 2.87868 2 3.58579 2 5C2 6.41421 2 7.12132 2.43934 7.56066C2.87868 8 3.58579 8 5 8H6ZM6 8V10.5M6 10.5H7.5M6 10.5H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13 5C15.8284 5 17.2426 5 18.1213 5.87868C19 6.75736 19 8.17157 19 11L17 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M11 19C8.17157 19 6.75736 19 5.87868 18.1213C5 17.2426 5 15.8284 5 13L7 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M18 19.5H19C20.4142 19.5 21.1213 19.5 21.5607 19.0607C22 18.6213 22 17.9142 22 16.5C22 15.0858 22 14.3787 21.5607 13.9393C21.1213 13.5 20.4142 13.5 19 13.5H17C15.5858 13.5 14.8787 13.5 14.4393 13.9393C14 14.3787 14 15.0858 14 16.5C14 17.9142 14 18.6213 14.4393 19.0607C14.8787 19.5 15.5858 19.5 17 19.5H18ZM18 19.5V22M18 22H19.5M18 22H16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: peer-to-peer01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for peer-to-peer01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-peer-to-peer01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-peer-to-peer01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-peer-to-peer01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-peer-to-peer01 3s ease-in-out infinite alternate;
}
</style>