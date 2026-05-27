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
      <path d="M22.373 7.42V0H1.627v7.42h6.66V24h7.428V7.42h6.66zM12.31 0h-.623zm-.004 3.41V.618h8.865L17.652 3.41Zm-5.948 0L2.83.618h8.857V3.41H6.358zm-.608.308-3.503 2.76V.949ZM2.837 6.802l3.52-2.781h4.894L8.46 6.8H2.837Zm6.068.438 2.78-2.782v14.781l-1.602 2.046-1.183 1.51Zm.326 16.142.555-.706 2.216-2.825 2.77 3.535zm3.078-18.924 2.786 2.782v15.556l-2.786-3.556zM15.55 6.8l-2.8-2.78h4.904l3.519 2.78h-5.623Zm6.206-.322L18.25 3.71 21.744.963l.02-.015Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: talenthouse
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for talenthouse (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-talenthouse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-talenthouse {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-talenthouse 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-talenthouse 3s ease-in-out infinite alternate;
}
</style>