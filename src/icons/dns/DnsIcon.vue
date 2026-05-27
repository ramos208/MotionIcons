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
      <path d="M22 13V12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.2514 2.74446 16.3286 4 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 2.04883C13 2.04883 16 5.99945 16 11.9994V12.9995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 2.04883C11 2.04883 8 5.99945 8 11.9994V12.9995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.62988 15.5H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.62988 8.5H21.3706" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 22V16H8C9.10457 16 10 16.8954 10 18V20C10 21.1046 9.10457 22 8 22H7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 22L13 16L16 22V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 22H21C21.8284 22 22.5 21.3284 22.5 20.5V20.5C22.5 19.6716 21.8284 19 21 19H20.5C19.6716 19 19 18.3284 19 17.5V17.5C19 16.6716 19.6716 16 20.5 16H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dns
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dns (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dns {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dns {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dns 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dns 3s ease-in-out infinite alternate;
}
</style>