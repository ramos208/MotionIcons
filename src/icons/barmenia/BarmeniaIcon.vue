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
      <path d="M7.046 13.427v6.395h5.709a5.41 5.41 0 0 0 2.377-.422c1.021-.537 1.532-1.537 1.532-2.999a2.591 2.591 0 0 0-1.492-2.571 5.834 5.834 0 0 0-2.347-.403zm0-9.26v5.287h5.714a4.722 4.722 0 0 0 2.486-.592c.637-.398.955-1.101.955-2.109 0-1.117-.421-1.855-1.263-2.213a8.63 8.63 0 0 0-2.78-.368zm12.761-1.611a6.19 6.19 0 0 1 1.079 3.66 5.433 5.433 0 0 1-1.089 3.531 5.617 5.617 0 0 1-1.791 1.388 5.232 5.232 0 0 1 2.716 2.113 6.474 6.474 0 0 1 .915 3.481 7.069 7.069 0 0 1-1.05 3.854 6.467 6.467 0 0 1-4.316 3.093c-1.093.222-2.207.33-3.322.324H2.361V0H13.72c2.864.046 4.893.899 6.087 2.556"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: barmenia
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for barmenia (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-barmenia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-barmenia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-barmenia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-barmenia 3s ease-in-out infinite alternate;
}
</style>