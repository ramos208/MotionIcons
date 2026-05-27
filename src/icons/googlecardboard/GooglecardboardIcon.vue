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
      <path d="M3.087 4.235a3.07 3.07 0 0 0-2.183.91A3.133 3.133 0 0 0 0 7.35v9.296a3.13 3.13 0 0 0 .903 2.206 3.066 3.066 0 0 0 2.184.913h4.28a3.078 3.078 0 0 0 2.713-1.645l1.209-2.276a.785.785 0 0 1 .703-.42.783.783 0 0 1 .701.42l1.21 2.276a3.08 3.08 0 0 0 2.718 1.645h4.292a3.07 3.07 0 0 0 2.184-.913A3.13 3.13 0 0 0 24 16.646V7.35c0-.825-.324-1.618-.904-2.205a3.065 3.065 0 0 0-2.183-.91zm3.495 5.656c1.138 0 2.06.937 2.06 2.092 0 1.157-.922 2.093-2.06 2.093-1.139 0-2.061-.936-2.061-2.093 0-1.155.922-2.092 2.06-2.092zm10.832 0c1.139 0 2.061.937 2.061 2.092 0 1.157-.922 2.093-2.06 2.093-1.14 0-2.063-.936-2.063-2.093 0-1.155.923-2.092 2.062-2.092z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: googlecardboard
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for googlecardboard (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-googlecardboard {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-googlecardboard {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-googlecardboard 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-googlecardboard 3s ease-in-out infinite alternate;
}
</style>