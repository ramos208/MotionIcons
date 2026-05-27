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
      <path d="M0 0v24h24V0zm.209.209h23.582v23.582H.209zm11.789.625C5.83.834.83 5.834.83 12.002c0 6.168 5 11.168 11.168 11.168 6.167 0 11.167-5 11.168-11.166C23.165 5.837 18.166.837 12 .834zm.002.709c5.777 0 10.46 4.682 10.46 10.459v.004c-.004 5.773-4.686 10.452-10.46 10.453-5.777 0-10.46-4.68-10.46-10.457C1.54 6.225 6.222 1.543 12 1.543zM9.229 7.85c-.645 0-1.166.521-1.166 1.166v.004c0 1.044 1.261 1.567 1.999.829.738-.738.215-2-.829-1.999zM2.73 10.059v.71h.551v2.465h-.55v.713h4.644v-.65l.537-.54 1.486 1.491-.55.547.357.36 2.973-2.977v-.713l-.826.83-1.848-1.848-2.129 2.133v-.576l-1.904 1.06V10.77h.549v-.711zm8.905 0v.71h.549v2.465h-.555v.713h3.129c2.325 0 2.355-3.888.008-3.888zm4.963 0v.71h.55v2.465h-.55v.713h4.648v-1.943l-1.906 1.06V10.77h.55v-.711zm-2.43 1.21h.133c.687 0 .685 1.461.023 1.461h-.156v-1.46z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: lidl
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for lidl (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-lidl {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-lidl {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-lidl 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-lidl 3s ease-in-out infinite alternate;
}
</style>