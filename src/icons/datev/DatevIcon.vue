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
      <path d="M0 .165v16.9174h23.9147V.1651Zm.017 18.1842v5.4857h1.9809c1.4754 0 2.7429-1.1832 2.7429-2.7005-.042-1.686-1.0982-2.7852-2.5736-2.7852zm6.62 0-2.1079 5.4857H5.706l1.6422-4.3428 1.3546 3.454h-1.524v.8888h3.0392l-2.1502-5.4857Zm2.6498 0v.9312h1.7778v4.5545h1.219v-4.5545h1.727v-.9312zm5.1894 0v5.4857h3.7926v-.8889h-2.6159v-1.5153h2.3196v-.9313h-2.3196v-1.219h2.4889v-.9312zm3.962 0 2.1502 5.4857h1.3037L24 18.3492h-2.9037v.9312h1.3884l-1.2699 3.327-1.5577-4.2582zm-17.2869.9312h.9313c.9271 0 1.5576.6735 1.5153 1.8117-.042 1.1804-.8425 1.8116-1.8116 1.8116h-.635Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: datev
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for datev (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-datev {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-datev {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-datev 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-datev 3s ease-in-out infinite alternate;
}
</style>