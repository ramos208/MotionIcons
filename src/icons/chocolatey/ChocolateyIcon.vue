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
      <path d="M0 1.249l1.439 3.18L0 6.926l1.439 2.5L0 11.923l1.439 2.424L0 16.845l1.439 2.5L0 22.75l2.8-.91c6.3.01 12.696.006 18.096 0l3.104.91-2.044-3.635 1.136-1.892-2.196-2.272-.004-.017V2.005c-6.551-.001-12.243 0-18.091 0zm19.688 1.968v7.03l-.23-.898-1.438-4.39-3.56.605-1.89-2.343zm-11.695.004h4.563L9.539 4.428zm2.86 3.68a3.903 3.903 0 0 1 1.64.254c1.968.757 1.286 2.8.15 4.012-.378.378-1.21.227-.605-.908.228-.454.454-1.363-.227-1.59-1.515-.53-3.255.682-3.634 2.271-.378 1.363.606 2.801 2.347 2.423 1.439-.303 2.802-1.288 3.332-1.742.53-.455.907.38.301 1.288-.68.908-1.74 1.968-2.65 2.574-3.558 2.423-6.662-.758-5.375-4.392.677-1.845 2.454-4.041 4.72-4.19zm6.527 2.031a.66.66 0 0 1 .454.182c.324.326.204.972-.268 1.445-.473.474-1.121.593-1.446.268-.325-.326-.205-.972.267-1.445.292-.292.666-.461.993-.45zm-.42 3.233a.66.66 0 0 1 .454.182c.325.325.206.973-.268 1.446-.473.473-1.12.592-1.445.268-.324-.326-.205-.972.268-1.445.291-.292.664-.462.99-.451Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chocolatey
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for chocolatey (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chocolatey {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chocolatey {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chocolatey 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-chocolatey 3s ease-in-out infinite alternate;
}
</style>