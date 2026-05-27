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
      <path d="M12 2.862c-6.617 0-12 5.383-12 12 0 1.964.49 3.406 1.5 4.408 1.706 1.696 4.619 1.868 8.05 1.868.43 0 .87-.002 1.315-.005a217.6 217.6 0 0 1 2.765 0c3.792.024 7.066.044 8.88-1.758C23.511 18.378 24 16.9 24 14.862c0-6.617-5.383-12-12-12zm-8.852 8.154a.393.393 0 1 1 0-.787.393.393 0 0 1 0 .787zM5.113 8.48c-.55.637-1.01 1.361-1.01 1.361-.06.092-.167.099-.24.017l-.26-.29a.251.251 0 0 1-.02-.303s1.11-1.559 1.806-2.186c.25-.225.248-.239.891-.692.643-.453 1.4-.826 1.4-.826a.272.272 0 0 1 .308.059l.26.29c.075.082.056.186-.04.235 0 0-1.772.887-2.353 1.509-.394.422-.192.19-.742.826zm1.576 2.143a1.377 1.377 0 1 1 2.754 0 1.377 1.377 0 0 1-2.754 0zm5.41 7.929c-1.902 0-3.443-1.542-3.443-3.443s1.644-.854 3.545-.854 3.34-1.047 3.34.854-1.541 3.443-3.443 3.443zM16.72 12a1.377 1.377 0 1 1 0-2.754 1.377 1.377 0 0 1 0 2.754z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: docsify
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for docsify (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-docsify {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-docsify {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-docsify 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-docsify 3s ease-in-out infinite alternate;
}
</style>