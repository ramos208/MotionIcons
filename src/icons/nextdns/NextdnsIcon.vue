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
      <path d="m22.195 6.512-.001-.019c-.01-.23-.017-.474-.022-.746a2.543 2.543 0 0 0-2.395-2.492c-2.759-.154-4.894-1.053-6.717-2.831l-.016-.015a1.536 1.536 0 0 0-2.087 0l-.016.015C9.117 2.202 6.982 3.101 4.223 3.256a2.543 2.543 0 0 0-2.395 2.492c-.004.269-.011.513-.022.745l-.001.044c-.053 2.813-.12 6.315 1.052 9.494.644 1.748 1.619 3.267 2.899 4.516 1.458 1.422 3.367 2.552 5.674 3.356.075.026.153.048.233.063a1.668 1.668 0 0 0 .675 0c.079-.015.158-.037.233-.063 2.305-.806 4.212-1.936 5.668-3.358 1.28-1.25 2.255-2.769 2.9-4.518 1.176-3.188 1.109-6.696 1.056-9.515Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: nextdns
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for nextdns (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-nextdns {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-nextdns {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-nextdns 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-nextdns 3s ease-in-out infinite alternate;
}
</style>