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
      <path d="M13.4998 13.5C15.1242 14.1962 15.9365 14.5443 16.7554 14.4351C16.8478 14.4227 16.9396 14.4061 17.0305 14.3852C17.8357 14.2003 18.4742 13.5894 19.7513 12.3676L19.9012 12.2242C20.8695 11.2559 21.3537 10.7717 21.4713 9.78342C21.5889 8.79514 21.3365 8.38218 20.8317 7.55626C20.3833 6.82247 19.7571 5.98593 18.8855 5.11433C18.0139 4.24272 17.1773 3.61654 16.4435 3.16808C15.6176 2.66332 15.2047 2.41094 14.2164 2.52851C13.2281 2.64609 12.7439 3.13027 11.7756 4.09863L11.6322 4.24843C10.4105 5.52557 9.7996 6.16413 9.61466 6.96941C9.59382 7.0602 9.57721 7.1519 9.56489 7.24423C9.45564 8.06322 9.80375 8.87548 10.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.5002 10.499L2.50021 18.4997V21.4997H5.50021V19.4997H7.50021V17.4997H9.50021L13.5002 13.4997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.0002 7L16.0002 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: key02
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for key02 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-key02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-key02 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-key02 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-key02 3s ease-in-out infinite alternate;
}
</style>