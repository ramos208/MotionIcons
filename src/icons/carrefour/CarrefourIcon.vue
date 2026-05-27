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
      <path d="M12.14 4.045c-2.569 0-3.572 3.64-3.572 7.979 0 4.34 1.003 7.931 3.572 7.931 1.541 0 2.855-.903 2.86-1.645a.625.625 0 0 0-.199-.453c-.73-.706-1.016-1.412-1.018-2.034-.005-1.189 1.026-2.074 1.977-2.074 1.306 0 2.077 1.027 2.077 2.357 0 1.26-.537 2.31-1.121 3.15a.193.193 0 0 0-.034.107c0 .065.04.12.098.12.035 0 .076-.02.122-.065l6.561-6.344c.328-.28.537-.608.537-1.073 0-.468-.21-.794-.537-1.073l-6.561-6.346c-.045-.045-.087-.064-.122-.064-.059 0-.097.055-.098.12 0 .035.01.073.034.107.584.84 1.12 1.89 1.12 3.15 0 1.329-.77 2.356-2.076 2.356-.95 0-1.982-.884-1.977-2.073.002-.622.288-1.328 1.018-2.033A.624.624 0 0 0 15 5.69c-.004-.743-1.319-1.646-2.86-1.646m-5.043.537L.537 10.93C.209 11.207 0 11.534 0 12c0 .465.21.793.537 1.073l6.56 6.345c.042.043.083.06.117.06.062 0 .105-.057.103-.123a.188.188 0 0 0-.057-.123C5.72 17.32 4.6 15.126 4.6 12.024c0-3.104 1.12-5.341 2.66-7.255a.185.185 0 0 0 .057-.123c.002-.068-.04-.123-.103-.123-.034 0-.075.017-.117.06"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: carrefour
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for carrefour (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-carrefour {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-carrefour {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-carrefour 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-carrefour 3s ease-in-out infinite alternate;
}
</style>