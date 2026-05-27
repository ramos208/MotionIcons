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
      <path d="M8.123.008a.431.431 0 00-.512.42v9.746L4.104 6.666a.432.432 0 00-.66.064.428.428 0 00-.071.239v10.064a2.387 2.387 0 00.701 1.694l4.565 4.57a2.4 2.4 0 001.693.703h3.34c.635 0 1.242-.252 1.691-.701l4.565-4.572a2.394 2.394 0 00.699-1.694V13.41a2.39 2.39 0 00-.7-1.693L8.343.125a.427.427 0 00-.219-.117zM9.646 12.51a.719.719 0 01.508.21l1.848 1.85 1.844-1.85a.714.714 0 011.015 0l1.32 1.321a.724.724 0 01.212.508v1.406a.72.72 0 01-.21.508l-3.68 3.7a.72.72 0 01-1.019 0l-3.668-3.7a.716.716 0 01-.209-.506v-1.408a.71.71 0 01.211-.506l1.32-1.322a.713.713 0 01.508-.211Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: fandom
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for fandom (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-fandom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-fandom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-fandom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-fandom 3s ease-in-out infinite alternate;
}
</style>