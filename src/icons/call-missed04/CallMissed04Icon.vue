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
      <path d="M15.9212 17.2443L15.931 17.3024C16.0456 17.9806 16.1029 18.3198 16.2809 18.5938C16.3339 18.6753 16.3943 18.7518 16.4613 18.8221C16.6866 19.0586 17.0029 19.1923 17.6356 19.4598C18.5863 19.8617 19.0616 20.0627 19.5176 19.9827C19.6515 19.9592 19.7818 19.9184 19.9053 19.8613C20.3256 19.6669 20.605 19.2259 21.1637 18.344C21.7465 17.4243 22.0378 16.9644 21.9961 16.4396C21.9867 16.3219 21.9561 16.1728 21.9184 16.061C21.7504 15.5621 21.3553 15.2914 20.5653 14.7498C15.2168 11.0834 8.78319 11.0834 3.43474 14.7498C2.64467 15.2914 2.24964 15.5621 2.08155 16.061C2.04388 16.1728 2.0133 16.3219 2.00394 16.4396C1.96217 16.9644 2.25354 17.4243 2.83628 18.344C3.39504 19.2259 3.67442 19.6669 4.09473 19.8613C4.21816 19.9184 4.34846 19.9592 4.48236 19.9827C4.93835 20.0627 5.41371 19.8617 6.36443 19.4598C6.99706 19.1923 7.31337 19.0586 7.5387 18.8221C7.60574 18.7518 7.66613 18.6753 7.7191 18.5938C7.89713 18.3198 7.95443 17.9806 8.06903 17.3024L8.07883 17.2443C8.19712 16.5442 8.25626 16.1941 8.51567 15.8731C8.55197 15.8282 8.61802 15.7569 8.66002 15.7173C8.96021 15.4342 9.22512 15.3686 9.75492 15.2375C11.1819 14.8842 12.8181 14.8842 14.2451 15.2375C14.7749 15.3686 15.0398 15.4342 15.34 15.7173C15.382 15.7569 15.448 15.8282 15.4843 15.8731C15.7437 16.1941 15.8029 16.5442 15.9212 17.2443Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M10.75 4L7 4.00012L7 7.75M7.43048 4.4306L12 9L17 4.00012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: call-missed04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for call-missed04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-call-missed04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-call-missed04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-call-missed04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-call-missed04 3s ease-in-out infinite alternate;
}
</style>