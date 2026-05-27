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
      <path d="M4.217 0C2.474 0 1.06 1.413 1.06 3.156V15.77c0 1.744 1.414 3.158 3.157 3.158h9.367C13.567 22.498 8.756 24 8.756 24s8.138-.038 9.305-5.072h1.72c1.744 0 3.157-1.414 3.157-3.157V3.157C22.938 1.413 21.524 0 19.782 0H4.218zm4.527 2.53c.073-.013.132-.003.174.034.335.3-.556.593-.484 2.063.032.646-.16 1.146 1.076 1.146.826 0 .483-.734 1.523-.734.656 0 .86.435.934.767.072-.33.274-.768.93-.768 1.04 0 .7.733 1.525.733 1.237 0 1.044-.5 1.076-1.146.072-1.47-.82-1.764-.484-2.063.042-.037.1-.042.172-.02.5.143 1.607 1.558 1.638 2.155.038.71.04 1.825-1.015 2.407 1.19 1.167 1.352 2.72 1.352 2.72l-2.045-.034s-.464-2.118-2.94-2.01c-2.474.108-2.796.538-2.796 3.156 0 2.617 1.147 3.517 2.905 3.585 2.76.108 2.51-1.433 2.51-1.433l-1.29.072-.718-1.937h4.41c0 2.116-.897 5.414-5.092 5.2-4.196-.216-5.128-3.515-5.164-5.74-.018-1.225.188-2.602 1.2-3.574-1.052-.58-1.033-1.7-1.033-2.414 0-.88 1.13-2.084 1.637-2.17z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gnusocial
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gnusocial (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gnusocial {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gnusocial {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gnusocial 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gnusocial 3s ease-in-out infinite alternate;
}
</style>