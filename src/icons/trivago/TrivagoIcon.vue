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
      <path d="M7.8112 0a.2537.2537 0 0 0-.1336.0416L2.8311 3.1804a.4265.4265 0 0 0-.1947.3579v9.285c0 .141.1144.2554.2555.2554h5.1808l10.358-5.7274a.4263.4263 0 0 0 .22-.3732V1.6774c0-.1949-.2092-.3182-.3797-.2239L8.0727 7.0923V.2563c0-.1521-.1265-.2589-.2615-.2563zm.0172 14.7072-4.9307.0002c-.1457 0-.2607.1216-.2555.2672C2.822 19.9896 6.9445 24 12.0032 24c5.059 0 9.18-4.01 9.3602-9.0246.0053-.1461-.1102-.2682-.2564-.2682h-4.9319c-.1312 0-.2442.1073-.2545.238-.1592 2.025-1.8517 3.6185-3.9173 3.6185-2.4784 0-3.4806-2.1046-3.4808-2.105-.3197-.6025-.4129-1.1898-.4394-1.5183a.255.255 0 0 0-.2547-.2332Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: trivago
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for trivago (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-trivago {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-trivago {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-trivago 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-trivago 3s ease-in-out infinite alternate;
}
</style>