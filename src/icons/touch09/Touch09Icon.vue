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
      <path d="M12.1121 8.68466L12.965 3.7607C13.1063 2.94487 12.5712 2.16689 11.7698 2.02304C10.9684 1.87919 10.2042 2.42393 10.0629 3.23976L8.35714 13.0877L8.21569 13.8509L6.30622 11.837C5.61343 11.1239 4.47226 11.1889 3.86022 11.9765C3.3919 12.5791 3.37897 13.4315 3.82877 14.0489L6.75611 18.0667C7.42045 18.9785 7.75263 19.4345 8.15236 19.7888C8.76222 20.3294 9.49302 20.7056 10.2791 20.8834C10.7943 21 11.3479 21 12.4552 21H14.7886C17.0993 21 19.0901 19.3242 19.549 16.9929L20.3921 12.7094L20.4774 12.2171C20.6187 11.4012 20.0836 10.6232 19.2822 10.4794C18.4808 10.3355 17.7166 10.8803 17.5752 11.6961L17.49 12.1885M12.1121 8.68466L11.8563 10.1618M12.1121 8.68466C12.2534 7.86883 13.0177 7.32408 13.8191 7.46794C14.6205 7.61179 15.1556 8.38977 15.0143 9.20559L14.8437 10.1904M14.8437 10.1904L14.7584 10.6828M14.8437 10.1904C14.985 9.37456 15.7492 8.82981 16.5506 8.97367C17.352 9.11752 17.8871 9.89549 17.7458 10.7113L17.6605 11.2037" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: touch09
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for touch09 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-touch09 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-touch09 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-touch09 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-touch09 3s ease-in-out infinite alternate;
}
</style>