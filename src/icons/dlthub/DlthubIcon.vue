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
      <path d="M24 11.498h-1.008v3.01H24Zm-3.024 0h2.016v-1.004h-2.016V8.487h-1.008v7.025h3.024v-1.004h-2.016zm-2.986 3.01h-2.016v1.004h3.024v-5.017H17.99zm-2.016-4.013h-1.008v4.014h1.008zm-2.985 1.003h-2.016v-3.01H9.965v7.024h1.008v-3.01h2.016v3.01h1.008V8.488h-1.008zm-11.981 0H0v3.01h1.008zm2.016-1.003H1.008v1.003h2.016v3.01H1.008v1.004h3.024V8.488H3.024zM5 15.512h1.01V8.488H5.001Zm2.986-7.024H6.98v6.02h1.008v-3.01h1.008v-1.003H7.987zm1.008 6.02H7.987v1.004h1.008z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: dlthub
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for dlthub (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-dlthub {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-dlthub {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-dlthub 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-dlthub 3s ease-in-out infinite alternate;
}
</style>