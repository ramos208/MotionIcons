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
      <path d="M2 9.00012V13.9471C2 16.3291 2 17.5201 2.73223 18.2601C3.2191 18.7522 3.90328 18.917 5 18.9723M12.4271 5.00012C13.3404 5.30002 14.0564 6.02366 14.3532 6.94666C14.5 7.40334 14.5 7.96765 14.5 9.09625C14.5 9.84865 14.5 10.2249 14.5979 10.5293C14.7957 11.1446 15.2731 11.6271 15.882 11.827C16.1832 11.9259 16.5555 11.9259 17.3 11.9259H22V13.9471C22 16.3291 22 17.5201 21.2678 18.2601C20.7809 18.7522 20.0967 18.917 19 18.9723M9 19.0001H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.5 7.00012H16.3212C17.7766 7.00012 18.5042 7.00012 19.0964 7.35383C19.6886 7.70754 20.0336 8.34824 20.7236 9.62962L22 12.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M7.32653 8.00012L8.81309 6.82595C9.60436 6.20095 10 5.88845 10 5.50012M7.32653 3.00012L8.81309 4.1743C9.60436 4.7993 10 5.1118 10 5.50012M10 5.50012L2 5.50012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: delivered-sent
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for delivered-sent (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-delivered-sent {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-delivered-sent {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-delivered-sent 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-delivered-sent 3s ease-in-out infinite alternate;
}
</style>