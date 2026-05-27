<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="m15.585 4.586.486-.274q.032.17.06.303c.032.158.06.289.072.418.103 1.118.665 1.941 1.462 2.127 1.165.27 2.264-.177 2.856-1.164.711-1.184.403-2.634-.808-3.507C16.346.061 12.647-.609 8.663.56.072 3.095-2.867 13.65 3.23 20.122c2.608 2.769 5.92 3.964 9.68 3.873 4.817-.113 8.285-2.513 10.5-6.674 1.57-2.952-.137-6.178-3.405-6.849a21 21 0 0 0-5.675-.362 4.8 4.8 0 0 0-1.805.548c-.625.325-.805.998-.735 1.666.065.608.531.972 1.086 1.064 1.118.175 2.25.277 3.378.37.327.027.657.03.986.033.473.005.944.01 1.405.086 1.314.217 1.766 1.284 1.09 2.425a4.7 4.7 0 0 1-.577.766 6.55 6.55 0 0 1-3.318 1.964c-2.333.57-4.669.603-6.99-.13-2.645-.835-4.221-2.777-4.277-5.392A9.1 9.1 0 0 1 5.76 8.907c.36-.654.558-1.327.503-2.067a26 26 0 0 1-.05-.972l-.025-.565q.401.084.792.212c1.011.406 2.007.592 3.102.294a5.6 5.6 0 0 1 1.902-.122 4.76 4.76 0 0 0 2.921-.714c.218-.128.439-.251.681-.387"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gitcode
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for gitcode (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-gitcode {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gitcode {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gitcode 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-gitcode 2s ease-in-out infinite alternate;
}
</style>