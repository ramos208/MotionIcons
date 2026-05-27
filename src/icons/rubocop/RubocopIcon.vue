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
      <path d="M12.06 0C7.71 0 4.121 3.25 3.584 7.455h16.952C19.998 3.25 16.41 0 12.06 0zM3.93 7.95a1.54 1.54 0 0 0-1.537 1.537v.772c-.358.22-.598.613-.598 1.06v2.065c0 .448.24.842.598 1.061v.802a1.54 1.54 0 0 0 1.536 1.536h16.14a1.54 1.54 0 0 0 1.536-1.536v-.802c.358-.22.6-.612.6-1.06V11.32c0-.448-.242-.842-.6-1.061v-.772A1.54 1.54 0 0 0 20.07 7.95zm1.47 3.146h13.2c.622 0 1.132.51 1.132 1.134s-.51 1.133-1.133 1.133H5.4c-.624 0-1.134-.51-1.134-1.133s.51-1.134 1.134-1.134zm-1.42 5.998v3.276A3.64 3.64 0 0 0 7.61 24h8.94a3.64 3.64 0 0 0 3.628-3.63v-3.276h-1.995v3.267c0 .898-.735 1.633-1.633 1.633h-.89v-.003a.62.62 0 0 1-.48-.23h-.002l-1.063-1.358h-.002a.622.622 0 0 0-.488-.245h-3.093a.62.62 0 0 0-.463.214h-.002L8.98 21.758h-.002a.62.62 0 0 1-.481.23v.004h-.89a1.638 1.638 0 0 1-1.633-1.633v-3.267zm4.996.795-.82.95.774.67.515-.596h5.046l.516.596.774-.67-.82-.95z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: rubocop
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for rubocop (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-rubocop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-rubocop {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-rubocop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-rubocop 3s ease-in-out infinite alternate;
}
</style>