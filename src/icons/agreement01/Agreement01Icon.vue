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
      <path d="M2 7H4.86503C5.59174 7 6.28868 6.64031 6.80255 6.00005C7.53643 5.08565 8.62195 4.76636 9.60655 5.17529L11 5.75402M2 15.9668H3.62068C4.78017 15.9668 5.35991 15.9668 5.90812 16.1213C5.93477 16.1288 5.96134 16.1366 5.98782 16.1446C6.53259 16.3101 7.01496 16.6209 7.97971 17.2427C9.86787 18.4596 10.812 19.0681 11.8407 18.994C11.8892 18.9905 11.9376 18.9858 11.9859 18.9801C13.0096 18.8577 13.8119 18.0821 15.4166 16.5308L17 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M22 7.23384H19.4832C18.4174 7.23384 17.6649 6.65468 16.9003 5.88258C16.4051 5.38247 15.7731 5.08772 15.1088 5.04713C14.366 5.00175 13.5053 4.93785 12.784 5.13601C11.9811 5.35656 11.451 5.96063 10.8902 6.59196L9.44309 8.22111C8.8523 8.88621 8.8523 9.96455 9.44309 10.6297C9.953 11.2037 10.7519 11.2928 11.3519 10.8424C11.7837 10.5184 12.2743 9.99506 12.7831 9.83025C13.3557 9.64476 13.7109 10.0615 14.0354 10.4999L16.3556 13.6344C17.2167 14.7976 17.6472 15.3793 18.2358 15.6896C18.8244 16 19.4969 16 20.842 16H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: agreement01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for agreement01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-agreement01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-agreement01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-agreement01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-agreement01 3s ease-in-out infinite alternate;
}
</style>