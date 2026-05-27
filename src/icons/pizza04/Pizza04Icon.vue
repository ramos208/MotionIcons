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
      <path d="M18.063 8.50019L19.3638 7.74923C20.0807 7.3353 21.0094 7.57783 21.3119 8.34845C21.7561 9.4799 21.9999 10.7119 21.9999 12.0009C21.9999 13.2898 21.7561 14.5217 21.312 15.6531C21.0096 16.4237 20.0808 16.6663 19.3639 16.2523L18.0632 15.5014M18.063 8.50019C18.6589 9.52996 18.9999 10.7256 18.9999 12.0009C18.9999 13.2761 18.659 14.4717 18.0632 15.5014M18.063 8.50019L11.9999 12.0008M18.0632 15.5014L11.9999 12.0008M11.9999 12.0008L5.93667 15.5014M11.9999 12.0008L5.93681 8.50023M5.93667 15.5014C5.34092 14.4717 4.99994 13.2761 4.99994 12.0009C4.99994 10.7256 5.34097 9.52999 5.93681 8.50023M5.93667 15.5014L4.63601 16.2523C3.91904 16.6662 2.9903 16.4237 2.68782 15.653C2.24377 14.5217 1.99994 13.2898 1.99994 12.0009C1.99994 10.7119 2.24381 9.47993 2.68793 8.3485C2.99043 7.57787 3.91915 7.33534 4.63611 7.74927L5.93681 8.50023" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 4.99998V3.49998C12 2.67156 11.3244 1.98816 10.5052 2.11095C7.95676 2.49292 5.72291 3.83651 4.18479 5.76057C3.66716 6.40808 3.92068 7.33527 4.6386 7.74976L5.93685 8.4993M12 4.99998V11.9999M12 4.99998C9.40927 4.99998 7.14728 6.40737 5.93685 8.4993M12 11.9999V19M12 11.9999L18.0632 15.5005M12 11.9999L5.93685 8.4993M12 19V20.5C12 21.3284 12.6755 22.0118 13.4948 21.889C16.0433 21.507 18.2772 20.1634 19.8153 18.2392C20.3329 17.5917 20.0794 16.6645 19.3615 16.25L18.0632 15.5005M12 19C14.5908 19 16.8528 17.5925 18.0632 15.5005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 4.99998V3.49998C12 2.67156 12.6755 1.98816 13.4948 2.11095C16.0432 2.49292 18.277 3.8365 19.8151 5.76053C20.3328 6.40804 20.0792 7.33523 19.3613 7.74973L18.0631 8.49926M12 4.99998V11.9998M12 4.99998C14.5907 4.99998 16.8526 6.40736 18.0631 8.49926M12 11.9998V19M12 11.9998L18.0631 8.49926M12 11.9998L5.9367 15.5004M12 19V20.5C12 21.3284 11.3244 22.0118 10.5052 21.889C7.95664 21.507 5.72271 20.1633 4.18458 18.2392C3.66698 17.5916 3.92051 16.6645 4.63842 16.25L5.9367 15.5004M12 19C9.40916 19 7.14709 17.5925 5.9367 15.5004" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: pizza04
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for pizza04 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-pizza04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-pizza04 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-pizza04 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-pizza04 3s ease-in-out infinite alternate;
}
</style>