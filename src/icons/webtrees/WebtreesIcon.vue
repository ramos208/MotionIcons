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
      <path d="M2.957 4.34q.647 0 1.269.243.634.243 1.093.7.459.448.662 1l1.592 4.59 1.31-3.82Q9.84 4.26 11.92 4.26q.459 0 1.106.203.729.23 1.228.809.5.58.905 1.782l1.296 3.82 1.606-4.59q.189-.54.649-.998.472-.459 1.079-.703.608-.243 1.283-.243.62.04 1.241.338.783.378 1.228 1.106.459.73.459 1.66 0 .81-.364 1.54l-4.225 8.652q-1.025 2.106-3.037 2.106-.905-.04-1.634-.567-.728-.54-1.133-1.498L12 13.72l-1.606 3.955q-.243.634-.647 1.093-.406.447-.945.702-.54.257-1.134.27-1.013 0-1.755-.486-.742-.5-1.297-1.62L.392 8.983Q0 8.16 0 7.443q0-.89.46-1.632.459-.756 1.254-1.134.622-.297 1.243-.337Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: webtrees
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for webtrees (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-webtrees {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-webtrees {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-webtrees 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-webtrees 3s ease-in-out infinite alternate;
}
</style>