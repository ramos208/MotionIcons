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
      <path d="M7.438 0C6.8952-.0029 6.3924.2006 5.954.6725c-.6953.7482-.354 1.7371.5356 2.7936 2.751.6529 6.3299 2.3982 9.4374 4.8783C14.4729 6.0506 10.37.0158 7.4381 0ZM4.2622 3.5776c-1.304.0225-2.2213.4728-2.4983 1.4363C.7452 8.5564 13.576 10.6173 13.576 10.6173c.269.0468.4741.2807.4741.5625 0 .292-.22.5298-.5034.564-7.508-.303-8.8518 4.309-8.8518 4.309C3.2689 20.6625 7.6858 24 7.6858 24c-2.1293-8.5433 7.0439-4.9774 7.0439-4.9774 7.5638 2.5793 7.8292.526 7.4649-1.0566-.0027-.0127-.0037-.0256-.0067-.0386C20.4495 9.987 9.3782 3.4895 4.262 3.5776Zm14.3353 10.5971c.2358-.0018.524.1173.7714.3406.396.3576.5366.8461.3148 1.091-.222.2447-.723.1535-1.1193-.2035-.3954-.3573-.536-.8458-.3141-1.0906.0832-.0918.2058-.1364.3472-.1375z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: keploy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for keploy (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-keploy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-keploy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-keploy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-keploy 3s ease-in-out infinite alternate;
}
</style>