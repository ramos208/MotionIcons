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
      <path d="M11.46.033h-.052A11.993 11.993 0 0 0 0 11.922v.052c0 7.475 6.563 11.928 11.447 11.928h.17a3.086 3.086 0 0 0 3.125-3.047c0-1.693-1.433-2.917-3.152-2.917h-.039a6.016 6.016 0 0 1-5.508-6.368v-.052a6.016 6.016 0 0 1 5.573-5.509c1.719 0 3.125-1.237 3.125-2.917A3.086 3.086 0 0 0 11.604.02h-.143zm2.031.026a3.516 3.516 0 0 1 1.746 3.021 3.386 3.386 0 0 1-1.928 3.047c2.865.6 4.532 3.126 4.688 5.378v7.684a3.49 3.49 0 0 1 6.003.026v-7.736A12.046 12.046 0 0 0 13.491.045zm7.475 17.932a2.995 2.995 0 1 0 .04 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googleadmob
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googleadmob (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googleadmob {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googleadmob {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googleadmob 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googleadmob 3s ease-in-out infinite alternate;
}
</style>