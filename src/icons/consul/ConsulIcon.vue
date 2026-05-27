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
      <path d="M14.0754 12.0285a2.5059 2.5059 0 0 0-2.506-2.506 2.5059 2.5059 0 0 0-2.5058 2.506 2.5059 2.5059 0 0 0 2.5059 2.5059 2.5059 2.5059 0 0 0 2.5059-2.506zm3.5317.0003a1.1559 1.1556 0 0 0-1.1558-1.1556 1.1559 1.1556 0 0 0-1.1559 1.1556 1.1559 1.1556 0 0 0 1.1559 1.1555 1.1559 1.1556 0 0 0 1.1558-1.1555zm4.7917 5.5103a1.1576 1.1564 0 0 0-1.1577-1.1564 1.1576 1.1564 0 0 0-1.1576 1.1564 1.1576 1.1564 0 0 0 1.1576 1.1564 1.1576 1.1564 0 0 0 1.1577-1.1564zM20.748 13.888a1.1534 1.157 0 0 0-1.1533-1.157 1.1534 1.157 0 0 0-1.1534 1.157 1.1534 1.157 0 0 0 1.1534 1.1571 1.1534 1.157 0 0 0 1.1533-1.157zm3.2512.0619a1.1542 1.1538 0 0 0-1.1542-1.1538 1.1542 1.1538 0 0 0-1.1542 1.1538 1.1542 1.1538 0 0 0 1.1542 1.1538 1.1542 1.1538 0 0 0 1.1542-1.1538zm-3.279-3.883a1.1561 1.1535 0 0 0-1.156-1.1535 1.1561 1.1535 0 0 0-1.1562 1.1535 1.1561 1.1535 0 0 0 1.1561 1.1535 1.1561 1.1535 0 0 0 1.1562-1.1535zm3.2798.045a1.1614 1.157 0 0 0-1.1614-1.157 1.1614 1.157 0 0 0-1.1613 1.157 1.1614 1.157 0 0 0 1.1613 1.1572A1.1614 1.157 0 0 0 24 10.1119zm-1.626-3.631a1.1575 1.1601 0 0 0-1.1575-1.16 1.1575 1.1601 0 0 0-1.1575 1.16 1.1575 1.1601 0 0 0 1.1575 1.1602A1.1575 1.1601 0 0 0 22.374 6.481zM11.6171.3832c-3.1098 0-6.029 1.2063-8.2197 3.3974C1.206 5.9822 0 8.9007 0 11.9998c0 3.109 1.2067 6.0279 3.3974 8.2193 2.2028 2.1922 5.1213 3.3978 8.2197 3.3978 2.578 0 5.0176-.8252 7.055-2.386l-1.4196-1.8524c-1.6263 1.246-3.5748 1.9048-5.6354 1.9048-2.4776 0-4.8112-.9641-6.5717-2.7154-1.748-1.7488-2.7118-4.0828-2.7118-6.568 0-2.4784.9645-4.812 2.7158-6.5703 1.7484-1.7488 4.0817-2.713 6.5677-2.713 2.058 0 4.0069.659 5.6365 1.9057l1.4179-1.854C16.6314 1.2083 14.1922.3831 11.617.3831Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: consul
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for consul (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-consul {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-consul {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-consul 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-consul 3s ease-in-out infinite alternate;
}
</style>