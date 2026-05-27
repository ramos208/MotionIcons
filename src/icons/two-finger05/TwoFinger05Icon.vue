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
      <path d="M12.8111 5.70939C12.955 4.89355 12.4102 4.11556 11.5944 3.97171C10.7785 3.82786 10.0006 4.37261 9.8567 5.18845L9.07528 9.62008L8.14704 14.6982L5.88875 12.3369C5.17559 11.6238 4.00086 11.6888 3.37081 12.4764C2.88873 13.079 2.87541 13.9314 3.33844 14.5488L6.35188 18.5667C7.03576 19.4786 7.3777 19.9345 7.7892 20.2889C8.41699 20.8295 9.16928 21.2056 9.97845 21.3835C10.5088 21.5001 11.0787 21.5001 12.2185 21.5001H14.701C17.0433 21.5001 19.0716 19.8741 19.5812 17.588L20.893 11.7039L20.9798 11.2115C21.1237 10.3956 20.5789 9.61763 19.7631 9.47377C18.9472 9.32992 18.1692 9.87467 18.0254 10.6905M12.8111 5.70939L13.1584 3.73978C13.3023 2.92394 14.0803 2.37918 14.8961 2.52304C15.7119 2.66689 16.2567 3.44488 16.1128 4.26072L15.2446 9.18476M12.8111 5.70939L12.0297 10.141M15.2446 9.18476L14.9841 10.662M15.2446 9.18476C15.3885 8.36892 16.1664 7.82417 16.9823 7.96802C17.7981 8.11188 18.3429 8.88986 18.199 9.70571L18.0254 10.6905M18.0254 10.6905L17.9385 11.1829" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: two-finger05
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for two-finger05 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-two-finger05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-two-finger05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-two-finger05 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-two-finger05 3s ease-in-out infinite alternate;
}
</style>