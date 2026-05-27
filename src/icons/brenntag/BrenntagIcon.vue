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
      <path d="M19.7305 12.01c-.768.959-1.899 1.8775-3.2745 2.421.828 1.02 1.246 2.156.9445 3.337-.2875 1.1275-1.3655 2.228-2.9 2.228H6.5v-5.999h7c3.86 0 7-3.1395 7-6.9985S17.36 0 13.5 0h-11v8.998h4V3.999h7c1.655 0 3 1.3445 3 2.9995s-1.345 2.9995-3 2.9995h-11V24h12c3.86 0 7-3.1395 7-6.9985 0-1.712-.4815-3.634-1.7695-4.9915"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brenntag
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brenntag (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brenntag {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brenntag {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brenntag 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brenntag 3s ease-in-out infinite alternate;
}
</style>