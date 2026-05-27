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
      <path d="M14 11.9171C16 10.9087 18.478 11.7529 19.5777 14.1858C21.2282 17.8369 17.7619 21.8826 14.0077 21.9975C13.8997 22.0008 13.7859 21.9824 13.6861 21.9409C10.9391 20.7977 17.4719 16.7411 15.3319 14.5481" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.2591 13C12.753 11.1383 11.9705 9.25852 9.99515 9.72396C8.79898 10.0058 8.51642 10.8832 7.79305 10.9566C7.23113 11.0137 6.88441 10.372 7.03542 9.83562C8.1091 6.02216 15.5 6.03124 15.5 10.0073" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M14.0009 18.9084C11.807 19.9994 7.12675 20.6141 5.01867 19.0798C4.44082 18.6592 3.69853 18.7865 3.0238 18.7865C1.38828 18.7865 1.84992 15.5993 3.43752 16.2134C3.99904 16.4306 5.0201 16.7126 5.78158 16.281C10.6831 13.5034 15.9947 13.024 17.7464 5.71395C18.5261 2.46023 18.7506 2 20.0529 2C21.3553 2 22.9193 5.00117 21.3265 9.95847C20.9057 11.2678 20.4081 12.5772 19.6965 13.7991" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: banana
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for banana (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-banana {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-banana {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-banana 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-banana 3s ease-in-out infinite alternate;
}
</style>