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
      <path d="M10.515 10.7553L7.51076 10.7553M7.51076 10.7553H4.00456C3.17361 10.7553 2.5 10.083 2.5 9.25355C2.5 8.42415 3.17361 7.75178 4.00456 7.75178L9.469 7.75178M7.51076 10.7553L7.53762 11.8097C7.55574 12.5207 7.94402 13.1373 8.5156 13.4776M9.469 7.75178L14.0319 7.75178M9.469 7.75178L12.2288 5.15834C14.0964 3.58588 15.4578 4.4122 16.2142 4.99245L18.6516 6.60732C20.7191 7.83214 21.5 9.2495 21.5 10.4418V15.3225C21.5 17.5886 19.1177 19.7016 16.9342 19.7016L11.7343 19.7497C10.7241 19.759 9.865 19.0163 9.73 18.017L9.54069 16.4766M10.5448 13.7589H9.54069C9.16648 13.7589 8.81576 13.6563 8.5156 13.4776M8.5156 13.4776L8.5703 14.8132C8.59792 15.8977 9.48658 16.7624 10.5734 16.7624H11.5774" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hand-pointing-left04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hand-pointing-left04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hand-pointing-left04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(-6px, 0px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(-4px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hand-pointing-left04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hand-pointing-left04 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hand-pointing-left04 3s ease-in-out infinite alternate;
}
</style>