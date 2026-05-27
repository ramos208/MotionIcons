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
      <path d="M12.4608 5.70939C12.6047 4.89355 12.0599 4.11556 11.2441 3.97171C10.4282 3.82786 9.65023 4.37261 9.50637 5.18845L8.11719 13.0669L7.91449 14.4124L5.88875 12.3369C5.17559 11.6237 4.00086 11.6888 3.37081 12.4763C2.88873 13.0789 2.87541 13.9314 3.33844 14.5487L6.35188 18.5667C7.03576 19.4785 7.3777 19.9344 7.7892 20.2888C8.41699 20.8294 9.16928 21.2056 9.97845 21.3834C10.5088 21.5 11.0787 21.5 12.2185 21.5H14.5582C16.9648 21.5 19.0301 19.7855 19.4728 17.4199L20.5427 11.7039L20.9768 9.24184C21.1206 8.426 20.5759 7.64801 19.76 7.50416C18.9442 7.3603 18.1662 7.90506 18.0223 8.7209M12.4608 5.70939L12.8081 3.73978C12.9519 2.92394 13.7299 2.37918 14.5458 2.52304C15.3616 2.66689 15.9064 3.44488 15.7625 4.26072L15.4152 6.23034M12.4608 5.70939L11.6794 10.141M15.4152 6.23034L14.6338 10.662M15.4152 6.23034C15.5591 5.4145 16.3371 4.86974 17.1529 5.0136C17.9687 5.15745 18.5135 5.93544 18.3696 6.75128L18.0223 8.7209M18.0223 8.7209L17.5882 11.1829" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: hold05
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for hold05 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-hold05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-hold05 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-hold05 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-hold05 3s ease-in-out infinite alternate;
}
</style>