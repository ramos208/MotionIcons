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
      <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12Zm0 1.113c6.003 0 10.887 4.884 10.887 10.887S18.003 22.887 12 22.887 1.113 18.003 1.113 12 5.997 1.113 12 1.113Zm7.03 5.201c-.536-.002-1.28.304-2.255 1.098-1.052.858-3.814 3.045-3.814 3.045l1.025 1.3c4.694-2.558 6.19-3.167 6.116-4.294-.042-.634-.384-1.146-1.073-1.149Zm-.507.752c.147 0 .266.106.266.239 0 .132-.119.238-.266.238-.146 0-.265-.106-.265-.238 0-.171.162-.239.265-.239zm-1.58 1.489c0 .131-.118.238-.265.238-.147 0-.264-.107-.264-.238 0-.128.11-.234.24-.24.13-.006.29.077.29.24zm-2.109 1.01c.147 0 .266.106.266.238s-.12.238-.266.238c-.146 0-.266-.106-.266-.238 0-.148.139-.239.266-.239zm-2.445.972c-1.502.225-5.807.992-8.01 2.672l3.574 5.387s4.706-2.932 5.863-6.244z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: scrapy
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for scrapy (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-scrapy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-scrapy {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-scrapy 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-scrapy 3s ease-in-out infinite alternate;
}
</style>