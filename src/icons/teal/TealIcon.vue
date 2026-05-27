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
      <path d="M4.069 2.334v4.129h7.897a3.168 3.168 0 0 1 2.25.947c.596.604.932 1.425.933 2.281l.008 4.244v3.61H7.253A3.17 3.17 0 0 1 5 16.598a3.251 3.251 0 0 1-.932-2.283V6.463H0v8.014c0 .944.184 1.879.541 2.752a7.193 7.193 0 0 0 1.537 2.332 7.074 7.074 0 0 0 2.301 1.558c.86.362 1.783.547 2.714.547h4.723a3.32 3.32 0 0 0 2.365-.992c.627-.636.98-1.498.98-2.397v-.732h8.824l-2.328-2.283L24 12.965h-6.309a5.802 5.802 0 0 0 2.191-2.884 5.893 5.893 0 0 0 .071-3.639 5.819 5.819 0 0 0-2.075-2.971 5.685 5.685 0 0 0-3.411-1.137H4.069Zm6.707 6.137c-1.212 0-2.194.997-2.194 2.225 0 1.229.982 2.225 2.194 2.225s2.194-.996 2.194-2.225c0-1.228-.982-2.225-2.194-2.225Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: teal
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for teal (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-teal {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-teal {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-teal 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-teal 3s ease-in-out infinite alternate;
}
</style>