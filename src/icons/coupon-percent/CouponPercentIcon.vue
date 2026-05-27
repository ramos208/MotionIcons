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
      <path d="M15.0001 9L9.00006 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.37506 9.25H9.25006M9.50006 9.25C9.50006 9.38807 9.38813 9.5 9.25006 9.5C9.11199 9.5 9.00006 9.38807 9.00006 9.25C9.00006 9.11193 9.11199 9 9.25006 9C9.38813 9 9.50006 9.11193 9.50006 9.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.8751 14.75H14.7501M15.0001 14.75C15.0001 14.8881 14.8881 15 14.7501 15C14.612 15 14.5001 14.8881 14.5001 14.75C14.5001 14.6119 14.612 14.5 14.7501 14.5C14.8881 14.5 15.0001 14.6119 15.0001 14.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.00012 14.5C3.38083 14.5 4.50012 13.3807 4.50012 12C4.50012 10.6193 3.38083 9.5 2.00012 9.5C2.00012 7.15442 2.00012 5.98164 2.62006 5.17372C2.77966 4.96572 2.96584 4.77954 3.17384 4.61994C3.98176 4 5.15455 4 7.50012 4H16.5001C18.8457 4 20.0185 4 20.8264 4.61994C21.0344 4.77954 21.2206 4.96572 21.3802 5.17372C22.0001 5.98164 22.0001 7.15442 22.0001 9.5C20.6194 9.5 19.5001 10.6193 19.5001 12C19.5001 13.3807 20.6194 14.5 22.0001 14.5C22.0001 16.8456 22.0001 18.0184 21.3802 18.8263C21.2206 19.0343 21.0344 19.2205 20.8264 19.3801C20.0185 20 18.8457 20 16.5001 20H7.50012C5.15455 20 3.98176 20 3.17384 19.3801C2.96584 19.2205 2.77966 19.0343 2.62006 18.8263C2.00012 18.0184 2.00012 16.8456 2.00012 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: coupon-percent
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for coupon-percent (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (kinetic-push) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-coupon-percent {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.08) rotate(0deg) translate(0px, -6px) skew(0deg); }
  100% { transform: scale(1) rotate(0deg) translate(0px, -4px) skew(0deg); }
}

@keyframes motion-ai-idle-coupon-percent {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-coupon-percent 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-coupon-percent 3s ease-in-out infinite alternate;
}
</style>