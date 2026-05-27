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
      <path d="M4.725 6.664C5.6 6.91 6.353 7.684 6.6 8.556c.27.95-.032 1.905-.671 2.633.783.432 1.44 1.083 1.704 1.956.244.807.185 1.739-.224 2.483-.446.812-1.3 1.457-2.203 1.65-.496.106-1.02.07-1.524.07H.602c-.393 0-.602-.28-.602-.638V9.476C0 5.81 3.889 6.428 4.725 6.664zM1.051 9.63v1.367h3.228c1.258 0 1.461-1.761 1.285-2.272-.184-.533-.687-.893-1.2-1.056-.426-.097-3.313-.784-3.313 1.961zm0 2.357v4.297c0 .116-.006.099.116.099H3.57c.67 0 1.364.022 1.98-.284.782-.387 1.24-1.422 1.158-2.263-.084-.849-.667-1.43-1.44-1.72-.387-.147-.927-.129-1.339-.129H1.05zm14.791-4.77c0-.47.28-.706.854-.706h2.916c2.9 0 4.388 2.797 4.388 5.492 0 2.754-1.797 5.404-4.683 5.404h-2.856c-.471 0-.619-.088-.619-.603V7.218zm1.09.369v8.746h2.311c2.342 0 3.594-2.15 3.594-4.329 0-2.238-1.134-4.417-3.387-4.417h-2.518zm-5.506.017c-.948 0-1.824.776-1.824 1.796 0 .918 1.235 1.45 2.456 2.11 1.292.704 2.67 1.408 2.67 2.902 0 2.054-1.536 3.116-3.518 3.116a4.479 4.479 0 0 1-2.47-.718c-.258-.173-.388-.388-.388-.632 0-.33.159-.488.488-.488.159 0 .33.057.504.172.56.345 1.277.546 1.91.546 1.25 0 2.311-.546 2.311-1.925 0-.861-1.033-1.407-2.153-1.996-1.408-.732-2.988-1.536-2.988-3.03 0-1.882 1.436-2.973 3.232-2.973.775 0 1.622.215 2.441.66a.767.767 0 0 1 .402.661c0 .287-.201.56-.502.56-.173 0-.345-.129-.546-.258-.46-.287-1.279-.503-2.025-.503z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: bsd
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for bsd (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-bsd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-bsd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-bsd 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-bsd 3s ease-in-out infinite alternate;
}
</style>