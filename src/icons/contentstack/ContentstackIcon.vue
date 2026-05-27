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
      <path d="M18.564 10.108a.347.347 0 0 1-.364.368h-6.974a.35.35 0 0 1-.369-.368v-.79a.35.35 0 0 1 .37-.368h6.964a.347.347 0 0 1 .364.369zm3.085 2.29a.347.347 0 0 1-.368.37h-8.59a.343.343 0 0 1-.363-.37v-.807a.342.342 0 0 1 .364-.364h8.514a.346.346 0 0 1 .369.364zm2.35 2.35a.347.347 0 0 1-.37.368h-9.32a.342.342 0 0 1-.364-.368v-.803a.342.342 0 0 1 .364-.37h9.321a.347.347 0 0 1 .368.37zm0 2.352a.347.347 0 0 1-.37.364h-9.32a.343.343 0 0 1-.364-.364v-.807a.342.342 0 0 1 .364-.37h9.321a.347.347 0 0 1 .368.37zm-2.35 2.273a.351.351 0 0 1-.368.37h-8.589a.347.347 0 0 1-.364-.37v-.807a.346.346 0 0 1 .364-.37h8.515a.351.351 0 0 1 .368.37zm-3.085 2.349a.346.346 0 0 1-.364.368h-6.974a.351.351 0 0 1-.369-.368v-.808a.347.347 0 0 1 .37-.365h6.964a.343.343 0 0 1 .364.365zM5.354 3.087a.347.347 0 0 0 .37.364h6.97a.342.342 0 0 0 .367-.365V2.28a.346.346 0 0 0-.368-.369h-6.97a.351.351 0 0 0-.367.37ZM2.35 5.43a.342.342 0 0 0 .364.364h8.514a.346.346 0 0 0 .368-.364v-.807a.351.351 0 0 0-.368-.37H2.712a.346.346 0 0 0-.364.37ZM0 7.778a.342.342 0 0 0 .364.364h9.321a.342.342 0 0 0 .364-.364V6.97a.346.346 0 0 0-.364-.37H.365a.347.347 0 0 0-.364.37Zm0 2.33a.347.347 0 0 0 .364.37h9.321a.346.346 0 0 0 .364-.37v-.79a.346.346 0 0 0-.364-.368H.365A.347.347 0 0 0 0 9.319Zm2.347 2.291a.342.342 0 0 0 .365.368h8.513a.346.346 0 0 0 .37-.368v-.808a.346.346 0 0 0-.37-.364H2.713a.342.342 0 0 0-.365.364zm3.008 2.348a.346.346 0 0 0 .369.368h6.968a.346.346 0 0 0 .37-.368v-.803a.346.346 0 0 0-.37-.37H5.725a.347.347 0 0 0-.37.37z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: contentstack
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for contentstack (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-contentstack {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-contentstack {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-contentstack 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-contentstack 3s ease-in-out infinite alternate;
}
</style>