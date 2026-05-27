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
      <path d="M16.771 0c-.68-.016-1.342.507-1.342 1.304V7.27c0 .719.582 1.301 1.3 1.301h5.967c1.16 0 1.74-1.401.92-2.22L17.65.383a1.275 1.275 0 0 0-.879-.383ZM6.573.106c-.672-.017-1.326.5-1.326 1.287v5.892c0 .71.575 1.285 1.285 1.285h5.892c1.145 0 1.718-1.384.908-2.194L7.44.484a1.259 1.259 0 0 0-.867-.379ZM1.286 10.287c-.71 0-1.286.576-1.286 1.286v11.142C0 23.425.576 24 1.286 24h11.143c.71 0 1.285-.575 1.285-1.285V11.573c0-.71-.575-1.286-1.285-1.286zm15.485 0c-.68-.017-1.342.507-1.342 1.304v5.966c0 .718.582 1.3 1.3 1.3h5.967c1.16 0 1.74-1.4.92-2.22L17.65 10.67a1.275 1.275 0 0 0-.879-.384zM3.43 17.144a1.714 1.714 0 1 1 0 3.428 1.714 1.714 0 0 1 0-3.428zm4.285 0a1.714 1.714 0 1 1 0 3.428 1.714 1.714 0 0 1 0-3.428z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: firefish
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for firefish (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-firefish {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-firefish {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-firefish 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-firefish 3s ease-in-out infinite alternate;
}
</style>