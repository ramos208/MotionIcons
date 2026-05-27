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
      <path d="M12.002 9.00146C10.8974 9.00146 10.002 9.67303 10.002 10.5015C10.002 11.3299 10.8974 12.0015 12.002 12.0015C13.1065 12.0015 14.002 12.6731 14.002 13.5015C14.002 14.3299 13.1065 15.0015 12.002 15.0015M12.002 9.00146C12.8728 9.00146 13.6136 9.41886 13.8881 10.0015M12.002 9.00146V8.00146M12.002 15.0015C11.1311 15.0015 10.3903 14.5841 10.1158 14.0015M12.002 15.0015V16.0015" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M13.5 2.50146C13.5 2.50146 12.6839 2.50146 12 2.50146C7.52166 2.50146 5.28249 2.50146 3.89124 3.89271C2.5 5.28395 2.5 7.52312 2.5 12.0015C2.5 16.4798 2.5 18.719 3.89124 20.1103C5.28249 21.5015 7.52166 21.5015 12 21.5015C16.4783 21.5015 18.7175 21.5015 20.1088 20.1103C21.5 18.719 21.5 16.4798 21.5 12.0015C21.5 11.3176 21.5 10.5015 21.5 10.5015" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M16.5 7.49927L20.6758 3.32107M21.5 6.97751L21.3818 3.88602C21.3818 3.15737 20.9467 2.70339 20.1542 2.64612L17.0302 2.49927" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: money-send-square
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for money-send-square (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-money-send-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-money-send-square {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-money-send-square 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-money-send-square 3s ease-in-out infinite alternate;
}
</style>