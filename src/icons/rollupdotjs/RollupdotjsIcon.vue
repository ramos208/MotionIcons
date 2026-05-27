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
      <path d="M3.42.0002a.37.37 0 00-.369.37V19.885c.577-1.488 1.557-3.6168 3.1378-6.5297C11.8885 2.876 12.6355 1.8191 15.6043 1.8191c1.56 0 3.1338.704 4.1518 1.9549A7.9616 7.9616 0 0013.1014.0002zM16.1393 2.544c-1.19.01-2.257.466-2.6979 1.498-.967 2.2558 1.624 4.7667 2.7569 4.5677 1.4419-.255-.255-3.5628-.255-3.5628 2.2049 4.1558 1.6969 2.8838-2.2899 6.6996C9.6666 15.5623 5.596 23.6188 5.002 23.9568a.477.477 0 01-.08.043H20.558a.373.373 0 00.33-.538l-4.0878-8.0915a.37.37 0 01.144-.488 7.9596 7.9596 0 004.0048-6.9126c0-1.4249-.373-2.7608-1.03-3.9198-.9269-.9519-2.4298-1.5159-3.7787-1.5059z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rollupdotjs
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rollupdotjs (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rollupdotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-rollupdotjs {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rollupdotjs 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rollupdotjs 3s ease-in-out infinite alternate;
}
</style>