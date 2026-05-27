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
      <path d="M20.97 0H3.03A3.03 3.03 0 0 0 0 3.03v17.94A3.03 3.03 0 0 0 3.03 24h17.94A3.03 3.03 0 0 0 24 20.97V3.03A3.03 3.03 0 0 0 20.97 0ZM4.813 8.936a2.376 2.376 0 0 1 2.374-2.375h4.573c.067 0 .129.04.157.103a.172.172 0 0 1-.03.185l-1.002 1.088a.924.924 0 0 1-.678.299H7.2a.713.713 0 0 0-.713.713v1.796a.418.418 0 0 1-.418.419h-.836a.418.418 0 0 1-.419-.419V8.936zm14.224 6.128a2.376 2.376 0 0 1-2.374 2.375h-1.944a2.376 2.376 0 0 1-2.375-2.375v-3.401c0-.231.087-.454.243-.625l1.134-1.23a.172.172 0 0 1 .298.115v5.13c0 .393.32.713.713.713h1.92c.393 0 .713-.32.713-.713V8.949a.713.713 0 0 0-.713-.713h-2.233c-.255 0-.499.108-.674.295l-6.658 7.235h4c.232 0 .419.187.419.418v.837a.418.418 0 0 1-.419.418h-5.39a.886.886 0 0 1-.886-.886v-.443c0-.223.083-.436.234-.6l7.465-8.109a2.603 2.603 0 0 1 1.916-.84h2.235a2.376 2.376 0 0 1 2.375 2.375v6.128z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: twenty
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for twenty (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-twenty {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-twenty {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-twenty 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-twenty 3s ease-in-out infinite alternate;
}
</style>