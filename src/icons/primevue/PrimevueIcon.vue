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
      <path d="m6.4101 0-2.565 2.565 3.8487.3664L8.8776.226l2.6637 6.8825v.0012l.3498.903.3843-.9291v-.0013L14.75 1.0898v-.0012l.2748-.6663 1.0993 2.5091 3.8487-.3664L17.4066 0H8.9763Zm2.3913 1.7191L8.071 3.455l-2.8863-.2213-3.7226-.3022 1.0993 4.5804L7.8437 9.476l.0143.0262 2.5579.9446h.2439l-.0012-.0048h.8827V8.7967Zm6.2817.1606L12.2754 8.679v1.7632h1.0053l-.0012.0048.2439-.0048h.0345l.0024-.0012h.0238l2.3758-.878.0107-.0179 5.468-2.0332 1.0993-4.5803-4.0415.3188-2.7494.2058zM2.7446 8.2447v6.2281l4.3984 3.6643v-5.6797l1.2837-1.8321-1.6501.3664-2.0154-2.0142Zm18.3275 0-2.0166.7328-2.0153 2.0142-1.6501-.3664 1.2837 1.8321v5.6797l4.3983-3.6643zM9.137 10.599l-.3045.4866.0095.0167-1.148 1.7215v8.2447l1.0992 1.6489L10.0756 24h3.6655l1.2825-1.2825 1.1005-1.649V12.824l-1.1492-1.7227.0095-.0155-.1797-.2391-.1475-.2213-.0131.0071-.025-.0333-.7911.4866h-3.6548zm-4.3757 6.2555v2.3818l2.3818 2.3818V18.87zm14.2943 0L16.6739 18.87v2.7482l2.3818-2.3818z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: primevue
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for primevue (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-primevue {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-primevue {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-primevue 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-primevue 3s ease-in-out infinite alternate;
}
</style>