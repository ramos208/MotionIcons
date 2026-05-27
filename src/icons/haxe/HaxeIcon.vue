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
      <path d="M23.784 0a.221.221 0 0 0-.043.003h-5.853a.221.221 0 0 0-.1.023L12 2.918 6.21.026a.221.221 0 0 0-.098-.023H.238a.221.221 0 0 0-.026 0 .221.221 0 0 0-.21.256v5.853a.221.221 0 0 0 .024.1l2.894 5.785L.026 17.79a.221.221 0 0 0-.024.099v5.84a.221.221 0 0 0 .002.078.221.221 0 0 0 .253.19h5.855a.221.221 0 0 0 .099-.023L12 21.076l5.789 2.898a.221.221 0 0 0 .099.023h5.877a.221.221 0 0 0 .232-.257V17.89a.221.221 0 0 0-.023-.1l-2.895-5.792 2.895-5.786a.221.221 0 0 0 .023-.099V.267a.221.221 0 0 0-.005-.098.221.221 0 0 0-.208-.169zM2.022.445H6.06l4.038 2.017zm15.918 0h4.038l-8.075 2.017zM.528.528l11.039 2.76-8.28 8.275-.238-.953zM23.47.535l-2.76 11.031-8.277-8.279zm.084 1.487V6.06l-2.019 4.035zm-23.11.003L2.29 9.398l.175.7L.445 6.06zM12 3.48L20.52 12l-8.517 8.516-8.241-8.234L3.48 12zm8.712 8.952l.088.351 2.672 10.688-11.04-2.76zm-17.424 0l8.274 8.274L.531 23.46l.266-1.065zm18.247 1.466l2.02 4.042v4.027zm-19.07 0l-2.02 8.08v-4.038zm7.626 7.638l-4.032 2.018H2.02zm3.818 0l8.071 2.018h-4.04z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: haxe
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for haxe (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-haxe {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-haxe {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-haxe 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-haxe 3s ease-in-out infinite alternate;
}
</style>