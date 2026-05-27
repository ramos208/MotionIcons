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
      <path d="M1.92669 23.93457c-.93754-.17758-1.70436-.94464-1.88217-1.88241-.31993-1.6878 1.13237-3.1401 2.82018-2.82018.93754.17781 1.7046.94463 1.8824 1.88217.31993 1.68804-1.13237 3.14034-2.82041 2.82042zM21.13507 4.76808c-.93754-.1778-1.7046-.94463-1.8824-1.8824-.31993-1.68805 1.13284-3.14034 2.82065-2.82019.93777.17805 1.70436.94487 1.88217 1.88241.31992 1.6878-1.13261 3.1401-2.82042 2.82018zm-9.11415 1.24226c1.1475 0 2.21912.32347 3.13017.88292l2.58538-2.58562c-1.59582-1.1877-3.57352-1.89092-5.71555-1.89092-5.29278 0-9.58347 4.29045-9.58347 9.58323 0 2.14227.70321 4.11997 1.89116 5.7158l2.58538-2.5854c-.55945-.91105-.88268-1.9829-.88268-3.1304 0-3.30799 2.68162-5.98961 5.9896-5.98961zm5.10664 2.85936c.55969.91106.88292 1.98267.88292 3.13018 0 3.30798-2.68162 5.9896-5.98961 5.9896-1.1475 0-2.21935-.323-3.13041-.88268L6.30508 19.6922c1.59582 1.18794 3.57352 1.89115 5.71579 1.89115 5.29278 0 9.58323-4.29045 9.58323-9.58346 0-2.14227-.70345-4.11974-1.89092-5.7158Z"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: icon
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for icon (simpleicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-icon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-icon {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-icon 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-icon 3s ease-in-out infinite alternate;
}
</style>