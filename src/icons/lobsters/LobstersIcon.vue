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
      <path d="M0 0v24h24V0zm5.414 4.02h7.86c.105 0 .15.014.15.134-.015.285 0 .556 0 .841v.12c-.21.015-.42 0-.615.03-.3.045-.6.089-.885.164-.525.165-.793.527-.853 1.022a5.09 5.09 0 0 0-.047.674v9.586c0 .405.046.808.091 1.198.045.435.33.72.736.87.345.135.718.167 1.078.182.945.03 1.877.014 2.792-.226 1.32-.33 2.204-1.156 2.64-2.46.134-.42.193-.855.298-1.29.015-.03.046-.09.076-.09h.99c-.03 1.8.03 3.599 0 5.399H5.25v-.944c0-.165 0-.149.15-.164.344-.03.689-.045 1.034-.105.69-.12 1.005-.467 1.11-1.172.03-.21.047-.434.047-.644V7.035c0-.27-.032-.54-.062-.795-.045-.465-.344-.749-.779-.914-.405-.15-.825-.166-1.245-.196h-.226v-.976c0-.105.03-.134.135-.134z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lobsters
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lobsters (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lobsters {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lobsters {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lobsters 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lobsters 3s ease-in-out infinite alternate;
}
</style>