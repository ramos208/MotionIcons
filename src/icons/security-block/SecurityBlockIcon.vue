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
      <path d="M19.8598 15.8599C20.5537 14.5522 21 13.0186 21 11.2371L21 7.74821C21 6.34255 21 5.63972 20.5504 4.91385C20.1008 4.18797 19.6368 3.95712 18.7088 3.4954C16.8165 2.55388 14.5009 2.00006 12 2.00006C10.1475 2.00006 8.3966 2.30394 6.84414 2.8442M4.1416 4.14166C3.8764 4.33979 3.6614 4.57189 3.4496 4.91385C3 5.63972 3 6.34254 3 7.7482V11.2371C3 16.9205 7.54236 20.0804 10.173 21.4339C10.9067 21.8113 11.2735 22.0001 12 22.0001C12.7265 22.0001 13.0933 21.8113 13.8269 21.4339C15.0804 20.789 16.7679 19.734 18.1912 18.1913" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2 2.00006L22 22.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: security-block
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for security-block (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-security-block {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-security-block {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-security-block 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-security-block 3s ease-in-out infinite alternate;
}
</style>