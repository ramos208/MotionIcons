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
      <path d="M22.452 18.006c-.147 0-.257.073-.367.147-1.764 3.38-5.329 5.034-10.583 5.034q-1.213 0-2.646-.11c-.074-.11-.257-.368-.551-.735-.22-.294-.331-.551-.368-.809.074-2.094.147-5.254.147-9.443 0-4.19.037-7.35.147-9.444.22-.698.698-1.03 1.47-1.03.147 0 .33 0 .551.038.258.036.441.036.551.036.552 0 .993-.147 1.287-.477V.772c0-.11-.037-.258-.147-.331C10.84.257 9.333.184 7.46.184H5.586C4.263.184 2.94.147 1.616 0c-.183.367-.256.661-.256.882q0 .495.771.551c.515.037 1.066.074 1.58.11.588.147.956.478 1.066 1.066a36 36 0 0 0 .037 3.38c.073 1.654.147 2.72.147 3.271 0 .845-.037 1.727-.184 2.572.037.441.074 1.507.184 3.234q.11 2.205.11 3.528c0 .918-.037 1.837-.147 2.719-.184.551-.33.882-.367.955q-.33.551-.882.551-.276.11-1.323.11c-.588 0-.992.111-1.176.368.147.368.367.551.625.625 1.102.037 2.241.037 3.49.037 1.287 0 3.124 0 5.512-.037 2.426-.037 4.226-.037 5.439-.037 1.654 0 3.16.037 4.593.11.294.037.478-.147.551-.514.11-.441.184-.698.258-.772-.037-.588.147-1.396.588-2.351s.624-1.728.588-2.279c-.11 0-.221-.036-.368-.073"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lerna
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lerna (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lerna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lerna {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lerna 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lerna 3s ease-in-out infinite alternate;
}
</style>