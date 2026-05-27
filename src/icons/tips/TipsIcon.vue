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
      <path d="M20 8C20 9.93293 18.433 11.5 16.5 11.5C14.567 11.5 13 9.93293 13 8C13 6.067 14.567 4.5 16.5 4.5C18.433 4.5 20 6.067 20 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.8311 4.92276C14.3768 3.51685 13.0571 2.5 11.5 2.5C9.567 2.5 8 4.067 8 6C8 7.93293 9.567 9.5 11.5 9.5C12.1043 9.5 12.6728 9.34684 13.1689 9.07723" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M4 13.5H6.39482C6.68897 13.5 6.97908 13.5663 7.24217 13.6936L9.28415 14.6816C9.54724 14.8089 9.83735 14.8751 10.1315 14.8751H11.1741C12.1825 14.8751 13 15.6662 13 16.642C13 16.6814 12.973 16.7161 12.9338 16.7269L10.3929 17.4295C9.93707 17.5555 9.449 17.5116 9.025 17.3064L6.84211 16.2503M13 16L17.5928 14.5889C18.407 14.3352 19.2871 14.636 19.7971 15.3423C20.1659 15.8529 20.0157 16.5842 19.4785 16.8942L11.9629 21.2305C11.4849 21.5063 10.9209 21.5736 10.3952 21.4176L4 19.5199" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: tips
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for tips (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-tips {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-tips {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-tips 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-tips 3s ease-in-out infinite alternate;
}
</style>