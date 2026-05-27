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
      <path d="M21.7142 13.6433h-4.9888a.651.651 0 00-.655.555 4.1139 4.1139 0 01-4.0619 3.5299l1.35 6.1728a10.3737 10.3737 0 009.0077-9.5447.651.651 0 00-.652-.713zm-8.6327-.158l7.1998-6.1718a.645.645 0 000-.984L13.0815.1597a.648.648 0 00-1.074.483v12.3426a.651.651 0 001.073.5zm-11.3547 1.505A10.3847 10.3847 0 0012.0115 24v-6.2698a4.0929 4.0929 0 01-4.0999-4.0869zm-.096-1.447v.1h6.2798a4.0929 4.0929 0 014.098-4.0879l-1.348-6.1698a10.3697 10.3697 0 00-9.0298 10.1577"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bamboo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bamboo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bamboo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bamboo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bamboo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bamboo 3s ease-in-out infinite alternate;
}
</style>