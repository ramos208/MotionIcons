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
      <path d="M6.308 7.843h2.797s-1.86 6.639-1.951 6.998c-.177.69-.353 1.316-2.043 1.316-2.037 0-3.22-.007-3.777 0-.698.007-1.521-.633-1.296-1.464l1.91-6.85H4.8S3.2 13.553 3.166 13.7c-.029.148-.19.557.698.564.64.014.69-.155.803-.564.268-.922 1.64-5.857 1.64-5.857zm10.272 0l-.507 1.824H9.986l.507-1.824zm-8.404 8.314l1.459-5.244h6.086l-.507 1.823h-3.262l-.95 3.421zm11.47-5.385c-.26.957-.493 1.774-.754 2.738-.05.17-.162.416-.127.57.078.367 1.29.226 1.726.226h1.945c-.155.612-.33 1.21-.5 1.81h-4.63c-.676-.064-1.557-.353-1.472-1.226.028-.274.156-.584.24-.887a1189.7 1189.7 0 001.24-4.463c.176-.648.317-1.197.83-1.457.333-.17.861-.218 1.255-.24H24c-.162.606-.331 1.211-.5 1.81h-2.643c-.317 0-.669-.036-.845.084-.19.141-.295.775-.366 1.035z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: ufc
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for ufc (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-ufc {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-ufc {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-ufc 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-ufc 3s ease-in-out infinite alternate;
}
</style>