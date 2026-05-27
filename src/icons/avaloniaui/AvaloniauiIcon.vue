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
      <path d="M12.034 8.208c-2.003 0-3.627 1.696-3.627 3.789s1.624 3.789 3.627 3.789 3.627-1.697 3.627-3.79-1.624-3.788-3.627-3.788m-7.392 2.067c.72.211 1.248.902 1.248 1.722s-.528 1.51-1.248 1.721c.752 3.54 3.776 6.188 7.392 6.188 1.316 0 2.554-.35 3.632-.967v.914h3.94v-7.528a5 5 0 0 0 0-.224v-.104c0-4.369-3.39-7.91-7.572-7.91-3.616 0-6.64 2.648-7.392 6.188m-.5 2.982c.67 0 1.212-.567 1.212-1.266s-.542-1.265-1.212-1.265-1.211.566-1.211 1.265c0 .7.542 1.266 1.211 1.266M20.682 24H11.8C5.549 23.887.515 18.556.515 12c0-6.627 5.143-12 11.487-12 6.241 0 11.32 5.2 11.483 11.678l-.02 9.743C23.3 22.876 22.12 24 20.683 24"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: avaloniaui
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for avaloniaui (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-avaloniaui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-avaloniaui {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-avaloniaui 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-avaloniaui 3s ease-in-out infinite alternate;
}
</style>