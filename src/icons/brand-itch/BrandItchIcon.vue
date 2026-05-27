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
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 7v1c0 1.087 1.078 2 2 2c1.107 0 2 -.91 2 -2c0 1.09 .893 2 2 2s2 -.91 2 -2c0 1.09 .893 2 2 2s2 -.91 2 -2c0 1.09 .893 2 2 2s2 -.91 2 -2c0 1.09 .893 2 2 2c.922 0 2 -.913 2 -2v-1c-.009 -.275 -.538 -.964 -1.588 -2.068a3 3 0 0 0 -2.174 -.932h-12.476a3 3 0 0 0 -2.174 .932c-1.05 1.104 -1.58 1.793 -1.588 2.068"/><path d="M4 10c-.117 6.28 .154 9.765 .814 10.456c1.534 .367 4.355 .535 7.186 .536c2.83 -.001 5.652 -.169 7.186 -.536c.99 -1.037 .898 -9.559 .814 -10.456"/><path d="M10 16l2 -2l2 2"/><path d="M12 14v4"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: brand-itch
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for brand-itch (tabler). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-brand-itch {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-brand-itch {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-brand-itch 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-brand-itch 3s ease-in-out infinite alternate;
}
</style>