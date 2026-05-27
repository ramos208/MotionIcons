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
      <path d="M12.621.068C7.527.786 3.608 4.618 2.345 10.082c-.316 1.35-.392 3.896-.163 5.203.62 3.57 2.96 6.574 6.15 7.913 1.36.577 2.1.73 3.842.784 1.22.043 1.862.01 2.722-.13 2.688-.447 5.399-1.699 6.65-3.092l.403-.447-.054-1.872a481.92 481.92 0 0 1-.12-5.344l-.065-3.473-2.907.087c-1.589.033-3.722.098-4.746.142l-1.85.065-.087 2.319c-.055 1.284-.076 2.34-.055 2.362.022.022.882.076 1.916.12l1.872.076v.294c0 .707-.13.98-.555 1.208-.653.326-1.872.479-2.623.326-2.71-.566-3.777-4.55-1.96-7.369C11.86 7.48 13.873 6.62 16.562 6.74c.74.043 1.665.163 2.123.272.446.12.838.174.87.12.098-.142.468-5.726.403-5.9-.087-.24-1.35-.697-2.569-.947-1.252-.25-3.722-.37-4.767-.218z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: grocy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for grocy (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-grocy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-grocy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-grocy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-grocy 3s ease-in-out infinite alternate;
}
</style>