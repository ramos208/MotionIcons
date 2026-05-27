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
      <path d="m20.6081 5.6014-1.9708 1.9588c-.347.3111-.515.8114-.3203 1.2342 1.3127 2.7471.8142 6.0223-1.3403 8.175-2.1554 2.1516-5.4343 2.6492-8.1842 1.3375-.4052-.1819-.8806-.0277-1.1926.288l-2.0031 2.0003a1.0652 1.0652 0 0 0 .192 1.6708 12.0048 12.0048 0 0 0 14.6864-1.765A11.9725 11.9725 0 0 0 22.2808 5.836a1.0652 1.0652 0 0 0-1.6727-.2345zM3.5614 3.4737A11.9716 11.9716 0 0 0 1.6967 18.137a1.0652 1.0652 0 0 0 1.6727.2345L5.33 16.4238c.3554-.3102.528-.816.3314-1.2444-1.3136-2.747-.816-6.0222 1.3394-8.1749C9.1553 4.852 12.4351 4.3543 15.185 5.666c.4006.1791.8695.0305 1.1824-.2769l2.0142-2.0123a1.0634 1.0634 0 0 0-.192-1.6708A12.0085 12.0085 0 0 0 3.519 3.5272z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rustdesk
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rustdesk (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rustdesk {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rustdesk {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rustdesk 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rustdesk 3s ease-in-out infinite alternate;
}
</style>