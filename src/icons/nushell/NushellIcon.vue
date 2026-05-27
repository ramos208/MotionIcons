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
      <path d="M0 16.338h1.25v-5.7c.417-.624 1.205-1.309 2.127-1.309 1.176 0 1.34.64 1.34 2.247v4.762h1.25v-5.685c0-1.458-.67-2.32-2.202-2.32-.923 0-1.964.46-2.59 1.264l-.103-1.1H0Zm10.177-7.842h-1.25v5.698c0 1.46.745 2.307 2.263 2.307.921 0 1.889-.431 2.514-1.22l.104 1.057h1.072V8.496h-1.25v5.773c-.432.67-1.265 1.25-2.129 1.25-.907 0-1.324-.446-1.324-1.458zm8.11-.997-.61.952 5.251 3.229-5.251 3.244.669.922L24 12.32v-1.28z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nushell
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nushell (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nushell {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nushell {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nushell 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nushell 3s ease-in-out infinite alternate;
}
</style>