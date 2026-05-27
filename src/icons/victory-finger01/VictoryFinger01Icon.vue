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
      <path d="M8.51708 13.0007L7.96439 10.0432M7.96439 10.0432L6.84918 4.07572C6.67303 3.13311 7.28511 2.22346 8.22351 2.03325C9.17309 1.84078 10.0983 2.45694 10.2885 3.40846L11.5024 9.48123L12.7225 3.40846C12.9127 2.45694 13.8379 1.84078 14.7875 2.03325C15.7259 2.22346 16.2701 3.13795 16.0939 4.08057L15.0677 9.82971M7.96439 10.0432C6.072 11.8178 4.91115 12.8595 4.67339 13.7962C4.40846 14.84 4.18905 15.9851 6.0778 18.2819C6.69951 19.0379 7.22362 19.5625 7.34491 19.7626C7.55609 20.111 8.00331 20.3723 8.00331 22.0023M15.0836 9.84861C17.3452 10.4912 18.8165 11.7103 19.2379 12.5798C19.7074 13.5487 19.5747 15.0057 18.5899 17.4059C18.2014 18.3528 17.7253 18.8915 17.6468 19.112C17.4638 19.6257 17.1848 20.1789 17.3131 21.9783" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: victory-finger01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for victory-finger01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-victory-finger01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-victory-finger01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-victory-finger01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-victory-finger01 3s ease-in-out infinite alternate;
}
</style>