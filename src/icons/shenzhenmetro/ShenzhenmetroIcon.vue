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
      <path d="M.27 0v.155c0 4.69 3.033 8.751 7.331 10.434v2.736C3.303 14.99.271 19.019.271 23.768V24H4.36v-.232c0-2.459 1.278-4.623 3.24-5.934V24h3.165v-7.384c.408-.065.82-.098 1.234-.1.423 0 .834.038 1.235.1V24h3.165v-6.148c1.925 1.313 3.163 3.469 3.163 5.916V24h4.168v-.232c0-4.691-3.033-8.751-7.331-10.434V10.6c4.298-1.665 7.33-5.696 7.33-10.446V.001h-4.09v.154c0 2.458-1.277 4.622-3.24 5.934V0h-3.165v7.305c-.408.066-.821.1-1.235.103a8.11 8.11 0 0 1-1.234-.103V.001H7.6V6.07C5.675 4.757 4.438 2.602 4.438.154V.001zm10.495 11.358c.82.084 1.648.084 2.469.001v1.205a12.236 12.236 0 0 0-2.47 0z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: shenzhenmetro
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for shenzhenmetro (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-shenzhenmetro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-shenzhenmetro {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-shenzhenmetro 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-shenzhenmetro 3s ease-in-out infinite alternate;
}
</style>