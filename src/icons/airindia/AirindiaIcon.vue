<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-neural-pulse']"
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
      class="icon-geometry anim-neural-pulse"
    >
      <path d="M8.483.001C6.247.043 4.102 1.018 2.092 2.898c.141-.065-.545.44-1.637 1.676.013.006-.009.017-.013.025 0 0 .014.037.14-.064.75-.61 3.198-2.893 9.86.101a276.52 276.52 0 0 0 6.42 2.78s1.027 3.236 2.207 6.637c2.398 6.89-.087 9.135-.76 9.82-.102.114-.064.127-.064.127a16.746 16.746 0 0 0 2.385-2.08c1.624-1.637 2.588-3.428 2.855-5.344.254-1.878-.203-3.5-.584-4.566-.266-.75-.481-1.346-.672-1.88-.862-2.423-1.028-2.867-1.625-5.29l-.203-.8c-.023-.003.009-.016.014-.025l-.787-.254c-2.386-.774-2.804-.964-5.165-2.017-.52-.229-1.103-.496-1.826-.813-.85-.368-2.146-.875-3.707-.926a8.027 8.027 0 0 0-.447-.004Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: airindia
// Category: ai
// Physics Presets: Dynamic kinetic adaptation for airindia (simpleicons). Selected semantic motion: neural-pulse with custom idle (neural-pulse) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

.anim-neural-pulse {
  transform-origin: center;
}

.icon-geometry {
  transform-origin: center;
}

@keyframes motion-ai-airindia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-airindia {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.04) rotate(0deg) translate(0px, 0px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-airindia 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-neural-pulse {
  animation: motion-ai-idle-airindia 2s ease-in-out infinite alternate;
}
</style>