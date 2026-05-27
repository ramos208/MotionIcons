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
      <path d="M12 0C6.178.001 1.444 3.559 1.444 7.93V24h1.06L2.51 7.93c0-2.847 2.408-5.295 5.831-6.333a5.948 5.948 0 0 0-.254.258 6.719 6.719 0 0 0-.363.415c-.17.21-.201.251-.439.591-.185.27-.375.596-.49.813-.131.244-.25.493-.36.746-.237.541-.39 1.044-.418 1.134a12.425 12.425 0 0 0-.534 3.634L5.485 24h1.066V9.188c0-.322.016-1.068.14-1.828.07-.457.186-.996.342-1.505.144-.487.42-1.209.762-1.82.158-.285.329-.553.51-.803a6.53 6.53 0 0 1 .874-.981 5 5 0 0 1 .83-.617 4.2 4.2 0 0 1 .565-.28c-.846 1.92-1.108 5.46-1.108 7.834V24h1.065V9.188c0-4.959.94-7.865 1.463-8.112.39.205 1.283 2.392 1.429 6.954l1.048.014c-.03-.941-.166-4.671-1.05-6.687 2.05.844 3.653 3.45 3.965 6.687h1.116l-.012-.117h.002c-.255-2.648-1.271-4.88-2.721-6.295 3.36 1.059 5.719 3.486 5.719 6.299l-.007.113 1.073-.009C22.556 3.68 17.839.017 12.042 0zm1.5 20.024V24h1.061l.005-3.976zm3.987 0L17.492 24h1.06v-3.976zm4.003 0V24h1.066v-3.976z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: opencage
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for opencage (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-opencage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-opencage {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-opencage 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-opencage 3s ease-in-out infinite alternate;
}
</style>