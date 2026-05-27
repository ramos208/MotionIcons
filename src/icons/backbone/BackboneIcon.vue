<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-kinetic-trail']"
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
      <path d="M11.978.805A5.3 5.3 0 0 1 9.972 2.29a5.3 5.3 0 0 1 2.006 1.487 5.3 5.3 0 0 1 2.006-1.488A5.3 5.3 0 0 1 11.978.804m10.6 17.27L19.45 19.22v-6.875c0-.456.37-.826.825-.826h1.479c.454 0 .824.37.824.826zm-4.55-5.73v7.399l-3.865 1.416v-14c0-.22.087-.43.243-.585a.82.82 0 0 1 .58-.24h.008l2.213.019a.827.827 0 0 1 .818.824v5.086h.004zm3.727-2.246h-1.48c-.291 0-.57.055-.826.157V7.178c0-1.23-1-2.237-2.23-2.247l-2.213-.017h-.019a2.23 2.23 0 0 0-1.582.651 2.23 2.23 0 0 0-.664 1.595v16.037L24 19.068v-6.725a2.25 2.25 0 0 0-2.247-2.246M9.839 21.159l-3.865-1.416v-7.398l-.001-.08h.003V7.176c0-.45.367-.82.818-.824l2.214-.018h.007a.82.82 0 0 1 .58.24.82.82 0 0 1 .244.585zM4.551 19.22l-3.127-1.146v-5.73c0-.456.37-.826.824-.826h1.479c.454 0 .824.37.824.826zM9.015 4.913h-.018l-2.214.018a2.254 2.254 0 0 0-2.23 2.247v3.076a2.2 2.2 0 0 0-.826-.157h-1.48A2.25 2.25 0 0 0 0 12.345v6.724l11.262 4.127V7.157a2.23 2.23 0 0 0-.665-1.594 2.23 2.23 0 0 0-1.582-.652"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: backbone
// Category: directional
// Physics Presets: Dynamic kinetic adaptation for backbone (simpleicons). Selected semantic motion: kinetic-trail with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-backbone {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(4.5px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(3px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-backbone {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-backbone 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-backbone 3s ease-in-out infinite alternate;
}
</style>