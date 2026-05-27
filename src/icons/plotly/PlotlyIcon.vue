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
      <path d="M1.713.002A1.713 1.713 0 0 0 0 1.715a1.713 1.713 0 0 0 1.713 1.713 1.713 1.713 0 0 0 1.714-1.713A1.713 1.713 0 0 0 1.713.002Zm6.861 0a1.713 1.713 0 0 0-1.713 1.713 1.713 1.713 0 0 0 1.713 1.713 1.713 1.713 0 0 0 1.713-1.713A1.713 1.713 0 0 0 8.574.002Zm6.857 0a1.713 1.713 0 0 0-1.714 1.713 1.713 1.713 0 0 0 1.714 1.713 1.713 1.713 0 0 0 1.713-1.713A1.713 1.713 0 0 0 15.431.002zm6.856 0a1.713 1.713 0 0 0-1.713 1.713 1.713 1.713 0 0 0 1.713 1.713A1.713 1.713 0 0 0 24 1.715 1.713 1.713 0 0 0 22.287.002ZM1.713 6.859A1.713 1.713 0 0 0 0 8.572a1.713 1.713 0 0 0 1.713 1.713 1.713 1.713 0 0 0 1.714-1.713A1.713 1.713 0 0 0 1.713 6.86Zm6.861 0c-.948 0-1.713.765-1.713 1.713v13.713c0 .947.765 1.713 1.713 1.713.948 0 1.713-.766 1.713-1.713V8.572c0-.948-.765-1.713-1.713-1.713zm6.857 0a1.713 1.713 0 0 0-1.714 1.713 1.713 1.713 0 0 0 1.714 1.713 1.713 1.713 0 0 0 1.713-1.713 1.713 1.713 0 0 0-1.713-1.713zm6.856 0c-.947 0-1.713.765-1.713 1.713v13.713c0 .947.766 1.713 1.713 1.713.948 0 1.713-.766 1.713-1.713V8.572c0-.948-.765-1.713-1.713-1.713zM1.713 13.715C.766 13.715 0 14.48 0 15.428v6.857c0 .947.766 1.713 1.713 1.713.948 0 1.714-.766 1.714-1.713v-6.857c0-.948-.766-1.713-1.714-1.713zm13.718 0c-.948 0-1.714.765-1.714 1.713v6.857c0 .947.766 1.713 1.714 1.713.947 0 1.713-.766 1.713-1.713v-6.857c0-.948-.766-1.713-1.713-1.713z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: plotly
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for plotly (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-plotly {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-plotly {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-plotly 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-plotly 3s ease-in-out infinite alternate;
}
</style>