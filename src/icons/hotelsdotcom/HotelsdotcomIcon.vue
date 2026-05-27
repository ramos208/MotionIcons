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
      <path d="M19.064 0H4.936a4.937 4.937 0 0 0-4.93 4.93V19.06A4.94 4.94 0 0 0 4.935 24h14.128a4.926 4.926 0 0 0 4.93-4.941V4.93A4.93 4.93 0 0 0 19.065 0zM8.55 10.63v2.329a.32.32 0 0 1-.337.337H5.884a.32.32 0 0 1-.337-.337V10.63c0-.2.137-.337.337-.337h2.34c.2 0 .336.137.336.337h-.01zm5.162 7.491a.32.32 0 0 1-.337.337h-2.328a.32.32 0 0 1-.337-.337v-2.328c0-.2.136-.337.337-.337h2.328c.19 0 .337.136.337.337v2.328zm0-5.162a.32.32 0 0 1-.337.337h-2.328a.32.32 0 0 1-.337-.337V10.63c0-.2.136-.337.337-.337h2.328c.2 0 .337.137.337.337v2.329zm5.974 4.372a.654.654 0 0 1-.22.516l-2.308 2.297c-.18.168-.432.052-.432-.2V7.28H4.062c-.253 0-.369-.264-.2-.432L6.169 4.55c.137-.147.274-.232.506-.232h11.473c.854 0 1.538.685 1.538 1.539V17.33z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hotelsdotcom
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hotelsdotcom (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hotelsdotcom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hotelsdotcom {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hotelsdotcom 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hotelsdotcom 3s ease-in-out infinite alternate;
}
</style>