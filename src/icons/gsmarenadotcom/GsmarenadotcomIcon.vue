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
      <path d="M20.324 22.992c-.905-.454-12.625-5.27-12.625-5.27a1.275 1.275 0 0 0-.389-.122c-.39-.056-.78.091-1.061.444 0 0-2.672 4.354-3.066 4.948C2.782 23.58 3.2 24 3.726 24h16.38c.644 0 .898-.67.218-1.008ZM19.688 0h-7.743c-.868 0-1.49.28-2.042 1.043L4.05 10.497c-.333.457-.14.985.336 1.185.974.412 2.766.977 3.68 1.388.718.326 1.157.204 1.552-.382l4.092-6.507.49-.005v7.405c0 .924.37 1.279.946 1.54.577.246 4.144 1.773 4.689 1.973.644.246 1.143-.05 1.143-.731V1.289c0-.706-.585-1.289-1.29-1.289Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: gsmarenadotcom
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for gsmarenadotcom (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-gsmarenadotcom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-gsmarenadotcom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-gsmarenadotcom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-gsmarenadotcom 3s ease-in-out infinite alternate;
}
</style>