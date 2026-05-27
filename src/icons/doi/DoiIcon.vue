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
      <path d="M24 12c0 6.633-5.367 12-12 12S0 18.633 0 12 5.367 0 12 0s12 5.367 12 12ZM7.588 6.097v4.471c-.663-.925-1.403-1.373-2.406-1.373-2.046 0-3.244 1.441-3.244 3.847 0 2.357 1.325 3.848 3.166 3.848 1.12 0 1.88-.4 2.445-1.325l-.039 1.042h2.045V6.097Zm-1.763 8.942c-1.12 0-1.802-.76-1.802-2.045 0-1.325.682-2.085 1.802-2.085 1.081 0 1.802.76 1.802 2.085 0 1.285-.672 2.045-1.802 2.045Zm12.253-1.948c0-2.172-1.578-3.789-3.906-3.789-2.328 0-3.945 1.695-3.945 3.789 0 2.133 1.578 3.789 3.945 3.789 2.289 0 3.906-1.656 3.906-3.789Zm-2.094-.01c0 1.14-.711 1.89-1.851 1.89-1.139 0-1.851-.75-1.851-1.89 0-1.139.712-1.89 1.851-1.89 1.149 0 1.861.751 1.851 1.89Zm2.6-5.795c0 .633.517 1.227 1.189 1.227.633 0 1.188-.555 1.188-1.227a1.17 1.17 0 0 0-1.188-1.189c-.672 0-1.179.556-1.189 1.189Zm.166 9.341h2.055V9.604H18.75Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: doi
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for doi (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-doi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-doi {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-doi 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-doi 3s ease-in-out infinite alternate;
}
</style>