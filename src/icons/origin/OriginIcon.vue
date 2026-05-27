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
      <path d="M12.588 3.11a8.78 8.78 0 013.417.919 8.775 8.775 0 012.706 2.094 9.113 9.113 0 011.715 2.963 8.65 8.65 0 01.465 3.502 8.224 8.224 0 01-.307 1.848 9.174 9.174 0 01-.674 1.703 19.96 19.96 0 01-1.47 2.412 17.61 17.61 0 01-1.762 2.118 18.61 18.61 0 01-4.286 3.281l-.037.026a.196.196 0 01-.109.023.293.293 0 01-.159-.097.266.266 0 01-.062-.173c0-.029.004-.059.012-.085a.186.186 0 01.037-.062c.277-.393.506-.806.686-1.235a5.42 5.42 0 00.368-1.359.118.118 0 00-.038-.085.11.11 0 00-.085-.038 9.155 9.155 0 01-.795.062 4.926 4.926 0 01-.796-.037 8.818 8.818 0 01-6.123-3.013 9.089 9.089 0 01-1.715-2.963 8.662 8.662 0 01-.465-3.502 8.224 8.224 0 01.306-1.848 8.598 8.598 0 01.675-1.68c.439-.864.93-1.676 1.469-2.436a18.035 18.035 0 011.76-2.119A18.801 18.801 0 0111.609.05l.038-.025a.187.187 0 01.11-.025.295.295 0 01.157.098.255.255 0 01.062.174.244.244 0 01-.012.084.164.164 0 01-.036.061 6.447 6.447 0 00-.687 1.237c-.18.433-.3.885-.366 1.358 0 .033.012.063.036.086a.117.117 0 00.085.037c.262-.033.527-.053.795-.06.272-.01.536.002.798.034zm-.807 12.367a3.32 3.32 0 002.521-.855c.72-.64 1.11-1.438 1.176-2.4a3.357 3.357 0 00-.856-2.535 3.294 3.294 0 00-2.4-1.162 3.36 3.36 0 00-2.534.855 3.3 3.3 0 00-1.164 2.4 3.381 3.381 0 00.846 2.535c.628.725 1.432 1.115 2.411 1.162z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: origin
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for origin (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-origin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-origin {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-origin 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-origin 3s ease-in-out infinite alternate;
}
</style>