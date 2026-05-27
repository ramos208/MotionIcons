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
      <path d="M18 11C17 11 15.5 11.5 15 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M6 11C7 11 8.5 11.5 9 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M17.7639 7C19.0061 7 20.1516 6.36389 20.8115 5.33205C20.9377 5.13484 21.1479 5 21.382 5C21.7233 5 22 5.2767 22 5.61803V11C22 14.3137 19.3137 17 16 17C14.8423 17 13.7346 17.4087 12.7938 18.5954C12.5997 18.8402 12.3124 19 12 19C11.6876 19 11.4003 18.8402 11.2062 18.5954C10.2654 17.4087 9.15771 17 8 17C4.68629 17 2 14.3137 2 11V5.61803C2 5.2767 2.2767 5 2.61803 5C2.85213 5 3.06235 5.13484 3.18848 5.33205C3.84841 6.36389 4.99393 7 6.23607 7H8.26393C9.46609 7 10.5777 7.59582 11.2463 8.56956C11.4197 8.82218 11.6936 9 12 9C12.3064 9 12.5803 8.82218 12.7537 8.56956C13.4223 7.59582 14.5339 7 15.7361 7H17.7639Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: venetian-mask
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for venetian-mask (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-venetian-mask {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-venetian-mask {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-venetian-mask 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-venetian-mask 3s ease-in-out infinite alternate;
}
</style>