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
      <path d="M23.373 20.364a4.682 4.682 0 0 1-8.1 0 4.694 4.694 0 0 1 0-4.669c.326-.564.778-.995 1.272-1.358.472.198 3.394 1.421 3.917 1.717a2.291 2.291 0 0 0-3.109.842 2.304 2.304 0 0 0 0 2.267 2.267 2.267 0 0 0 2.564 1.053 2.254 2.254 0 0 0 1.375-1.053 2.328 2.328 0 0 0 0-2.279 2.478 2.478 0 0 0-.83-.83l-3.53-2.045-5.727-3.317a5.022 5.022 0 0 0 4.139-.36l6.32 3.641a4.682 4.682 0 0 1 1.709 6.391zm-14-2.01v.004l-3.558 2a2.27 2.27 0 0 1-3.102-.823 2.267 2.267 0 0 1 2.551-3.332c.591.161 1.089.56 1.375 1.102v-.05a2.27 2.27 0 0 1-.824 3.103c.559-.303 3.352-2.62 3.465-2.714-.304-1.744-1.573-3.24-3.396-3.72a4.608 4.608 0 0 0-3.558.479 4.67 4.67 0 0 0-1.694 6.383 4.682 4.682 0 0 0 2.865 2.192 4.657 4.657 0 0 0 3.66-.56l6.877-3.973c-.019-1.303.512-2.604 1.375-3.58l-6.036 3.49zm-2.4-4.703v-8.1h.012c.002-1.617.821-3.189 2.321-4.055a4.682 4.682 0 1 1 2.337 8.737 4.678 4.678 0 0 1-1.55-.28c-.016-.085-.733-3.796-.733-4.188L9.29 9.59v6.761a4.075 4.075 0 0 0-2.317-2.7zm2.403-8.1a2.279 2.279 0 1 0 4.546 0 2.23 2.23 0 0 0-.297-1.127 2.279 2.279 0 0 0-1.97-1.14 2.267 2.267 0 0 0-2.279 2.254v.013z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googledataproc
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googledataproc (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googledataproc {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googledataproc {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googledataproc 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googledataproc 3s ease-in-out infinite alternate;
}
</style>