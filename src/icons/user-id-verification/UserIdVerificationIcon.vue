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
      <path d="M15 21.5001C16.3945 21.5001 17.0918 21.5001 17.6672 21.362C19.4955 20.923 20.9229 19.4956 21.3618 17.6673C21.5 17.0919 21.5 16.3946 21.5 15.0001M9 21.5001C7.60547 21.5001 6.90821 21.5001 6.33277 21.362C4.50453 20.923 3.07707 19.4956 2.63815 17.6673C2.5 17.0919 2.5 16.3946 2.5 15.0001M9 2.50012C7.60547 2.50012 6.90821 2.50012 6.33277 2.63827C4.50453 3.0772 3.07707 4.50465 2.63815 6.3329C2.5 6.90833 2.5 7.6056 2.5 9.00012M15 2.50012C16.3945 2.50012 17.0918 2.50012 17.6672 2.63827C19.4955 3.0772 20.9229 4.50465 21.3618 6.3329C21.5 6.90833 21.5 7.6056 21.5 9.00012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5C13.6569 12.5 15 11.1569 15 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17 17.5C17 14.7386 14.7614 12.5 12 12.5C9.23858 12.5 7 14.7386 7 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: user-id-verification
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for user-id-verification (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-user-id-verification {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-user-id-verification {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-user-id-verification 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-user-id-verification 3s ease-in-out infinite alternate;
}
</style>