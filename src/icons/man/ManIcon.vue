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
      <path d="M10.979 14.943h2.05L15.46 18.7h-2.054l-.263-.409h-2.278l-.264.41H8.548zm1.025 1.568l-.458.711h.916l-.458-.712zM0 17.372C0 10.704 5.372 5.3 12 5.3s12 5.405 12 12.073c0 .449-.024.892-.072 1.328H22.58c.054-.435.082-.878.082-1.328 0-5.924-4.774-10.726-10.662-10.726-5.889 0-10.661 4.802-10.661 10.726 0 .45.027.893.08 1.328H.073A12.254 12.274 0 0 1 0 17.372zm2.237-2.43h1.83l1.22 1.228 1.22-1.227h1.831V18.7H6.363v-1.38l-1.075 1.082-1.076-1.082v1.38H2.237v-3.757zm13.42 0h1.927l2.17 1.62v-1.62h1.975V18.7h-1.942l-2.156-1.605V18.7h-1.975Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: man
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for man (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-man {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-man {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-man 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-man 3s ease-in-out infinite alternate;
}
</style>