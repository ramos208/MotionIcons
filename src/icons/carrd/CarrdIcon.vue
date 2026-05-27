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
      <path d="M21.2539 18.4207 9.7457 23.9469a.5163.5163 0 0 1-.23.0531.5491.5491 0 0 1-.2832-.0796.5289.5289 0 0 1-.2478-.4513v-5.4732l-6.2165-2.6016c-.199-.084-.3274-.2743-.3274-.4911V.5324c0-.1814.093-.354.2478-.4513.1549-.0974.3495-.1062.5132-.031l11.964 5.743 5.6323-2.7034c.1638-.0796.3584-.0663.5133.031a.5289.5289 0 0 1 .2478.4513v14.3708c-.004.2036-.1195.3894-.3053.4779zM3.5027 1.3774v13.1718l5.482 2.2964v-2.646L5.538 12.8105c-.2699-.1106-.4026-.4203-.2965-.6902.1107-.2743.4204-.4027.6903-.2965l3.0529 1.23v-2.1724L5.538 9.492c-.2699-.1106-.4026-.4203-.2965-.6902.1107-.2743.4204-.4026.6903-.2965l3.0529 1.23v-.6326c0-.2036.115-.3894.3009-.4779l.7875-.3805-4.5617-2.0751c-.2654-.1195-.3849-.438-.2654-.7035.1194-.2655.438-.385.7035-.2655l5.367 2.4468 2.6148-1.2566zM20.493 4.4171 10.0466 9.4345v13.1939l10.4463-5.0219zm-8.4509 6.8668 5.9864-2.8936a.5279.5279 0 0 1 .708.2478c.1282.2654.0176.584-.2478.7079l-5.9864 2.8936a.5448.5448 0 0 1-.23.0531c-.1992 0-.385-.1106-.478-.3008-.1238-.261-.0132-.5797.2478-.708zm0 3.3184 5.9864-2.8936a.5279.5279 0 0 1 .708.2478c.1282.2654.0176.584-.2478.7079l-5.9864 2.8936a.5448.5448 0 0 1-.23.0531c-.1992 0-.385-.1106-.478-.3009-.1238-.2654-.0132-.5796.2478-.7079zm0 3.314 5.9864-2.8936a.5279.5279 0 0 1 .708.2477c.1282.2655.0176.584-.2478.708l-5.9864 2.8936a.5448.5448 0 0 1-.23.053c-.1992 0-.385-.1105-.478-.3008-.1238-.261-.0132-.5796.2478-.708z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: carrd
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for carrd (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-carrd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-carrd {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-carrd 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-carrd 3s ease-in-out infinite alternate;
}
</style>