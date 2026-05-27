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
      <path d="M3.29045 9.19816c.138-.02376.23432-.17068.23432-.32064a.31246.31246 0 0 0-.18305-.299s-.0877-.05976-.5772-.05976C1.05931 8.51876 0 9.59844 0 11.3365v3.79832a.35555.35555 0 0 0 .71104 0v-3.79832c0-1.37753.84717-2.1881 2.1359-2.1362.08608.00351.3352.0243.4435-.00213zm17.89042-.69322c-1.64076 0-2.8316 1.19085-2.8316 2.83161v3.79832a.35555.35555 0 1 0 .71103 0v-3.79832c0-1.22151.89185-2.10808 2.12057-2.10808 1.22158 0 2.10815.88657 2.10815 2.10808v3.79832a.35549.35549 0 1 0 .71098 0v-3.79832c0-1.64076-1.18557-2.8316-2.81913-2.8316Zm-6.89807 0c-1.83654 0-3.3305 1.57798-3.3305 3.51768 0 1.91213 1.49402 3.4678 3.3305 3.4678 1.84333 0 3.34306-1.55567 3.34306-3.4678 0-1.9397-1.49967-3.51768-3.34306-3.51768zm2.61953 3.51768c0 1.53385-1.17514 2.78167-2.61953 2.78167-1.44438 0-2.61953-1.24788-2.61953-2.78167 0-1.56136 1.17515-2.83161 2.61953-2.83161 1.44439 0 2.61953 1.27024 2.61953 2.83161zM6.87328 8.50494c-1.83654 0-3.33063 1.57798-3.33063 3.51768 0 1.91213 1.49409 3.4678 3.33063 3.4678 1.84334 0 3.343-1.55567 3.343-3.4678 0-1.9397-1.49966-3.51768-3.343-3.51768zm2.61947 3.51768c0 1.53385-1.17514 2.78167-2.61953 2.78167-1.44438 0-2.61953-1.24788-2.61953-2.78167 0-1.56136 1.17515-2.83161 2.61953-2.83161 1.44439 0 2.61953 1.27024 2.61953 2.83161z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: roon
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for roon (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-roon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-roon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-roon 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-roon 3s ease-in-out infinite alternate;
}
</style>