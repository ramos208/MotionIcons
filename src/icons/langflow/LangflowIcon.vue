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
      <path d="M9.755 1.52h-.001c-.31 0-.608.124-.828.343L4.037 6.752a1.17 1.17 0 0 1-.827.343H1.17A1.17 1.17 0 0 0 0 8.295l.052 1.984a1.17 1.17 0 0 0 1.17 1.14h2.37c.31 0 .607-.124.827-.344l4.93-4.93c.22-.22.517-.343.827-.343h2.874a1.17 1.17 0 0 0 1.17-1.17V2.69a1.17 1.17 0 0 0-1.17-1.17zm9.78 2.503c-.31 0-.608.123-.828.343l-4.889 4.889a1.17 1.17 0 0 1-.827.342h-2.756c-.31 0-.608.124-.827.344L4.15 15.197a1.17 1.17 0 0 1-.827.343H1.32a1.17 1.17 0 0 0-1.17 1.17v1.996c0 .646.524 1.17 1.17 1.17h2.017c.302 0 .592-.116.81-.325l5.535-5.304a1.17 1.17 0 0 1 .81-.326h2.88c.31 0 .607-.123.827-.342l4.93-4.93c.22-.22.517-.344.827-.344h2.873A1.17 1.17 0 0 0 24 7.135V5.193a1.17 1.17 0 0 0-1.17-1.17h-3.294zm0 8.559c-.31 0-.608.123-.828.343l-4.889 4.889a1.17 1.17 0 0 1-.827.343h-2.04a1.17 1.17 0 0 0-1.17 1.2l.052 1.984a1.17 1.17 0 0 0 1.17 1.14h2.37c.31 0 .607-.124.827-.343l4.93-4.93c.22-.22.517-.343.827-.343h2.873a1.17 1.17 0 0 0 1.17-1.17v-1.943a1.17 1.17 0 0 0-1.17-1.17h-3.294Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: langflow
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for langflow (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-langflow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-langflow {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-langflow 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-langflow 3s ease-in-out infinite alternate;
}
</style>