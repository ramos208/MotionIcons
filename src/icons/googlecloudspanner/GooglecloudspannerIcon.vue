<template>
  <div 
    class="ai-motion-icon-wrapper"
    :class="['motion-turbulence']"
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
      <path d="M12 9.06 7.944 6.864V2.388L10.38.924v3.66l1.62.744 1.62-.744V.924l2.436 1.464v4.476L12 9.06zm-8.124 4.752L0 16.056v2.988l3.228-1.86 1.404.912.096 1.632-3.24 1.872 2.616 1.476 3.828-2.268-.132-4.596-3.924-2.4zm9.732-.9V8.758l-1.37.742-.238.129-.238-.13-1.37-.741v4.154l-3.613 2.09 1.282.783.231.142.008.27.046 1.612L12 15.696l3.595 2.079.045-1.59.008-.27.231-.142 1.301-.795-3.572-2.066zm7.164 4.272L24 19.044v-2.988L20.064 13.8l-3.924 2.4-.132 4.596 3.888 2.244 2.616-1.44-3.24-1.836.096-1.668 1.404-.912z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googlecloudspanner
// Category: weather
// Physics Presets: Dynamic kinetic adaptation for googlecloudspanner (simpleicons). Selected semantic motion: turbulence with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googlecloudspanner {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googlecloudspanner {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googlecloudspanner 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googlecloudspanner 3s ease-in-out infinite alternate;
}
</style>