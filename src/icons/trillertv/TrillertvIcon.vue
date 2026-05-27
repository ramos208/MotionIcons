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
      <path d="m9.496.07-1.8 3.107-.868-.498c-1.269-.729-2.852.184-2.852 1.64v6.28l3.9-6.734L9.933.319a.14.14 0 0 0-.053-.19l-.19-.11a.143.143 0 0 0-.193.05Zm-.713 3.734-4.807 8.301v7.163c0 .674.338 1.23.826 1.562l-1.65 2.85a.14.14 0 0 0 .05.192l.192.109a.142.142 0 0 0 .193-.05l1.665-2.874L13.629 6.59Zm11.63 2.547-1.8 3.108-4.33-2.49-8.217 14.186a1.91 1.91 0 0 0 .764-.248l8.598-4.948 5.42-9.356a.141.141 0 0 0-.05-.193c-.065-.035-.128-.073-.192-.11-.027-.02-.14-.041-.193.051zm-.711 3.735-2.967 5.123 3.08-1.774c1.268-.731 1.268-2.556 0-3.285z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: trillertv
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for trillertv (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-trillertv {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-trillertv {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-trillertv 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-trillertv 3s ease-in-out infinite alternate;
}
</style>