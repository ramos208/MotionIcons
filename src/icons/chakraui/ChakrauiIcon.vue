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
      <path d="M7.678 1.583a3.492 3.492 0 0 0-3.03 1.76L.265 10.997a2.035 2.035 0 0 0-.064 1.886l4.486 7.784a3.493 3.493 0 0 0 3.03 1.751l8.602-.01a3.495 3.495 0 0 0 3.026-1.759l4.39-7.655a2.025 2.025 0 0 0-.002-2.008L19.339 3.34a3.494 3.494 0 0 0-3.028-1.756Zm4.365 1.244V9.11c0 .32.226.595.54.656l6.089 1.187c-2.005 3.466-4.006 6.934-6.008 10.4-.17.296-.62.176-.62-.166v-6.286a.667.667 0 0 0-.538-.656l-6.072-1.193 5.988-10.393c.168-.29.621-.178.621.168z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: chakraui
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for chakraui (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-chakraui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-chakraui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-chakraui 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-chakraui 3s ease-in-out infinite alternate;
}
</style>