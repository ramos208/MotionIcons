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
      <path d="M1.992.034C1.217.166.602.841.416 1.769.388 1.901.36 21.858.388 23.895c0 .181 0 .181.923-.593.497-.416 1.328-1.128 1.801-1.516.34-.28.626-.543.637-.576.011-.039.022-1.148.017-2.466L3.76 16.35h1.516c.829 0 1.52.022 1.537.044.017.021.028.538.022 1.142 0 .61.011 1.104.022 1.104.017 0 .643-.522.725-.604.017-.017.401-.335.851-.714.923-.77.917-.764 1.373-1.148.28-.236.34-.264.412-.203.072.066 2.878 2.421 3.592 3.02a1239.37 1239.37 0 0 1 3.932 3.306c.003.003 2.02 1.74 2.076 1.702.021-.01.038-3.333.038-7.38-.006-6.574.005-7.365.082-7.381.044-.011.895-.017 1.884-.017h1.801l-.022-3.761c-.005-2.07-.033-3.817-.05-3.877-.142-.495-.51-1.022-.883-1.28-.473-.318.164-.302-10.566-.302-5.442-.005-9.99.011-10.11.033Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: homepage
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for homepage (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-homepage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-homepage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-homepage 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-homepage 3s ease-in-out infinite alternate;
}
</style>