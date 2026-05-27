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
      <path d="M9 7H8C7.05719 7 6.58579 7 6.29289 6.70711C6 6.41421 6 5.94281 6 5C6 4.05719 6 3.58579 6.29289 3.29289C6.58579 3 7.05719 3 8 3H9.52786C10.7307 3 11.3321 3 11.8154 3.2987C12.2987 3.5974 12.5677 4.13531 13.1056 5.21115L19 17C19.9428 17 20.4142 17 20.7071 17.2929C21 17.5858 21 18.0572 21 19C21 19.9428 21 20.4142 20.7071 20.7071C20.4142 21 19.9428 21 19 21H18.4721C17.2693 21 16.6679 21 16.1846 20.7013C15.7013 20.4026 15.4323 19.8647 14.8944 18.7889L9 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6.81966 21H3.7942C3.35558 21 3 20.6444 3 20.2058C3 20.0708 3.0344 19.9381 3.09994 19.8201L8 11L10.5 16L8.52786 19.9443C8.28351 20.433 8.16133 20.6773 7.94949 20.8234C7.92208 20.8422 7.89375 20.8598 7.8646 20.8758C7.63926 21 7.36606 21 6.81966 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: aws-lambda
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for aws-lambda (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-aws-lambda {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-aws-lambda {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-aws-lambda 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-aws-lambda 3s ease-in-out infinite alternate;
}
</style>