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
      <path d="M24 12c0 6.6274-5.3726 12-12 12S0 18.6274 0 12c0-1.8257.4071-3.5554 1.1374-5.1051C.6514 8.1257.433 9.3446.433 10.4863c0 5.4334 4.3868 6.2203 6.2537 6.2023 2.8371-.0257 6.1543-1.416 8.9485-3.9909l-.4714 2.6494c-.1054.606.2906 1.1392.8957 1.1426h.2503c.6274 0 1.0732-.5108 1.1863-1.1426l1.0063-5.6622c.12-.6283-.2932-1.14-.9214-1.14h-5.6726c-.6309 0-1.2077.3342-1.32.9677l-.0446.2554c-.09.6026.33 1.0569.9317 1.0569h2.9589a9.48 9.48 0 0 0-.1414.1388c-2.04 1.9312-4.5558 2.988-6.6403 2.988-2.0803 0-4.41-1.3123-4.41-4.2686C3.2426 3.5546 8.9906 0 12 0c6.6137 0 12 5.3726 12 12"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: moneygram
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for moneygram (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-moneygram {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-moneygram {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-moneygram 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-moneygram 3s ease-in-out infinite alternate;
}
</style>