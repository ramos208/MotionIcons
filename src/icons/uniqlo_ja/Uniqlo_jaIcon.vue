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
      <path d="M0 .01v23.98h24V.01ZM4.291 3.29h4.553l.006 5.803h1.511v1.511h-6.82V9.094h3.783v-4.29H4.291zm10.11 0h5.302v1.514H14.4zm-.762 5.807h6.816v1.511H13.64zM4.29 13.385l6.072.002-1.513 7.322H2.777l.305-1.516h4.553l.892-4.29H5.49l-.457 2.148H3.521Zm9.348 0h6.816v7.324H13.64zm1.517 1.517v4.291h3.787v-4.29z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: uniqlo_ja
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for uniqlo_ja (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-uniqlo_ja {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-uniqlo_ja {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-uniqlo_ja 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-uniqlo_ja 3s ease-in-out infinite alternate;
}
</style>