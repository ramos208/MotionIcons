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
      <path d="M4.51311 12C4.1118 11.9416 3.79336 11.8443 3.51321 11.6826C3.05313 11.417 2.67109 11.0349 2.40546 10.5748C2 9.87256 2 8.92972 2 7.04403C2 5.15834 2 4.21549 2.40546 3.51321C2.67109 3.05313 3.05313 2.67109 3.51321 2.40546C4.21549 2 5.15834 2 7.04403 2C8.92972 2 9.87256 2 10.5748 2.40546C11.0349 2.67109 11.417 3.05313 11.6826 3.51321C11.8443 3.79336 11.9416 4.1118 12 4.51311" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M9.52169 17C9.11624 16.9417 8.7952 16.8443 8.51301 16.6813C8.053 16.4158 7.671 16.0338 7.40541 15.5737C7 14.8715 7 13.9288 7 12.0434C7 10.1579 7 9.2152 7.40541 8.51301C7.671 8.053 8.053 7.671 8.51301 7.40541C9.2152 7 10.1579 7 12.0434 7C13.9288 7 14.8715 7 15.5737 7.40541C16.0338 7.671 16.4158 8.053 16.6813 8.51301C16.8443 8.7952 16.9417 9.11624 17 9.52169" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/><path d="M12 17C12 15.1308 12 14.1962 12.4019 13.5C12.6652 13.0439 13.0439 12.6652 13.5 12.4019C14.1962 12 15.1308 12 17 12C18.8692 12 19.8038 12 20.5 12.4019C20.9561 12.6652 21.3348 13.0439 21.5981 13.5C22 14.1962 22 15.1308 22 17C22 18.8692 22 19.8038 21.5981 20.5C21.3348 20.9561 20.9561 21.3348 20.5 21.5981C19.8038 22 18.8692 22 17 22C15.1308 22 14.1962 22 13.5 21.5981C13.0439 21.3348 12.6652 20.9561 12.4019 20.5C12 19.8038 12 18.8692 12 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
// AI Generated Motion Component for: motion01
// Category: generic
// Physics Presets: Dynamic kinetic adaptation for motion01 (hugeicons). Selected semantic motion: radar with custom idle (ambient-floating) and interaction profile (elastic-scale) matched to SVG complexity (complex) and flow geometry.

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

@keyframes motion-ai-motion01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0) skew(0deg); }
  50% { transform: scale(1.242) rotate(0deg) translate(0px, 0px) skew(0deg); }
  100% { transform: scale(1.15) rotate(5deg) translate(0px, 0px) skew(0deg); }
}

@keyframes motion-ai-idle-motion01 {
  0% { transform: scale(1) rotate(0deg) translate(0, 0); }
  50% { transform: scale(1.02) rotate(0deg) translate(0px, -1.5px); }
  100% { transform: scale(1) rotate(0deg) translate(0, 0); }
}

.ai-motion-icon-wrapper:hover .icon-geometry {
  animation: motion-ai-motion01 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.anim-ambient-floating {
  animation: motion-ai-idle-motion01 3s ease-in-out infinite alternate;
}
</style>