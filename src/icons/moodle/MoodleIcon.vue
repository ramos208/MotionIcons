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
      <path d="M12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12 12-5.3726 12-12S18.6274 0 12 0Zm1.1348 5.7402.0351.123-2.7363 1.9903c.3694.2606.7968.609 1.0078.8438l.0762.1035c-1.2878 2.2571-3.737 3.0557-6.3164 2.1816l.0195-.1601h-.002c-.0784-.5679-.0962-1.0524-.0585-1.463-.7507-.003-1.5298-.0402-2.2832-.0663l-.5157.0175c-.0994.8449-.0351 2.135-.0254 2.3223.3492 1.2819.2977 2.2907.295 3.5293-.4134-1.0028-.8995-2.097-.416-3.4668l-.0098-.3183c-.0007-.0143-.0683-1.1532.037-2.0625l-.4081.0136-.0371-.1191C5.7922 6.8402 8.5032 6.218 13.1348 5.7402Zm1.623 2.5137c1.2202 0 2.1885.2691 2.9043.8066.8138.601 1.2207 1.4866 1.2207 2.6582v5.6856h-2.7344v-5.3691c0-1.1225-.4634-1.6836-1.3906-1.6836-.9278 0-1.3906.561-1.3906 1.6836v5.3691h-2.7344v-5.3691c0-.5183-.0986-.9144-.293-1.1934.6172-.435 1.1534-1.0124 1.5723-1.7246.0297.029.0597.0574.0879.0879.5044-.6349 1.4233-.9512 2.7578-.9512zm-9.6094 3.2344c.932.3 1.8614.393 2.7364.287a3.5455 3.5455 0 0 0-.0098.2599v5.3691H5.1426v-5.6855c0-.0787.0022-.1544.0058-.2305z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: moodle
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for moodle (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-moodle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-moodle {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-moodle 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-moodle 3s ease-in-out infinite alternate;
}
</style>