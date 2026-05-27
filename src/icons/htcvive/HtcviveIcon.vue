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
      <path d="M16.225 19.046a14.3 14.3 0 0 1-4.222.642 14.3 14.3 0 0 1-4.223-.642c-1.56-.505-2.525-2.066-2.203-3.672.596-2.938 2.111-5.508 4.268-7.482a3.19 3.19 0 0 1 4.36 0c2.112 1.928 3.627 4.544 4.27 7.482.275 1.606-.643 3.213-2.25 3.672m7.574-1.47L14.894 2.2a1.49 1.49 0 0 0-1.33-.78h-3.076a1.49 1.49 0 0 0-1.331.78L.207 17.577c-.276.505-.276 1.101 0 1.56l1.56 2.663c.276.504.78.78 1.331.78h17.763c.551 0 1.056-.276 1.331-.78l1.561-2.663c.321-.505.321-1.101.046-1.56"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: htcvive
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for htcvive (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-htcvive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-htcvive {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-htcvive 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-htcvive 3s ease-in-out infinite alternate;
}
</style>