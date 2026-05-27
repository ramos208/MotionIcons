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
      <path d="M11.329 11.097C10.465 7.857 7.725 5.5 4.489 5.5H.754C.197 5.5 0 5.662 0 6.326c0 1.546.43 2.981 1.15 4.182A5.648 5.648 0 0 0 0 13.92c0 3.16 2.603 5.728 5.818 5.728 2.86 0 5.236-2.031 5.725-4.706.24-1.325.13-2.564-.214-3.845zm-9.015 2.826c0-.575.144-1.112.395-1.58 1.167.988 2.637 1.58 4.238 1.58h2.351c0 1.904-1.56 3.446-3.49 3.446s-3.494-1.546-3.494-3.446zM14.09 7.871a7.56 7.56 0 0 1 3.859-1.222.239.239 0 0 0 .234-.234v-1.83c0-.128-.107-.252-.252-.235a9.858 9.858 0 0 0-5.136 1.597c-.196.128-.378.269-.574.396-.107.09-.128.234-.038.34l1.167 1.402c.09.107.234.107.34.034-.058.094.182-.138.4-.248zm4.093.324c-3.215 0-5.818 2.568-5.818 5.728s2.603 5.728 5.818 5.728S24 17.083 24 13.923s-2.602-5.728-5.817-5.728zm0 9.174c-1.921 0-3.484-1.546-3.484-3.446s1.56-3.446 3.484-3.446 3.483 1.546 3.483 3.446-1.56 3.446-3.483 3.446z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nextbike
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nextbike (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nextbike {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nextbike {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nextbike 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nextbike 3s ease-in-out infinite alternate;
}
</style>