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
      <path d="M21.57 4.758a.4.4 0 0 0-.097 0q-2.521.045-5.047.097c-.973.016-1.946.04-2.914.051-.168.004-.246.032-.274.223-.367 2.309-.746 4.617-1.12 6.922-.403 2.496-.81 4.988-1.212 7.484l-.36 2.215c-.089-.059-.105-.145-.14-.219q-1.667-3.444-3.32-6.894c-.082-.172-.145-.203-.328-.117a702 702 0 0 1-5.516 2.515 1 1 0 0 0-.11.063C3.052 21.176 7.196 24 12 24c6.625 0 12-5.371 12-12 0-2.719-.906-5.227-2.434-7.242Zm-.379-.473A11.98 11.98 0 0 0 12 0C5.371 0 0 5.371 0 12c0 1.621.324 3.168.906 4.582q.046-.014.11-.05c2.129-1.223 4.265-2.434 6.394-3.657.192-.113.262-.086.356.113.691 1.489 1.398 2.969 2.101 4.453.028.055.035.125.121.164q.142-.812.278-1.613.701-4.106 1.398-8.219c.195-1.16.399-2.316.59-3.476.023-.14.074-.188.215-.184q2.069.047 4.144.086 2.203.046 4.407.086"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: root
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for root (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-root {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-root {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-root 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-root 3s ease-in-out infinite alternate;
}
</style>