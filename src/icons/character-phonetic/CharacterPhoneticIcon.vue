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
      <path d="M21.8265 15.914C21.547 17.6702 20.1625 19.0475 18.3974 19.3257C18.0767 19.3762 17.6935 19.3762 16.9269 19.3762C16.1605 19.3762 15.7772 19.3762 15.4566 19.3257C13.6913 19.0475 12.307 17.6702 12.0274 15.914C11.9766 15.595 11.9766 15.2137 11.9766 14.4511V11.1678M11.9766 11.1678V9.52611C11.9766 8.76355 11.9766 8.38226 12.0274 8.06324C12.307 6.30708 13.6913 4.92975 15.4566 4.65161C15.7772 4.60107 16.1605 4.60107 16.9269 4.60107C17.6935 4.60107 18.0767 4.60107 18.3974 4.65161C20.1625 4.92975 21.547 6.30708 21.8265 8.06324C22.0246 9.30724 22.1236 9.92925 21.735 10.474C21.6818 10.5485 21.604 10.6387 21.538 10.7024C21.0558 11.1678 20.2841 11.1678 18.7406 11.1678H11.9766Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M2.31275 7.01759C2.73674 6.26621 3.90352 4.92483 5.39093 4.66213C6.87834 4.39943 9.43964 4.26817 10.7078 5.8272C11.976 7.38622 11.976 9.04262 11.976 11.1966M11.976 11.1966C11.976 12.4377 11.9409 12.8351 11.8271 13.6534C11.6924 14.6227 11.6174 16.3942 10.4447 17.6687C9.99537 18.157 9.44783 18.5588 8.85947 18.8657C8.12881 19.2469 7.07561 19.5866 5.96573 19.4788C3.87969 19.2761 2.31274 18.0786 2.03291 15.9582C1.85039 14.5752 2.50517 13.1483 3.20313 12.4377C3.90109 11.727 4.76599 11.1179 6.25587 11.1966C7.63844 11.2697 10.6459 11.2135 11.976 11.1966Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: character-phonetic
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for character-phonetic (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-character-phonetic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-character-phonetic {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-character-phonetic 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-character-phonetic 3s ease-in-out infinite alternate;
}
</style>