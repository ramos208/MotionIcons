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
      <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.09859 11.8261C11.6338 11.8261 11.6338 16 9.09859 16C7.6685 16 6 16 6 16V11.8261M9.09859 11.8261C7.6685 11.8261 6 11.8261 6 11.8261M9.09859 11.8261C11.6338 11.8261 11.6338 8 9.09859 8C7.97183 8 6 8 6 8V11.8261" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 11C14.1193 11 13 12.1193 13 13.5H18C18 12.1193 16.8807 11 15.5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 13.5C13 14.8807 14.1193 16 15.5 16C16.4276 16 16.9905 15.6776 17.3126 15.3802" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 8.5H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: behance-tag
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for behance-tag (iconoir). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-behance-tag {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-behance-tag {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-behance-tag 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-behance-tag 3s ease-in-out infinite alternate;
}
</style>