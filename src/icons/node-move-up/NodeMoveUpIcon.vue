<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M5.49609 8V12.5M5.49609 12.5V14C5.49609 16.8284 5.49609 18.2426 6.37411 19.1213C7.19879 19.9466 8.49556 19.9968 10.992 19.9998M5.49609 12.5H10.992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.9912 12.5C10.9912 11.5572 10.9912 11.0858 11.2839 10.7929C11.5766 10.5 12.0476 10.5 12.9897 10.5C13.9318 10.5 14.4028 10.5 14.6955 10.7929C14.9882 11.0858 14.9882 11.5572 14.9882 12.5C14.9882 13.4428 14.9882 13.9142 14.6955 14.2071C14.4028 14.5 13.9318 14.5 12.9897 14.5C12.0476 14.5 11.5766 14.5 11.2839 14.2071C10.9912 13.9142 10.9912 13.4428 10.9912 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.9912 20C10.9912 19.0572 10.9912 18.5858 11.2839 18.2929C11.5766 18 12.0476 18 12.9897 18C13.9318 18 14.4028 18 14.6955 18.2929C14.9882 18.5858 14.9882 19.0572 14.9882 20C14.9882 20.9428 14.9882 21.4142 14.6955 21.7071C14.4028 22 13.9318 22 12.9897 22C12.0476 22 11.5766 22 11.2839 21.7071C10.9912 21.4142 10.9912 20.9428 10.9912 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M3.99654 2H6.99428C8.80812 2 8.99278 3.10993 8.99278 5C8.99278 6.89007 8.80812 8 6.99428 8H3.99654C2.18271 8 1.99805 6.89007 1.99805 5C1.99805 3.10993 2.18271 2 3.99654 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.9933 11.089L19.4475 9.31639C19.6862 9.05001 19.8558 8.99948 20.004 9.00405M20.004 9.00405C20.1502 9.00857 20.2888 9.06707 20.4978 9.31639L22.0032 11.1003M20.004 9.00405L19.9813 17.2623C20.0523 18.1368 19.9319 19.8285 17.9844 20.0085" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: node-move-up
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for node-move-up (hugeicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-node-move-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-node-move-up {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-node-move-up 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-node-move-up 3s ease-in-out infinite alternate;
}
</style>