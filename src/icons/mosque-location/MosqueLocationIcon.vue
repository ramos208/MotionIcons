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
      <path d="M11.0063 7.49912C10.55 6.89215 9.82344 6.49954 9.00514 6.49954C7.62376 6.49954 6.50393 7.61836 6.50393 8.99848C6.50393 10.2075 7.36323 11.2159 8.5049 11.4475M8.94989 17.9947C8.69895 17.9947 8.45232 17.9276 8.23424 17.8002C5.24722 15.8848 2.00175 13.1276 2.00175 9.13903C2.00175 5.22645 5.18975 2.00143 8.94989 2.00143C10.9174 2.00143 12.7281 2.88435 14.0076 4.28671" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12.6195 15.5501C11.2592 13.8947 11.0271 12.2323 12.9734 10.2138C15.018 8.38932 16.1955 7.52647 16.5092 7.00723C16.8228 7.52647 18.0194 8.38932 20.0641 10.2138C21.9171 11.8673 21.8005 13.8947 20.4402 15.5501M12.6195 15.5501H12.0973M12.6195 15.5501H20.4402M20.4402 15.5501H20.9003M11.0271 15.5501H12.0973M12.0973 15.5501V21.0928C12.1372 21.7603 12.0973 22.0718 13.3077 21.9843H16.4903M20.9003 15.5501H21.9987M20.9003 15.5501V21.1943C21.017 22.1008 20.2953 21.9418 19.8338 21.9843H16.4903M16.4903 21.9843L16.5257 19.8505" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: mosque-location
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for mosque-location (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-mosque-location {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-mosque-location {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-mosque-location 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-mosque-location 3s ease-in-out infinite alternate;
}
</style>