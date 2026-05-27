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
      <path d="M12.686 7.479c.54.829 1.032 1.665 1.476 2.505.64-1.217 1.849-2.086 3.328-2.086 2.217 0 3.826 1.954 3.826 4.102 0 2.149-1.609 4.102-3.826 4.102-.656 0-1.26-.171-1.784-.467l-.001-.001c-.635-.36-1.153-.905-1.509-1.553-.484-.804-.725-1.706-.991-2.657-.598-2.134-1.252-3.773-3.194-4.988-1.001-.626-2.196-.985-3.501-.985C2.815 5.451 0 8.323 0 12c0 3.727 2.761 6.549 6.51 6.549 1.955 0 3.639-.766 4.805-2.027-.543-.83-1.034-1.664-1.477-2.505-.641 1.217-1.849 2.085-3.328 2.085-2.218 0-3.827-1.953-3.827-4.102 0-2.148 1.609-4.102 3.827-4.102.655 0 1.26.171 1.783.469h.001c.635.36 1.154.904 1.509 1.553.574.951.807 2.041 1.144 3.188.555 1.89 1.285 3.339 3.002 4.432 1.008.642 2.217 1.009 3.541 1.009 3.694 0 6.51-2.872 6.51-6.549 0-3.727-2.76-6.549-6.51-6.549-1.954 0-3.64.766-4.804 2.028Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: elegoo
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for elegoo (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-elegoo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-elegoo {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-elegoo 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-elegoo 3s ease-in-out infinite alternate;
}
</style>