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
      <path d="M18.22 1.546C12.596-1.648 5.258.088 2.096 6.928c-2.176 4.71-1.188 12.896 3.88 15.83 5.066 2.934 11.866.472 14.98-5.29 3.542-6.554 2.356-13.034-2.736-15.922zm-6.244 18.526a1.212 1.212 0 0 1-.76.248 1.59 1.59 0 0 1-.4-.054 1.078 1.078 0 0 1-.528-.306.942.942 0 0 1-.21-.474 1.15 1.15 0 0 1 .208-.854c.2-.298.532-.48.89-.49a1 1 0 0 1 .186.018c.188.04.366.12.518.24.286.217.456.553.462.912a.944.944 0 0 1-.366.76zm7.656-9.834c-.202 1.514-1.14 2.914-2.7 3.84-1.236.738-2.86 1.032-4.46 1.046-.012.248-.062 1.1-.088 1.236a.87.87 0 0 1-.196.42c-.172.218-.47.36-.766.44a2.493 2.493 0 0 1-.632.096.8.8 0 0 1-.568-.234.8.8 0 0 1-.204-.482l-.012-.17c-.034-.144-.22-7.496-.184-7.366.028-.88 1.48-1.034 2.27-.88.79.158.59 1.098.57 2.252 0 0-.04 1.52-.112 3.124a6.178 6.178 0 0 0 2.556-.684c1.512-.732 2.312-1.856 2.312-3.512s-1.648-3.51-4.688-3.51-4.346.75-5.818 1.94c-.332.27-.588.54-.83.72-.24.178-.882.204-1.054-.212-.208-.504.18-1.064.406-1.334.36-.426 1.24-1.284 2.218-1.78C8.772 4.616 10.14 4 12.048 3.954c1.724-.044 4.448.094 6.41 2.26l.014.014c1.02 1.066 1.34 2.684 1.16 4.01z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pearson
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pearson (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pearson {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pearson {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pearson 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pearson 3s ease-in-out infinite alternate;
}
</style>